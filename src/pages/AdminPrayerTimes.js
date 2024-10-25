import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: "",
    dhuhr: "",
    asr: "",
    maghrib: "",
    isha: "",
    jumuah: "",
    ishraq: "",
    zawaal: "",
  });

  // Fetch existing prayer times from the JSON server
  useEffect(() => {
    axios
      .get("http://localhost:5000/prayerTimes/1")
      .then((response) => {
        setPrayerTimes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      });
  }, []);

  // Handle form inputs
  const handleChange = (e) => {
    setPrayerTimes({
      ...prayerTimes,
      [e.target.name]: e.target.value,
    });
  };

  // Function to calculate Ishraq and Zawaal
  const calculateIshraqAndZawaal = (fajr, dhuhr) => {
    const fajrTime = new Date(`1970-01-01T${fajr}:00`);
    const dhuhrTime = new Date(`1970-01-01T${dhuhr}:00`);

    const ishraqTime = new Date(fajrTime.getTime() + 30 * 60000); // Add 30 minutes to Fajr
    const zawaalTime = new Date(dhuhrTime.getTime() - 30 * 60000); // Subtract 30 minutes from Dhuhr

    return {
      ishraq: ishraqTime.toTimeString().slice(0, 5),
      zawaal: zawaalTime.toTimeString().slice(0, 5),
    };
  };

  // Update prayer times in the JSON server
  const handleSubmit = (e) => {
    e.preventDefault();

    const { ishraq, zawaal } = calculateIshraqAndZawaal(
      prayerTimes.fajr,
      prayerTimes.dhuhr
    );

    const updatedPrayerTimes = {
      ...prayerTimes,
      ishraq: ishraq,
      zawaal: zawaal,
    };

    axios
      .put("http://localhost:5000/prayerTimes/1", updatedPrayerTimes)
      .then((response) => {
        alert("Prayer times updated successfully");
      })
      .catch((error) => {
        console.error("Error updating prayer times:", error);
      });
  };

  return (
    <div className="admin-form">
      <h2 className="text-2xl font-bold mb-4">Set Prayer Times</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Fajr:</label>
          <input
            type="text"
            name="fajr"
            value={prayerTimes.fajr}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Dhuhr:</label>
          <input
            type="text"
            name="dhuhr"
            value={prayerTimes.dhuhr}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Asr:</label>
          <input
            type="text"
            name="asr"
            value={prayerTimes.asr}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Maghrib:</label>
          <input
            type="text"
            name="maghrib"
            value={prayerTimes.maghrib}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Isha:</label>
          <input
            type="text"
            name="isha"
            value={prayerTimes.isha}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Jumuah:</label>
          <input
            type="text"
            name="jumuah"
            value={prayerTimes.jumuah}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Prayer Times
        </button>
      </form>
    </div>
  );
};

export default AdminPrayerTimes;
