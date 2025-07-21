import { useState } from "react";
import { toast } from "react-hot-toast";
import { joinWaitlist, joinWithReferral } from "./services/waitlistApi";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const WaitlistModal = ({ isOpen, onClose, referralId, onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } bg-red-500 text-white p-4 rounded-md shadow-lg w-[380px]`}
        >
          <strong className="block text-base">Name & Email required</strong>
          <span className="text-sm">
            Please enter your full details to join the waitlist.
          </span>
        </div>
      ));
      return;
    }

    try {
      const res = referralId
        ? await joinWithReferral(name, email, "landing-page", referralId)
        : await joinWaitlist(name, email, "landing-page");

      if (res.error === "Email already exists") {
        toast(
          <div className="text-white font-bold">
            You're already on the waitlist!
          </div>,
          {
            style: {
              background: "#EF4444",
              borderRadius: "8px",
              padding: "16px",
            },
          }
        );
        onClose();
        return;
      }
      if (res.error === "Invalid username") {
        toast(
          <div className="text-white font-bold">
            Please enter a valid username!
          </div>,
          {
            style: {
              background: "#EF4444",
              borderRadius: "8px",
              padding: "16px",
            },
          }
        );
        onClose();
        return;
      }
      toast.success(
        <div>
          <strong>Welcome to PaperTraderX! 🎉</strong>
          <p className="text-sm mt-1">
            We'll notify you as soon as PaperTraderX launches.
          </p>
        </div>
      );

      setShowConfetti(true);
      onSuccess(res);
      onClose();

      setTimeout(() => setShowConfetti(false), 5000);
      console.log("res", res);
    } catch (err) {
      console.error("Error joining waitlist:", err);
      toast.error("Submission failed. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          {/* ❌ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-3xl font-bold"
            aria-label="Close Modal"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center">
            Join the Waitlist
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              className="font-bold"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="font-bold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-35 bg-gradient-to-r from-cyan-500 to-sky-900 text-white font-bold hover:scale-105 transition"
              >
                Join Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WaitlistModal;
