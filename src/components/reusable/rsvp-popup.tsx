import React, { useState } from "react";
import toast from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";

const RsvpPopup = ({
  toggleRsvpPopup,
  setToggleRsvpPopup,
}: {
  toggleRsvpPopup: boolean;
  setToggleRsvpPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const sendRsvp = async () => {
      try {
        const res = await fetch("/api/rsvp-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              name: formData.name,
              email: formData.email,
            },
          }),
        });
        const data = await res.json();
        if (data.success) {
          toast.success("RSVP sent successfully");
          setFormData({ name: "", email: "" });
          setToggleRsvpPopup(false);
          setLoading(false);
        } else {
          toast.error("Failed to send RSVP");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to send RSVP");
        setLoading(false);
      }
    };
    if (formData.name && formData.email) {
      sendRsvp();
    } else {
      toast.error("Please fill in all fields");
      setLoading(false);
    }
  };

  return (
    <div
      className={`absolute z-[100] top-0 flex justify-center items-center left-0 w-full h-screen bg-black/50 backdrop-blur-md ${
        toggleRsvpPopup ? "flex" : "hidden"
      }`}
    >
      <div className="relative xs:w-full text-center lg:w-[60%] h-fit py-20 gap-8 flex-col bg-white rounded-md flex justify-center items-center">
        <div
          className="absolute cursor-pointer top-0 right-0 mt-2 mr-4"
          onClick={() => {
            setToggleRsvpPopup(false);
          }}
        >
          X
        </div>
        <h1 className="text-3xl">Confirm Your Attendance</h1>
        {loading && (
          <CirclesWithBar
            height="100"
            width="100"
            color="#000000"
            outerCircleColor="#000000"
            innerCircleColor="#000000"
            barColor="#000000"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        <form
          onSubmit={handleSubmit}
          className={`flex-col justify-center w-[75%] items-center gap-4 ${
            loading ? "hidden" : "flex"
          }`}
        >
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            className="w-full h-10 border rounded-md px-4"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            className="w-full h-10 border rounded-md px-4"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <button
            type="submit"
            value="RSVP"
            disabled={loading}
            className="w-full h-10 bg-black text-white"
          >
            Send RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RsvpPopup;
