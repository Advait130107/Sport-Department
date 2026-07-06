import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, AlertCircle, ArrowRight } from "lucide-react";
import { students } from "../../lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Alert, AlertDescription } from "../ui/alert";
import { loginStudent } from "../../auth/auth";
import { Link } from "react-router-dom";
export function LoginForm() {
  const navigate = useNavigate();

  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const result = loginStudent(rollNo, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/dashboard");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      <Card className="rounded-3xl border border-[#A47149]/20 bg-[#2B211B]/80 shadow-2xl backdrop-blur-2xl">
        <CardHeader className="pb-2 text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#D4A373] shadow-lg shadow-[#A47149]/40">
            <Trophy className="h-10 w-10 text-white" />
          </div>

          <CardTitle className="text-4xl font-black">
            <span className="gradient-text">SPORTS</span>

            <br />

            <span className="text-[#F8F4EE]">DEPARTMENT</span>
          </CardTitle>

          <CardDescription className="mt-4 text-base text-[#C9B7A6]">
            Welcome Back 👋
            <br />
            Sign in to continue your sports journey.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="rollNo" className="text-[#F8F4EE]">
                Roll Number
              </Label>

              <Input
                id="rollNo"
                placeholder="e.g. TYBCS001"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE] placeholder:text-[#C9B7A6] focus:border-[#D4A373]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#F8F4EE]">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE] placeholder:text-[#C9B7A6] focus:border-[#D4A373]"
                required
              />
            </div>

            {error && (
              <Alert className="border-red-500/20 bg-red-500/10 text-red-300">
                <AlertCircle className="h-4 w-4" />

                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="h-12 w-full rounded-xl bg-gradient-to-r from-[#8B5E3C] to-[#C08A5B] text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#A47149]/40"
            >
              Sign In
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="mt-6 text-center">
              <p className="text-[#C9B7A6]">Don't have an account?</p>

              <Link
                to="/signup"
                className="font-semibold text-[#D4A373] transition hover:text-white"
              >
                Create Account
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </motion.div>
  );
}
