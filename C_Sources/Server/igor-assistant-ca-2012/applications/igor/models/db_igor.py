#########################################################################
## Define database tables
## Author: phucnh
#########################################################################

# Define subject table
db.define_table('subject', 
    Field('name', 'string', length=50, notnull=True),
    Field('note', 'text'),
    Field('term','integer'),
    Field('duration', 'integer'),
    Field('teacher', 'integer')
    )

# Define class_subject table
db.define_table('class_subject',
    #Field('subject', 'integer'),
    Field('subject', db.subject),
    Field('location', 'string'),
    Field('period', 'string'),
    Field('duration', 'integer'),
    Field('is_finished', 'boolean'),
    Field('day_of_week', 'integer', requires=IS_IN_SET(DAY_OF_WEEK_CONST)),
    Field('term', 'integer')
    )

# Define scheduler table
db.define_table('scheduler',
    Field('owner', 'integer'),
    Field('class_subject', db.class_subject),
    Field('day_of_week', 'integer', requires=IS_IN_SET(DAY_OF_WEEK_CONST)),
    Field('period', 'string'),
    Field('term', 'integer')
    )

# Define notification table
db.define_table('notification',
    Field('notification_class', 'integer'), # 0 - job notification, 1 - subject notification
    Field('owner', 'integer'),
    Field('user_share', 'integer'), # if (is share notification) user_share != 0
    Field('is_read', 'boolean'),
    Field('type', 'integer'), # 0 - personal (alarm), 1 - sharing job
    Field('date', 'integer'),
    )

# Define test table
db.define_table('test',
    Field('class_subject', db.class_subject),
    Field('test_type', 'integer'),
    Field('time', 'integer'),
    Field('location', 'string'),
    Field('project_due_date', 'integer'),
    )

# Define project member
db.define_table('project_member',
    Field('class_subject', db.class_subject),
    Field('user', 'integer'),
    Field('note', 'text')
    )

# Define job table
db.define_table('job',
    Field('name', 'string', length=50, notnull=True),
    Field('start_time', 'integer'),
    Field('end_time', 'integer'),
    Field('job_type', 'integer'), # 0 - subject job, 1 - personal job
    Field('subject', db.subject),
    Field('date', 'integer'),
    Field('repeat_date', 'string'), # Ex: (1,2,3). If (repeat_date = 0) no repeat
    Field('owner', 'integer'),
    Field('note', 'text'),
    Field('location', 'string'),
    Field('test', db.test)
    )

# Define user
db.define_table('user', 
    Field('name', 'string'),
    Field('class_group', 'string'), # TTM, KHMT ...
    Field('student_code', 'string'),
    Field('user_course', 'integer'),
    Field('avatar', 'string'),
    )