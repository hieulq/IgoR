# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is notification controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *
from gluon.dal import Rows
from igor_time import  *

@request.restful()
def get_all_notification(): 

	## get new notification (is_read = 0)
	response.view = 'generic.json'
	def GET(owner):

		#return MessagePackager.get_packaged_message(MessageStatus.OK, owner)
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

		notification = format_client_data(notification) ##Tuna - chua format duoc

		return MessagePackager.get_packaged_message(MessageStatus.OK, notification)

	return locals()



@request.restful()
def push_notification():

	response.view = 'generic.json'
	def GET(user_id):

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
			db.notification.owner == user_id and
			db.notification.is_read == False).select()

		return MessagePackager.get_packaged_message(MessageStatus.OK, notification)

	return locals()

@request.restful()
def mark_read():

	response.view = 'generic.json'
	def GET(notification_ids):
		#return MessagePackager.get_packaged_message(MessageStatus.OK, notification_ids)

		try:
			for notification_id in notification_ids:
				row = db(db.notification.id == notification_id).update(is_read = True)
		except Exception, err:
			return MessagePackager.get_packaged_message(MessageStatus.OK, str (err))

			#return MessagePackager.get_packaged_message(MessageStatus.OK, row)
			#row.is_read = True
			#row.update(is_read = True)
			#row.update()

		return MessagePackager.get_packaged_message(MessageStatus.OK, row)

	return locals()

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
   #      	"username": "Nguyen Hong Phuc",
   #      	"avatar": "1.jpeg",
        	action = get_notification_action(notification),
        	object = 'Deadline IT3410',
        	# "objectid": "1",
        	date = IgorTime.get_time_string(notification.date),
			)

		if user != None:
			client.update(
				userid = user.id,
				username = user.name,
				avatar = user.avatar,
				)

		client_data.append (client)

	return client_data
# end phucnh edit 20120730