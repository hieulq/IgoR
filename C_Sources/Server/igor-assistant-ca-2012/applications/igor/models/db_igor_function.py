import time
from gluon.dal import Rows
from datetime import date

def get_current_term():

	today = date.today ()
	term_string = '0'

	month = today.month

	if (8 < month and month < 12):
		term_string += str (today.year) + '1'
	if (1 < month <= 6):
		term_string += str (today.year-1) + '2'
	elif (6 < month <= 8):
		term_string += str (today.year-1) + '3'

	return int (term_string)

# Class Scheduler function

# Convert class scheduler seesion to integer array from string
def get_class_sessions(class_scheduler_session):
	if (not class_scheduler_session): return

	sessions = class_scheduler_session.split(',')
	result = list()

	for session in sessions:
		result.append (int (session))

	return result

def get_session_string(session):

	if (len (session) == 0):
		return ''

	session_str = 'Session '

	for i in range(0,len(session)):
		if i == 0:
			session_str += str (session[i])
		else:
			session_str += '-' + str (session[i])

	return session_str

######################################################################################
# User functions
######################################################################################

def get_user_by_class(class_id):
	return

def get_user_by_subject(subject_id):
	return

# Get user's name contain search value
def get_user_by_name(name_keyword):
	if (not name_keyword):
		return dict()
	
	#users = db(db.user.name.like('%' + name_keyword + '%')).select() # this not GAE function
	
	# GAE function
	users = db(db.user).select()

	users = users.find(lambda row: name_keyword.lower() in row.name.lower().split(' '))

	#print type(users)
	# results = dict()
	
	# for user in users:
	# 	print user.name.split(' ')
	# 	print name_keyword
	# 	print name_keyword.lower in user.name.lower().split(' ')
	# 	if name_keyword in user.name.split(' '):
	# 		results.update(user)
	# 		print results


	#users = db(db.user.name.contains(name_keyword.lower())).select()

	return users

# Get user's avatar
def get_avatar_full_url(avatar_url):

	if avatar_url == '' or avatar_url == None:
		return URL('static','images/igor.jpg', scheme='http')
	else:
		return avatar_url

######################################################################################
# Scheduler functions
######################################################################################

def add_scheduler(user_id, class_id, term = 0):
	if (term == 0):
		term = get_current_term()

	scheduler = db.scheduler.insert(
		owner = user_id,
		class_subject = class_id,
		term = term)

	return scheduler


def delete_scheduler(user_id, class_id):

	scheduler = db(
		(db.scheduler.owner == user_id) &
		(db.scheduler.class_subject == class_id)
		).delete()

	return scheduler


def get_date():

	today = date.today ()

	return str(today)

######################################################################################
# Notification functions
######################################################################################

def get_notification_action(notification):
	if (notification == None):
		return ''

	print notification
	if (notification.type == 1):
		result = 'You have a share job'
	else:
		result = 'Upcomming job'
	
	return result

######################################################################################
# Job functions
######################################################################################

def add_class_job(user_id, name, start_time, 
	end_time, job_type, date, 
	repeat_date, note, 
	location, test, class_id):
	
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
	
	return job_id
