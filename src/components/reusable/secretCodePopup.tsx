import React from "react";

const SecretCodePopup = ({
  closePopup,
  secretCode,
  color,
}: {
  closePopup: () => void;
  secretCode: string;
  color: "red" | "blue" | "green" | "yellow";
}) => {
  return (
    <div
      className={`font-bold text-4xl flex-col flex justify-center items-center ${
        color === "yellow"
          ? "aggressiveYellow"
          : color === "green"
          ? "aggressiveGreen"
          : color === "red"
          ? "aggressiveRed"
          : "aggressiveBlue"
      }`}
      onClick={closePopup}
      style={{
        position: "fixed",
        zIndex: 200,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        color: "#333",
        textAlign: "center",
        animation: "animateGradient 5s ease infinite",
        backgroundSize: "400% 400%",
      }}
    >
      <h1>Secret Code</h1>
      <p>{secretCode}</p>
    </div>
  );
};

export default SecretCodePopup;
