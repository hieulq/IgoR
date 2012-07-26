# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is notification controller
## Author: phucnh, tuna
#########################################################################


from message_packager import *

@request.restful()
def get_all_notification(): 

	## get new notification (is_read = 0)
	response.view = 'generic.json'
	def GET(owner, new):
		notification = db(
			db.notification.owner == owner and
			db.notification.is_read == new).select()

		return MessagePackager.get_packaged_message(MessageStatus.OK, notification)

	return locals()

@request.restful()
def mark_read():

	response.view = 'generic.json'
	def UPDATE(notification):
		row = db(db.notification. == ).select().first()
		row.update(is_read = 1)

		return MessagePackager.get_packaged_message(MessageStatus.OK, notification)

	return locals()
	

