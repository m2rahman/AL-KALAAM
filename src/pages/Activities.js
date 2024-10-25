import React from "react";

function Activities() {
  const activities = [
    {
      category: "Education",
      items: [
        "Quran Classes for Children and Adults",
        "Arabic Language Courses",
        "Islamic Studies Program",
        "Weekend School for Youth",
      ],
    },
    {
      category: "Ramadan",
      items: [
        "Daily Iftar Gatherings",
        "Taraweeh Prayers",
        "Laylat al-Qadr Special Program",
        "Eid ul-Fitr Celebration",
      ],
    },
    {
      category: "Community Services",
      items: [
        "Marriage Counseling",
        "New Muslim Support Group",
        "Funeral Services",
        "Zakat and Sadaqah Distribution",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Our Activities</h1>

      {activities.map((activity, index) => (
        <section key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            {activity.category}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {activity.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Get Involved
        </h2>
        <p className="text-gray-700 mb-4">
          We welcome volunteers for all our activities. If you're interested in
          contributing your time and skills, please contact us.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
          Contact Us to Volunteer
        </button>
      </section>
    </div>
  );
}

export default Activities;
