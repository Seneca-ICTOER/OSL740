#!/usr/bin/env python3

# Author: Peter Callaghan
# Date: 22 Feb. '23
# Purpose: A A script that imports argparse, and uses a truly optional option

import argparse

#create an argument parser, then parse its args.
parser = argparse.ArgumentParser()
parser.add_argument("-p","--pepperoni",help="Do you want pepperoni?",action="store_true")
size = parser.add_mutually_exclusive_group(required=True)
size.add_argument("-s","--small",help="For a small pizza",action="store_true")
size.add_argument("-m","--medium",help="For a medium pizza",action="store_true")
size.add_argument("-l","--large",help="For a large pizza",action="store_true")
size.add_argument("-x","--party",help="For a party size pizza",action="store_true")
args = parser.parse_args()

size = ""
if args.small == True:
  size = "small"
elif args.medium == True:
  size = "medium"
elif args.large == True:
  size = "large"
elif args.party == True:
  size = "party"

if args.pepperoni == True:
  print("You have ordered a " + size + " pepperoni pizza.")
else:
  print("You have ordered a " + size + " pizza.")
