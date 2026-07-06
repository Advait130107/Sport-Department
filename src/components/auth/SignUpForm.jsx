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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <Label className="text-[#F8F4EE]">Full Name</Label>

                <FormInput
                  icon={User}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Advait Uttekar"
                  required
                />
              </div>

              <div>
                <Label className="text-[#F8F4EE]">Roll Number</Label>

                <FormInput
                  icon={Hash}
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="13366"
                  required
                />
              </div>

              <div>
                <Label className="text-[#F8F4EE]">Email</Label>

                <FormInput
                  icon={Mail}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="advait@example.com"
                  required
                />
              </div>

              <div>
                <Label className="text-[#F8F4EE]">Course</Label>

                <FormInput
                  icon={GraduationCap}
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="BSc CS"
                  required
                />
              </div>

              <div>
                <Label className="text-[#F8F4EE]">Department</Label>

                <FormInput
                  icon={Building2}
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Computer Science"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-[#F8F4EE]">
                  Academic Year
                </Label>

                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger className="h-14 rounded-2xl border border-[#A47149]/20 bg-[#3A2C24] text-[#F8F4EE]">
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <Label className="text-[#F8F4EE]">Password</Label>

                <FormInput
                  icon={Lock}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <Label className="text-[#F8F4EE]">Confirm Password</Label>

                <FormInput
                  icon={Lock}
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
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
