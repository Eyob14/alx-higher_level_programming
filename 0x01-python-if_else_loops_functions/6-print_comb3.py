#!/usr/bin/python3
for i in range(8):
    for j in range(i, 10):
        if i != j:
            print("{}{}, ".format(i,j), end="")
print("{}{}".format(i+1, j))
