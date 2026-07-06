import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, AlertCircle, ArrowRight } from "lucide-react";

import { registerStudent } from "../../auth/auth";

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

export function SignUpForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = registerStudent({
      name,
      rollNo,
      email,
      course,
      department,
      password,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    alert("Account created successfully!");

    navigate("/");
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
            Create your account 🚀
            <br />
            Join the Sports Department community.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSignUp}>
          <CardContent className="space-y-5">
            <div>
              <Label className="text-[#F8F4EE]">Full Name</Label>

              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Advait Uttekar"
                className="mt-2 h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]"
                required
              />
            </div>

            <div>
              <Label className="text-[#F8F4EE]">Roll Number</Label>

              <Input
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="TYBCS001"
                className="mt-2 h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]"
                required
              />
            </div>

            <div>
              <Label className="text-[#F8F4EE]">Email</Label>

              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="advait@example.com"
                className="mt-2 h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]"
                required
              />
            </div>

            <div>
              <Label className="text-[#F8F4EE]">Course</Label>

              <Input
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="TY BSc CS"
                className="mt-2 h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]"
                required
              />
            </div>

            <div>
              <Label className="text-[#F8F4EE]">Department</Label>

              <Input
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Computer Science"
                className="mt-2 h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]"
                required
              />
            </div>

            <div>
              <Label className="text-[#F8F4EE]">Password</Label>

              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-2 h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]"
                required
              />
            </div>

            <div>
              <Label className="text-[#F8F4EE]">Confirm Password</Label>

              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-2 h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]"
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
              className="h-12 w-full rounded-xl bg-gradient-to-r from-[#8B5E3C] to-[#C08A5B] text-base font-semibold text-white transition hover:scale-[1.02]"
            >
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="text-center">
              <p className="text-[#C9B7A6]">Already have an account?</p>

              <Link
                to="/"
                className="font-semibold text-[#D4A373] transition hover:text-white"
              >
                Sign In
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </motion.div>
  );
}
