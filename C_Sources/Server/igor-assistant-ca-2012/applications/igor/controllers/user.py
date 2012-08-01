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

# Registration new user
@service.jsonp
@service.json
def register(email, password, name, class_group, student_code, user_course, avatar = ''):

	try:
		user = db.auth_user.insert(
			first_name = name,
			last_name  = name,
			email      = email,
			password   = db.auth_user.password.requires[0](password)[0]
			)

		if user:
			user = db.user.insert(
				name         = name,
				class_group  = class_group,
				student_code = student_code,
				user_course  = user_course,
				avatar       = avatar,
				auth         = user
				)
	except Exception, eerr:
		db.rollback()
		return MessagePackager.get_packaged_message(MessageStatus.ERROR, str (err) )

	return MessagePackager.get_packaged_message(MessageStatus.OK, user)

# Check user's email available
@service.jsonp
@service.json
def check_email_available(email):
	
	if (db(db.auth_user.email == email).isempty()):
		return MessagePackager.get_packaged_message (MessageStatus.OK, 
			"1")
	else:
		return MessagePackager.get_packaged_message (MessageStatus.OK, 
			"0")

# Login 
@service.jsonp
@service.json
def login(email, password):

	is_login = auth.login_bare(email, password)
	
	if not is_login:
		return MessagePackager.get_packaged_message (MessageStatus.OK, 
			"Authentication failed! Check your email or password again")

	#print is_login.id

	user = db(db.user.auth == is_login.id).select()

	user = format_client_data(user)

	return MessagePackager.get_packaged_message (MessageStatus.OK, user)

# Search user
# Input
# 	type: integer. 2: by class, 3: by subject, 5: by user name
@service.jsonp
@service.json
def search_user(type, value = ''):
		
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

# Get user information
@service.jsonp
@service.json
def get_user_detail(id):

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

# Get all user in same class_subject
@service.jsonp
@service.json
def get_users_by_class(class_id):
	if (not class_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id must be numberic!")

	if (int (class_id) < 0):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id can not less than 0!")

	user_schedulers = db(db.scheduler.class_subject == class_id).select()

	users = list()

	for user_scheduler in user_schedulers:
		user = db(db.user.id == user_scheduler.owner).select().first()

		if user != None:
			users.append (user)

	users = format_client_data(users)

	return MessagePackager.get_packaged_message (MessageStatus.OK, users)

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
				avatar    = get_avatar_full_url(user.avatar),
				studentid = user.student_code,
				email     = auth.email,
				group     = user.class_group,
				course    = user.user_course
				)

		client_data.append (client)

	return client_data