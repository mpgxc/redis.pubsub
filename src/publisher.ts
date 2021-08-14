import express from "express";
import redis from "redis";
import redisConfigs from "./redis";

const publisher = redis.createClient({ ...redisConfigs });

const appPublisher = express();

appPublisher.get("/msg", (req, res) => {
  const user = {
    name: "Garcia",
    desc: "I am a developer",
  };

  publisher.publish("user-notify", JSON.stringify(user));

  return res.json(user);
});

export { appPublisher };
