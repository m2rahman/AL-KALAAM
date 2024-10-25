import React, { useState, useEffect } from "react";

function PrayerTimes() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const englishDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const arabicDate = currentTime.toLocaleDateString("ar-SA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const prayerTimes = [
    {
      name: "FAJR",
      start: "06:06",
      iqamah: "06:45",
      azaan: "-",
      khutbah: "-",
      jumuah: "06:08",
    },
    {
      name: "ZUHOR",
      start: "12:50",
      iqamah: "01:30",
      azaan: "-",
      khutbah: "-",
      jumuah: "03:55",
    },
    {
      name: "ASR",
      start: "04:15",
      iqamah: "-",
      azaan: "-",
      khutbah: "-",
      jumuah: "05:53",
    },
    {
      name: "MAGHRIB",
      start: "05:58",
      iqamah: "05:51",
      azaan: "05:56",
      khutbah: "-",
      jumuah: "08:00",
    },
    {
      name: "ISHA",
      start: "07:09",
      iqamah: "07:45",
      azaan: "-",
      khutbah: "-",
      jumuah: "-",
    },
  ];

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-green-800">
          {currentTime.toLocaleTimeString()}
        </div>
        <div className="text-lg text-green-700">{englishDate}</div>
        <div className="text-lg text-green-700 font-arabic">{arabicDate}</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-2 px-2 text-left">PRAYER</th>
              <th className="py-2 px-2 text-center">START</th>
              <th className="py-2 px-2 text-center">IQAMAH</th>
              <th className="py-2 px-2 text-center">AZAAN</th>
              <th className="py-2 px-2 text-center">KHUTBAH</th>
              <th className="py-2 px-2 text-center">JUMU'AH</th>
            </tr>
          </thead>
          <tbody>
            {prayerTimes.map((prayer, index) => (
              <tr
                key={prayer.name}
                className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
              >
                <td className="py-2 px-2 font-bold">{prayer.name}</td>
                <td className="py-2 px-2 text-center">{prayer.start}</td>
                <td className="py-2 px-2 text-center">{prayer.iqamah}</td>
                <td className="py-2 px-2 text-center">{prayer.azaan}</td>
                <td className="py-2 px-2 text-center">{prayer.khutbah}</td>
                <td className="py-2 px-2 text-center">{prayer.jumuah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center text-green-800 text-sm">
        <p>SUNRISE: 07:42 | ISHRAQ: 07:57 | ZAWAAL: 12:40</p>
        <p className="mt-2 font-bold">Please Donate for the sake of Allah</p>
        <p>Bank: NatWest | Name: Al Kalaam</p>
        <p>AC: 60009659***SC: 60-01-37</p>
      </div>
    </div>
  );
}

export default PrayerTimes;
