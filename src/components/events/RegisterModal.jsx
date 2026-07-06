import { useState } from "react";
import { X } from "lucide-react";

function RegisterModal({ event, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const rollNo = localStorage.getItem("studentRollNo") || "N/A";

  const handleRegister = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const registrations =
      JSON.parse(localStorage.getItem("registrations")) || [];

    const alreadyRegistered = registrations.some(
      (item) => item.rollNo === rollNo && item.eventId === event.id,
    );

    if (alreadyRegistered) {
      alert("You have already registered for this event.");
      return;
    }

    registrations.push({
      id: Date.now(),
      eventId: event.id,
      eventName: event.name,
      rollNo,
      name,
      phone,
      status: "Registered",
      registeredAt: new Date().toLocaleDateString(),
    });

    localStorage.setItem("registrations", JSON.stringify(registrations));

    alert("Registration Successful!");

    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-[#2B211B] p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#F8F4EE]">Register Event</h2>

          <button onClick={onClose}>
            <X className="text-white" />
          </button>
        </div>

        <div className="space-y-5">
          <input
            value={event.name}
            disabled
            className="w-full rounded-xl bg-[#3A2C24] p-3 text-white"
          />

          <input
            value={rollNo}
            disabled
            className="w-full rounded-xl bg-[#3A2C24] p-3 text-white"
          />

          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-[#3A2C24] p-3 text-white"
          />

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl bg-[#3A2C24] p-3 text-white"
          />

          <button
            onClick={handleRegister}
            className="w-full rounded-xl bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] py-3 font-bold text-white"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
