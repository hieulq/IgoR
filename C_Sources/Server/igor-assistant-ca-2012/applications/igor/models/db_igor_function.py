import time
from datetime import date

def get_current_term():

	today = date.today ()
	term_string = '0'

	month = today.month

	# if (month == 2  or 8 < month < 12):
	# 	term_string += str (today.year) + '1'
	# if (2 < month <= 6):
	# 	term_string += str (today.year-1) + '2'
	# elif (6 < month <= 8):
	# 	term_string += str (today.year-1) + '3'

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


# User function
def get_user_by_class(class_id):
	return

def get_user_by_subject(subject_id):
	return

# Get user's name contain search value
def get_user_by_name(name):
	if (not name):
		return dict()
	print name
	users = db(db.user.name.like('%' + name + '%')).select()

	return users

