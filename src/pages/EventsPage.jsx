import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Users, Podium } from "lucide-react";

import EventCard from "../components/events/EventCard";
import { events } from "../lib/data";
import RegisterModal from "../components/events/RegisterModal";
function EventsPage() {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#0a0603] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-7xl px-6"
        >
          <p className="mb-3 uppercase tracking-[5px] text-cyan-400 font-semibold">
            Sports Department
          </p>

          <h1 className="text-6xl font-black">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Events
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Register for exciting tournaments, competitions and college sports
            events.
          </p>
        </motion.div>
      </section>

      {/* Statistics */}

      <section className="mx-auto my-5 mb-12 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <div className="glass rounded-3xl p-6 card-hover">
          <Calendar className="mb-3 text-cyan-400" size={34} />

          <h2 className="text-4xl font-bold">{events.length}</h2>

          <p className="text-slate-400">Upcoming Events</p>
        </div>

        <div className="glass rounded-3xl p-6 card-hover">
          <Users className="mb-3 text-green-400" size={34} />

          <h2 className="text-4xl font-bold">500+</h2>

          <p className="text-slate-400">Participants</p>
        </div>

        <div className="glass rounded-3xl p-6 card-hover">
          <Podium className="mb-3 text-yellow-400" size={34} />

          <h2 className="text-4xl font-bold">25+</h2>

          <p className="text-slate-400">Winners Every Year</p>
        </div>
      </section>

      {/* Search */}

      <section className="mx-auto max-w-7xl px-6">
        <div className="glass flex items-center gap-4 rounded-2xl p-4">
          <Search className="text-black-400" />

          <input
            type="text"
            placeholder="Search Events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none placeholder:text-black-500"
          />
        </div>
      </section>

      {/* Grid */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegister={() => setSelectedEvent(event)}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-slate-400">
              No events found.
            </div>
          )}
        </div>
      </section>

      {/* Register Modal */}
      {selectedEvent && (
        <RegisterModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default EventsPage;
