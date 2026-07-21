import { Calendar, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EventCard({ event, onRegister }) {
  const rollNo = localStorage.getItem("studentRollNo");

  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  const alreadyRegistered = registrations.some(
    (item) => item.rollNo === rollNo && item.eventId === event.id,
  );

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-[#A47149]/20 bg-[#2B211B] shadow-lg transition hover:shadow-[#A47149]/20"
    >
      <div className="overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.name}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-5 p-6">
        <h2 className="text-2xl font-bold text-[#F8F4EE]">{event.name}</h2>

        <p className="text-[#C9B7A6]">{event.description}</p>

        <div className="flex items-center gap-2 text-[#C9B7A6]">
          <Calendar size={18} />
          {event.date || "Coming Soon"}
        </div>

        <div className="flex items-center gap-2 text-[#C9B7A6]">
          <MapPin size={18} />
          {event.location || "College Campus"}
        </div>

        <button
          onClick={onRegister}
          disabled={alreadyRegistered}
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all duration-300 ${
            alreadyRegistered
              ? "cursor-not-allowed bg-green-700 text-white"
              : "bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] text-white hover:scale-105 hover:shadow-lg hover:shadow-[#A47149]/40"
          }`}
        >
          {alreadyRegistered ? (
            <>
              <CheckCircle size={18} />
              Already Registered
            </>
          ) : (
            <>
              Register
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
