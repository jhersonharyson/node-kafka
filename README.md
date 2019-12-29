# node-kafka

The project demonstrates a means of using micro services using communication through messaging with Kafka.

The system is composed of an express web server that communicates with the Kafka topic notification micro-service.

A docker image was used to upload Kafka.

#### How to use

##### Step 1 - Kafka

First you need to have the docker installed. The `docker-compose up` command is used at the root of the project. Make sure that kafka is working correctly.

##### Step 2 - API

After our Kafka is in the air, we should go up the API.
To do this, from the root of the project run `cd api`,`yarn install` and `yarn dev`.

##### Step 3 - Notifier

After raising the API, we must raise the notifier.
To do this, starting from the project root execute `cd notificator`,`yarn install` and `yarn dev`.

##### Step 4 - Browser

After the whole system is up and running, we should make a `GET` or`POST` request for the `notification` api route.

##### The following output is expected from the notifier console

``` 
{
		partition: 0, 
		offset: '0', 
		value: 'GET in / notification' 
} 
```
