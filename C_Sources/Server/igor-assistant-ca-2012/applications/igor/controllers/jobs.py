# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is jobs controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *
from gluon.dal import Rows

@request.restful()
def get_jobs_by_class():
	response.view = 'generic.json'
	def GET(user_id, class_id):

		# Validate input 
		if (not user_id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"use id must be numberic")

		if (int (user_id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"user id can not less than 0")

		if (not class_id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"class id must be numberic")

		if (int (class_id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"class id can not less than 0")


		jobs = db(
			db.job.owner == user_id and
			db.job.class_subject == class_id).select()

		return MessagePackager.get_packaged_message(MessageStatus.OK, jobs)

	return locals()	

@request.restful()
def get_jobs_detail():
	response.view = 'generic.json'
	def GET(job_id):

		#validate input
		if (not job_id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"job id must be numberic")

		if (int (job_id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"job id can not less than 0")

		jobs = db(
			db.job.id == job_id).select() 

		return MessagePackager.get_packaged_message(MessageStatus.OK, jobs)

	return locals()	


@request.restful()
def add_class_job():
	response.view = 'generic.json'
	def GET(user_id, name, start_time, end_time, job_type, date, 
		repeat_date, note, location, test, class_id):

		# Validate input
		if (not class_id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"class id must be numberic")

		if (not user_id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"user id must be numberic")
		if (int (class_id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"class id can not less than 0")
		if (int (user_id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"user id can not less than 0")

		# Insert new data
		try:
			job_id = db.job.insert(
			owner = user_id,
			name = name,
			start_time = start_time,
			end_time = end_time,
			job_type = job_type,
			date = get_date, ### string or integer???
			repeat_date = repeat_date,
			note = note,
			location = location,
			test = test,
			class_subject = class_id)

		except Exception as e:
			return MessagePackager.get_packaged_message(MessageStatus.ERROR, e.errno + ': ' + e.strerror )

		return MessagePackager.get_packaged_message(MessageStatus.OK, job_id)

	return locals()

@request.restful()
def delete_job():
	response.view = 'generic.json'
	def GET(job_id):

		#validate input
		if (not job_id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"job id must be numberic")

		if (int (job_id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"job id can not less than 0")

		job_id = db(db.jobs.id == job_id).delete()

		return MessagePackager.get_packaged_message(MessagePackager.OK, job_id)

	return locals()

##unfinished
@request.restful()
def mark_job_finished():
	response.view = 'generic.json'
	def UPDATE(job_id):
		row = db(db.jobs.id == job_id).select()
		row.update()

		return MessagePackager.get_packaged_message(MessageStatus.OK, None)