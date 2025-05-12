"use client";

import { useEffect, useRef } from "react";
import Head from "next/head";
import ChallengeCard from "../components/ChallengeCard";

export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((e) => {
          console.warn("Autoplay failed:", e);
        });
      }
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => window.removeEventListener("click", handleUserInteraction);
  }, []);

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
      image: null,
      title: "Forbidden Feast",
      location: "Undisclosed Location",
      subtitle: "12,000 calories. No witnesses. Only Prestige.",
      date: "???",
      isFinalBoss: true,
      isLocked: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Wesley’s Wall of Fame</title>
      </Head>

      <main className="relative min-h-screen text-white font-sans overflow-hidden">
        {/* 🔥 Animated background layer */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-900 via-black to-yellow-700 animate-background-pulse"></div>

        {/* 🔥 Foreground content */}
        <div className="relative z-10 p-8">
          <h1 className="text-5xl font-extrabold mb-8 text-center">
            Wesley’s Wall of Fame
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((c, idx) => (
              <ChallengeCard key={idx} {...c} />
            ))}
          </div>
        </div>
      </main>

      {/* Audio element with ref */}
      <audio ref={audioRef} loop>
        <source src="/music/battle-theme.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
