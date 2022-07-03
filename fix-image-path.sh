#!/bin/bash
OLD_PATH='images'
NEW_PATH='notes\/images'

grep -rl $OLD_PATH . | sort | uniq | xargs perl -e "s/$OLD_PATH/$NEW_PATH/" -pi
