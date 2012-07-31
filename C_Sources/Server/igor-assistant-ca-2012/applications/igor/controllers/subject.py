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
def get_all_subjects():
	
	subjects = db(db.subject).select()
				
	return MessagePackager.get_packaged_message(MessageStatus.OK, subjects)

@service.jsonp
@service.json
def get_subject_detail(id):

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
