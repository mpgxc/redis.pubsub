import express from "express";
import redis from "redis";
import redisConfigs from "./redis";

const subscriber = redis.createClient({ ...redisConfigs });
const appSubscriber = express();

subscriber.subscribe("user-notify");

subscriber.on("message", (channel, message) => {
  console.log(`${channel}:subscriber: ` + message);
});

export { appSubscriber };
