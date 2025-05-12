"use client";
import { useEffect, useState } from "react";

export default function ChallengeCard({
  image,
  title,
  location,
  date,
  subtitle,
  isFinalBoss = false,
  isLocked = false,
}) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-2xl transform transition duration-300
        ${
          isFinalBoss
            ? "scale-105 border-4 border-yellow-400 animate-finalboss-glow z-10"
            : "border-4 border-red-700 hover:scale-105"
        }`}
    >
      {isLocked ? (
        <div className="w-full h-72 bg-black flex items-center justify-center">
          <span className="text-white text-6xl font-black tracking-widest animate-pulse">
            ???
          </span>
        </div>
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover brightness-75 group-hover:brightness-90"
        />
      )}

      {/* Only show CRUSHED if not locked */}
      {!isLocked && (
        <div
          className={`absolute top-20 left-1/2 -translate-x-1/2 text-white text-5xl font-extrabold px-8 py-3 rotate-[-12deg] opacity-95 shadow-lg drop-shadow-md tracking-widest
            ${showAnimation ? "crushed-animate" : ""}
          `}
        >
          CRUSHED
        </div>
      )}

      <div
        className={`p-5 ${
          isLocked ? "bg-black" : "bg-black bg-opacity-80"
        } text-white text-center space-y-1`}
      >
        <h3
          className={`uppercase tracking-wider font-extrabold
            ${
              isFinalBoss
                ? "text-3xl text-yellow-300 drop-shadow-xl"
                : "text-2xl text-yellow-400 drop-shadow-md"
            }`}
        >
          {title}
        </h3>
        <p className="text-md text-red-400 font-semibold italic">{location}</p>
        {subtitle && (
          <p className="text-sm text-white italic opacity-80">{subtitle}</p>
        )}
        <p className="text-sm opacity-75">{date}</p>
      </div>
    </div>
  );
}
