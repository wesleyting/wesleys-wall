export default function ChallengeCard({ image, title, location, date }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-red-700 group transform hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover brightness-75 group-hover:brightness-90"
      />

      <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-red-600 text-white text-5xl font-extrabold px-8 py-3 rotate-[-12deg] opacity-95 shadow-lg drop-shadow-md tracking-widest">
        CRUSHED
      </div>

      <div className="p-5 bg-black bg-opacity-80 text-white text-center space-y-2">
        <h3 className="text-2xl font-bold uppercase tracking-wide">{title}</h3>
        <p className="text-md text-red-400 font-semibold">{location}</p>
        <p className="text-sm opacity-75">{date}</p>
      </div>
    </div>
  );
}
