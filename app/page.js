import Head from "next/head";
import ChallengeCard from "../components/ChallengeCard";

export default function Home() {
  const challenges = [
    {
      image: "/images/sandwich.jpg",
      title: "The Monstrous 1KG Sandwich",
      location: "Wesley’s Casa (Home Turf)",
      date: "April 2025",
    },
    {
      image: "/images/bao.jpg",
      title: "20 Bao. 2 Minutes.",
      location: "Joe’s House (The Underground Arena)",
      subtitle: "The walls are still steaming.",
      date: "May 2025",
    },
    {
      image: null, // or just leave this field out
      title: "Forbidden Feast",
      location: "Undisclosed Location",
      subtitle: "12,000 calories. No witnesses. Only Prestige.",
      date: "???",
      isFinalBoss: true,
      isLocked: true, // use this to change its look
    },
  ];

  return (
    <>
      <Head>
        <title>Wesley’s Wall of Fame</title>
      </Head>
      <main className="min-h-screen bg-zinc-900 p-8 text-white font-sans">
        <h1 className="text-5xl font-extrabold mb-8 text-center">
          Wesley’s Wall of Fame
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challenges.map((c, idx) => (
            <ChallengeCard key={idx} {...c} />
          ))}
        </div>
      </main>
    </>
  );
}
