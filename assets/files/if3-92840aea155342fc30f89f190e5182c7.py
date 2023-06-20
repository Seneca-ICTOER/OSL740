#!/usr/bin/env python3

magic=42
guess = input("Guess the magic number: ")

if magic == int(guess):
  print(guess + " is correct!!")
else:
  print("Sorry, " + guess + " is not correct.")
  diff=magic - int(guess)
  if diff > -5 and diff < 5:
    print("Close though...")
