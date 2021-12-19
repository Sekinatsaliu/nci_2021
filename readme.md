## to distribute the token from distribution file
``` node distribute.js ```

## Docker ##
## View running docker containers ##

 ```docker ps```
 ### build a docker container ###

 ```docker build -t nci/project2021 .```
 ## run the image ##
 ```docker run -p 8090:8080 --name nci -d nci/project2021```

 ### kill a running container ###
 ```docker kill [name]```

 ### start/stop a container ###
 ```docker start/stop [name]```

 ### view logs ###
 ```docker logs [name]```

 ### view logs inside a container ###
 ```docker logs -f [name]```
 ## to view the docker image ##
 ``` docker image ls ```

 ## to delete all images in docker
 ``` docker image prune -a -f```

 ## to clear everything in docker system
 ```docker system prune -a -f```

 ## using the docker-compose.yml file automatically runs the distribution
 ```docker-compose up```












 



