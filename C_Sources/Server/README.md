IgoR Server Source Code
==============

Author
* Nguyen Hong Phuc - phucnh
* Nguyen Anh Tu - tuna

IgoR Server Source Code

* Based on web2py framework
* Deployed in Google App Engine server
 
Server Database Detail
* auth_user: store user authenticate information
* user: store user profile
* subject: store all course information
* class_subject: all class open for subject (course)
* test: midterm, lastterm class test information
* project: the course project
* project_member: all team member of each project
* job: store user's job
* notification

Database Design
http://github.com/hieulq/IgoR/raw/master/B_Database/igor-db.jpg

** NOTE:
* web2py framework has added jsonp service by phucnh