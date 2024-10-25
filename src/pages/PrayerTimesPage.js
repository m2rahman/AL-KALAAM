import React, { useEffect, useState } from "react";
import usePrayerTimes from "../hooks/usePrayerTimes";
import { formatEnglishDate, formatArabicDate } from "../utils/dateUtils";

function PrayerTimesPage() {
  const { prayerTimes, currentTime, loading, error } = usePrayerTimes();
  const [nextPrayer, setNextPrayer] = useState(null);
  const [countdown, setCountdown] = useState(null);

  const iqamahTimes = {
    Fajr: "06:45",
    Dhuhr: "13:30",
    Asr: "16:15",
    Maghrib: "17:58",
    Isha: "20:00",
    Jumuah: "13:30",
  };

  useEffect(() => {
    const findNextPrayer = () => {
      const now = currentTime;
      let upcomingPrayer = null;
      let upcomingIqamahTime = null;

      // Loop through iqamah times to find the next one
      for (const [prayer, iqamahTime] of Object.entries(iqamahTimes)) {
        const iqamahDateTime = new Date(
          now.toLocaleDateString() + " " + iqamahTime
        );

        // Check if the current time is less than the iqamah time
        if (now < iqamahDateTime) {
          upcomingPrayer = prayer;
          upcomingIqamahTime = iqamahDateTime;
          break;
        }
      }

      // If no future prayer found, it means we need to set it to Fajr of the next day
      if (!upcomingPrayer) {
        upcomingPrayer = "Fajr";
        upcomingIqamahTime = new Date(now);
        upcomingIqamahTime.setDate(now.getDate() + 1); // Move to next day
        upcomingIqamahTime.setHours(6, 45, 0); // Set to next Fajr time
      }

      setNextPrayer({ name: upcomingPrayer, time: upcomingIqamahTime });
    };

    const calculateCountdown = () => {
      if (nextPrayer) {
        const now = new Date();
        const diffMs = nextPrayer.time - now; // Difference in milliseconds
        if (diffMs < 0) {
          // If the prayer time is in the past, reset the countdown
          setCountdown({ hours: 0, minutes: 0, seconds: 0 });
          return;
        }

        const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);
        const diffSeconds = Math.floor((diffMs / 1000) % 60);

        setCountdown({
          hours: diffHours,
          minutes: diffMinutes,
          seconds: diffSeconds,
        });
      }
    };

    findNextPrayer(); // Set the next prayer initially
    calculateCountdown(); // Calculate immediately after finding next prayer

    const intervalId = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [currentTime, nextPrayer]); // Depend on currentTime and nextPrayer

  if (loading)
    return <div className="text-center p-4">Loading prayer times...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  const { timings } = prayerTimes || {};

  const renderUpcomingTime = (upcomingTime) => {
    return upcomingTime ? (
      <span style={{ color: "red" }}>{upcomingTime}</span>
    ) : (
      "-"
    );
  };

  // Helper function to format time in AM/PM
  const formatTimeAMPM = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatIqamahTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0);
    return formatTimeAMPM(date);
  };

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-green-800">
          {formatTimeAMPM(currentTime)}
        </div>
        <div className="text-lg text-green-700">
          {formatEnglishDate(currentTime)}
        </div>
        <div className="text-lg text-green-700 font-arabic" dir="rtl">
          {formatArabicDate(currentTime)}
        </div>
      </div>

      {/* Next prayer box */}
      <div className="bg-green-300 p-4 mb-4 rounded-lg shadow">
        {nextPrayer && countdown ? (
          <div className="text-center">
            <div className="text-2xl font-bold text-green-800">
              Next prayer: {nextPrayer.name} at{" "}
              {formatTimeAMPM(nextPrayer.time)}
            </div>
            <div className="text-xl text-red-500">
              <span className="font-extrabold text-4xl">
                Time left:{" "}
                {`${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center text-xl text-green-800">
            Calculating next prayer...
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-2 px-2 text-left">PRAYER</th>
              <th className="py-2 px-2 text-center">START</th>
              <th className="py-2 px-2 text-center">AZAAN</th>
              <th className="py-2 px-2 text-center">IQAMAH</th>
            </tr>
          </thead>
          <tbody>
            {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map(
              (prayer, index) => (
                <tr
                  key={prayer}
                  className={index % 2 === 0 ? "bg-green-50" : "bg-green-100"}
                >
                  <td className="py-2 px-2 font-bold">{prayer}</td>
                  <td className="py-2 px-2 text-center">
                    {timings?.[prayer]
                      ? formatTimeAMPM(
                          new Date(`1970-01-01T${timings[prayer]}Z`)
                        )
                      : "-"}
                    <br />
                    {renderUpcomingTime(formatIqamahTime(iqamahTimes[prayer]))}
                  </td>
                  <td className="py-2 px-2 text-center">
                    {timings?.[prayer]
                      ? formatTimeAMPM(
                          new Date(`1970-01-01T${timings[prayer]}Z`)
                        )
                      : "-"}
                    <br />
                    {renderUpcomingTime(formatIqamahTime(iqamahTimes[prayer]))}
                  </td>
                  <td className="py-2 px-2 text-center">
                    {formatIqamahTime(iqamahTimes[prayer]) || "-"}
                  </td>
                </tr>
              )
            )}
            <tr className="bg-green-50">
              <td className="py-2 px-2 font-bold">Jumuah</td>
              <td className="py-2 px-2 text-center">
                {formatTimeAMPM(new Date(`1970-01-01T01:15:00Z`))}
                <br />
                {renderUpcomingTime(
                  formatTimeAMPM(new Date(`1970-01-01T01:30:00Z`))
                )}
              </td>
              <td className="py-2 px-2 text-center">
                {formatTimeAMPM(new Date(`1970-01-01T01:15:00Z`))}
                <br />
                {renderUpcomingTime(
                  formatTimeAMPM(new Date(`1970-01-01T01:30:00Z`))
                )}
              </td>
              <td className="py-2 px-2 text-center">
                Khutbah: {formatIqamahTime(iqamahTimes["Jumuah"])}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Display Sunrise, Sunset, Ishraq, and Zawaal times */}
      <div className="mt-4 text-center text-green-800 text-sm">
        <p>
          SUNRISE:{" "}
          {timings?.Sunrise
            ? formatTimeAMPM(new Date(`1970-01-01T${timings.Sunrise}Z`))
            : "-"}{" "}
          | SUNSET:{" "}
          {timings?.Sunset
            ? formatTimeAMPM(new Date(`1970-01-01T${timings.Sunset}Z`))
            : "-"}{" "}
          | ISHRAQ: {addMinutes(timings?.Sunrise, 15)} | ZAWAAL:{" "}
          {subtractMinutes(timings?.Dhuhr, 10)}
        </p>
        <p className="mt-2 font-bold">Please Donate for the sake of Allah</p>
        {/* Bank details */}
        <div className="mt-4">
          {/* <p className="text-lg font-semibold text-green-900">Bank Details</p> */}
          <div className="inline-block text-left border rounded-lg p-3 bg-green-50">
            <p>
              <strong>Bank:</strong> NatWest
            </p>
            <p>
              <strong>Name:</strong> Al Kalaam
            </p>
            <p>
              <strong>AC:</strong> 60009659*** <strong>SC:</strong> 60-01-37
            </p>
          </div>
        </div>
        {/* <p>Thank you for your support!</p> */}
      </div>
    </div>
  );
}

// Helper function to add minutes to a time string
const addMinutes = (timeStr, minutes) => {
  const [hours, minutesPart] = timeStr.split(":").map(Number);
  const totalMinutes = hours * 60 + minutesPart + minutes;

  const newHours = Math.floor(totalMinutes / 60) % 24; // Wrap around after 24 hours
  const newMinutes = totalMinutes % 60;

  return `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(
    2,
    "0"
  )}`;
};

// Helper function to subtract minutes from a time string
const subtractMinutes = (timeStr, minutes) => {
  const [hours, minutesPart] = timeStr.split(":").map(Number);
  const totalMinutes = hours * 60 + minutesPart - minutes;

  const newHours = (totalMinutes < 0 ? 24 : Math.floor(totalMinutes / 60)) % 24; // Wrap around after 24 hours
  const newMinutes = (totalMinutes + 60) % 60;

  return `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(
    2,
    "0"
  )}`;
};

export default PrayerTimesPage;
