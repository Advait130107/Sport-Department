import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Trophy, Users } from "lucide-react";
import { SignUpForm } from "../components/auth/SignUpForm";
import { PlaceHolderImages } from "../lib/placeholder-images";

function SignUpPage() {
  const loginBg = PlaceHolderImages.find((img) => img.id === "login-bg");

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Use the same layout as LoginPage */}

      {/* Keep all the background code exactly the same */}

      {/* Left Side */}
      {/* Change only the heading */}

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto w-full max-w-4xl"
      >
        <SignUpForm />
      </motion.div>
    </main>
  );
}

export default SignUpPage;
