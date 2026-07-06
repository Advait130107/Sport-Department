import { Trophy, Calendar, User, Mail, Phone } from "lucide-react";

function ProfilePage() {
  const rollNo = localStorage.getItem("studentRollNo") || "N/A";

  return (
    <div className="min-h-screen bg-[#1C1511] px-6 py-10 text-[#F8F4EE]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-[#D4A373] uppercase tracking-[4px] text-sm">
            Student
          </p>

          <h1 className="mt-3 text-5xl font-black">My Profile</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left */}

          <div className="rounded-3xl bg-[#2B211B] p-8">
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5E3C] to-[#D4A373]">
              <User size={70} />
            </div>

            <h2 className="mt-6 text-center text-3xl font-bold">Student</h2>

            <p className="text-center text-[#C9B7A6]">Roll No: {rollNo}</p>
          </div>

          {/* Right */}

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-[#2B211B] p-8">
              <h2 className="mb-6 text-3xl font-bold">Personal Information</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-[#C9B7A6]">Name</p>
                  <h3 className="mt-2 text-xl font-semibold">Student Name</h3>
                </div>

                <div>
                  <p className="text-[#C9B7A6]">Department</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    BSc Computer Science
                  </h3>
                </div>

                <div>
                  <p className="text-[#C9B7A6]">Email</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    student@email.com
                  </h3>
                </div>

                <div>
                  <p className="text-[#C9B7A6]">Phone</p>
                  <h3 className="mt-2 text-xl font-semibold">
                    +91 XXXXX XXXXX
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-[#2B211B] p-6">
                <Trophy className="text-[#D4A373]" />

                <h2 className="mt-4 text-4xl font-black">3</h2>

                <p className="text-[#C9B7A6]">Sports Joined</p>
              </div>

              <div className="rounded-3xl bg-[#2B211B] p-6">
                <Calendar className="text-[#D4A373]" />

                <h2 className="mt-4 text-4xl font-black">5</h2>

                <p className="text-[#C9B7A6]">Events</p>
              </div>

              <div className="rounded-3xl bg-[#2B211B] p-6">
                <Trophy className="text-[#D4A373]" />

                <h2 className="mt-4 text-4xl font-black">2</h2>

                <p className="text-[#C9B7A6]">Achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
