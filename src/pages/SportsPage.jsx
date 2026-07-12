import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Trophy, Users, SportShoe } from "lucide-react";

import SportCard from "../components/sports/SportCard";
import { sports } from "../lib/data";

function SportsPage() {
  const [search, setSearch] = useState("");

  const filteredSports = sports.filter((sport) =>
    sport.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#0a0603] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-7xl px-6"
        >
          <p className="mb-3 text-brown-400 font-semibold uppercase tracking-[5px]">
            Sports Department
          </p>

          <h1 className="text-6xl font-black">
            Explore{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Every Sport
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Find your favorite sport, learn the rules, and represent your
            college.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mx-auto my-5 mb-12 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <div className="glass rounded-3xl p-6 card-hover">
          <SportShoe className="mb-3 text-yellow-400" size={34} />
          <h2 className="text-4xl font-bold ">{sports.length}</h2>
          <p className="mt-2 text-blue-400">Sports Available</p>
        </div>

        <div className="glass rounded-3xl p-6 card-hover">
          <Users className="mb-3 text-green-400" size={34} />
          <h2 className="text-4xl font-bold ">500+</h2>
          <p className="mt-2 text-cyan-400">Active Students</p>
        </div>

        <div className="glass rounded-3xl p-6 card-hover">
          <Calendar className="mb-3 text-cyan-400" size={34} />
          <h2 className="text-4xl font-bold  ">50+</h2>
          <p className="mt-2 text-green-400">Annual Events</p>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="glass flex items-center gap-3 rounded-2xl p-4">
          <Search className="text-black-400" />

          <input
            type="text"
            placeholder="Search Sports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-white outline-none placeholder:text-black-500"
          />
        </div>
      </section>

      {/* Sports Grid */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredSports.length > 0 ? (
            filteredSports.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))
          ) : (
            <div className="col-span-full text-center text-slate-400">
              No sports found.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SportsPage;
