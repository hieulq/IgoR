# coding: utf8
# try something like
#########################################################################
## This is scheduler controller
## Author: phucnh, tuna
#########################################################################

from message_packager import *

@request.restful()
def get_scheduler():
    response.view = 'generic.json'
    def GET(user_id, term):
        scheduler = db(
            db.scheduler.owner == user_id and
            db.scheduler.term == term).select()
        return MessagePackager.get_packaged_message(MessageStatus.OK, scheduler)

    return locals()

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
