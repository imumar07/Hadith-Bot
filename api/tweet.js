import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
import { tweets, getDailyHadithIndex } from "../lib/hadiths.js";

dotenv.config();

// Random Islamic/Motivational Stickers
const stickers = [
  "✨", "🤲", "🌙", "💫", "🌟", "🕌", "📿", "❤️", "🌸", "🕊️",
  "⭐", "🌿", "☁️", "🔥", "💛", "🤍", "🌼", "🌙✨", "🤲✨", "💖"
];

export default async function handler(req, res) {
  // Vercel sends this Bearer token only when IT triggers the scheduled cron
  // (see vercel.json). Without this check, anyone who finds this URL could
  // hit it directly and post real tweets on demand / burn the API quota.
  const authHeader = req.headers?.authorization;
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const client = new TwitterApi({
      appKey: process.env.TWITTER_APP_KEY,
      appSecret: process.env.TWITTER_APP_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    });

    // Walk through the list one per day (by day number, not Math.random) so every
    // hadith is posted once before any repeats - a serverless cron has no memory
    // between runs, so this can't rely on in-process state.
    const randomTweet = tweets[getDailyHadithIndex()];

    // Pick a random sticker
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

    // Build final tweet and keep under X/Twitter limit
    const footer = `\n\nMay Allah protect us and guide us. Remember me in your duā 🤲 ${randomSticker}`;
    const maxTweetLength = 280;
    const maxMainLength = maxTweetLength - footer.length;
    const safeTweet =
      randomTweet.length > maxMainLength
        ? `${randomTweet.slice(0, maxMainLength - 1)}...`
        : randomTweet;
    const finalMessage = `${safeTweet}${footer}`;

    const tweet = await client.v2.tweet(finalMessage);

    return res.status(200).json({
      success: true,
      message: finalMessage,
      tweet,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
