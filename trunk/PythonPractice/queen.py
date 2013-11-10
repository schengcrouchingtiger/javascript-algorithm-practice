# !/usr/bin/env python
# A general solution of Eight Queens
# Copyright (C) 2006 Alec Jang <alec.jang@gmail.com>
# 
# This program is free software, you can redistribute it 
# with or without any modifications. It may be interesting or 
# even useful, but without any warranty.
# 
# Description:
#   This is a general method to figuren out all solutions of 
#   eight queens. Certainly, it can also solve any number of queens.
#   Each solution is a list, and each value of the list represents 
#   the column number, at the same time the index of this value
#   represents it's row number. 
#   For instance, list [5,0,4,1,7,2,6,3] means that the first 
#   queen is at (0,5), the second queen is at (1,0), etc.
#   It runs very fast. In my window box, it need within 4 seconds
#   to make all solutions and print them to a file.
#   Only tested at python 2.41
#
# Usage:
#   python queens.py >queens.txt
#
# if you want to get only one solution , or solve other number of 
# queens solution, you can do it like this:
#
# >>>import queens
# >>>q=queens.queens(8)
# >>>queens.print_solution(q.next())
#
# Alec Jang 3/18/2006

import sys

def check_safe(lst):
    """Check if any two elements of lst can form a line, 
    if so, there will be:
    abs(value2-value1)/(index2-index1)==1
    """
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            if abs((lst[j]-lst[i])*1.0/(j-i))==1:
                return False
    return True

def print_solution(lst):
    """Print a solution to stdout
    The argument lst is a nested list
    """
    for i in range(len(lst)):
        stars=['.']*len(lst)
        stars[lst[i]]='Q'
        print stars

def list_mutation(n):
    """Generate all posible layouts of n queens
    """
    if n==0: yield [n]
    else:
        for lst in list_mutation(n-1):
            for i in range(n):
                yield lst[0:n-1-i]+[n-1]+lst[n-1-i:n-1]
                
def queens(n):
    """Find all solutions of queens.
    For each layout generated by list_mutation(n), chech
    if it's safe.
    The augument n is the number of queens. Certainly it 
    can be altered to meet your own needs.
    """
    print "N queens solutions"
    print "By Alec Jang"
    for q in list_mutation(n):
        if check_safe(q):
            yield q

def test():
    """Test 8 queens.
    """
    N=8
    import time
    start=time.time()
    count=0
    for q in queens(N):
        count+=1
        print "solution: ", count, q
        print_solution(q)
    print "Solution count:", count
    print "time: ", time.time()-start

if __name__=="__main__":
    test()