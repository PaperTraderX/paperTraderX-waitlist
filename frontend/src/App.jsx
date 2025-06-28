import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      alert("✅ You’re on the waitlist!");
      setEmail("");
    } else {
      alert("❌ Failed, try again.");
    }
  };

  return (
    <>
      {/* 1️⃣ Header at the top */}
      <Header />

      {/* 2️⃣ Main content with top padding */}
      <div className="pt-20 flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Join PaperTraderX Waitlist 🚀
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-black text-white p-3 rounded hover:bg-gray-800 transition"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
      {/* 3️⃣ Footer at the bottom */}
      <Footer />
    </>
  );
}

export default App;
