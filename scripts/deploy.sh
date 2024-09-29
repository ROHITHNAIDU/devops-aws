#!/bin/bash
cd /home/ec2-user/my-node-app
docker-compose down
docker pull 045291957223.dkr.ecr.ap-south-1.amazonaws.com/node-app:latest
docker run -d -p 80:3000 045291957223.dkr.ecr.ap-south-1.amazonaws.com/node-app:latest
