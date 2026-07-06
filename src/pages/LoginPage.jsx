import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Trophy, Users } from "lucide-react";

import { LoginForm } from "../components/auth/LoginForm";
import { PlaceHolderImages } from "../lib/placeholder-images";

function LoginPage() {
  const loginBg = PlaceHolderImages.find((img) => img.id === "login-bg");

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      {loginBg && (
        <img
          src={loginBg.imageUrl}
          alt={loginBg.description}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#08101d]/85" />

      {/* Brown Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-brown-600/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-brown-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 py-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden max-w-xl lg:block"
        >
          <div className="mb-6  items-center gap-3">
            <Dumbbell className="h-10 w-10 text-blue-400" />

            <span className="text-3xl font-bold">Sports Department</span>
          </div>

          <h1 className="mb-6 text-7xl font-black leading-none">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              UNLEASH
            </span>
            <br />
            YOUR
            <br />
            POTENTIAL
          </h1>

          <p className="mb-10 text-lg leading-8 text-slate-300">
            Explore sports, register for tournaments, participate in campus
            events and become part of the university's sporting community.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6">
              <Trophy className="mb-3 text-blue-400" />

              <h2 className="text-3xl font-bold">15+</h2>

              <p className="text-slate-400">Sports</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <ArrowRight className="mb-3 text-cyan-400" />

              <h2 className="text-3xl font-bold">50+</h2>

              <p className="text-slate-400">Events</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <Users className="mb-3 text-green-400" />

              <h2 className="text-3xl font-bold">500+</h2>

              <p className="text-slate-400">Students</p>
            </div>
          </div>
        </motion.div>
        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-md"
        >
          <LoginForm />
        </motion.div>
      </div>
    </main>
  );
}

export default LoginPage;
