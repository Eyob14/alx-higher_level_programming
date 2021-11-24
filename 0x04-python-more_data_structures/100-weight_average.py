#!/usr/bin/python3
def weight_average(my_list=[]):
    if my_list:
        total = 0
        weight = 0
        for ele in my_list:
            total += ele[0] * ele[1]
            weight += ele[1]
        return total/weight
    return 0
