import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserFir = () => {
  const [firs, setFirs] = useState([]);

  useEffect(() => {
    const fetchFir = async () => {
      try {
        const response = await fetch('http://localhost:3000/yourfirs', {
          method: "GET",
          credentials: 'include'
        });

        if (response.ok) {
          const result = await response.json();
          setFirs(result);
          console.log("FIR records:", result);
        } else {
          const result = await response.json();
          console.log("No data found on frontend:", result);
        }
      } catch (error) {
        console.log("Catch error from fetch FIR:", error);
      }
    };

    fetchFir();
  }, []);

  const navigate = useNavigate()

  return (
    <>
      <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">Your FIR Submissions</h2>
    <div className="min-h-screen bg-white text-zinc-500 p-6 flex justify-center items-center flex-col gap-10">
      {firs.length === 0 ? (
        <p className="text-center text-zinc-500">No record found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {firs.map((fir) => (
            <div key={fir._id || fir.id} className="bg-zinc-100 p-4 rounded-xl shadow-md border border-zinc-700">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{fir.incident || "No Title"}</h3>
              <p className="text-zinc-500 mb-2">{fir.location ? fir.location : "No Location"}</p>
              <p className="text-sm text-zinc-500">
                Filed on: {fir.date ? new Date(fir.date).toLocaleDateString() : "Unknown"}
              </p>
            </div>
          ))}
        </div>
      )}
      <button className="px-5 py-3  rounded-lg text-blue-500 hover:cursor-pointer " onClick={()=>navigate('/dashboard')}>Back</button>
    </div>
    </>
  );
};

export default UserFir;