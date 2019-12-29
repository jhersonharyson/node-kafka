const { Server } = require("./server");

const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.99.100:9092"]
});

const producer = kafka.producer();

const server = new Server({ initializer: false, kafka_producer: producer });

const run = async () => {
  await producer.connect();
  server.start();
};

run().catch(console.error);
