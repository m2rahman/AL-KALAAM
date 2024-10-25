import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const englishDate = time.toLocaleDateString("en-US", options);
  const arabicDate = time.toLocaleDateString("ar-SA", options);

  return (
    <div className="text-sm">
      <div>{time.toLocaleTimeString()}</div>
      <div>{englishDate}</div>
      <div>{arabicDate}</div>
    </div>
  );
}

export default Clock;
