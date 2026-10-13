import React, { useEffect, useState } from "react";
import {api,API_URL} from "../lib/api";
import {useAuth} from "../context/AuthContext";

const Viewemployee = () => {
  const {user}=useAuth();
  const [employees, setEmployees] = useState([]);

  const getemployees = async () => {
    try {
      const res = await api.get("/api/employees");

      setEmployees(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getemployees();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-14 px-5">

      {/* Heading */}
      <div className="text-center mb-12">

        <p className="text-cyan-400 font-semibold tracking-[4px] uppercase text-sm">
          Employee Management
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
          All Employees
        </h1>

        <p className="text-slate-400 mt-3">
          View employee information and workforce details
        </p>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

      </div>


      {employees.length === 0 ? (

        /* No Employee */
        <div className="max-w-xl mx-auto">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center shadow-2xl">

            <div className="text-6xl mb-5">
              👥
            </div>

            <h2 className="text-2xl font-bold text-white">
              No Employee Found
            </h2>

            <p className="text-slate-400 mt-2">
              Employee information will appear here.
            </p>

          </div>

        </div>

      ) : (

        /* Employee Cards */
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {employees.map((x, index) => (

            <div
              key={x._id || index}
              className="
              group
              relative
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-6
              shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:scale-[1.03]
              hover:shadow-cyan-500/20
              overflow-hidden
              "
            >

              {/* Animated background */}
              <div className="
              absolute
              -top-16
              -right-16
              w-40
              h-40
              bg-cyan-500/20
              rounded-full
              blur-3xl
              group-hover:bg-cyan-400/30
              transition-all
              duration-500
              ">
              </div>


              {/* Employee Avatar */}
              <div className="relative z-10 flex items-center gap-4 mb-6">

                <div className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-cyan-400
                to-blue-600
                flex
                items-center
                justify-center
                text-white
                text-2xl
                font-bold
                shadow-lg
                group-hover:rotate-6
                transition
                duration-500
                ">

                  {x.image ? <img src={`${API_URL}${x.image}`} alt={x.name} className="w-full h-full object-cover rounded-2xl"/> : x.name?.charAt(0).toUpperCase()}

                </div>


                <div>

                  <h2 className="text-xl font-bold text-white">
                    {x.name}
                  </h2>

                  <p className="text-cyan-400 font-medium">
                    {x.designation}
                  </p>

                </div>

              </div>


              {user?.role==='admin'&&<div className="relative z-10 flex gap-2 mb-5"><button className="text-xs bg-cyan-500/20 text-cyan-100 border border-cyan-500/30 rounded-lg px-3 py-2" onClick={async()=>{const name=prompt('Employee name',x.name);if(name===null||!name.trim())return;try{await api.put(`/api/employees/${x._id}`,{name});getemployees();}catch(e){alert(e.response?.data?.message||'Update failed');}}}>Edit name</button><button className="text-xs bg-red-500/20 text-red-100 border border-red-500/30 rounded-lg px-3 py-2" onClick={async()=>{if(!confirm(`Delete ${x.name}?`))return;try{await api.delete(`/api/employees/${x._id}`);getemployees();}catch(e){alert(e.response?.data?.message||'Delete failed');}}}>Delete</button></div>}
              {/* Information */}
              <div className="relative z-10 space-y-4">

                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <p className="text-xs text-slate-400 uppercase">
                    Email
                  </p>

                  <p className="text-slate-200 break-all">
                    {x.email}
                  </p>
                </div>


                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <p className="text-xs text-slate-400 uppercase">
                    Phone
                  </p>

                  <p className="text-slate-200">
                    {x.phone}
                  </p>
                </div>


                <div className="grid grid-cols-2 gap-3">

                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">

                    <p className="text-xs text-slate-400 uppercase">
                      Department
                    </p>

                    <p className="text-white font-medium mt-1">
                      {x.department}
                    </p>

                  </div>


                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">

                    <p className="text-xs text-slate-400 uppercase">
                      Joining Date
                    </p>

                    <p className="text-white font-medium mt-1">
                      {x.joiningDate || x.joiningdate}
                    </p>

                  </div>

                </div>


                <div className="bg-white/5 rounded-xl p-3 border border-white/5">

                  <p className="text-xs text-slate-400 uppercase">
                    Documents
                  </p>

                  <p className="text-slate-200">
                    {x.documents}
                  </p>

                </div>

              </div>


              {/* Bottom Line */}
              <div className="
              absolute
              bottom-0
              left-0
              w-0
              h-1
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              group-hover:w-full
              transition-all
              duration-500
              ">
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Viewemployee;