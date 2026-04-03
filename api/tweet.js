import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";

dotenv.config();

const tweets = [
  "\"Actions are judged by intentions,\" so purify your niyyah before every deed. (Bukhari 1; Muslim 1907)",
  "\"The most beloved deeds are those done regularly, even if small,\" so stay consistent. (Bukhari 6464; Muslim 783)",
  "\"Speak good or remain silent\" is a complete rule for speech and social media. (Bukhari 6018; Muslim 47)",
  "\"Allah does not look at your appearance, but at your hearts and deeds,\" so work inward first. (Muslim 2564)",
  "\"Love for your brother what you love for yourself\" is part of true iman. (Bukhari 13; Muslim 45)",
  "\"The strong believer is better and more beloved to Allah,\" so strengthen faith and discipline. (Muslim 2664)",
  "\"Whoever follows a path to seek knowledge, Allah eases for him a path to Paradise.\" (Muslim 2699)",
  "\"Allah is gentle and loves gentleness in all matters,\" so advise people with mercy. (Bukhari 6927; Muslim 2165)",
  "\"A good word is charity,\" so kind speech can be daily sadaqah. (Bukhari 2989; Muslim 1009)",
  "\"A smile to your brother is charity,\" never underestimate simple sunnah. (Tirmidhi 1956)",
  "\"The best of you are those with the best character,\" not just words. (Bukhari 3559)",
  "\"Whoever is not merciful to people will not be shown mercy,\" so choose rahmah. (Bukhari 7376; Muslim 2319)",
  "\"The merciful are shown mercy by the Most Merciful; be merciful to those on earth.\" (Tirmidhi 1924)",
  "\"Whoever relieves a believer's hardship, Allah relieves his hardship on the Last Day.\" (Muslim 2699)",
  "\"Whoever conceals a Muslim's faults, Allah will conceal his faults in dunya and akhirah.\" (Muslim 2699)",
  "\"Make things easy and do not make them difficult,\" da'wah should bring hope. (Bukhari 69; Muslim 1734)",
  "\"A believer is not stung from the same hole twice,\" learn from mistakes and grow. (Bukhari 6133; Muslim 2998)",
  "\"Whoever does not thank people has not thanked Allah,\" gratitude is worship too. (Abi Dawud 4811)",
  "\"Charity does not decrease wealth,\" give with trust in Ar-Razzaq. (Muslim 2588)",
  "\"No one humbles himself for Allah except that Allah raises him.\" (Muslim 2588)",
  "\"Part of good Islam is leaving what does not concern you,\" protect your focus. (Tirmidhi 2317)",
  "\"The nearest to me on the Day of Judgment are those best in character.\" (Tirmidhi 2018)",
  "\"Dua between adhan and iqamah is not rejected,\" don't miss that moment. (Tirmidhi 212)",
  "\"Closest a servant is to Allah while in sujood, so make much dua.\" (Muslim 482)",
  "\"Whoever sends salawat upon me once, Allah sends ten upon him.\" (Muslim 408)",
  "\"Whoever says SubhanAllahi wa bihamdihi 100 times, sins are forgiven.\" (Bukhari 6405; Muslim 2691)",
  "\"Two phrases are beloved to Allah: SubhanAllahi wa bihamdihi, SubhanAllahil Azeem.\" (Bukhari 6406; Muslim 2694)",
  "\"The best of you are those who learn Qur'an and teach it.\" (Bukhari 5027)",
  "\"Read the Qur'an, for it will come as an intercessor for its companion.\" (Muslim 804)",
  "\"Do not belittle any good deed, even meeting your brother with a cheerful face.\" (Muslim 2626)",
  "\"When a person dies, deeds end except 3: ongoing charity, beneficial knowledge, righteous child dua.\" (Muslim 1631)",
  "\"The best charity is given while you are healthy and hoping to live,\" don't delay giving. (Bukhari 1419; Muslim 1032)",
  "\"Tie your camel, then trust Allah,\" tawakkul means effort plus reliance. (Tirmidhi 2517)",
  "\"Whoever believes in Allah and the Last Day should honor his guest.\" (Bukhari 6019; Muslim 47)",
  "\"Whoever believes in Allah and the Last Day should maintain ties of kinship.\" (Bukhari 6138; Muslim 47)",
  "\"The one who severs kinship ties will not enter Paradise,\" keep family bonds alive. (Bukhari 5984; Muslim 2556)",
  "\"Paradise lies under the feet of mothers\" in meaning: honor your mother repeatedly. (Bukhari 5971; Muslim 2548)",
  "\"Your father is the middle gate of Paradise,\" so protect that relationship. (Tirmidhi 1900)",
  "\"He is not a believer whose stomach is full while his neighbor is hungry.\" (Al-Adab al-Mufrad 112)",
  "\"The best houses are those where an orphan is treated well.\" (Ibn Majah 3679)",
  "\"I and the sponsor of an orphan will be in Paradise like this.\" (Bukhari 5304)",
  "\"Every joint of the body owes charity each day,\" fill your day with small good deeds. (Bukhari 2707; Muslim 1009)",
  "\"Helping a man onto his mount is charity\" - service to people is worship. (Bukhari 2989; Muslim 1009)",
  "\"Removing harm from the road is charity\" - faith is practical. (Bukhari 2989; Muslim 1009)",
  "\"The strong one is not by wrestling; the strong one controls himself in anger.\" (Bukhari 6114; Muslim 2609)",
  "\"Do not become angry\" was repeated advice, so master your reactions. (Bukhari 6116)",
  "\"Whoever suppresses anger while able to act, Allah will honor him.\" (Tirmidhi 2021)",
  "\"Modesty is part of faith,\" so haya protects the heart and behavior. (Bukhari 9; Muslim 35)",
  "\"Faith has over seventy branches, and the highest is La ilaha illa Allah.\" (Muslim 35)",
  "\"Removing harm from the path is a branch of faith.\" (Muslim 35)",
  "\"None enters Paradise with arrogance in his heart, even if tiny.\" (Muslim 91)",
  "\"Allah is beautiful and loves beauty,\" keep excellence without arrogance. (Muslim 91)",
  "\"Purity is half of faith,\" so guard wudu and cleanliness. (Muslim 223)",
  "\"Prayer is light,\" keep salah central in your daily routine. (Muslim 223)",
  "\"Patience is illumination,\" hardship with sabr becomes guidance. (Muslim 223)",
  "\"The Quran is proof for you or against you,\" read and live it. (Muslim 223)",
  "\"The coolness of my eyes is in prayer,\" find peace in salah. (Nasa'i 3940)",
  "\"The first deed judged on the Day of Resurrection is prayer.\" (Tirmidhi 413)",
  "\"Pray as you have seen me pray,\" learn your salah correctly. (Bukhari 631)",
  "\"Whoever builds a mosque for Allah, Allah builds for him a house in Paradise.\" (Bukhari 450; Muslim 533)",
  "\"Congregational prayer is 27 times better than praying alone.\" (Bukhari 645; Muslim 650)",
  "\"The five daily prayers erase sins between them\" when major sins are avoided. (Muslim 233)",
  "\"Whoever prays Fajr is under Allah's protection,\" guard your morning prayer. (Muslim 657)",
  "\"The most beloved prayer after obligatory is night prayer.\" (Muslim 1163)",
  "\"In the last third of night, Allah answers those who call on Him.\" (Bukhari 1145; Muslim 758)",
  "\"Whoever fasts Ramadan with faith and hope is forgiven.\" (Bukhari 38; Muslim 760)",
  "\"Whoever stands in Ramadan (qiyam) with faith is forgiven.\" (Bukhari 37; Muslim 759)",
  "\"Whoever fasts six days of Shawwal gets reward like fasting all year.\" (Muslim 1164)",
  "\"Fasting is a shield,\" use it to train discipline and taqwa. (Bukhari 1904; Muslim 1151)",
  "\"The smell from a fasting person's mouth is beloved to Allah.\" (Bukhari 1894; Muslim 1151)",
  "\"Give zakah from your wealth; it purifies you.\" (Muslim 983)",
  "\"Protect yourselves from the Fire even with half a date in charity.\" (Bukhari 1417; Muslim 1016)",
  "\"Sadaqah extinguishes sins like water extinguishes fire.\" (Tirmidhi 614)",
  "\"The upper hand (giving) is better than the lower hand (taking).\" (Bukhari 1429; Muslim 1033)",
  "\"Whoever provides iftar for a fasting person gets similar reward.\" (Tirmidhi 807)",
  "\"Truthfulness leads to righteousness and righteousness leads to Paradise.\" (Bukhari 6094; Muslim 2607)",
  "\"Lying leads to wickedness and wickedness leads to Hellfire.\" (Bukhari 6094; Muslim 2607)",
  "\"A sign of the hypocrite: when he speaks, he lies; when he promises, he breaks it; when trusted, he betrays.\" (Bukhari 33; Muslim 59)",
  "\"Whoever guarantees what is between his jaws and legs, I guarantee Paradise.\" (Bukhari 6474)",
  "\"A Muslim is one from whose tongue and hand people are safe.\" (Bukhari 10; Muslim 40)",
  "\"The believer does not insult, curse, or speak obscene words.\" (Tirmidhi 1977)",
  "\"Do not envy one another, do not hate one another, be servants of Allah as brothers.\" (Muslim 2563)",
  "\"No one forgives except that Allah increases him in honor.\" (Muslim 2588)",
  "\"Whoever believes should not harm his neighbor.\" (Bukhari 6016; Muslim 47)",
  "\"Jibril kept advising me about neighbors until I thought they'd inherit.\" (Bukhari 6014; Muslim 2624)",
  "\"Feed the hungry, spread salam, maintain ties, pray at night - enter Paradise in peace.\" (Tirmidhi 2485)",
  "\"Spread salam among yourselves\" because it increases love and iman. (Muslim 54)",
  "\"None of you enters Paradise until you believe, and you won't believe until you love one another.\" (Muslim 54)",
  "\"Whoever guides to good gets a reward like the doer.\" (Muslim 1893)",
  "\"Convey from me even one verse,\" share beneficial knowledge responsibly. (Bukhari 3461)",
  "\"Religion is sincere advice\" to Allah, His Book, His Messenger, leaders, and people. (Muslim 55)",
  "\"The deen is easy; no one overburdens himself except it overwhelms him.\" (Bukhari 39)",
  "\"Take from deeds what you can sustain,\" consistency beats burnout. (Bukhari 6465; Muslim 782)",
  "\"The beloved actions to Allah are consistent actions, even if little.\" (Bukhari 6464; Muslim 783)",
  "\"Whoever repents from sin is like one who never sinned.\" (Ibn Majah 4250)",
  "\"Allah is more joyful with a servant's repentance than a man finding lost provision.\" (Muslim 2747)",
  "\"All children of Adam sin, and the best sinners are those who repent.\" (Tirmidhi 2499)",
  "\"Be in this world as a stranger or traveler,\" keep akhirah in focus. (Bukhari 6416)",
  "\"Remember often the destroyer of pleasures: death,\" it softens the heart. (Tirmidhi 2307)",
  "\"Nothing is more honorable to Allah than dua.\" (Tirmidhi 3370)"
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
