#!/bin/bash
cd /home/ec2-user/my-node-app
docker rm -f my-node-app
docker rmi -f 045291957223.dkr.ecr.ap-south-1.amazonaws.com/node-app
docker pull 045291957223.dkr.ecr.ap-south-1.amazonaws.com/node-app:dev
docker run -p 80:3000 --name my-node-app -d 045291957223.dkr.ecr.ap-south-1.amazonaws.com/node-app:dev
