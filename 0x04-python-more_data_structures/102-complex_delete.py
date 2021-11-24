#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    repeat = []
    for key, item in a_dictionary.items():
        if item == value:
            repeat.append(key)
    for key in repeat:
        if key in a_dictionary.keys():
            del(a_dictionary[key])
    return a_dictionary
