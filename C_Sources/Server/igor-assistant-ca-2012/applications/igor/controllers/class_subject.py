# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is class_subject controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *

@request.restful()
def get_classes_by_subject():
	response.view = 'generic.json'
	def GET(subject_id, term = 0):
		classes = db(
			db.class_subject.subject == subject_id and 
			db.class_subject.term == term).select()

		return MessagePackager.get_packaged_message(MessageStatus.OK, classes)

	return locals()


