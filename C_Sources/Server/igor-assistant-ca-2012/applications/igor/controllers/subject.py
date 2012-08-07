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

# Get all subject

@service.jsonp
@service.json
def get_all_subjects():
	
	subjects = db(db.subject).select()

	subjects = format_client_data(subjects)
				
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

	subject = format_client_data(subject)

	return MessagePackager.get_packaged_message(MessageStatus.OK, subject)


# @service.jsonp
# @service.json
# def sample_data():
# 	db(db.subject.id == 2005).update(subject_code = "IT1002")
# 	db(db.subject.id == 4007).update(subject_code = "IT1012")
# 	db(db.subject.id == 10005).update(subject_code = "IT2002")

# 	return MessagePackager.get_packaged_message(MessageStatus.OK, "OK")

# Format subject data, include class count in current term
def format_client_data(subjects):
	if subjects == None:
		return

	client_data = list()
	term = get_current_term()

	for subject in subjects:

		classes = db(
			(db.class_subject.subject == subject.id) &
			(db.class_subject.term == term)).count()

		client = dict(
			subject_id   = subject.id,
			subject_name = subject.name,
			subject_code = subject.subject_code,
			note         = subject.note,
			class_count  = classes
			)

		client_data.append (client)

	return client_data