
## to distribute the token from distribution file
``` node distribute.js ```

## Docker ##
## View running docker containers ##

 ```docker ps```
 
 ## using the docker-compose.yml file automatically runs the distribution
 ```docker-compose up```

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
## to connect my docker hub to docker
```docker login```

 ## to tag docker image to docker hub using image Id
 ```docker tag 524b98bcb608 sekinatsaliu/524b98bcb608:1.0```

## to push docker image to docker hub using image Id
 ```docker push sekinatsaliu/524b98bcb608:1.0```

## to restart docker compose file
```docker-compose restart```

## to view transaction
```docker logs nci_2021_nci2021_1```

 












 



