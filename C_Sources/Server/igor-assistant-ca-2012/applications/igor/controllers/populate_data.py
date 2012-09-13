# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

#########################################################################
## Bootstrap Jgor Data
## Author: phucnh, tuna
#########################################################################

from message_packager import *

@request.restful()
def add_data():
	response.view = 'generic.json'

	def GET():

		# Create subject data
		subject_id = db.subject.insert(
			name    = u"Data Structure and Algorithms",
			note    = u"Provide Knowledge for Data Structure and Algorithms",
			subject_code = "IT2020"
			)

		# class 1
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Nguyen Duc Nghia',
			class_code  = 'IT4150'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 1,
			period        = '1,2,3'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '1,2,3'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 0,
			time          = 1340104776,
			location      = "D35 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D8 - 202"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		# class 2
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Nguyen Tuan Anh',
			class_code  = 'IT4151'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 3,
			period        = '1,2,3'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4,
			period        = '4,5,6'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 0,
			time          = 1340104776,
			location      = "D3 - 301"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D5 - 202"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		# class 3
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 401",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Do Phan Thuan',
			class_code  = 'IT4152'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 3,
			period        = '7,8,9'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4,
			period        = '7,8,9'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 0,
			time          = 1340104776,
			location      = "D5 - 301"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D5 - 402"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)


		# Subject 2

		subject_id = db.subject.insert(
			name    = u"Network Programming",
			note    = u"Network Programming",
			subject_code = "IT2023"
			)

		# class 1
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D9 - 201",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Nguyen Tu Quang',
			class_code  = 'IT4160'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 3,
			period        = '7,8,9'
			)

		# class_scheduler_id = db.class_scheduler.insert(
		# 	class_subject = class_id,
		# 	day_of_week   = 4,
		# 	period        = '7,8,9'
		# 	)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 0,
			time          = 1340104776,
			location      = "D9 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D9 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		# class 2
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D9 - 104",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Nguyen Tu Quang',
			class_code  = 'IT4161'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 1,
			period        = '7,8,9'
			)

		# class_scheduler_id = db.class_scheduler.insert(
		# 	class_subject = class_id,
		# 	day_of_week   = 2,
		# 	period        = '7,8,9'
		# 	)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 0,
			time          = 1340104776,
			location      = "D9 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D9 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		#Subject 3

		subject_id = db.subject.insert(
			name    = u"Digital Signal Processing",
			note    = u"Digital Signal Processing",
			subject_code = "IT2044"
			)

		# class 2
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D9 - 101",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Trinh Van Loan',
			class_code  = 'IT4170'
			)

		# class_scheduler_id = db.class_scheduler.insert(
		# 	class_subject = class_id,
		# 	day_of_week   = 1,
		# 	period        = '7,8,9'
		# 	)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '10,11,12'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 0,
			time          = 1340104776,
			location      = "D3 - 103"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D5 - 203"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		#

		subject_id = db.subject.insert(
			name    = u"Distributed Computing",
			note    = u"Distributed Computing",
			subject_code = "IT2122"
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D3 - 101",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Nguyen Thuc Hai',
			class_code  = 'IT4173'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4,
			period        = '7,8,9,10'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D3 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D3 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Hoang Minh Thuc',
			class_code  = 'IT4175'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 5,
			period        = '7,8,9,10'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D3 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		# 
		subject_id = db.subject.insert(
			name    = u"Communications Techniques",
			note    = u"Communications Techniques",
			subject_code = "IT2123"
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 302",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Ngo Quynh Thu',
			class_code  = 'IT4177'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 5,
			period        = '7,8,9,10'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D5 - 302"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		#

		subject_id = db.subject.insert(
			name    = u"UML Language",
			note    = u"UML Language for software & system design",
			subject_code = "IT2124"
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 104",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Nguyen Huu Duc',
			class_code  = 'IT4177'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 5,
			period        = '10,11,12'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D5 - 104"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 104",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Nguyen Huu Duc',
			class_code  = 'IT4177'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 6,
			period        = '10,11,12'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D5 - 104"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		#

		subject_id = db.subject.insert(
			name    = u"IT Project Management",
			note    = u"Introduce to project management",
			subject_code = "IT2126"
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 104",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Pham Huy Hoang',
			class_code  = 'IT4211'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 6,
			period        = '10,11,12'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D5 - 104"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 104",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Pham Huy Hoang',
			class_code  = 'IT4213'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 5,
			period        = '7,8,9'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D5 - 104"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D3 - 404",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Hoang Minh Thuc',
			class_code  = 'IT4214'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 6,
			period        = '10,11,12'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D3 - 404"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		#

		subject_id = db.subject.insert(
			name    = u".NET Technology",
			note    = u".NET Technology",
			subject_code = "IT2128"
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D9 - 304",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Pham Viet Ha',
			class_code  = 'IT4216'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 6,
			period        = '1,2,3'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D9 - 304"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D9 - 204",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Nguyen Phu Binh',
			class_code  = 'IT4217'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 1,
			period        = '1,2,3'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D9 - 204"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D9 - 103",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Pham Viet Ha',
			class_code  = 'IT4218'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '1,2,3'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D9 - 103"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)


		subject_id = db.subject.insert(
			name    = u"Operating System",
			note    = u"About operating system (windows, linux, unix...)",
			subject_code = "IT2153"
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D35 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Do Tuan Anh',
			class_code  = 'IT4220'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '4,5,6'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D35 - 301"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D35 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Do Tuan Anh',
			class_code  = 'IT4221'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 3,
			period        = '4,5,6'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D35 - 301"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D35 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Do Tuan Anh',
			class_code  = 'IT4223'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 5,
			period        = '4,5,6'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D35 - 301"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D35 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Do Tuan Anh',
			class_code  = 'IT4220'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 6,
			period        = '1,2,3'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D35 - 301"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D35 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 'Do Tuan Anh',
			class_code  = 'IT4220'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '4,5,6'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D35 - 301"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 2,
			time          = 1340104776,
			location      = ""
			)

		return MessagePackager.get_packaged_message(MessageStatus.OK, "Success")
	return locals()


@request.restful()
# Bootstrap some database data for testing
def populate_data():
	response.view = 'generic.json'
	def GET():

		# Delete old data
		db.user.truncate()
		db.subject.truncate()
		db.class_subject.truncate()
		db.class_scheduler.truncate()	
		db.scheduler.truncate()
		db.notification.truncate()
		db.test.truncate()
		db.project_member.truncate()
		db.job.truncate()

		db.commit()
		# Creata user records
		# 4 student

		phucnh_id = db.user.insert(
			name         = u"Nguyen Hong Phuc",
			class_group  = u"TTM",
			student_code = 20072236,
			user_course  = 52,
			auth         = 2
			)

		hieulq_id = db.user.insert(
			name         = u"Le Quang Hieu",
			class_group  = u"HTTT",
			student_code = 20072236,
			user_course  = 52,
			auth         = 3
			)

		tuna_id = db.user.insert(
			name         = u"Nguyen Anh Tu",
			class_group  = u"TTM",
			student_code = 20072236,
			user_course  = 52,
			auth         = 4
			)

		trungvt_id = db.user.insert(
			name         = u"Vu Thanh Trung",
			class_group  = u"TTM",
			student_code = 20073070,
			user_course  = 52,
			auth         = 5
			)

		# Create subject, class_subject, class_scheduler records

		# Subject "Introduce to Computer Science"
		# With 4 class
		subject_id = db.subject.insert(
			name    = u"Introduce to Computer Science",
			note    = u"Introduce to Computer Science",
			
			)

		# class 1
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D3 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 1,
			class_code  = 'IT4056'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 1,
			period        = '1,2,3'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '1,2,3'
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 0,
			time          = 1340104776,
			location      = "D3 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "D6 - 201"
			)

		test_id = db.test.insert(
			class_subject   = class_id,
			test_type       = 2,
			#time            = 1340104776,
			#location        = "D3 - 201",
			project_due_date = 1340106776
			)

		# class 2
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 201",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 3,
			class_code  = 'IT4057'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 3,
			period        = '1,2'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4,
			period        = '5,6',
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 0,
			time          = 1340104776,
			location      = "D8 - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 1,
			time          = 1340104776,
			location      = "TC - 201"
			)

		test_id = db.test.insert(
			class_subject = class_id,
			test_type     = 3,
			#time          = 1340104776,
			location      = "TC - 201",
			project_due_date = 1340116776
			)

		# class 3
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D5 - 201",
			duration    = 15,
			is_finished = True,
			term        = '20111',
			teacher     = 5,
			class_code  = 'IT4058'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4, 
			period        = '1,2,3,4,5,6'
			)

		# class 4
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D9 - 201",
			duration    = 15,
			is_finished = True,
			term        = '20111',
			teacher     = 1,
			class_code  = 'IT4059'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '7,8,9,10,11,12'
			)

		# Subject "Relational Database"
		# With 3 class
		subject_id = db.subject.insert(
			name    = u"Relational Database",
			note    = u"Relational Database",
			)

		# class 1
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D8 - 201",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 10,
			class_code  = 'IT4076'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 3,
			period        = '7,8,9'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4,
			period        = '10,11,12'
			)

		# class 2
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D6 - 104",
			duration    = 5,
			is_finished = False,
			term        = '20113',
			teacher     = 15,
			class_code  = 'IT4077'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4,
			period        = '1,2,3'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '1,2,3'
			)

		# class 3
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D3 - 104",
			duration    = 5,
			is_finished = True,
			term        = '20111',
			teacher     = 15,
			class_code  = 'IT4079'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '1,2,4,5,6'
			)

		# Subject "Object Oriented Programming"
		# With 3 class
		subject_id = db.subject.insert(
			name    = u"Object Oriented Programming",
			note    = u"Provide the OOP model knowledge.",
			)

		# class 1
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D9 - 301",
			duration    = 15,
			is_finished = False,
			term        = '20121',
			teacher     = 40,
			class_code  = 'IT4080'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 2,
			period        = '7,8,9'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4,
			period        = '10,11,12'
			)

		# class 2
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D6 - 104",
			duration    = 5,
			is_finished = False,
			term        = '20113',
			teacher     = 35,
			class_code  = 'IT4081'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 4,
			period        = '1,2,3'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 3,
			period        = '4,5,6'
			)

		# class 3
		class_id = db.class_subject.insert(
			subject     = subject_id,
			location    = "D3 - 104",
			duration    = 5,
			is_finished = True,
			term        = '20111',
			teacher     = 25,
			class_code  = 'IT4082'
			)

		class_scheduler_id = db.class_scheduler.insert(
			class_subject = class_id,
			day_of_week   = 32,
			period        = '1,2,3,4,5,6'
			)


		# Add sample scheduler
		# Phucnh's scheduler
		db.scheduler.insert(
			owner         = 2,
			class_subject = 2,
			)

		db.scheduler.insert(
			owner         = 2,
			class_subject = 5,
			)

		db.scheduler.insert(
			owner         = 2,
			class_subject = 8,
			)

		# Add phucnh sample jobs
		db.job.insert(
			name          = "Do homework",
			start_time    = 1343100000,
			end_time      = 1343104776,
			job_type      = 1,
			class_subject = 2,
			repeat_date   = 0,
			owner         = 2,
			location      = "Home Sweet Home",
			test          = 0,			
			)

		db.job.insert(
			name          = "Review lesson",
			start_time    = 1340100000,
			end_time      = 1343104776,
			job_type      = 1,
			class_subject = 2,
			repeat_date   = 0,
			owner         = 2, 
			location     = "D3 - 204",
			test          = 0,			
			)

		# Add some phucnh's notifications
		# db.notification(

		# 	)

		#db.rollback()
		return MessagePackager.get_packaged_message(MessageStatus.OK, "Success")

	return locals()