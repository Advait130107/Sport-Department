import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Trophy,
  AlertCircle,
  ArrowRight,
  User,
  Mail,
  GraduationCap,
  Building2,
  Lock,
  Hash,
} from "lucide-react";
import { registerStudent } from "../../auth/auth";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Alert, AlertDescription } from "../ui/alert";
function FormInput({
  label,
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-[#F8F4EE]">{label}</Label>

      <div className="relative">
        <Icon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C9B7A6]" />

        <Input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] pl-12 text-[#F8F4EE] placeholder:text-[#A89282] focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20"
        />
      </div>
    </div>
  );
}
function getPasswordStrength(password) {
  if (password.length === 0) {
    return {
      text: "",
      color: "",
      width: "0%",
    };
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1)
    return {
      text: "Weak",
      color: "bg-red-500",
      width: "25%",
    };

  if (score <= 3)
    return {
      text: "Medium",
      color: "bg-yellow-500",
      width: "60%",
    };

  return {
    text: "Strong",
    color: "bg-green-500",
    width: "100%",
  };
}
export function SignUpForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(
    getPasswordStrength(""),
  );

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
      year,
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
      <Card
        className="
rounded-[32px]
border
border-[#D4A373]/15
bg-[#2B211B]/75
shadow-[0_30px_80px_rgba(0,0,0,0.45)]
backdrop-blur-xl
"
      >
        <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-[#D4A373]/30 bg-[#8B5E3C]/20 px-4 py-1 text-sm font-medium text-[#D4A373]">
          🎉 New Student Registration
        </div>
        <CardHeader className="pb-2 text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#D4A373] shadow-lg shadow-[#A47149]/40">
            <Trophy className="h-10 w-10 text-white" />
          </div>

          <CardTitle className="text-center">
            <h2 className="text-4xl font-black text-white">Create Account</h2>

            <p className="mt-3 text-[#C9B7A6]">
              Join the Sports Department and participate in college tournaments.
            </p>
          </CardTitle>

          <CardDescription className="mt-4 text-base text-[#C9B7A6]">
            Create your account 🚀
            <br />
            Join the Sports Department community.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSignUp}>
          <CardContent className="space-y-8 p-8 md:p-10">
            {/* Personal Information */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FormInput
                  label="Full Name"
                  icon={User}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Advait Uttekar"
                  required
                />

                <FormInput
                  label="Roll Number"
                  icon={Hash}
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="13366"
                  required
                />

                <FormInput
                  label="College Email"
                  icon={Mail}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="advait@example.com"
                  required
                />

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-[#F8F4EE]">
                    Course
                  </Label>

                  <Select value={course} onValueChange={setCourse}>
                    <SelectTrigger className="h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]">
                      <SelectValue placeholder="Select Course" />
                    </SelectTrigger>

                    <SelectContent className="border-[#A47149]/20 bg-[#2B211B] text-[#F8F4EE]">
                      <SelectItem value="BSc CS">
                        BSc Computer Science
                      </SelectItem>
                      <SelectItem value="BCA">BCA</SelectItem>
                      <SelectItem value="BCom">BCom</SelectItem>
                      <SelectItem value="BA">BA</SelectItem>
                      <SelectItem value="MSc CS">
                        MSc Computer Science
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Academic Information
              </h3>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-[#F8F4EE]">
                    Department
                  </Label>

                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger className="h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>

                    <SelectContent className="border-[#A47149]/20 bg-[#2B211B] text-[#F8F4EE]">
                      <SelectItem value="Computer Science">
                        Computer Science
                      </SelectItem>

                      <SelectItem value="Information Technology">
                        Information Technology
                      </SelectItem>

                      <SelectItem value="Commerce">Commerce</SelectItem>

                      <SelectItem value="Arts">Arts</SelectItem>

                      <SelectItem value="Science">Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-[#F8F4EE]">
                    Academic Year
                  </Label>

                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="h-12 rounded-xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]">
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>

                    <SelectContent className="border-[#A47149]/20 bg-[#2B211B] text-[#F8F4EE]">
                      <SelectItem value="FY">First Year (FY)</SelectItem>
                      <SelectItem value="SY">Second Year (SY)</SelectItem>
                      <SelectItem value="TY">Third Year (TY)</SelectItem>
                      <SelectItem value="Final">Final Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Security */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Security
              </h3>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FormInput
                  label="Password"
                  icon={Lock}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <div className="space-y-2 md:col-span-2">
                  {password && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#C9B7A6]">
                          Password Strength
                        </span>

                        <span
                          className={`font-semibold ${
                            passwordStrength.text === "Weak"
                              ? "text-red-400"
                              : passwordStrength.text === "Medium"
                                ? "text-yellow-400"
                                : "text-green-400"
                          }`}
                        >
                          {passwordStrength.text}
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-[#3A2C24]">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${passwordStrength.color}`}
                          style={{ width: passwordStrength.width }}
                        />
                      </div>
                    </>
                  )}
                </div>

                <FormInput
                  label="Confirm Password"
                  icon={Lock}
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                {confirmPassword && (
                  <p
                    className={`text-sm font-medium ${
                      password === confirmPassword
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {password === confirmPassword
                      ? "✓ Passwords match"
                      : "✗ Passwords do not match"}
                  </p>
                )}
              </div>
            </div>

            {error && (
              <Alert className="border-red-500/20 bg-red-500/10 text-red-300">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="border-t border-[#A47149]/20 pt-6">
              <Button
                type="submit"
                className="group h-14 w-full rounded-2xl bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Create Your Account
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <div className="mt-6 text-center text-sm text-[#C9B7A6]">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-semibold text-[#D4A373] transition-colors hover:text-white"
                >
                  Sign In →
                </Link>
              </div>
            </div>
          </CardContent>
        </form>
      </Card>
    </motion.div>
  );
}
