import { createClient } from "redis";
import { Repository, Schema } from "redis-om";

const redis = createClient({ url: process.env.REDIS_URL });

redis.on("error", (err) => console.log("Redis Client Error", err));

await redis.connect();

const userSchema = new Schema("user", {
  ip: { type: "string", path: "$.user.ip" },
  geoCountry: { type: "string", path: "$.user.geoCountry" },
  email: { type: "string", path: "$.user.email" },
  numberOfSubmittedJobs: { type: "number" },
});

export const userRepository = new Repository(userSchema, redis);
await userRepository.createIndex();
