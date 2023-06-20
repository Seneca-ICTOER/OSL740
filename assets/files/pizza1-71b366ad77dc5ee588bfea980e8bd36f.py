#!/usr/bin/env python3

# Author: Peter Callaghan
# Date: 22 Feb. '23
# Purpose: A A script that imports argparse, and uses a truly optional option

import argparse

#create an argument parser, then parse its args.
parser = argparse.ArgumentParser()
parser.add_argument("size",help="The size of pizza you want.")
parser.add_argument("-p","--pepperoni",help="Do you want pepperoni?",action="store_true")
args = parser.parse_args()

if args.pepperoni == True:
  print("You have ordered a " + args.size + " pepperoni pizza.")
else:
  print("You have ordered a " + args.size + " pizza.")
