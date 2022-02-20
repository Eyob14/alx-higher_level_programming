#!/usr/bin/python3
def uppercase(str):
    result = ""
    for letter in str:
        if ord(letter) >= ord('a') and ord(letter) <= ord('z'): 
            result += chr(ord(letter) - (ord('a') - ord('A')))
        else:
            result += letter
    print("{:s}".format(result))
