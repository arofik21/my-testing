import React, { useEffect, useState } from "react";

const Teams = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        setMembers(data.results);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{`${member.name.first} ${member.name.last}`}</h3>
              <p className="text-sm text-gray-500">{member.email}</p>
              <p className="text-sm text-gray-500">{member.location.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
