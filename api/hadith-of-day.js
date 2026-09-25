import { tweets, getDailyHadithIndex, parseHadith } from "../lib/hadiths.js";

export default async function handler(req, res) {
  const index = getDailyHadithIndex();
  const { quote, citation } = parseHadith(tweets[index]);

  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.status(200).json({
    quote,
    citation,
    index,
    total: tweets.length,
    date: new Date().toISOString().slice(0, 10),
  });
}
