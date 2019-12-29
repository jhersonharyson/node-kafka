const express = require("express");

const routes = express.Router();

routes.post("/notification", async (req, res) => {
  const { kafka_producer } = req;
  await kafka_producer.send({
    topic: "notification-topic",
    messages: [{ value: "POST in /notification" }]
  });
  return res.send({ ok: true });
});

routes.get("/notification", async (req, res) => {
  const { kafka_producer } = req;
  await kafka_producer.send({
    topic: "notification-topic",
    messages: [{ value: "GET in /notification" }]
  });
  return res.status(200).send({ ok: true });
});

module.exports = routes;
