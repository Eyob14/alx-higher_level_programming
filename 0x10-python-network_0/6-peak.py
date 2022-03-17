#!/usr/bin/python3
""" This function will try to find the peak element form the given list """
def find_peak(list_of_integers):
    """finds a peak in a list of unsorted integers"""
    if not list_of_integers:
        return None
    return binary_search(list_of_integers, 0, len(list_of_integers) - 1)

def binary_search(array, left, right):
    """ using binary search """
    mid = left + (right - left) // 2
    if array[mid - 1] <= array[mid] >= array[mid + 1]:
        return array[mid]
    elif array[mid] > array[mid + 1]:
        return binary_search(array, left, mid - 1)
    elif array[mid] < array[mid + 1]:
        return binary_search(array, mid + 1, right)
