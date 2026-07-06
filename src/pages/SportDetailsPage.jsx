import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Trophy, Users } from "lucide-react";
import { sports } from "../lib/data";

function SportDetailsPage() {
  const { sportId } = useParams();

  const sport = sports.find((s) => s.id === sportId);

  if (!sport) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        Sport not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0603] text-white">
      {/* Hero Image */}
      <div className="relative h-[450px] overflow-hidden">
        <img
          src={sport.imageUrl}
          alt={sport.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0603] via-black/50 to-transparent" />

        <div className="absolute bottom-10 left-10">
          <Link
            to="/dashboard/sports"
            className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 backdrop-blur"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <h1 className="mt-5 text-6xl font-black">{sport.name}</h1>

          <p className="mt-3 max-w-2xl text-lg text-slate-300">
            {sport.description}
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left */}

          <div className="lg:col-span-2">
            <div className="glass rounded-3xl p-8">
              <h2 className="mb-6 text-3xl font-bold">About {sport.name}</h2>

              <p className="leading-8 text-slate-300">
                {sport.longDescription}
              </p>
            </div>

            <div className="glass mt-8 rounded-3xl p-8">
              <h2 className="mb-6 text-3xl font-bold">Rules</h2>

              <ul className="space-y-3">
                {sport.rules.map((rule, index) => (
                  <li key={index} className="rounded-xl bg-white/5 p-4">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}

          <div className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <Users className="mb-3 text-brown-400" />

              <h3 className="text-xl font-bold">Players</h3>

              <p className="mt-2 text-slate-400">{sport.players}</p>
            </div>

            <div className="glass rounded-3xl p-6">
              <Trophy className="mb-3 text-yellow-400" />

              <h3 className="text-xl font-bold">College Team</h3>

              <p className="mt-2 text-slate-400">
                Represent MES Abasaheb Garware College in tournaments.
              </p>
            </div>

            <button className="pr-60 text-center rounded-2xl bg-gradient-to-r from-[#8B5E3C] to-[#C08A5B] px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-[#9B6A44] hover:to-[#D4A373]">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportDetailsPage;
