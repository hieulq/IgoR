# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is notification controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *
from gluon.dal import Rows

@request.restful()
def get_all_notification(): 

	## get new notification (is_read = 0)
	response.view = 'generic.json'
	def GET(owner):

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
	def GET(notifications_id):
		for notification_id in notifications_id:
			row = db(db.notification.id == notification).select()
			row.update(is_read = True)

		return MessagePackager.get_packaged_message(MessageStatus.OK, None)

	return locals()
	

