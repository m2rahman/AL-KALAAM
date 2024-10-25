import React from "react";

function Projects() {
  const projects = [
    {
      title: "Food Bank",
      description:
        "Our weekly food bank provides essential groceries to families in need within our community.",
      image: "path/to/food-bank-image.jpg",
    },
    {
      title: "Youth Mentorship Program",
      description:
        "Connecting young Muslims with successful professionals for guidance and career advice.",
      image: "path/to/mentorship-image.jpg",
    },
    {
      title: "Senior Support Initiative",
      description:
        "Volunteers provide companionship and assistance to elderly members of our community.",
      image: "path/to/senior-support-image.jpg",
    },
    {
      title: "Interfaith Dialogue Series",
      description:
        "Regular meetings with other faith communities to promote understanding and cooperation.",
      image: "path/to/interfaith-image.jpg",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600">{project.description}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-green-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Get Involved
        </h2>
        <p className="text-gray-700 mb-4">
          We're always looking for volunteers and supporters for our projects.
          Whether you can offer your time, skills, or resources, every
          contribution makes a difference.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
          Contact Us to Volunteer
        </button>
      </section>
    </div>
  );
}

export default Projects;
