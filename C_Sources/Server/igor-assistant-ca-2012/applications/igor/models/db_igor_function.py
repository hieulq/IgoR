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
