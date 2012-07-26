# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is subject controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *

@request.restful()
def get_all_subjects():
	response.view = 'generic.json'
	def GET():
		subjects = db(db.subject).select()

		#client = dict
				
		return MessagePackager.get_packaged_message(MessageStatus.OK, subjects)

	return locals()

@request.restful()
def get_subject_detail():
	response.view = 'generic.json'
	def GET(id):

		# Validate input
		if (not id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"subject id must be numberic")

		if (int (id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"subject id can not less than 1")

		# Get data
		subject = db(db.subject.id == id).select()
		return MessagePackager.get_packaged_message(MessageStatus.OK, subject)

	return locals()