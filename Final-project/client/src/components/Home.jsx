import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ================= CUSTOM ANIMATION ================= */}
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
              transform: translateX(-50px);
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

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(34,211,238,0.2);
            }
            50% {
              box-shadow: 0 0 45px rgba(34,211,238,0.5);
            }
          }

          .fade-up {
            animation: fadeUp 1s ease-out forwards;
          }

          .fade-left {
            animation: fadeLeft 1s ease-out forwards;
          }

          .float-animation {
            animation: floating 4s ease-in-out infinite;
          }

          .glow-animation {
            animation: glow 3s ease-in-out infinite;
          }
        `}
      </style>

      <main className="bg-slate-950 text-white overflow-hidden">

        {/* ==================================================
                            HERO SECTION
        ================================================== */}

        <section className="relative min-h-[90vh] flex items-center">

          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/hr-video.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/50"></div>

          {/* Cyan Effect */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">

            <div className="max-w-4xl fade-left">

              {/* Small Badge */}
              <div
                className="
                inline-flex
                items-center
                gap-2
                bg-white/10
                backdrop-blur-md
                border
                border-cyan-400/30
                px-4
                py-2
                rounded-full
                text-cyan-300
                text-sm
                font-semibold
                mb-6
              "
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

                Modern Human Resource Management
              </div>

              {/* Main Heading */}
              <h1
                className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                leading-tight
                tracking-tight
              "
              >
                Empowering People.
                <br />

                <span
                  className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-cyan-300
                  via-cyan-400
                  to-blue-500
                "
                >
                  Building Better Workplaces.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                mt-6
                max-w-2xl
                text-slate-300
                text-base
                sm:text-lg
                md:text-xl
                leading-relaxed
              "
              >
                A modern HR Policy Management System designed to simplify
                employee management, workplace policies, performance tracking,
                compliance and organizational growth.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/emp"
                  className="
                    bg-cyan-400
                    text-slate-950
                    font-bold
                    px-7
                    py-3.5
                    rounded-xl
                    transition-all
                    duration-300
                    hover:bg-cyan-300
                    hover:-translate-y-1
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
                  "
                >
                  Explore Employees →
                </Link>

                <Link
                  to="/about"
                  className="
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/20
                    px-7
                    py-3.5
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-white/20
                    hover:border-cyan-400/50
                    hover:-translate-y-1
                  "
                >
                  Learn More
                </Link>

              </div>

            </div>

          </div>


          {/* Scroll Indicator */}
          <div
            className="
              hidden
              md:flex
              absolute
              bottom-7
              left-1/2
              -translate-x-1/2
              flex-col
              items-center
              text-slate-400
              text-xs
            "
          >
            <span>SCROLL</span>

            <div
              className="
                mt-2
                w-[2px]
                h-10
                bg-gradient-to-b
                from-cyan-400
                to-transparent
              "
            ></div>
          </div>

        </section>


        {/* ==================================================
                           STATISTICS
        ================================================== */}

        <section className="relative -mt-1 bg-slate-950 py-10">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div
              className="
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-4
              "
            >

              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  rounded-2xl
                  p-6
                  text-center
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  500+
                </h2>

                <p className="text-slate-400 mt-2">
                  Employees
                </p>
              </div>


              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  text-center
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  50+
                </h2>

                <p className="text-slate-400 mt-2">
                  HR Policies
                </p>
              </div>


              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  text-center
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  20+
                </h2>

                <p className="text-slate-400 mt-2">
                  Departments
                </p>
              </div>


              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  text-center
                  hover:border-cyan-400/40
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  98%
                </h2>

                <p className="text-slate-400 mt-2">
                  Employee Satisfaction
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
                          ABOUT SECTION
        ================================================== */}

        <section className="py-24 bg-slate-900">

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              grid
              lg:grid-cols-2
              gap-16
              items-center
            "
          >

            {/* Left */}
            <div className="fade-up">

              <p className="text-cyan-400 font-bold tracking-[3px] text-sm">
                ABOUT OUR PLATFORM
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  mt-4
                  leading-tight
                "
              >
                A Smarter Way To
                <span className="text-cyan-400"> Manage Your Workforce</span>
              </h2>

              <p className="text-slate-400 mt-6 leading-8">
                Our HR Policy platform creates a transparent, productive and
                employee-friendly workplace. From employee information to
                organizational policies, everything can be managed from one
                modern digital system.
              </p>

              <p className="text-slate-400 mt-4 leading-8">
                The platform helps HR departments improve productivity,
                standardize workplace policies and provide employees with
                simple access to important organizational information.
              </p>

              <Link
                to="/about"
                className="
                  inline-block
                  mt-8
                  text-cyan-400
                  font-semibold
                  hover:text-cyan-300
                  transition
                "
              >
                Discover our HR approach →
              </Link>

            </div>


            {/* Right Glass Card */}
            <div
              className="
                relative
                bg-gradient-to-br
                from-cyan-500/20
                to-blue-600/10
                border
                border-cyan-400/20
                rounded-3xl
                p-6
                sm:p-10
                backdrop-blur-xl
                float-animation
                glow-animation
              "
            >

              <div className="grid grid-cols-2 gap-4">

                <div
                  className="
                    bg-slate-950/70
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    hover:border-cyan-400
                    transition
                  "
                >
                  <div className="text-3xl mb-3">👨‍💼</div>

                  <h3 className="font-bold">
                    Employee Data
                  </h3>

                  <p className="text-xs text-slate-400 mt-2">
                    Centralized employee management.
                  </p>
                </div>


                <div
                  className="
                    bg-slate-950/70
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    hover:border-cyan-400
                    transition
                  "
                >
                  <div className="text-3xl mb-3">📋</div>

                  <h3 className="font-bold">
                    HR Policies
                  </h3>

                  <p className="text-xs text-slate-400 mt-2">
                    Simple policy management.
                  </p>
                </div>


                <div
                  className="
                    bg-slate-950/70
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    hover:border-cyan-400
                    transition
                  "
                >
                  <div className="text-3xl mb-3">📊</div>

                  <h3 className="font-bold">
                    Analytics
                  </h3>

                  <p className="text-xs text-slate-400 mt-2">
                    Track workforce performance.
                  </p>
                </div>


                <div
                  className="
                    bg-slate-950/70
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    hover:border-cyan-400
                    transition
                  "
                >
                  <div className="text-3xl mb-3">🔐</div>

                  <h3 className="font-bold">
                    Data Security
                  </h3>

                  <p className="text-xs text-slate-400 mt-2">
                    Secure employee information.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
                         CORE HR POLICIES
        ================================================== */}

        <section className="py-24 bg-slate-950">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">

              <p className="text-cyan-400 text-sm font-bold tracking-[4px]">
                OUR CORE POLICIES
              </p>

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  mt-4
                "
              >
                Building A Better
                <span className="text-cyan-400"> Workplace</span>
              </h2>

              <p className="text-slate-400 mt-5">
                Clear and transparent policies help employees and organizations
                work together effectively.
              </p>

            </div>


            {/* Cards */}
            <div
              className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-7
                mt-14
              "
            >

              {/* Card 1 */}
              <div
                className="
                  group
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/50
                  hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    bg-cyan-400/10
                    text-2xl
                    rounded-xl
                    border
                    border-cyan-400/20
                    group-hover:scale-110
                    transition
                  "
                >
                  👥
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Employee Management
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Manage employee profiles, departments, designations,
                  joining details and professional information.
                </p>

              </div>


              {/* Card 2 */}
              <div
                className="
                  group
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/50
                  hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    bg-cyan-400/10
                    text-2xl
                    rounded-xl
                  "
                >
                  📑
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Workplace Policy
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Centralize leave, attendance, workplace conduct and
                  organizational policies.
                </p>

              </div>


              {/* Card 3 */}
              <div
                className="
                  group
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/50
                  hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    bg-cyan-400/10
                    text-2xl
                    rounded-xl
                  "
                >
                  📈
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Performance
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Monitor employee performance and improve workforce
                  productivity with better insights.
                </p>

              </div>


              {/* Card 4 */}
              <div
                className="
                  group
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/50
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    bg-cyan-400/10
                    text-2xl
                    rounded-xl
                  "
                >
                  🕒
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Attendance
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Maintain attendance, working hours and employee leave
                  information efficiently.
                </p>

              </div>


              {/* Card 5 */}
              <div
                className="
                  group
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/50
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    bg-cyan-400/10
                    text-2xl
                    rounded-xl
                  "
                >
                  🛡️
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Compliance
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Maintain transparent HR processes and organizational
                  compliance.
                </p>

              </div>


              {/* Card 6 */}
              <div
                className="
                  group
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400/50
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    bg-cyan-400/10
                    text-2xl
                    rounded-xl
                  "
                >
                  🚀
                </div>

                <h3 className="text-xl font-bold mt-6">
                  Career Growth
                </h3>

                <p className="text-slate-400 mt-3 leading-7">
                  Support learning, development, training and employee
                  career growth.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
                              CTA
        ================================================== */}

        <section className="py-20 bg-slate-900">

          <div className="max-w-7xl mx-auto px-5 sm:px-8">

            <div
              className="
                relative
                overflow-hidden
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                rounded-3xl
                px-6
                md:px-14
                py-12
                md:py-16
              "
            >

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-72
                  h-72
                  bg-white/20
                  rounded-full
                  blur-3xl
                "
              ></div>

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  lg:flex-row
                  justify-between
                  items-start
                  lg:items-center
                  gap-8
                "
              >

                <div>

                  <p className="font-bold text-slate-900">
                    MODERN HR MANAGEMENT
                  </p>

                  <h2
                    className="
                      text-3xl
                      md:text-4xl
                      font-extrabold
                      mt-3
                      max-w-2xl
                    "
                  >
                    Build a transparent, productive and people-first workplace.
                  </h2>

                </div>

                <Link
                  to="/emp"
                  className="
                    whitespace-nowrap
                    bg-slate-950
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-bold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
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

export default Home;