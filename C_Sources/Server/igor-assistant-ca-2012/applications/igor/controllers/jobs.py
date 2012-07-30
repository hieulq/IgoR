# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is jobs controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *
from gluon.dal import Rows
from igor_time import *

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

		job = db(
			db.job.id == job_id).select() 

		# job = format_client_data(job)

		return MessagePackager.get_packaged_message(MessageStatus.OK, job)

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
			date = date, ### Tuna input ????
			repeat_date = repeat_date,
			note = note,
			location = location,
			test = test,
			class_subject = class_id)
			# add_class_job(user_id, name, start_time, 
			# 	end_time, job_type, 
			# 	date, repeat_date, note, 
			# 	location, test, class_id)

		except Exception, err:
			#return MessagePackager.get_packaged_message(MessageStatus.ERROR, str (err) )
			raise Exception(str (err))

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

		try:
			job_id = db(db.job.id == job_id).delete()
		except Exception, err:
			return MessagePackager.get_packaged_message(MessageStatus.ERROR, str (err) )
		

		return MessagePackager.get_packaged_message(MessageStatus.OK, job_id)

	return locals()

@request.restful()
def mark_job_finished():
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

		#update data
		try:
			row = db(db.job.id == job_id).update(status = 1)
		except Exception, err:
			return MessagePackager.get_packaged_message(MessageStatus.ERROR, str (err) )
		# row.update_record(status = 1)

		return MessagePackager.get_packaged_message(MessageStatus.OK, "Done")
	return locals()

@request.restful()
def mark_jobs_finished():
	response.view = 'generic.json'
	def GET(*job_ids):

		#update data
		try:
			for job_id in job_ids:
				#validate input
				if (not job_id.isdigit()):
					raise Exception('job id must be numberic')
					# return MessagePackager.get_packaged_message (
					# MessageStatus.ERROR, 
					# "job id must be numberic")

				if (int (job_id) < 0):
					raise Exception('job id can not less than 0')
					# return MessagePackager.get_packaged_message (
					# MessageStatus.ERROR, 
					# "job id can not less than 0")
			
				row = db(db.job.id == job_id).update(status = 1)
					
		except Exception, err:
			db.rollback()
			return MessagePackager.get_packaged_message(MessageStatus.ERROR, str (err) )

		return MessagePackager.get_packaged_message(MessageStatus.OK, "Done")

	return locals()


@request.restful()
def accept_job():
	response.view = 'generic.json'
	def GET(job_id, owner, from_user):

		## validate input
		if (not job_id.isdigit()):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR,
			"job id must be numberic")

		if (int (job_id) < 0):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"job id can not less than 0")
		if (not owner.isdigit()):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR,
			"user id must be numberic")

		if (int (owner) < 0):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id can not less than 0")
		if (not from_user.isdigit()):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR,
			"user id must be numberic")

		if (int (from_user) < 0):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id can not less than 0")

		##
		rows = db(db.notification.owner == from_user).select()
		check = False
		for row in rows:
			if (row.is_read == True):
				check = True
				break

		if (check):
			add_class_job() ### Tuna input???
		
		else:
			return MessagePackager.get_packaged_message(MessageStatus.ERROR,
				"can not accept job: notification is not checked")

	return locals()

@request.restful()
def share_job_to_class():
	response.view = 'generic.json'
	def GET(job_id, from_user_id, class_id):

		#validate data
		if (not job_id.isdigit()):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR,
			"job id must be numberic")

		if (int (job_id) < 0):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"job id can not less than 0")
		if (not from_user_id.isdigit()):
			return MessagePackager.get_packaged_message (
			MessageStatus.ERROR,
			"user id must be numberic")

		if (int (from_user_id) < 0):
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
		
		###

		rows = db(db.user.user_course == class_id).select()

		for row in rows:

			try:
				notification_id = db.notification.insert(
				notification_class = 0,
				owner = from_user_id,
				user_share = row.id,
				is_read = False,
				type = 1,
				# date = , ##Tuna - get date ???
				is_completed = False
				)

			except Exception as err:
				return MessagePackager.get_packaged_message(MessageStatus.ERROR, str (err) )

		return MessagePackager.get_packaged_message(MessageStatus.OK, "Done")

	return locals()



# @request.restful()
# def share_job_to_project():
# 	response.view = 'generic.json'
# 	def GET(job_id, from_user_id, class_id):

# 		#validate data
# 		if (not job_id.isdigit()):
# 			return MessagePackager.get_packaged_message (
# 			MessageStatus.ERROR,
# 			"job id must be numberic")

# 		if (int (job_id) < 0):
# 			return MessagePackager.get_packaged_message (
# 			MessageStatus.ERROR, 
# 			"job id can not less than 0")
# 		if (not from_user_id.isdigit()):
# 			return MessagePackager.get_packaged_message (
# 			MessageStatus.ERROR,
# 			"user id must be numberic")

# 		if (int (from_user_id) < 0):
# 			return MessagePackager.get_packaged_message (
# 			MessageStatus.ERROR, 
# 			"user id can not less than 0")
# 		if (not class_id.isdigit()):
# 			return MessagePackager.get_packaged_message (
# 			MessageStatus.ERROR,
# 			"class id must be numberic")

# 		if (int (class_id) < 0):
# 			return MessagePackager.get_packaged_message (
# 			MessageStatus.ERROR, 
# 			"class id can not less than 0")
		
# 		###

# 		rows = db(db.user.user_course == class_id).select()

# 		for row in rows:

# 			try:
# 				notification_id = db.notification.insert(
# 				notification_class = 0,
# 				owner = from_user_id,
# 				user_share = row.id,
# 				is_read = False,
# 				type = 1,
# 				date = , ##Tuna - get date ???
# 				is_completed = False
# 				)

# 			except Exception as e:
# 				return MessagePackager.get_packaged_message(MessageStatus.ERROR, e.errno + ': ' + e.strerror )

# 		return MessagePackager.get_packaged_message(MessageStatus.OK, "Done")

# 	return locals()




##############################
## Format output for client
##
##############################

def format_client_data(job):
	if (job == None):
		return

