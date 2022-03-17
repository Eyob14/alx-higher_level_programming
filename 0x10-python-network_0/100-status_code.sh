#!/bin/bash
#it displays only the status code of the response
curl -so /dev/null --write-our "%{http_code}" "$1"
