# coding: utf8
# try something like
#########################################################################
## This is scheduler controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *

# Get scheduler of user at specific term
# Input:
# 	integer user_id
# 	integer term (default = current term)
@request.restful()
def get_scheduler():
    response.view = 'generic.json'
    def GET(user_id, term = 0):

    	# phucnh edit 20120726
        # validate input
		if (not user_id.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"user id must be numberic!")

		if (not term.isdigit()):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"term must be numberic!")

		if (int (id) < 0):
			return MessagePackager.get_packaged_message (
				MessageStatus.ERROR, 
				"user id can not less than 0!")

		if term == 0:
			term = get_current_term()

		# end phucnh edit 20120726

		# Get data from database
		schedulers = db(
			db.scheduler.owner == user_id and 
			db.scheduler.term == term).select()

		return

	return locals()

# Get scheduler of use at specific term with time
# Input:
# 	integer user_id
# 	integer day_of_week
# 	integer term (default = current term)
@request.restful()
def get_scheduler_by_time():
    response.view = 'generic.json'
    def GET(user_id, day_of_week, term):
        scheduler = db(
            db.scheduler.owner == user_id and 
            db.scheduler.day_of_week == day_of_week and
            db.scheduler.term == term).select()

        return MessagePackager.get_packaged_message(MessageStatus.OK, scheduler)

    return locals()
