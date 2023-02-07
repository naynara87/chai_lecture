#!/bin/bash

DIR="workspace/review"

if [ -d "$DIR" ]; then
  cd $DIR
  git pull
else
  mkdir $DIR
  cd $DIR
  git clone git@bitbucket.org:bubblecon/test-player.git .
fi

echo 'npm install'
npm install

echo 'build production'
npm run build:prod
