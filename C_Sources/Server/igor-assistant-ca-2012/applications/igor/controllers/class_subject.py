# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is class_subject controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *
from gluon.dal import Rows
from gluon.tools import Service
import gluon.contenttype

service = Service()

def call():
	session.forget()

	return service()

# Get all classes by specific subject
@service.jsonp
@service.json
def get_classes_by_subject(subject_id, term = 0):
	
		# Validate input 
	if (not subject_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"subject id must be numberic")

	if (not (str (term)).isdigit()):
		return MessagePackager.get_packaged_message(
			MessageStatus.ERROR,
			"term must be numberic")

	if (int (subject_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"subject id can not less than 1")

	# Get data
	if (term == 0):
		term = get_current_term()

	classes = db(
		db.class_subject.subject == subject_id and 
		db.class_subject.term == term).select()

	return MessagePackager.get_packaged_message(MessageStatus.OK, classes)

# Get class detail
# @request.restful()
# def get_class_detail():
# 	response.view = 'generic.json'
# 	def GET(id):

# 		# Validate input 
# 		if (not id.isdigit()):
# 			return MessagePackager.get_packaged_message (
# 				MessageStatus.ERROR, 
# 				"class id must be numberic")

# 		if (int (id) < 0):
# 			return MessagePackager.get_packaged_message (
# 				MessageStatus.ERROR, 
# 				"class id can not less than 1")

# 		# Get data

# 		class_subject = db(db.class_subject.id == id).select()

# 		class_subject = format_client_data(class_subject)

# 		return MessagePackager.get_packaged_message(MessageStatus.OK, class_subject)

# 	return locals()


@service.jsonp
@service.json
def get_class_detail(id):
	# response.view = 'generic.jsonp'
	# response.headers['Content-Type'] = gluon.contenttype.contenttype('.js')

	# Validate input 
	if (not id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id must be numberic")

	if (int (id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id can not less than 1")

	# Get data

	class_subject = db(db.class_subject.id == id).select()

	class_subject = format_client_data(class_subject)

	return MessagePackager.get_packaged_message(MessageStatus.OK, class_subject)

# Get all classes of user
# Input:
# 	integer user_id
# 	integer term
@service.jsonp
@service.json
def get_classes_by_user(user_id, term = 0):

		# Get data
	if (term == 0):
		term = get_current_term()

	user_schedulers = db(db.scheduler.owner == user_id).select()
		
	classes = list()

	for user_scheduler in user_schedulers:

		class_subject = db(
			(db.class_subject.id == user_scheduler.class_subject) &
			(db.class_subject.term == term)).select().first()


		if (class_subject != None):
			classes.append(class_subject)

	classes = format_client_data(classes)

	return MessagePackager.get_packaged_message(MessageStatus.OK, classes)

# Add a class to user
# Input:
# 	integer class_id
# 	integer user_id
@service.jsonp
@service.json
def add_class_to_user(class_id, user_id):

		# Validate input
	if (not class_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id must be numberic")

	if (not user_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id must be numberic")

	# Insert new data
	# TODO: add class's rule

	try:
		scheduler_id = db.scheduler.insert(
			owner         = user_id,
			class_subject = class_id,
			term          = get_current_term())
	except Exception, err:
		return MessagePackager.get_packaged_message(MessageStatus.ERROR, str (err) )

	return MessagePackager.get_packaged_message(MessageStatus.OK, scheduler_id)


# Delete class from user
# Input:
# 	integer user_id
#	integer class_id
@service.jsonp
@service.json
def delete_class(user_id, class_id):

	try:
		scheduler = delete_scheduler(user_id, class_id);
	except Exception, err:
		return MessagePackager.get_packaged_message(MessageStatus.ERROR, str (err) )

	return MessagePackager.get_packaged_message(MessageStatus.OK, scheduler)

# Format class data to client data
def format_client_data(classes):
	if (classes == None):
		return

	client_data = list()

	for class_subject in classes:

		subject = db(db.subject.id == class_subject.subject).select().first()
		class_schedulers = db(db.class_scheduler.class_subject == class_subject.id).select()
		
		if (subject == None):
			continue
		# print class_schedulers
		for class_scheduler in class_schedulers:
			
			# Get session list (integer)
			sessions = get_class_sessions(class_scheduler.period)

			# Morning session
			morning = [session for session in sessions if session <=6]
			afternoon = [session for session in sessions if session >= 7]


			if (morning):
				client = class_data_format(
					class_subject, class_scheduler,
					subject, morning, "Morning")
				
				client_data.append(client)

			if (afternoon):
				client = class_data_format(
					class_subject, class_scheduler,
					subject, afternoon, "Afternoon")

				client_data.append (client)

	return client_data

def class_data_format(class_subject, class_scheduler ,subject, session, period):
	client = dict(
		class_id      = class_subject.id,
		class_code    = class_subject.class_code,
		subject_name  = subject.name,
		subject_code  = subject.subject_code,
		num_of_day    = class_scheduler.day_of_week,
		total_session = get_session_string(session),
		teacher_name  = class_subject.teacher,
		location      = class_subject.location,
		period        = period,
		session_start = str(session[0]),
		)

	return client