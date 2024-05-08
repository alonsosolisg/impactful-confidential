// pages/competition.jsx

import React from "react";

const Competition = () => {
  // Define competition events
  const events = [
    {
      title: "Musical Chairs",
      description: "Winner: 100 points to the team of the last member sitting.",
    },
    {
      title: "Push-Ups Under One Minute",
      description:
        "1st Place: 100 points\n2nd Place: 70 points\n3rd Place: 50 points\n(Points awarded based on the total count of push-ups by the top performer in each team)",
    },
    {
      title: "Hula Hoop Challenge",
      description:
        "Fastest Team to Rotate Through All Members:\n1st Place: 150 points\n2nd Place: 100 points\n3rd Place: 50 points",
    },
    {
      title: "Balance and Coordination (Egg Challenge)",
      description:
        "Team Completion: 200 points awarded only if all team members successfully complete the track without dropping the egg.\n(The entire team must successfully pass the egg along the track without any drops to earn points)",
    },
    {
      title: "Tug of War",
      description:
        "Winner: 200 points to the team that does not cross the middle mark.",
    },
    {
      title: "Feet Tied Race",
      description:
        "Fastest Pair to Complete the Course:\n1st Place: 120 points\n2nd Place: 80 points\n3rd Place: 40 points",
    },
    {
      title: "Potato Sack Challenge",
      description:
        "Fastest Team to Complete the Circuit and Return:\n1st Place: 100 points\n2nd Place: 70 points\n3rd Place: 50 points",
    },
    {
      title: "Team Spirit Award",
      description:
        "Team Spirit Award: 100 points awarded to the team that shows the best teamwork, enthusiasm, and sportsmanship throughout the event.",
    },
  ];

  // Render the events in a list
  return (
    <div
      id="points"
      className="max-w-2xl my-20 mx-auto p-6 bg-white/20 rounded-lg shadow-lg"
    >
      <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
        Competition Events and Points
      </h1>
      {events.map((event, index) => (
        <div
          key={index}
          className="mb-8 p-4 bg-white/40 border border-gray-300 rounded-lg shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {event.title}
          </h2>
          <p className="text-black whitespace-pre-line">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Competition;
