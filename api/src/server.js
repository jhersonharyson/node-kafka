const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

class Server {
  constructor({ initializer, kafka_producer }) {
    this.port = 3333;
    this.init(initializer, kafka_producer);
  }

  init(initializer, kafka_producer) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    if (kafka_producer) this.applyKafkaProducer(this.app, kafka_producer);

    this.routes(this.app);

    if (initializer) this.listen(this.app, this.port);
  }

  routes(app) {
    app.use(routes);
  }

  listen(app, port) {
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  }

  start() {
    this.listen(this.app, this.port);
  }

  applyKafkaProducer(app, kafka_producer) {
    app.use((req, res, next) => {
      req.kafka_producer = kafka_producer;
      return next();
    });
  }
}

module.exports = { Server };
