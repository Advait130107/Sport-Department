import { Calendar, Trophy, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { sports } from "../lib/data";

function DashboardPage() {
  const events = JSON.parse(localStorage.getItem("events")) || [];

  const registrations = JSON.parse(localStorage.getItem("registrations")) || [];

  const upcomingEvents = events.filter((event) => {
    return new Date(event.date) >= new Date();
  });

  const myRegistrations = registrations.filter(
    (registration) => registration.studentId === student.id,
  );
  const recentActivities = myRegistrations.slice(-5).reverse();
  const student = JSON.parse(localStorage.getItem("student")) || {
    name: "Student",
  };
  const announcements = [
    {
      id: 1,
      title: "Football Tournament Registration",
      description:
        "Registration closes this Friday. Don't miss your chance to participate!",
      type: "Important",
    },
    {
      id: 2,
      title: "Swimming Trials",
      description:
        "Trials will be held next Monday at the college swimming pool.",
      type: "Sports",
    },
    {
      id: 3,
      title: "Sports Day 2026",
      description:
        "Annual Sports Day will begin next month. Stay tuned for the schedule.",
      type: "Event",
    },
  ];
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }
  console.log(student);
  return (
    <div className="min-h-screen bg-[#0a0603] px-6 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Banner */}
        <div className="overflow-hidden rounded-3xl border border-[#8B5E3C]/30 bg-gradient-to-r from-[#2B211B] to-[#3A2B22] p-10 shadow-xl">
          <p className="text-sm uppercase tracking-[4px] text-[#D4A373]">
            Student Dashboard
          </p>

          <h1 className="mt-3 text-5xl font-black text-[#F8F4EE]">
            {greeting},<span className="text-[#D4A373]"> {student.name}</span>{" "}
            👋
          </h1>
          <p className="mt-2 text-[#D4A373]">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="mt-5 max-w-2xl text-lg text-[#C9B7A6]">
            Manage sports registrations, explore upcoming events, and track your
            activities from one place.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/dashboard/events"
              className="rounded-xl bg-[#8B5E3C] px-6 py-3 font-semibold text-white transition hover:bg-[#A47149]"
            >
              Explore Events
            </Link>

            <Link
              to="/dashboard/sports"
              className="rounded-xl border border-[#8B5E3C] px-6 py-3 font-semibold text-[#D4A373] transition hover:bg-[#8B5E3C] hover:text-white"
            >
              Browse Sports
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl bg-[#2B211B] p-6 border border-[#8B5E3C]/20">
              <Calendar className="mb-4 text-[#D4A373]" size={32} />
              <h2 className="text-3xl font-bold text-white">
                {upcomingEvents.length}
              </h2>
              <p className="text-[#C9B7A6]">Upcoming Events</p>
            </div>

            <div className="rounded-2xl bg-[#2B211B] p-6 border border-[#8B5E3C]/20">
              <Trophy className="mb-4 text-[#D4A373]" size={32} />
              <h2 className="text-3xl font-bold text-white">{sports.length}</h2>
              <p className="text-[#C9B7A6]">Sports Available</p>
            </div>

            <div className="rounded-2xl bg-[#2B211B] p-6 border border-[#8B5E3C]/20">
              <User className="mb-4 text-[#D4A373]" size={32} />
              <h2 className="text-3xl font-bold text-white">
                {myRegistrations.length}
              </h2>
              <p className="text-[#C9B7A6]">My Registrations</p>
            </div>

            <div className="rounded-2xl bg-[#2B211B] p-6 border border-[#8B5E3C]/20">
              <ArrowRight className="mb-4 text-[#D4A373]" size={32} />
              <h2 className="text-3xl font-bold text-white">100%</h2>
              <p className="text-[#C9B7A6]">Profile Completion</p>
            </div>
          </div>
        </div>
      </div>
      {/* action button */}
      <div className="mt-10">
        <h2 className="mb-5 text-2xl font-bold text-white">Quick Actions</h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Link
            to="/dashboard/sports"
            className="rounded-2xl bg-[#2B211B] p-6 transition hover:-translate-y-1 hover:bg-[#3A2B22]"
          >
            <h3 className="text-xl font-semibold text-white">Browse Sports</h3>

            <p className="mt-2 text-[#C9B7A6]">View all available sports.</p>
          </Link>

          <Link
            to="/dashboard/events"
            className="rounded-2xl bg-[#2B211B] p-6 transition hover:-translate-y-1 hover:bg-[#3A2B22]"
          >
            <h3 className="text-xl font-semibold text-white">Events</h3>

            <p className="mt-2 text-[#C9B7A6]">Register for upcoming events.</p>
          </Link>

          <Link
            to="/dashboard/my-events"
            className="rounded-2xl bg-[#2B211B] p-6 transition hover:-translate-y-1 hover:bg-[#3A2B22]"
          >
            <h3 className="text-xl font-semibold text-white">My Events</h3>

            <p className="mt-2 text-[#C9B7A6]">View your registrations.</p>
          </Link>

          <Link
            to="/dashboard/profile"
            className="rounded-2xl bg-[#2B211B] p-6 transition hover:-translate-y-1 hover:bg-[#3A2B22]"
          >
            <h3 className="text-xl font-semibold text-white">Profile</h3>

            <p className="mt-2 text-[#C9B7A6]">Manage your account.</p>
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>

          <Link
            to="/dashboard/events"
            className="text-[#D4A373] hover:text-white transition"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.slice(0, 3).map((event, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#8B5E3C]/20 bg-[#2B211B] p-6 hover:border-[#D4A373] transition"
              >
                <h3 className="text-xl font-semibold text-white">
                  {event.title}
                </h3>

                <p className="mt-2 text-[#C9B7A6]">📅 {event.date}</p>

                <p className="mt-2 text-[#C9B7A6]">📍 {event.location}</p>

                <Link
                  to="/dashboard/events"
                  className="mt-6 inline-block rounded-lg bg-[#8B5E3C] px-4 py-2 text-white hover:bg-[#A47149]"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <div className="rounded-2xl bg-[#2B211B] p-8 text-center text-[#C9B7A6] col-span-full">
              No upcoming events.
            </div>
          )}
        </div>
        {/* recent activity */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
          </div>

          <div className="rounded-2xl border border-[#8B5E3C]/20 bg-[#2B211B] p-6">
            {recentActivities.length > 0 ? (
              <div className="space-y-5">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b border-[#3A2B22] pb-4 last:border-none"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B5E3C] text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        Registered for {activity.eventName || activity.title}
                      </h3>

                      <p className="text-sm text-[#C9B7A6]">
                        {activity.date || "Recently"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#C9B7A6]">No recent activity yet.</p>
            )}
          </div>
        </div>
      </div>
      {/* Popular Sports section */}
      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Popular Sports</h2>

          <Link
            to="/dashboard/sports"
            className="text-[#D4A373] transition hover:text-white"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sports.slice(0, 4).map((sport) => (
            <Link
              key={sport.id}
              to={`/dashboard/sports/${sport.id}`}
              className="group overflow-hidden rounded-2xl border border-[#8B5E3C]/20 bg-[#2B211B] transition duration-300 hover:-translate-y-2 hover:border-[#D4A373]"
            >
              <img
                src={sport.imageUrl}
                alt={sport.name}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {sport.name}
                </h3>

                <p className="mt-2 text-sm text-[#C9B7A6] line-clamp-2">
                  {sport.description}
                </p>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="rounded-full bg-[#124ccb] px-3 py-1 text-white">
                    {sport.players}
                  </span>

                  <span className="text-[#D4A373] group-hover:translate-x-1 transition">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* announcment */}
      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Announcements</h2>
        </div>

        <div className="space-y-5">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="rounded-2xl border border-[#8B5E3C]/20 bg-[#2B211B] p-6 transition hover:border-[#D4A373]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {announcement.title}
                </h3>

                <span className="rounded-full bg-[#8B5E3C]/20 px-3 py-1 text-sm text-[#D4A373]">
                  {announcement.type}
                </span>
              </div>

              <p className="mt-3 text-[#C9B7A6]">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
