#!/bin/bash
# it sends a post request to the passed URL and displays the boy of the response.
curl -sX POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
