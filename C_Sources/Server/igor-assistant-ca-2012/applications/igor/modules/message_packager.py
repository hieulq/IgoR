class MessagePackager:

	def __init__(self, status = None, message = None):

		if status == None:
			self.status = None
		else:
			self.status = status

		if message == None:
			self.message = None
		else:
			self.message = message

	# def package(self, message):
	# 	self.message = message

	@staticmethod
	def get_packaged_message(status, message = ''):
		status_string = 'OK'
		
		if (status == MessageStatus.ERROR):
			status_string = 'ERROR'
		
		return dict(status = status_string, message = message)

class MessageStatus:
	OK = 1
	ERROR = 2