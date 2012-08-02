# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is notification controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *
from gluon.dal import Rows
from gluon.tools import Service
from igor_time import  *

service = Service()


def call():
	session.forget()

	return service()

# Get all notifications of user
@service.jsonp
@service.json
def get_all_notification(owner): 

	## get new notification (is_read = 0)

	# return MessagePackager.get_packaged_message(MessageStatus.OK, owner)
	# Validate input 
	if (not owner.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id must be numberic")

	if (int (owner) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id can not less than 0")

	notification = db(
		db.notification.owner == owner).select()

	notification = format_client_data(notification)

	return MessagePackager.get_packaged_message(MessageStatus.OK, notification)

# Get all new notification of user
@service.jsonp
@service.json
def push_notification(user_id):

	# Validate input 
	if (not user_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id must be numberic")

	if (int (user_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id can not less than 0")

	notification = db(
		(db.notification.owner == user_id) &
		(db.notification.is_read == False)).select()

	return MessagePackager.get_packaged_message(MessageStatus.OK, notification)

@service.jsonp
@service.json
def mark_read(notification_ids):
		#return MessagePackager.get_packaged_message(MessageStatus.OK, notification_ids)
	notification_ids = notification_ids.split('_')

	try:
		for notification_id in notification_ids:
			if notification_id:
				row = db(db.notification.id == int (notification_id)).update (is_read = True)
	except Exception, err:
		db.rollback ()
		return MessagePackager.get_packaged_message(MessageStatus.OK, str (err))

		#return MessagePackager.get_packaged_message(MessageStatus.OK, row)
		#row.is_read = True
		#row.update(is_read = True)
		#row.update()

	return MessagePackager.get_packaged_message(MessageStatus.OK, "Done")


# phucnh edit 20120730
def format_client_data(notifications):
	if notifications == None:
		return

	client_data = list()

	for notification in notifications:
		user = db(db.user.id == notification.user_share).select().first()
		job = db(db.job.id == notification.job_id).select().first()


		client = dict(
			# "userid": "1",
			# "username": "Nguyen Hong Phuc",
			# "avatar": "1.jpeg",
			notification_id = notification.id,
			is_read = notification.is_read,
        	action = get_notification_action(notification),
        	# object = 'Deadline IT3410',
        	# "objectid": "1",
        	date = IgorTime.get_time_string(notification.date),
			)

		if user != None:
			client.update(
				userid   = user.id,
				username = user.name,
				avatar   = user.avatar,
				)

		if job != None:
			client.update (
				objectid = job.id,
				object = job.name,
				)

		client_data.append (client)

	return client_data
# end phucnh edit 20120730

# Add some sample data 
# import time

# @service.jsonp
# @service.json
# def add_sample():
# 	jobs = db(db.job.id > 0).select()

# 	for job in jobs:
# 		db.notification.insert(
# 			notification_class = 1,
# 			owner              = 2,
# 			user_share         = 3,
# 			is_read            = False,
# 			type               = 1,
# 			date               = time.time(),
# 			is_completed       = False,
# 			job_id             = job.id,
# 			);

# 	return MessagePackager.get_packaged_message(MessageStatus.OK, "OK")
