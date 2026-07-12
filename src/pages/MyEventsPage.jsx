import { Calendar, CheckCircle } from "lucide-react";
import { getCurrentStudent } from "../auth/storage";

function MyEventsPage() {
  const student = getCurrentStudent();

  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  const myEvents = registrations.filter(
    (item) => item.studentId === student?.id,
  );

  return (
    <div className="min-h-screen bg-[#1C1511] px-8 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-5xl font-black text-[#F8F4EE]">
          My Registered Events
        </h1>

        <p className="mb-10 text-[#C9B7A6]">
          Track all the events you've registered for.
        </p>

        {myEvents.length === 0 ? (
          <div className="rounded-3xl border border-[#A47149]/20 bg-[#2B211B] p-12 text-center">
            <h2 className="text-2xl font-bold">No registrations yet</h2>

            <p className="mt-3 text-[#C9B7A6]">
              Register for an event and it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {myEvents.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-[#A47149]/20 bg-[#2B211B] p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-[#F8F4EE]">
                  {item.eventName}
                </h2>

                <div className="mt-6 flex items-center gap-3 text-[#C9B7A6]">
                  <Calendar size={18} />
                  {item.registeredAt}
                </div>

                <div className="mt-4 flex items-center gap-3 text-green-400">
                  <CheckCircle size={18} />
                  {item.status}
                </div>

                <div className="mt-8 rounded-xl bg-[#3A2C24] p-4 space-y-2">
                  <div className="mt-8 space-y-2 rounded-xl bg-[#3A2C24] p-4">
                    <p>
                      <strong>Roll No:</strong> {item.rollNo}
                    </p>

                    <p>
                      <strong>Name:</strong> {item.name}
                    </p>

                    <p>
                      <strong>Email:</strong> {item.email}
                    </p>

                    <p>
                      <strong>Phone:</strong> {item.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyEventsPage;
