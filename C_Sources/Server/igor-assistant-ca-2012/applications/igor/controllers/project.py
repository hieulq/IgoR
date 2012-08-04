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
def get_projects(user_id):
	# Validate input 
	if (not user_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id must be numberic")

	if (int (user_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id can not less than 0")

	###
	#if (term == 0):
	#	term = get_current_term()
	#return MessagePackager.get_packaged_message(MessageStatus.OK, term)

	classes = get_classes_of_user(user_id, 0, None)
	#return MessagePackager.get_packaged_message(MessageStatus.OK, classes)

	projects = list()

	for classs in classes:
		project = db(db.test.class_subject == classs and
			db.test.test_type == 2).select()
		projects.append(project)

	projects = format_client_data(projects)

	return MessagePackager.get_packaged_message(MessageStatus.OK, projects)


@service.jsonp
@service.json
def get_project_detail(project_id):
	# Validate input 
	if (not project_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"project id must be numberic")

	if (int (project_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"project id can not less than 0")	
	###
	project = db(db.test.id == project_id and
		db.test.test_type == 2).select()

	project = format_client_data(project)

	return MessagePackager.get_packaged_message(MessageStatus.OK, project)

@service.jsonp
@service.json
def get_project_by_class(class_id):
	# Validate input 
	if (not class_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id must be numberic")

	if (int (class_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id can not less than 0")	
	###
	
	project = db(db.test.class_subject == class_id and
		db.test.test_type == 2).select()

	project = format_client_data(project)

	return MessagePackager.get_packaged_message(MessageStatus.OK, project)

@service.jsonp
@service.json
def get_project_by_user_class(user_id, class_id):
	# Validate input 
	if (not class_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id must be numberic")

	if (int (class_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"class id can not less than 0")

	if (not user_id.isdigit()):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id must be numberic")

	if (int (user_id) < 0):
		return MessagePackager.get_packaged_message (
			MessageStatus.ERROR, 
			"user id can not less than 0")

	###

	classes = get_classes_of_user(user_id, 0, None)


	for classs in classes:
		project = db(db.test.class_subject == classs and
			db.test.test_type == 2).select()
		if (project.class_subject == class_id):
			#project = format_client_data(project)
			return MessagePackager.get_packaged_message (
				MessageStatus.OK, project)

	return MessagePackager.get_packaged_message (
		MessageStatus.ERROR, "can not find project")


def format_client_data(projects):
	if projects == None:
		return

	client_data = list()

	for project in projects:
		
		class_subject = db(db.class_subject.id == project.class_subject).select().first()
		
		if class_subject != None:
			subject = db(db.subject.id == class_subject.subject).select().first()
			if subject != None:
				client = dict(
					
					projectid 		= project.id,
					name	        = subject.name,
					description     = subject.note,
		        	
					)

		client_data.append (client)

		#################
		members_users = db(db.project_member.test == project.id).select()
		members = list()

		if members_users != None:
			for members_user in members_users:
				user = db(db.user.id == members_user.user).select().first()
				auth = db(db.auth_user.id == user.auth).select().first()
				member = dict(

					userid 			=	user.id,
					fullname		=	user.name,
#					password		=	#???,
					avatar			=	user.avatar,
					studentid		=	user.student_code,
					email			=	auth.email,
					group			=	user.class_group,
					course			=	user.user_course,
					)
				members.append (member)

		client_data.append (members)

		################
		project_jobs = db(db.job.test == project.id).select()
		jobs = list()
		if project_jobs != None:
			for project_job in project_jobs:

				job = dict(

					jobid 			=	project_job.id,
					name			=	project_job.name,
					status			=	project_job.status,
					start_time		=	project_job.start_time,
					end_time		=	project_job.end_time,
					repeat_date		=	project_job.repeat_date,
					location		=	project_job.location,
					note			=	project_job.note,
					)
				jobs.append (job)

		client_data.append (jobs)

	return client_data


