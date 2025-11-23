import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";

dotenv.config();

const tweets = [
  "After every hardship there comes ease. Believe in Allah — reward awaits in this world and the Hereafter.",
  "Trust Allah’s plan; patience is the key that opens every locked door.",
  "Turn to Allah in every worry; He hears the silent prayers of the heart.",
  "Small acts of kindness are beloved; never underestimate tiny good deeds.",
  "Seek forgiveness — it clears the heart and brings peace to the soul.",
  "Tie your camel and trust Allah; effort plus reliance brings success.",
  "Sincerity in small deeds pleases Allah more than pomp without faith.",
  "A grateful heart sees blessings everywhere; thank Allah often.",
  "Spare time to pray — it renews strength and calms the mind.",
  "Charity purifies wealth and increases blessings — give from what you have.",
  "Hope in Allah is a light that shines in the darkest nights.",
  "When you feel weak, remember the One who gives strength without measure.",
  "Be gentle; gentleness opens hearts and draws people nearer to good.",
  "Do good quietly; reward may be unseen in this world but vast with Allah.",
  "Make dhikr a habit — it steadies the heart and keeps it mindful.",
  "Forgive others — mercy given returns manifold from the Most Merciful.",
  "Rely on dua — it changes outcomes and softens what seemed impossible.",
  "Live simply; contentment pleases Allah and eases the soul.",
  "Seek knowledge — it lifts the believer and lights the path for others.",
  "Be patient with delays; what is meant for you will not pass you by.",
  "Guard your tongue; words can heal or wound — choose them wisely.",
  "Turn trials into lessons; every test is a chance to grow in faith.",
  "Feed the hungry — charity today becomes comfort in the Hereafter.",
  "Speak little, do much; actions rooted in faith speak loudest.",
  "Remember death as a teacher; it reminds you what truly matters.",
  "Protect the honor of others; respect is a bridge to lasting good.",
  "A smiling face is charity — spread light with simple kindness.",
  "When you fall, rise with repentance and renewed resolve.",
  "Make your intentions pure; Allah counts the heart before the deed.",
  "Help a brother in need — you may be the answer to their prayer.",
  "Don't despair — Allah’s mercy encompasses all things.",
  "Be constant in small worship; steady drops carve deep wells.",
  "Ask for guidance daily; the straight path is a daily choice.",
  "Love for others what you love for yourself — the essence of faith.",
  "Hold on to prayer; it anchors your heart amid storms.",
  "A heart full of gratitude never grows poor.",
  "Be the calm in someone’s storm; kindness reflects your iman.",
  "Seek mercy by showing mercy; compassion multiplies blessings.",
  "Reform yourself first; change begins with the one in the mirror.",
  "Let your character be your calling card — gentleness and truth.",
  "Trust in Allah’s timing; His wisdom outstrips our plans.",
  "Give quietly and cheerfully — charity with humility is beloved.",
  "Turn sorrow into sujood — prostrate and find comfort with Allah.",
  "Act with justice; fairness is the root of beloved deeds.",
  "Protect your prayers; they are the soul’s confidential meeting with the Lord.",
  "A life of purpose pleases Allah — seek it through service and worship.",
  "Seek good company; it shapes your actions and strengthens faith.",
  "Be humble in success; pride closes hearts and doors to blessing.",
  "Keep hope alive — a hopeful heart is the believer’s strength.",
  "Do not envy; be grateful instead, and taste peace within.",
  "Patience sharpens the soul; reward for patience is beyond measure.",
  "Make your home a place of remembrance and mercy.",
  "Let charity be regular, even a little — consistency wins Allah’s love.",
  "Turn need into dua; the Lord listens more than you think.",
  "Speak truth kindly; honesty guided by mercy builds trust.",
  "Be mindful of the rights of others — honouring rights pleases Allah.",
  "Live with purpose and kindness; your life is a light for others.",
  "When overwhelmed, take a breath and place your trust in Allah.",
  "A generous heart is a blessed heart — give without expecting return.",
  "Keep good company and let them lift you toward better deeds.",
  "Remember, trials are opportunities for elevation — face them with faith.",
  "Act with intention; every action grows when sown with sincerity.",
  "Let your deeds be consistent, not sporadic — better small and steady.",
  "Guard your eyes and heart — purity nurtures peace.",
  "Repent often; turn back quickly and keep the path straight.",
  "Pray for guidance for yourself and others — dua reshapes hearts.",
  "Serve others quietly; Allah rewards what is unseen by people.",
  "Do not belittle any good — every act counts in Allah’s sight.",
  "Be patient in hardship and thankful in ease — balance the heart.",
  "Keep hope in the mercy of Allah; it outlives every despair.",
  "Seek Allah before comfort; true comfort is found in closeness to Him.",
  "Persevere in goodness; the harvest of patience is sweet.",
  "Let your actions reflect your faith; authenticity matters more than show.",
  "Be a source of ease for someone — lighten burdens whenever possible.",
  "Pray early and often; start each day with the Lord’s remembrance.",
  "Know that hardships are temporary; the Hereafter is permanent.",
  "Be sincere in repentance — it opens doors you thought closed.",
  "Help others rise; elevating people is a form of ongoing charity.",
  "Seek contentment in what Allah has given, and peace will follow.",
  "Let gratitude shape your speech and conduct every day.",
  "Be a beacon of good character — it guides more than words.",
  "Keep your trust in Allah and pair it with honest effort.",
  "A heart anchored in worship finds calm in every storm.",
  "Choose patience over haste; haste often leads to regret.",
  "Learn from the Prophets’ patience — perseverance wins Allah’s favor.",
  "Give with humility and grace; that is the hallmark of true faith.",
  "Remind yourself of blessings daily — gratitude softens the soul.",
  "Make peace between people; peacemaking is beloved and rewarding.",
  "Seek to please Allah, not to impress people.",
  "Let mercy be your measure; treat others with compassion and justice.",
  "Keep your tongue soft and your deeds strong — action speaks.",
  "Be resilient: steadfast faith rebuilds what trials may break.",
  "Turn longing for paradise into good deeds today。",
  "Be hopeful: a single sincere dua can change the course of a life。",
  "Do not waste time in anger; calmness preserves honour and faith。",
  "Observe the needs of others; giving is a path to inner peace。",
  "Pray for forgiveness and start each day anew with hope。",
  "Protect the weak and serve the needy — this is true nobility。",
  "Seek knowledge and act upon it; knowledge without action fades。",
  "Keep your heart soft toward creation and firm toward wrongdoing。",
  "Remember, a heart that remembers Allah never empties of peace。",
  "Be consistent in worship; continuity is beloved to Allah。",
  "Act with wisdom and patience — both win greater rewards。",
  "Be a servant to people and a seeker of Allah’s pleasure。"
];

// Random Islamic/Motivational Stickers
const stickers = [
  "✨", "🤲", "🌙", "💫", "🌟", "🕌", "📿", "❤️", "🌸", "🕊️",
  "⭐", "🌿", "☁️", "🔥", "💛", "🤍", "🌼", "🌙✨", "🤲✨", "💖"
];

export default async function handler(req, res) {
  try {
    const client = new TwitterApi({
      appKey: process.env.TWITTER_APP_KEY,
      appSecret: process.env.TWITTER_APP_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    });

    // Pick a random tweet
    const randomTweet = tweets[Math.floor(Math.random() * tweets.length)];

    // Pick a random sticker
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

    // Build final tweet
    const finalMessage = `${randomTweet}\n\nMay Allah protect us and guide us. Remember me in your duā 🤲 ${randomSticker}`;

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
