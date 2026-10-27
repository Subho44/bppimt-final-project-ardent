
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [open, setOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Employee Card", "/emp"],
    ["Statistics", "/s"],

    ...(user
      ? [
          ["Employees", "/view"],
          ["AI Chatbot", "/ai"]
        ]
      : []),

    ...(user?.role === "admin"
      ? [
          ["Add Employee", "/add"],
          ["Dashboard", "/dashboard"]
        ]
      : [])
  ];

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 text-white border-b border-cyan-400/20 backdrop-blur-xl">

      <nav className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center gap-5">

        {/* Logo */}
        <Link
          className="font-black text-lg md:text-2xl tracking-tight"
          to="/"
          onClick={() => setOpen(false)}
        >
          ✦ <span className="text-cyan-300">HR</span> POLICY
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-3 py-2 border border-white/20 rounded-lg"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap items-center gap-2">

          {links.map(([title, to]) => (
            <Link
              className="nav-link"
              key={to}
              to={to}
            >
              {title}
            </Link>
          ))}

          {user ? (
            <>
              <span className="px-2 text-sm text-cyan-300">
                {user.role.toUpperCase()}
              </span>

              <button
                className="nav-link"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              className="primary-btn !py-2 !px-5"
              to="/login"
            >
              Login
            </Link>
          )}

        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-2">

          {links.map(([title, to]) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {title}
            </Link>
          ))}

          {user ? (
            <button
              className="nav-link text-left"
              onClick={handleLogout}
            >
              Logout ({user.role})
            </button>
          ) : (
            <Link
              className="nav-link"
              to="/login"
              onClick={() => setOpen(false)}
            >
              Login / Register
            </Link>
          )}

        </div>
      )}

    </header>
  );
}
