# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is class_subject controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *

@request.restful()
def get_classes_by_subject():
	response.view = 'generic.json'
	def GET(subject_id, term = 0):
		term = 20121
		classes = db(
			db.class_subject.subject == subject_id and 
			db.class_subject.term == term).select()

		return MessagePackager.get_packaged_message(MessageStatus.OK, classes)

	return locals()

@request.restful()
def get_class_detail():
	response.view = 'generic.json'
	def GET(id):
		class_subject = db(db.class_subject.id == id).select()
		return MessagePackager.get_packaged_message(MessageStatus.OK, class_subject)

	return locals()

@request.restful()
def get_classes_by_user():
	response.view = 'generic.json'
	# def GET(user_id, term = 0):
		# term = 20121
		# user_scheduler = 
		# classes = db()
		# return MessagePackager.get_packaged_message(MessageStatus.OK, classes)

	return locals()


# Format class data to client data
def format_client_data(classes):
	if (classes == None):
		return

	client_data = dict()

	for class_subject in classes:

		subject = db(db.subject.)
		class_schedulers = db(db.class_scheduler.class_subject == class_subject.id)

		if (subject == None):
			continue

		for class_scheduler in class_schedulers:

			# Get session list (integer)
			sessions = get_class_sessions(class_scheduler.period)

			# Morning session
			morning = [session for session in sessions if session <=6]
			afternoon = [session for session in sessions if session >= 7]

			client = dict(
				class_code   = class_subject.id,
				subject_name = subject.name,
				num_of_day = class_scheduler.day_of_week
        		#"period": "Morning",
        		#subject_code: IT1110,
        		#"session_start": "1",
        		#"total_session": "Session 1-2-3",
        		teacher_name = class_subject.teacher
        		location = class_subject.location
				)

			if (morning):
				client.update (
					period = 'Morning',
					session_start = str(morning[0]),
					)

			client_data.update (client)

	return client_data