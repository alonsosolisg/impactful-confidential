// pages/scoreboard.jsx

import React from "react";

// Retrieve scores from environment variables
const redScore = Number(process.env.NEXT_PUBLIC_RED_TEAM_SCORE || 0);
const yellowScore = Number(process.env.NEXT_PUBLIC_YELLOW_TEAM_SCORE || 0);
const blueScore = Number(process.env.NEXT_PUBLIC_BLUE_TEAM_SCORE || 0);
const greenScore = Number(process.env.NEXT_PUBLIC_GREEN_TEAM_SCORE || 0);

// Calculate the maximum score to scale the bars proportionally
const maxScore = Math.max(redScore, yellowScore, blueScore, greenScore);

const Scoreboard = () => {
  // Function to calculate bar width based on score
  const calculateBarWidth = (score: string) =>
    maxScore === 0 ? 0 : (Number(score) / maxScore) * 100;

  const teams = [
    { name: "Red", score: redScore, color: "bg-red-500" },
    { name: "Yellow", score: yellowScore, color: "bg-yellow-500" },
    { name: "Blue", score: blueScore, color: "bg-blue-500" },
    { name: "Green", score: greenScore, color: "bg-green-500" },
  ];

  return (
    <div className="py-32" id="scores">
      <div
        id="scores"
        className="max-w-2xl  mx-auto p-6 bg-white/20 rounded-lg shadow-lg"
      >
        <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Team Scores
        </h1>
        {teams.map((team, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{team.name} Team</span>
              <span>{team.score} Points</span>
            </div>
            <div className="w-full border-0.5 border-gray-500 bg-white rounded-full h-6">
              <div
                className={`${team.color} h-6 rounded-full`}
                style={{
                  width: `${calculateBarWidth(team.score.toString())}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;
