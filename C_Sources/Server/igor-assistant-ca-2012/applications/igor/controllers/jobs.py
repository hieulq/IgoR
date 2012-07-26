# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is jobs controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *

@request.restful()
def get_jobs_by_class():
	response.view = 'generic.json'
	def GET(user_id, class_id):
		jobs = db(
			db.job.owner == user_id and
			db.job.class_subject == class_id).select()

		return MessagePackager.get_packaged_message(MessageStatus.OK, jobs)

	return locals()	

@request.restful()
def get_jobs_detail():
	response.view = 'generic.json'
	def GET(job_id):
		jobs = db(
			db.job.name == job_id).select() #ko co field job_id hay dai loai the, em ko biet query dua vao field gi???

		return MessagePackager.get_packaged_message(MessageStatus.OK, jobs)

	return locals()	