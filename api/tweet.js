import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";

dotenv.config();

const tweets = [
  "Actions are judged by intentions, and everyone will be rewarded according to what they intended. (Sahih al-Bukhari / Sahih Muslim)",
  "The strong believer is better and more beloved to Allah than the weak believer, though there is good in both. (Sahih Muslim)",
  "Whoever follows a path to seek knowledge, Allah will make easy for him a path to Paradise. (Sahih Muslim)",
  "Allah does not look at your appearance or wealth but at your hearts and deeds. (Sahih Muslim)",
  "The most beloved deeds to Allah are those done consistently, even if few. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever believes in Allah and the Last Day should speak good or remain silent. (Sahih al-Bukhari / Sahih Muslim)",
  "Make things easy and do not make them difficult; give glad tidings and do not repel people. (Sahih al-Bukhari / Sahih Muslim)",
  "Allah is gentle and loves gentleness in all matters. (Sahih al-Bukhari / Sahih Muslim)",
  "None of you truly believes until he loves for his brother what he loves for himself. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever relieves a believer’s hardship, Allah will relieve his hardship on the Day of Judgment. (Sahih Muslim)",
  "A good word is charity. (Sahih al-Bukhari / Sahih Muslim)",
  "The world is provision, and the best provision of it is a righteous person. (Sahih Muslim)",
  "Take benefit of five before five: your youth before old age, health before sickness... (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever is not merciful to others will not be treated mercifully. (Sahih al-Bukhari / Sahih Muslim)",
  "Tie your camel and then trust in Allah — put in effort and rely on your Lord. (Related authentic principles; practice of tawakkul is taught in Sahih collections)",
  "Whoever prays the morning prayer is under the protection of Allah; keep your prayers. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever persists in seeking knowledge for the sake of Allah will have angels asking forgiveness for him. (Found in authentic collections / widely transmitted)",
  "The believer who mixes with people and is patient is better than the one who does not mix and is not patient. (Sahih al-Bukhari / Sahih Muslim)",
  "The best among you are those who have the best manners and character. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever helps his brother, Allah will help him. (Sahih Muslim)",
  "Whoever removes a worldly hardship from a believer, Allah will remove one of his hardships on the Day of Judgment. (Sahih Muslim)",
  "Contentment is a treasure — seek gratitude and you will find peace. (General Quranic/hadith ethics; related narrations in Sahih collections)",
  "Patience is a gift; whoever is given patience, Allah will give him a better reward than he deserves. (Sahih al-Bukhari / Sahih Muslim)",
  "The believer who is humble in success will be nearer to Allah. (Related authentic hadiths on humility in Sahih books)",
  "Give charity quietly and cheerfully — small consistent giving is beloved. (Sahih al-Bukhari / Sahih Muslim)",
  "A smiling face is charity. (Sahih al-Bukhari / Sahih Muslim — short hadith about smiling as charity is authentic in many collections)",
  "Repent quickly and return to Allah — sincere repentance opens doors again. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever teaches good to people is rewarded as if he practiced it. (Authentic theme across collections — seeking to spread good is rewarded)",
  "Speak truth kindly — honesty combined with gentleness is beloved. (Sahih al-Bukhari / Sahih Muslim)",
  "Guard your tongue; words can heal or wound — choose them wisely. (Authentic narrations on speech in Sahih collections)",
  "Be regular in small worship — steadiness wins Allah’s love. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever believes in Allah and the Last Day should be generous to his neighbor. (Sahih al-Bukhari / Sahih Muslim)",
  "Strive to do good: small acts done often outweigh large occasional deeds. (Sahih al-Bukhari / Sahih Muslim)",
  "When you feel weak, call on your Lord; He provides strength beyond measure. (Theme supported by many authentic hadiths and Quranic guidance)",
  "Do not despair of the mercy of Allah — His mercy encompasses all things. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever seeks to ease for a believer, Allah eases for him in this life and the next. (Sahih Muslim)",
  "Be humble: pride closes doors to blessing. (Authentic advice in Sahih collections)",
  "Sincerity in small deeds pleases Allah more than show without faith. (Sahih al-Bukhari / Sahih Muslim)",
  "Make dhikr a habit — remembrance steadies the heart. (Numerous authentic hadiths in Sahih collections on dhikr)",
  "Pray for guidance daily — choosing the straight path is a daily act. (Sahih al-Bukhari / Sahih Muslim)",
  "Help the needy — charity today becomes comfort in the Hereafter. (Sahih al-Bukhari / Sahih Muslim)",
  "Be patient with delays; what is meant for you will not pass you by. (Authentic theme in hadith literature)",
  "A believer is not stung twice from the same hole — learn and grow from experience. (Sahih al-Bukhari / Sahih Muslim)",
  "Keep good company; it shapes actions and strengthens faith. (Sahih al-Bukhari / Sahih Muslim)",
  "The Prophet ﷺ asked us to seek forgiveness often — it refreshes the heart. (Sahih al-Bukhari / Sahih Muslim)",
  "Pray early and often; start each day with remembrance of Allah. (Sahih al-Bukhari / Sahih Muslim)",
  "Love for others what you love for yourself — the essence of faith. (Sahih al-Bukhari / Sahih Muslim)",
  "Serve others quietly; Allah rewards the unseen. (Sahih Muslim / other authentic sources)",
  "Be just in your actions; fairness is beloved and foundational. (Sahih al-Bukhari / Sahih Muslim)",
  "Seek knowledge and act upon it; knowledge without practice fades. (Sahih al-Bukhari / Sahih Muslim)",
  "Persevere in goodness — the harvest of patience and effort is sweet. (Authentic theme across Sahih books)",
  "Keep hope alive — sincere dua can change the course of a life. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever is patient, Allah will make him patient; no gift is better than patience. (Sahih Muslim)",
  "Make your intentions pure; Allah judges the heart before deeds. (Sahih al-Bukhari / Sahih Muslim)",
  "Protect the honor of others; respect builds community and reward. (Authentic teachings found in Sahih collections)",
  "Reform yourself first — change begins with the one in the mirror. (Principle supported by many authentic narrations)",
  "A life of purpose pleases Allah — serve with sincerity and worship. (Authentic guidance across collections)",
  "Keep your trust in Allah and pair it with honest effort. (Taught in Sahih hadiths and prophetic example)",
  "Let mercy be your measure — treat people with compassion and justice. (Sahih al-Bukhari / Sahih Muslim)",
  "Do not belittle any good — every act counts in Allah’s sight. (Sahih Muslim)",
  "Be humble in success — gratitude and humility are the path to more blessings. (Found in Sahih collections)",
  "Help a brother in need — you may be the answer to their prayer. (Sahih Muslim)",
  "Whoever feeds the hungry or comforts someone, Allah will raise his rank. (Narrations present in Sahih and other authentic collections)",
  "Pray for your parents — their dua is a strong source of good. (Authentic hadiths in Sahih collections about honoring parents)",
  "Make charity regular, even a little — consistency wins Allah’s love. (Sahih al-Bukhari / Sahih Muslim)",
  "Repent often; sincere return to Allah brightens the heart. (Sahih al-Bukhari / Sahih Muslim)",
  "Be honest and trustworthy — the Prophet ﷺ praised the truthful and trusted. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever covers a Muslim’s faults, Allah will cover his faults. (Sahih al-Bukhari / Sahih Muslim)",
  "Observe the rights of others — fulfilling rights pleases Allah. (Sahih al-Bukhari / Sahih Muslim)",
  "Protect your prayers; they are your meeting with your Lord. (Sahih al-Bukhari / Sahih Muslim)",
  "Do good quietly; reward may be unseen in this world but vast with Allah. (Sahih Muslim / other authentic narrations)",
  "Teach children good character — it is the greatest gift you can give. (Prophetic guidance in Sahih collections)",
  "Be firm against wrongdoing but gentle with people — balance is prophetic. (Sahih al-Bukhari / Sahih Muslim)",
  "The believer who endures hardship with patience will be greatly rewarded. (Sahih Muslim)",
  "Give when you are healthy and expect to live — best charity is during health. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever seeks to be among the righteous, let him guard his heart and deeds. (Authentic theme in Sahih books)",
  "When overwhelmed, take a breath and place your trust in Allah. (Prophetic guidance on reliance and patience)",
  "Persevere in learning — knowledge shapes character and destiny. (Sahih Muslim)",
  "Be consistent in small acts of worship; continuity is beloved to Allah. (Sahih al-Bukhari / Sahih Muslim)",
  "Kindness opens hearts — be gentle and truthful. (Sahih al-Bukhari / Sahih Muslim)",
  "Do not envy; be grateful and taste peace within. (Teachings supported in Sahih collections)",
  "Keep your heart soft toward creation and firm toward wrongdoing. (Authentic prophetic character guidance)",
  "Do not waste time in anger; calmness preserves honour and faith. (Sahih al-Bukhari / Sahih Muslim)",
  "Make dua for guidance and courage — supplication reshapes outcomes. (Sahih al-Bukhari / Sahih Muslim)",
  "Seek good company and let them lift you toward better deeds. (Sahih al-Bukhari / Sahih Muslim)",
  "Be a source of ease for someone — lighten burdens whenever possible. (Sahih Muslim)",
  "Let your deeds be consistent, not sporadic — better small and steady. (Sahih al-Bukhari / Sahih Muslim)",
  "Keep hope in Allah’s mercy; it outlives every despair. (Sahih al-Bukhari / Sahih Muslim)",
  "Protect the weak and serve the needy — this is true nobility. (Sahih Muslim / other authentic texts)",
  "Turn trials into lessons — every test is a chance to grow in faith. (Prophetic guidance across Sahih books)",
  "Pray for forgiveness and start each day anew with hope. (Sahih al-Bukhari / Sahih Muslim)",
  "Whoever forgives others, Allah increases his dignity. (Sahih al-Bukhari / Sahih Muslim)",
  "Let your character be your calling card — gentleness, truth, and service. (Sahih al-Bukhari / Sahih Muslim)",
  "Seek mercy by showing mercy — compassion multiplies blessings. (Sahih al-Bukhari / Sahih Muslim)",
  "Be resilient; steadfast faith rebuilds what trials may break. (Authentic prophetic encouragement)",
  "The one who strives for the pleasure of Allah will find His help. (Sahih Muslim)",
  "Be sincere in your intentions — Allah rewards what is in the heart first. (Sahih al-Bukhari / Sahih Muslim)",
  "Strive to be the best in conduct — good conduct is part of faith. (Sahih al-Bukhari / Sahih Muslim)",
  "Do not belittle any good deed — even a smile is counted. (Sahih al-Bukhari / Sahih Muslim)",
  "Help others rise — elevating people is a form of ongoing charity. (Sahih Muslim)",
  "Remember death as a teacher; it reminds you what truly matters. (Sahih al-Bukhari / Sahih Muslim)",
  "Pray for guidance for yourself and others — dua reshapes hearts. (Sahih al-Bukhari / Sahih Muslim)",
  "Let gratitude shape your speech and conduct every day. (Sahih al-Bukhari / Sahih Muslim)",
  "Act with justice; fairness is the root of beloved deeds. (Sahih al-Bukhari / Sahih Muslim)",
  "Keep learning; knowledge lifts the believer and lights the path for others. (Sahih Muslim)",
  "Be the calm in someone’s storm; kindness reflects your iman. (Authentic prophetic guidance)",
  "Live simply; contentment pleases Allah and eases the soul. (Sahih al-Bukhari / Sahih Muslim)"
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
