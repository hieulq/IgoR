# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is subject controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *

# Registration new user
@request.restful()
def register():
	response.view = 'generic.json'
	def GET(name, class_group, student_code, user_course, avatar):
		return

	return locals()


# Login 
@request.restful()
def login(email, password):
	response.view = 'generic.json'
	def GET(email, password):
		return

	return locals()

# Search user
# Input
# 	type: integer. 2: by class, 3: by subject, 5: by user name
@request.restful()
def search_user():
	response.view = 'generic.json'
	def GET(type, value = ''):
		
		if (not type.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"type must be numberic! - 2: get by class, 3: get by subject, 5: by user name")

		users = dict()

		if (int (type) == 5):
			users = get_user_by_name (value)
			#users = db(db.user).select()
			
		users = format_client_data (users)

		return MessagePackager.get_packaged_message (MessageStatus.OK, users)

	return locals()

@request.restful()
def get_user_detail():
	response.view = 'generic.json'
	def GET(id):

		if (not id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"user id must be numberic!")

		if (int (id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"user id can not less than 0!")
		
		user = 	db(db.user.id == id).select ()
		
		user = format_client_data (user)

		return MessagePackager.get_packaged_message (MessageStatus.OK, user)

	return locals()

# Format data for client 
def format_client_data(users):
	if (users == None):
		return

	client_data = list()

	for user in users:
		auth = db(db.auth_user.id == user.auth).select().first()

		if (auth != None):
			client = dict(
				userid    = user.id,
				#username  = user.name,
				fullname  = user.name,
				#password = 
				avatar    = user.avatar,
				studentid = user.student_code,
				email     = auth.email,
				group     = user.class_group,
				course    = user.user_course
				)

		client_data.append (client)

	return client_data