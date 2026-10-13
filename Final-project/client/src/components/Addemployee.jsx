import React, { useState } from "react";
import {api} from "../lib/api";
import {useRef, useState as useStateReact} from "react";

const AddEmployee = () => {
  const fileRef = useRef(null);
  const [image,setImage] = useStateReact(null);
  const [preview,setPreview] = useStateReact("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    documents: "",
    joiningdate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.entries(form).forEach(([key,value])=>data.append(key,value));
      if(image)data.append("image",image);
      const res = await api.post("/api/employees", data);

      console.log(res.data);

      alert("Employee Added Successfully");
      setImage(null);setPreview("");if(fileRef.current)fileRef.current.value="";

      setForm({
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        documents: "",
        joiningdate: "",
      });
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Employee Add Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-10 flex items-center justify-center">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">

        {/* Left Side */}

        <div className="lg:col-span-2 bg-gradient-to-br from-slate-950 via-cyan-950 to-cyan-700 text-white p-8 md:p-12 flex flex-col justify-center">

          <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-4xl mb-6 hover:-translate-y-2 transition duration-300">
            👨‍💼
          </div>

          <p className="text-cyan-300 text-xs font-bold tracking-[3px] mb-3">
            HR MANAGEMENT SYSTEM
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Employee
            <span className="text-cyan-300"> Management</span>
          </h1>

          <p className="text-slate-300 leading-7 mb-8">
            Add employee profile, department, designation, documents and
            joining details into your HR Management System.
          </p>

          <div className="space-y-3">

            <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 hover:translate-x-2 transition duration-300">
              ✓ Employee Profile
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 hover:translate-x-2 transition duration-300">
              ✓ Department Details
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 hover:translate-x-2 transition duration-300">
              ✓ Designation Details
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 hover:translate-x-2 transition duration-300">
              ✓ Employee Documents
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 hover:translate-x-2 transition duration-300">
              ✓ Joining Details
            </div>

          </div>
        </div>


        {/* Right Side Form */}

        <div className="lg:col-span-3 p-6 sm:p-8 md:p-12 lg:p-14">

          <div className="mb-8">

            <p className="text-cyan-600 text-xs font-bold tracking-[3px] mb-2">
              EMPLOYEE REGISTRATION
            </p>

            <h2 className="text-3xl font-bold text-slate-900">
              Add Employee
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              Fill in the employee information below.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Name */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Employee Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter employee name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition"
                />
              </div>


              {/* Email */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Employee Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="employee@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition"
                />
              </div>


              {/* Phone */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition"
                />
              </div>


              {/* Department */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Department
                </label>

                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition"
                >
                  <option value="">Select Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">Human Resource</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>


              {/* Designation */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  placeholder="Software Developer"
                  value={form.designation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition"
                />
              </div>


              {/* Joining Date */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Joining Date
                </label>

                <input
                  type="date"
                  name="joiningdate"
                  value={form.joiningdate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition"
                />
              </div>


              {/* Single profile image */}
              <div className="md:col-span-2"><label className="block text-sm font-semibold text-slate-700 mb-2">Employee image (one JPG, PNG, WEBP or GIF, max 3 MB)</label>
              <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="w-full px-4 py-3 bg-slate-50 border rounded-xl" onChange={e=>{const file=e.target.files?.[0];if(!file){setImage(null);setPreview('');return;}if(file.size>3*1024*1024||!['image/jpeg','image/png','image/webp','image/gif'].includes(file.type)){alert('Choose one valid image under 3MB');e.target.value='';return;}setImage(file);setPreview(URL.createObjectURL(file));}}/>
              {preview&&<img src={preview} alt="Preview" className="mt-3 w-24 h-24 rounded-2xl object-cover"/>}</div>
              <div className="md:col-span-2"><label className="block text-sm font-semibold text-slate-700 mb-2">Document notes (optional)</label><input type="text" name="documents" value={form.documents} onChange={handleChange} placeholder="Document details" className="w-full px-4 py-3 bg-slate-50 border rounded-xl"/></div>

            </div>


            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:from-cyan-700 hover:to-slate-900 hover:-translate-y-1 active:scale-95 transition duration-300"
            >
              + Add Employee
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default AddEmployee;