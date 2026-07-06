import { Link } from "react-router-dom";
import { Dumbbell, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-24 border-t border-[#A47149]/20 bg-[#241B16]">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5E3C] to-[#D4A373] shadow-lg">
                <Dumbbell className="h-7 w-7 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#F8F4EE]">
                  Sports Department
                </h2>

                <p className="text-sm text-[#C9B7A6]">
                  MES Abasaheb Garware College
                </p>
              </div>
            </div>

            <p className="leading-7 text-[#C9B7A6]">
              Inspiring students to train harder, compete smarter, and achieve
              excellence in every sport.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-[#F8F4EE]">
              Quick Links
            </h3>

            <div className="space-y-4">
              <Link
                to="/dashboard"
                className="block text-[#C9B7A6] transition hover:translate-x-2 hover:text-[#D4A373]"
              >
                Home
              </Link>

              <Link
                to="/dashboard/sports"
                className="block text-[#C9B7A6] transition hover:translate-x-2 hover:text-[#D4A373]"
              >
                Sports
              </Link>

              <Link
                to="/dashboard/events"
                className="block text-[#C9B7A6] transition hover:translate-x-2 hover:text-[#D4A373]"
              >
                Events
              </Link>

              <Link
                to="/dashboard/profile"
                className="block text-[#C9B7A6] transition hover:translate-x-2 hover:text-[#D4A373]"
              >
                Profile
              </Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-[#F8F4EE]">Contact</h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-[#C9B7A6]">
                <Mail className="h-5 w-5 text-[#D4A373]" />
                sports@mesgarware.edu.in
              </div>

              <div className="flex items-center gap-3 text-[#C9B7A6]">
                <Phone className="h-5 w-5 text-[#D4A373]" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3 text-[#C9B7A6]">
                <MapPin className="h-5 w-5 text-[#D4A373]" />
                Pune, Maharashtra
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-[#F8F4EE]">Follow Us</h3>
            <div className="mb-8 flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3A2C24] text-xl">
                📸
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3A2C24] text-xl">
                💻
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3A2C24] text-xl">
                💼
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5E3C] to-[#D4A373] px-5 py-3 font-semibold text-white transition hover:scale-105"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </button>
          </div>
        </div>

        <div className="my-10 border-t border-[#A47149]/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#9F8D7C] md:flex-row">
          <p>
            © {new Date().getFullYear()} Sports Department · MES Abasaheb
            Garware College. All rights reserved.
          </p>

          <p>Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
