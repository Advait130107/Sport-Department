import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function SportCard({ sport }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#2b211b] shadow-lg"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={sport.imageUrl}
          alt={sport.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4 rounded-full bg-blue-600/80 px-3 py-1 text-sm font-semibold backdrop-blur">
          {sport.players}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold">{sport.name}</h2>

        <p className="line-clamp-3 text-slate-400">{sport.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400">
            <Users size={18} />
            <span>{sport.players}</span>
          </div>

          <Link
            to={`/dashboard/sports/${sport.id}`}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#A47149] to-[#D4A373] px-4 py-2 font-semibold transition hover:scale-105"
          >
            Explore
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
