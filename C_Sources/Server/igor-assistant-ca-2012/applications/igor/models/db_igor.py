#########################################################################
## Define database tables
## Author: phucnh
#########################################################################

# Define user
db.define_table('user', 
    Field('name', 'string'),
    # Field('keywords', 'list:string'),
    Field('class_group', 'string'), # TTM, KHMT ...
    Field('student_code', 'string'),
    Field('user_course', 'integer'),
    Field('avatar', 'string'),
    Field('auth', db.auth_user),
    )

# db.user.keywords.compute  = lambda r : str (r.name)

# Define subject table
db.define_table('subject', 
    Field('name', 'string', length=50, notnull=True),
    Field('note', 'text'),
    Field('subject_code', 'string', length=20)
    )

# Define class_subject table
db.define_table('class_subject',
    #Field('subject', 'integer'),
    Field('subject', db.subject),
    Field('location', 'string'),
    Field('duration', 'integer'),
    Field('is_finished', 'boolean'),
    #Field('day_of_week', 'integer', requires=IS_IN_SET(DAY_OF_WEEK_CONST)),
    Field('term', 'integer'),
    Field('teacher', 'string'),
    Field('class_code', 'string', length=20)
    )

db.define_table('class_scheduler',
    Field('class_subject', db.class_subject),
    Field('day_of_week', 'integer', requires=IS_IN_SET(DAY_OF_WEEK_CONST)), # Monday = 0, Tuesday = 1 ...
    Field('period', 'string'), # value is string: 1,2,3.
    Field('location', 'string'), # if this is empty, default is class location 
    )

# Define scheduler table
db.define_table('scheduler',
    Field('owner', 'integer'),
    Field('class_subject', db.class_subject),
    #Field('day_of_week', 'integer', requires=IS_IN_SET(DAY_OF_WEEK_CONST)),
    #Field('period', 'string'),
    Field('term', 'integer')
    )

# Define notification table
db.define_table('notification',
    Field('notification_class', 'integer', default = 0), # 0 - job notification, 1 - subject notification
    Field('owner', 'integer'),
    Field('user_share', 'integer', default = 0), # if (is share notification) user_share != 0
    Field('is_read', 'boolean'),
    Field('type', 'integer'), # 0 - personal (alarm), 1 - sharing job
    Field('date', 'integer'),
    Field('is_completed','boolean', default = False)
    )

# Define test table
db.define_table('test',
    Field('class_subject', db.class_subject),
    Field('test_type', 'integer', default = 0), # 0 - mid term test, 1 - end term test, 2 - project
    Field('time', 'integer'),
    Field('location', 'string'),
    Field('project_due_date', 'integer', default = 0),
    )

# Define project member
db.define_table('project_member',
    Field('class_subject', db.class_subject),
    Field('user', 'integer'),
    Field('note', 'text')
    )

# Define job table
db.define_table('job',
    Field('name', 'string', length = 50, notnull = True),
    Field('start_time', 'integer'),
    Field('end_time', 'integer'),
    Field('job_type', 'integer'), # 0 - subject job, 1 - personal job
    Field('class_subject', db.class_subject, default = 0),
    Field('date', 'integer'),
    Field('repeat_date', 'string', default = '0'), # Ex: (1,2,3). If (repeat_date = 0) no repeat
    Field('owner', 'integer'), # link with user table
    Field('note', 'text'),
    Field('location', 'string'),
    Field('test', 'integer', default= 0)
    )

