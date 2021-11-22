#!/usr/bin/python3
def max_integer(my_list=[]):
    maximum = my_list[0]
    if len(my_list) == 0:
        return None
    for ele in my_list:
        if maximum < ele:
            maximum = ele
    return maximum
