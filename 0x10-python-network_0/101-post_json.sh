#!/bin/bash
# it sends a JSON post request to a URL and displays the body of the response.
curl -s -X POST -H "Content-Type: application/json" -d @"$2" "$1"
