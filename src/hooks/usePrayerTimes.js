import { useState, useEffect } from "react";
import axios from "axios";

function usePrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get(
          "http://api.aladhan.com/v1/timingsByCity",
          {
            params: {
              city: "London",
              country: "United Kingdom",
              method: 2,
            },
          }
        );
        setPrayerTimes(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching prayer times:", err);
        setError("Failed to fetch prayer times");
        setLoading(false);
      }
    };

    fetchPrayerTimes();

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return { prayerTimes, currentTime, loading, error };
}

export default usePrayerTimes;
