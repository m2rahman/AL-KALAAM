import React from "react";
import PrayerTimes from "../components/PrayerTimes";
import PrayerTimesPage from "./PrayerTimesPage";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome to Al Kalaam
        </h1>
        <p className="text-xl text-gray-600">
          Your center for Islamic learning, worship, and community service
        </p>
      </section>

      <section className="bg-blue-100 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Today's Prayer Times
        </h2>
        <PrayerTimesPage />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Mosque
          </h2>
          <p className="text-gray-600">
            Join us for daily prayers, Jumu'ah, and special events. Our mosque
            is open to all and provides a peaceful environment for worship and
            reflection.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Islamic School
          </h2>
          <p className="text-gray-600">
            Our comprehensive Islamic education program caters to all ages, from
            children to adults. Discover Qur'an classes, Arabic lessons, and
            Islamic studies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Charity Work
          </h2>
          <p className="text-gray-600">
            Al Kalaam is committed to serving our community through various
            charitable initiatives. From food drives to support for the needy,
            we strive to make a difference.
          </p>
        </div>
      </section>

      <section className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Upcoming Events
        </h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span className="text-lg text-gray-700">Weekly Qur'an Study</span>
            <span className="text-gray-600">Every Wednesday, 7:00 PM</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-lg text-gray-700">
              Community Iftar (During Ramadan)
            </span>
            <span className="text-gray-600">Daily at Sunset</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-lg text-gray-700">Youth Group Meeting</span>
            <span className="text-gray-600">
              First Saturday of each month, 5:00 PM
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
