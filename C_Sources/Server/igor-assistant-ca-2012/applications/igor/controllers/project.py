# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is subject controller
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

@service.jsonp
@service.json
def get_projects(user_id):
	# Validate input 
	if (not user_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id must be numberic")

	if (int (user_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id can not less than 0")

	###
	#if (term == 0):
	#	term = get_current_term()
	#return MessagePackager.get_packaged_message(MessageStatus.OK, term)

	classes = get_classes_of_user(user_id, 0, None)
	#return MessagePackager.get_packaged_message(MessageStatus.OK, classes)

	projects = list()

	for classs in classes:
		project = db(db.test.class_subject == classs and
			db.test.test_type == 2).select()
		projects.append(project)

	#projects = format_client_data(projects)

	return MessagePackager.get_packaged_message(MessageStatus.OK, projects)


@service.jsonp
@service.json
def get_project_detail(project_id):
	# Validate input 
	if (not project_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"project id must be numberic")

	if (int (project_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"project id can not less than 0")	
	###
	project = db(db.test.id == project_id and
		db.test.test_type == 2).select()

	#project = format_client_data(project)

	return MessagePackager.get_packaged_message(MessageStatus.OK, project)

@service.jsonp
@service.json
def get_project_by_class(class_id):
	# Validate input 
	if (not class_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id must be numberic")

	if (int (class_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id can not less than 0")	
	###
	
	project = db(db.test.class_subject == class_id and
		db.test.test_type == 2).select()

	#project = format_client_data(project)

	return MessagePackager.get_packaged_message(MessageStatus.OK, project)

@service.jsonp
@service.json
def get_project_by_user_class(user_id, class_id):
	# Validate input 
	if (not class_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id must be numberic")

	if (int (class_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id can not less than 0")

	if (not user_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id must be numberic")

	if (int (user_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id can not less than 0")

	###

	classes = get_classes_of_user(user_id, 0, None)


	for classs in classes:
		project = db(db.test.class_subject == classs and
			db.test.test_type == 2).select()
		if (project.class_subject == class_id):
			#project = format_client_data(project)
			return MessagePackager.get_packaged_message (
				MessageStatus.OK, project)

	return MessagePackager.get_packaged_message (
		MessageStatus.ERROR, "can not find project")


# def format_client_data(projects):
# 	if (projects == None):
# 		return

# 	client_data = list()

# 	for project in projects:

# 		subject = db(db.subject.id == class_subject.subject).select().first()
# 		class_schedulers = db(db.class_scheduler.class_subject == class_subject.id).select()
		
# 		if (subject == None):
# 			continue
# 		# print class_schedulers
# 		for class_scheduler in class_schedulers:
			
# 			# Get session list (integer)
# 			sessions = get_class_sessions(class_scheduler.period)

# 			# Morning session
# 			morning = [session for session in sessions if session <= 6]
# 			afternoon = [session for session in sessions if session >= 7]


# 			if (morning):
# 				client = class_data_format(
# 					class_subject, class_scheduler,
# 					subject, morning, "Morning")
				
# 				client_data.append(client)

# 			if (afternoon):
# 				afternoon = map(lambda s: s - 6, afternoon)
# 				client = class_data_format(
# 					class_subject, class_scheduler,
# 					subject, afternoon, "Afternoon")

# 				client_data.append (client)

# 	return client_data