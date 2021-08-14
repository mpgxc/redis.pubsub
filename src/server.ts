import "dotenv/config";

import express from "express";
import morgan from "morgan";

import { appPublisher } from "./publisher";
import { appSubscriber } from "./subscriber";

appPublisher.use(express.json());
appSubscriber.use(express.json());

appPublisher.use(morgan("dev"));
appSubscriber.use(morgan("dev"));

const { API_PUBLISHER_PORT, API_SUBSCRIBER_PORT } = process.env;

appPublisher.listen(API_PUBLISHER_PORT, () => {
  console.log(`🚀 Publisher rodando! PORTA:${API_PUBLISHER_PORT}}`);
});

appSubscriber.listen(API_SUBSCRIBER_PORT, () => {
  console.log(`🚀 Subscriber rodando! PORTA: ${API_SUBSCRIBER_PORT}}`);
});
