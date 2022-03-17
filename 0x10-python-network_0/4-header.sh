#!/bin/bash
# it sends a GET request to the URl alnd displays the body of ther response.
curl -sX GET -H "X-School-User-Id: 98" "$1"
