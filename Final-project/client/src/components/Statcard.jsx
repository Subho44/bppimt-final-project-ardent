import React from "react";
import { Link } from "react-router-dom";

const Statcard = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "528",
      icon: "👥",
      change: "+12 this month",
    },
    {
      title: "Departments",
      value: "18",
      icon: "🏢",
      change: "Active teams",
    },
    {
      title: "Present Today",
      value: "486",
      icon: "✅",
      change: "92% attendance",
    },
    {
      title: "On Leave",
      value: "42",
      icon: "🗓️",
      change: "8% workforce",
    },
  ];

  const departments = [
    { name: "Engineering", value: 88 },
    { name: "Human Resources", value: 68 },
    { name: "Finance", value: 72 },
    { name: "Marketing", value: 80 },
    { name: "Operations", value: 76 },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(35px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .fade-up {
            animation: fadeUp 0.9s ease-out forwards;
          }

          .float-card {
            animation: floatCard 4s ease-in-out infinite;
          }
        `}
      </style>

      <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

        {/* HERO */}
        <section className="relative py-20 md:py-24">

          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

            <div className="fade-up">

              <div className="inline-flex items-center gap-2 bg-white/5 border border-cyan-400/20 px-4 py-2 rounded-full text-cyan-300 text-sm font-semibold">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                HR Dashboard Overview
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">
                Workforce
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                  {" "}Statistics
                </span>
              </h1>

              <p className="text-slate-400 mt-5 max-w-2xl text-base sm:text-lg leading-8">
                Monitor employee strength, attendance, departments and
                organizational performance from one modern HR dashboard.
              </p>

            </div>

          </div>

        </section>


        {/* MAIN STATS */}
        <section className="pb-14">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-3xl
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-cyan-400/50
                    hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
                  "
                >
                  <div className="flex justify-between items-start">

                    <div>
                      <p className="text-slate-400 text-sm">
                        {item.title}
                      </p>

                      <h2 className="text-4xl font-extrabold mt-3">
                        {item.value}
                      </h2>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                      {item.icon}
                    </div>

                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <span className="text-cyan-400 text-sm font-medium">
                      {item.change}
                    </span>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* PERFORMANCE SECTION */}
        <section className="py-16 bg-slate-900">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Department Performance */}
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8">

                <div className="mb-8">

                  <p className="text-cyan-400 font-bold text-sm tracking-[3px]">
                    DEPARTMENT OVERVIEW
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                    Department Performance
                  </h2>

                </div>

                <div className="space-y-7">

                  {departments.map((dept, index) => (
                    <div key={index}>

                      <div className="flex justify-between mb-2">

                        <span className="font-medium">
                          {dept.name}
                        </span>

                        <span className="text-cyan-400 font-semibold">
                          {dept.value}%
                        </span>

                      </div>

                      <div className="w-full bg-slate-800 rounded-full h-2.5">

                        <div
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full transition-all duration-700"
                          style={{ width: `${dept.value}%` }}
                        ></div>

                      </div>

                    </div>
                  ))}

                </div>

              </div>


              {/* Attendance Summary */}
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8">

                <p className="text-cyan-400 font-bold text-sm tracking-[3px]">
                  ATTENDANCE
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  Today's Attendance
                </h2>

                <div className="flex justify-center py-10">

                  <div className="relative w-48 h-48">

                    <div className="absolute inset-0 rounded-full border-[16px] border-slate-800"></div>

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border-[16px]
                        border-cyan-400
                        border-r-transparent
                        rotate-45
                        shadow-[0_0_35px_rgba(34,211,238,0.25)]
                      "
                    ></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">

                      <h3 className="text-4xl font-extrabold text-cyan-400">
                        92%
                      </h3>

                      <p className="text-slate-400 text-sm mt-1">
                        Attendance
                      </p>

                    </div>

                  </div>

                </div>

                <div className="grid grid-cols-3 gap-3">

                  <div className="bg-slate-900 rounded-2xl p-4 text-center">
                    <p className="text-green-400 text-xl font-bold">
                      486
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Present
                    </p>
                  </div>

                  <div className="bg-slate-900 rounded-2xl p-4 text-center">
                    <p className="text-yellow-400 text-xl font-bold">
                      42
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Leave
                    </p>
                  </div>

                  <div className="bg-slate-900 rounded-2xl p-4 text-center">
                    <p className="text-red-400 text-xl font-bold">
                      10
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      Absent
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* MONTHLY INSIGHTS */}
        <section className="py-20 bg-slate-950">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-cyan-400 font-bold tracking-[4px] text-sm">
                WORKFORCE INSIGHTS
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                Monthly HR
                <span className="text-cyan-400">
                  {" "}Performance
                </span>
              </h2>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

              <div className="bg-slate-900 border border-slate-800 p-7 rounded-3xl text-center hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-500">

                <div className="text-4xl">
                  📈
                </div>

                <h3 className="text-3xl font-bold text-cyan-400 mt-4">
                  94%
                </h3>

                <p className="text-slate-400 mt-2">
                  Productivity
                </p>

              </div>


              <div className="bg-slate-900 border border-slate-800 p-7 rounded-3xl text-center hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-500">

                <div className="text-4xl">
                  😊
                </div>

                <h3 className="text-3xl font-bold text-cyan-400 mt-4">
                  98%
                </h3>

                <p className="text-slate-400 mt-2">
                  Employee Satisfaction
                </p>

              </div>


              <div className="bg-slate-900 border border-slate-800 p-7 rounded-3xl text-center hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-500">

                <div className="text-4xl">
                  🎓
                </div>

                <h3 className="text-3xl font-bold text-cyan-400 mt-4">
                  156
                </h3>

                <p className="text-slate-400 mt-2">
                  Training Completed
                </p>

              </div>


              <div className="bg-slate-900 border border-slate-800 p-7 rounded-3xl text-center hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-500">

                <div className="text-4xl">
                  🏆
                </div>

                <h3 className="text-3xl font-bold text-cyan-400 mt-4">
                  46
                </h3>

                <p className="text-slate-400 mt-2">
                  Top Performers
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="pb-20 bg-slate-950">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 sm:p-10 lg:p-14">

              <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:items-center gap-8">

                <div>

                  <p className="text-slate-900 font-bold tracking-wider">
                    WORKFORCE MANAGEMENT
                  </p>

                  <h2 className="text-3xl md:text-4xl font-extrabold mt-3 max-w-2xl">
                    Manage employees and improve organizational performance.
                  </h2>

                </div>

                <Link
                  to="/emp"
                  className="
                    bg-slate-950
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-bold
                    whitespace-nowrap
                    hover:-translate-y-1
                    hover:shadow-2xl
                    transition-all
                    duration-300
                  "
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

export default Statcard;