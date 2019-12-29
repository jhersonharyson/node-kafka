const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app2",
  brokers: ["192.168.99.100:9092"]
});

const consumer = kafka.consumer({ groupId: "rest-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic: "rest-topic",
    fromBeginning: true
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString()
      });
    }
  });
};

run().catch(console.error);
