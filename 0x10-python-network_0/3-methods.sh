#!/bin/bash
# it diplays all HTTP methods the server will accept
curl -sI "$1" | grep "Allow:" | sed -ne 's/^Allow: //p'
