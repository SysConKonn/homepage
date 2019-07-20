#!/bin/bash
killall node
node ./bin/www &
disown
