import { useState } from "react";
import { Button } from "../components/ui/button";
import { getCurrentStudent } from "../auth/storage";
import {
  UserCircle2,
  Mail,
  Hash,
  GraduationCap,
  Building2,
} from "lucide-react";
import EditProfileModal from "../components/profile/EditProfileModal";
export default function ProfilePage() {
  const [student, setStudent] = useState(getCurrentStudent());
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1C1511] p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-black text-white">My Profile</h1>

        {/* Profile Header */}

        <div className="rounded-3xl border border-[#5B4537] bg-[#2B211B] p-8 shadow-xl">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <UserCircle2 size={110} className="text-[#D4A373]" />

            <div>
              <h2 className="text-3xl font-bold text-white">{student?.name}</h2>

              <p className="mt-2 text-[#C9B7A6]">Sports Member</p>

              <div className="mt-4 flex gap-3">
                <span className="rounded-full bg-[#8B5E3C]/20 px-4 py-1 text-sm text-[#D4A373]">
                  {student?.course}
                </span>

                <span className="rounded-full bg-[#8B5E3C]/20 px-4 py-1 text-sm text-[#D4A373]">
                  {student?.year}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Personal */}

          <div className="rounded-3xl border border-[#5B4537] bg-[#2B211B] p-6">
            <h3 className="mb-6 text-xl font-bold text-white">
              Personal Information
            </h3>

            <InfoRow
              icon={<UserCircle2 size={18} />}
              label="Full Name"
              value={student?.name}
            />

            <InfoRow
              icon={<Mail size={18} />}
              label="Email"
              value={student?.email}
            />

            <InfoRow
              icon={<Hash size={18} />}
              label="Roll Number"
              value={student?.rollNo}
            />
            <InfoRow
              icon={<Hash size={18} />}
              label="Phone Number"
              value={student?.phone}
            />

            <InfoRow
              icon={<Hash size={18} />}
              label="Blood Group"
              value={student?.bloodGroup}
            />

            <InfoRow
              icon={<Hash size={18} />}
              label="Emergency Contact"
              value={student?.emergencyContact}
            />

            <InfoRow
              icon={<Hash size={18} />}
              label="Address"
              value={student?.address}
            />
          </div>

          {/* Academic */}

          <div className="rounded-3xl border border-[#5B4537] bg-[#2B211B] p-6">
            <h3 className="mb-6 text-xl font-bold text-white">
              Academic Information
            </h3>

            <InfoRow
              icon={<GraduationCap size={18} />}
              label="Course"
              value={student?.course}
            />

            <InfoRow
              icon={<Building2 size={18} />}
              label="Department"
              value={student?.department}
            />

            <InfoRow
              icon={<GraduationCap size={18} />}
              label="Academic Year"
              value={student?.year}
            />
          </div>
        </div>
        <EditProfileModal
          open={open}
          onClose={() => setOpen(false)}
          student={student}
          onSave={setStudent}
        />
        <Button
          onClick={() => {
            console.log("Edit button clicked");
            setOpen(true);
          }}
          className="mt-5 rounded-xl bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] px-6 py-2 text-white"
        >
          Edit Profile
        </Button>
        {/* Statistics */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <StatCard title="Course" value={student?.course || "-"} />

          <StatCard title="Department" value={student?.department || "-"} />

          <StatCard title="Year" value={student?.year || "-"} />
          <StatCard title="Sports Joined" value="0" />

          <StatCard title="Profile Completion" value="100%" />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="mb-5 flex items-center justify-between rounded-xl bg-[#3A2C24] p-4">
      <div className="flex items-center gap-3 text-[#D4A373]">
        {icon}
        <span>{label}</span>
      </div>

      <span className="font-semibold text-white">{value || "-"}</span>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-3xl border border-[#5B4537] bg-[#2B211B] p-6 text-center">
      <h2 className="text-4xl font-black text-[#D4A373]">{value}</h2>

      <p className="mt-3 text-[#C9B7A6]">{title}</p>
    </div>
  );
}
