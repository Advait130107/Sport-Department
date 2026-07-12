import { useState } from "react";
import { X, User, Mail, Phone, Hash, Trophy } from "lucide-react";

function RegisterModal({ event, onClose }) {
  // Logged-in student
  const student = JSON.parse(localStorage.getItem("student"));

  const [phone, setPhone] = useState(student?.phone || "");

  const handleRegister = () => {
    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    const registrations =
      JSON.parse(localStorage.getItem("registrations")) || [];

    const alreadyRegistered = registrations.some(
      (item) => item.rollNo === student.rollNo && item.eventId === event.id,
    );

    if (alreadyRegistered) {
      alert("You have already registered for this event.");
      return;
    }

    registrations.push({
      id: crypto.randomUUID(),
      eventId: event.id,
      eventName: event.name,

      studentId: student.id,
      rollNo: student.rollNo,
      name: student.name,
      email: student.email,
      phone,

      status: "Registered",
      registeredAt: new Date().toLocaleString(),
    });

    localStorage.setItem("registrations", JSON.stringify(registrations));

    // Update phone in current student if changed
    if (phone !== student.phone) {
      const students = JSON.parse(localStorage.getItem("students")) || [];

      const updatedStudent = {
        ...student,
        phone,
      };

      const updatedStudents = students.map((s) =>
        s.id === student.id ? updatedStudent : s,
      );

      localStorage.setItem("students", JSON.stringify(updatedStudents));

      localStorage.setItem("student", JSON.stringify(updatedStudent));
    }

    alert("Registration Successful!");

    onClose();
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl border border-[#5B4537] bg-[#2B211B] p-8 shadow-2xl">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">Event Registration</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-[#3A2C24]"
          >
            <X className="text-white" />
          </button>
        </div>

        <div className="space-y-5">
          {/* Event */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-[#C9B7A6]">
              <Trophy size={16} />
              Event
            </label>

            <input
              value={event.name}
              disabled
              className="w-full rounded-xl bg-[#3A2C24] p-3 text-white"
            />
          </div>

          {/* Student Name */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-[#C9B7A6]">
              <User size={16} />
              Student Name
            </label>

            <input
              value={student?.name || ""}
              disabled
              className="w-full rounded-xl bg-[#3A2C24] p-3 text-white"
            />
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-[#C9B7A6]">
              <Mail size={16} />
              Email
            </label>

            <input
              value={student?.email || ""}
              disabled
              className="w-full rounded-xl bg-[#3A2C24] p-3 text-white"
            />
          </div>

          {/* Roll Number */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-[#C9B7A6]">
              <Hash size={16} />
              Roll Number
            </label>

            <input
              value={student?.rollNo || ""}
              disabled
              className="w-full rounded-xl bg-[#3A2C24] p-3 text-white"
            />
          </div>

          {/* Phone */}

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-[#C9B7A6]">
              <Phone size={16} />
              Phone Number
            </label>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone Number"
              className="w-full rounded-xl bg-[#3A2C24] p-3 text-white outline-none ring-1 ring-transparent transition focus:ring-[#D4A373]"
            />
          </div>

          <button
            onClick={handleRegister}
            className="w-full rounded-xl bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] py-3 font-bold text-white transition hover:scale-[1.02]"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
