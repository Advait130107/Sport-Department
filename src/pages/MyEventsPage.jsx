import { CalendarDays, CheckCircle } from "lucide-react";
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
                className="rounded-3xl border border-[#A47149]/20 bg-[#2B211B] p-8 shadow-lg
                glass
                rounded-3xl
                p-6
                card-hover"
              >
                <h2 className="text-2xl font-bold text-[#F8F4EE]">
                  {item.eventName}
                </h2>
                <div className="flex flex-row gap-10">
                  <div className="mt-6 flex items-center gap-3 text-[#C9B7A6]">
                    <CalendarDays size={20} />
                    {item.registeredAt}
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-green-400">
                    <CheckCircle size={18} />
                    {item.status}
                  </div>
                </div>

                <div className="mt-10 space-y-4 rounded-xl bg-[#433229]/60 p-5">
                  <div className="flex items-center justify-between border-b border-[#5A4638] pb-3">
                    <strong className="text-[#D4A373]">Roll No:</strong>
                    <span className="text-white font-medium">
                      {item.rollNo}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#5A4638] pb-3">
                    <strong className="text-[#D4A373]">Name:</strong>
                    <span className="text-white font-medium">{item.name}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#5A4638] pb-3">
                    <strong className="text-[#D4A373]">Email:</strong>
                    <span className="text-white font-medium break-all text-right">
                      {item.email}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <strong className="text-[#D4A373]">Phone:</strong>
                    <span className="text-white font-medium">{item.phone}</span>
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
