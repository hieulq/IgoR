import datetime
import time

class JgorTime:
	
	def __init__(self):
		self.one_minute = 60 * 60
		self.one_day = 60 * 60 * 24
		self.one_week = 60 * 60 * 24 * 7

	@staticmethod
	def maketime(year, month, date, hour, minute, second = 0):
		datetime = datetime.datetime (year, month, date, hour, minute, second)

		return int (time.mktime (datetime.timetuple ()))

	@staticmethod
	def get_time_string(timestamp):
		time_string = ''
		today = int (time.time ())

		diff = int (today - timestamp)

		if (diff <= 60):
			time_string = create_second_string (diff)
		else if (diff > 60 and diff < 60*60):
			time_string = get_minute_string (diff)
		else if (diff >= 60*60 and diff < 60*60*24):
			time_string = get_hour_string (diff)
		else if (diff >= 60*60*24 and diff < 60*60*24*7):
			time_string = get_day_string (diff)

		time_string += ' ago.'

		return time_string

	@staticmethod
	def get_minute_string(difference):
		time_string = ''

		minutes = int (difference / 60)
		seconds = int (difference % 60)

		time_string = create_minute_string (minutes)

		if (seconds > 0):
			time_string += " " + create_second_string (seconds)

		return time_string

	@staticmethod
	def get_hour_string(difference):
		time_string = ''

		hours = int (difference / 3600)
		minutes = int (difference % 3600)

		time_string = create_hour_string (hours)

		if (minutes > 0):
			time_string += " " + create_minute_string (minutes)

		return time_string

	@staticmethod
	def create_second_string(seconds):
		second_str = ''

		if (seconds == 1):
			second_str = "one second"
		elif (seconds > 1):
			second_str = int (seconds) + ' seconds'

		return second_str

	@staticmethod
	def create_minute_string(minutes):
		minute_str = ''

		if (minutes == 1):
			minute_str = "one minute"
		elif (minutes > 1):
			minute_str = int (minutes) + ' minutes'

		return minute_str

	@staticmethod
	def create_hour_string(hours):
		hour_str = ''

		if (hours == 1):
			hour_str = "one hour"
		elif (hours > 1):
			hour_str = int (hours) + ' hours'

		return hour_str

	@staticmethod
	def create_day_string(days):
		day_str = ''

		if (days == 1):
			day_str = "one day"
		elif (days > 1):
			day_str = days + " days"

		return day_str