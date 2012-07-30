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