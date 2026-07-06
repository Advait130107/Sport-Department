import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function StatCard({
  title,
  value,
  icon,
  description,
  isProfile = false,
}) {
  const [rollNo, setRollNo] = useState("");

  useEffect(() => {
    if (isProfile) {
      setRollNo(localStorage.getItem("studentRollNo") || "N/A");
    }
  }, [isProfile]);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-[#A47149]/20 bg-[#2B211B]/80 p-7 shadow-xl backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#A47149]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D4A373]/20" />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-[#C9B7A6]">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#F8F4EE]">
            {isProfile ? rollNo : value}
          </h2>

          <p className="mt-3 text-sm text-[#C9B7A6]">{description}</p>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5E3C] to-[#D4A373] shadow-lg shadow-[#A47149]/40">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
