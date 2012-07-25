# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## This is subject controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *

@request.restful()
def register():
	response.view = 'generic.json'
	def GET(name, class_group, student_code, user_course, avatar):
		return
	return locals()