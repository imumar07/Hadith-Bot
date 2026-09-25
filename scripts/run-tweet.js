import dotenv from "dotenv";
import handler from "../api/tweet.js";

dotenv.config();

const req = {
  headers: {
    authorization: `Bearer ${process.env.CRON_SECRET}`,
  },
};

const res = {
  status(code) {
    this.statusCode = code;
    return this;
  },
  json(body) {
    console.log(`Status: ${this.statusCode}`);
    console.log(JSON.stringify(body, null, 2));
    return this;
  },
};

await handler(req, res);
