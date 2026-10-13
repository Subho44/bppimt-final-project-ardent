import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeLeft {
            0% {
              opacity: 0;
              transform: translateX(-40px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeRight {
            0% {
              opacity: 0;
              transform: translateX(40px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes floating {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          .fade-up {
            animation: fadeUp 1s ease-out forwards;
          }

          .fade-left {
            animation: fadeLeft 1s ease-out forwards;
          }

          .fade-right {
            animation: fadeRight 1s ease-out forwards;
          }

          .float-animation {
            animation: floating 4s ease-in-out infinite;
          }
        `}
      </style>

      <main className="bg-slate-950 text-white overflow-hidden">

        {/* ================= HERO ================= */}

        <section className="relative min-h-[70vh] flex items-center">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hr-about.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60"></div>

          <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">

            <div className="max-w-3xl fade-left">

              <div className="inline-flex items-center gap-2 bg-white/10 border border-cyan-400/30 backdrop-blur-md px-4 py-2 rounded-full text-cyan-300 text-sm font-semibold">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                About HR Policy
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
                People First.
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                  Policies That Empower.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mt-6 max-w-2xl">
                Our HR Policy platform helps organizations build a transparent,
                structured and employee-friendly working environment through
                smarter workforce management.
              </p>

              <div className="mt-8">

                <Link
                  to="/emp"
                  className="inline-block bg-cyan-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-cyan-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                >
                  Explore Employees →
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* ================= WHO WE ARE ================= */}

        <section className="py-24 bg-slate-900">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">

            <div className="fade-left">

              <p className="text-cyan-400 font-bold tracking-[3px] text-sm">
                WHO WE ARE
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                Building Better
                <span className="text-cyan-400"> Workplaces</span>
              </h2>

              <p className="text-slate-400 leading-8 mt-6">
                HR Policy is designed to simplify the way organizations manage
                employees, workplace rules, attendance, performance and
                professional development.
              </p>

              <p className="text-slate-400 leading-8 mt-4">
                Our approach focuses on transparency, consistency and employee
                experience. A strong HR system helps businesses improve
                communication, productivity and long-term organizational
                growth.
              </p>

              <p className="text-slate-400 leading-8 mt-4">
                From employee profiles to policy management, the platform brings
                important workforce operations together in one modern digital
                environment.
              </p>

            </div>


            <div className="relative fade-right">

              <div className="absolute -top-5 -left-5 w-28 h-28 bg-cyan-400/20 rounded-full blur-3xl"></div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border border-cyan-400/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl float-animation">

                <div className="bg-slate-950/70 rounded-2xl border border-white/10 p-6">

                  <p className="text-cyan-400 font-semibold text-sm">
                    HR POLICY MANAGEMENT
                  </p>

                  <h3 className="text-2xl font-bold mt-3">
                    One Platform. Better Workforce Management.
                  </h3>

                  <div className="mt-6 space-y-4">

                    <div className="flex gap-4 items-start">
                      <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-400/10">
                        ✓
                      </span>

                      <div>
                        <h4 className="font-semibold">Centralized Data</h4>
                        <p className="text-slate-400 text-sm mt-1">
                          Manage employee details from one location.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-400/10">
                        ✓
                      </span>

                      <div>
                        <h4 className="font-semibold">Clear Policies</h4>
                        <p className="text-slate-400 text-sm mt-1">
                          Maintain consistent workplace rules.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-400/10">
                        ✓
                      </span>

                      <div>
                        <h4 className="font-semibold">Better Insights</h4>
                        <p className="text-slate-400 text-sm mt-1">
                          Monitor workforce activity and performance.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= MISSION VISION ================= */}

        <section className="py-24 bg-slate-950">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-cyan-400 font-bold tracking-[4px] text-sm">
                OUR PURPOSE
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                Driven By
                <span className="text-cyan-400"> People & Progress</span>
              </h2>

              <p className="text-slate-400 mt-5">
                Our goal is to create a modern HR environment where employees
                and organizations can grow together.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-7 mt-14">

              <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]">

                <div className="w-14 h-14 bg-cyan-400/10 border border-cyan-400/20 rounded-2xl flex items-center justify-center text-2xl">
                  🎯
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Our Mission
                </h3>

                <p className="text-slate-400 mt-4 leading-8">
                  To create a simple, transparent and efficient HR management
                  experience that supports employees, HR teams and business
                  leaders in managing the workforce effectively.
                </p>

              </div>


              <div className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]">

                <div className="w-14 h-14 bg-cyan-400/10 border border-cyan-400/20 rounded-2xl flex items-center justify-center text-2xl">
                  👁️
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  Our Vision
                </h3>

                <p className="text-slate-400 mt-4 leading-8">
                  To build a future-ready workplace where technology,
                  communication, fair policies and employee growth work
                  together to create stronger organizations.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= VALUES ================= */}

        <section className="py-24 bg-slate-900">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-cyan-400 font-bold tracking-[4px] text-sm">
                OUR VALUES
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                What We
                <span className="text-cyan-400"> Believe In</span>
              </h2>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-7 text-center hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-500">

                <div className="text-4xl">
                  🤝
                </div>

                <h3 className="font-bold text-xl mt-5">
                  Transparency
                </h3>

                <p className="text-slate-400 text-sm leading-6 mt-3">
                  Clear communication and fair policies across the organization.
                </p>

              </div>


              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-7 text-center hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-500">

                <div className="text-4xl">
                  💡
                </div>

                <h3 className="font-bold text-xl mt-5">
                  Innovation
                </h3>

                <p className="text-slate-400 text-sm leading-6 mt-3">
                  Using modern technology to improve HR operations.
                </p>

              </div>


              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-7 text-center hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-500">

                <div className="text-4xl">
                  🛡️
                </div>

                <h3 className="font-bold text-xl mt-5">
                  Trust
                </h3>

                <p className="text-slate-400 text-sm leading-6 mt-3">
                  Protecting employee information and organizational integrity.
                </p>

              </div>


              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-7 text-center hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-500">

                <div className="text-4xl">
                  🚀
                </div>

                <h3 className="font-bold text-xl mt-5">
                  Growth
                </h3>

                <p className="text-slate-400 text-sm leading-6 mt-3">
                  Supporting continuous learning and professional development.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= NUMBERS ================= */}

        <section className="py-20 bg-slate-950">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition">
                <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400">
                  500+
                </h2>
                <p className="text-slate-400 mt-2">
                  Employees
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition">
                <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400">
                  50+
                </h2>
                <p className="text-slate-400 mt-2">
                  Policies
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition">
                <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400">
                  20+
                </h2>
                <p className="text-slate-400 mt-2">
                  Departments
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition">
                <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400">
                  98%
                </h2>
                <p className="text-slate-400 mt-2">
                  Satisfaction
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="py-20 bg-slate-900">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-10 lg:px-14 py-12 md:py-16">

              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>

              <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:items-center gap-8">

                <div className="max-w-2xl">

                  <p className="text-slate-900 font-bold tracking-wider">
                    YOUR WORKFORCE. YOUR FUTURE.
                  </p>

                  <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
                    Create a better workplace with modern HR management.
                  </h2>

                </div>

                <Link
                  to="/emp"
                  className="whitespace-nowrap bg-slate-950 text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >
                  View Employees →
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default About;