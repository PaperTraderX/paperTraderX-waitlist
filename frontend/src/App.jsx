// App.tsx
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Shield,
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  Bot,
  CalendarDays,
  BookOpenCheck,
  Lock,
  DollarSign,
  LineChart,
} from "lucide-react";

const App = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("❌ Please enter your email address.");
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        alert("✅ You're on the waitlist!");
        setEmail("");
      } else {
        alert("❌ Submission failed, try again.");
      }
    } catch (error) {
      alert("❌ Something went wrong.");
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Risk-Free Trading",
      description:
        "Practice with virtual money - learn without losing real capital",
    },
    {
      icon: BarChart3,
      title: "Real Market Data",
      description: "Trade with live market prices and realistic conditions",
    },
    {
      icon: LineChart,
      title: "Performance & Portfolio Insights",
      description:
        "Track your ROI, portfolio trends, and trading behavior to improve.",
    },
    {
      icon: Zap,
      title: "Instant Execution",
      description:
        "Lightning-fast order execution just like real trading platforms",
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Learn from other traders and share strategies safely",
    },
    {
      icon: Bot,
      title: "AI Trading Coach",
      description:
        "Get personalized feedback, emotion alerts, and portfolio analysis.",
    },
    {
      icon: CalendarDays,
      title: "Gamified Experience",
      description:
        "Earn XP, unlock badges, and climb leaderboards to stay motivated.",
    },
    {
      icon: BookOpenCheck,
      title: "Learning Center",
      description:
        "Boost your trading IQ with quizzes, blogs, and bite-sized content.",
    },
    {
      icon: Lock,
      title: "Secure Login",
      description: "Start with OTP or Google and secure your account with 2FA.",
    },
    {
      icon: DollarSign,
      title: "Rechargeable Wallet",
      description: "Top up your virtual account with $1K using just $10",
    },
    {
      icon: TrendingUp,
      title: "Progress & Certificates",
      description:
        "Track growth, get certified, and showcase your trading progress.",
    },
  ];

  const stats = [
    {
      label: "Future & Spot Trades",
      value: "10,000+",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      label: "Virtual Portfolio Value",
      value: "$10K",
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    },
    {
      label: "Markets Available",
      value: "500+",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    },
    {
      label: "Success Rate",
      value: "99.99%",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-gradient-to-r from-cyan-500 to-sky-900 text-gray-800 pt-24">
        {/* Hero Section */}
        <section id="hero" className="min-h-[70vh] flex flex-col justify-center items-center px-4 text-center">
          <div className="max-w-3xl w-full space-y-6">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm bg-green-100 text-green-800 font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Coming Soon - Join the Waitlist
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              PaperTraderX
            </h1>

            <h2 className="text-xl md:text-2xl text-white">
              Master the Market Without Risk
            </h2>

            <p className="text-white text-md md:text-lg">
              The ultimate paper trading platform where you can practice trading
              strategies, learn market dynamics and build confidence – all with
              virtual money.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-[300px] font-bold h-12 text-base bg-white/20 border-white/30 text-white placeholder:text-white/100 focus:bg-white/30"
              />
              <Button
                type="submit"
                className="h-12 px-8 bg-gradient-to-r from-cyan-500 to-sky-900 text-white font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>

            {isSubmitted && (
              <p className="text-green-600 font-medium mt-4">
                🎉 You're on the waitlist! We'll notify you when we launch.
              </p>
            )}

            <p className="text-sm text-white mt-4">
              No spam. Unsubscribe anytime. Be the first to trade risk-free.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((s, idx) => (
              <div key={idx}>
                <div className="w-16 h-16 rounded-full bg-blue-100 shadow flex items-center justify-center mx-auto mb-4">
                  {s.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold">{s.value}</p>
                <p className="text-base text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-[#f4faff] text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Why Choose PaperTraderX?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12">
            Everything you need to become a confident trader, without risking
            your hard-earned money.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Socials Section */}
      <section
        id="socials"
        className="bg-[#F0F9FF] pt-10 pb-16 px-6 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] leading-snug font-bold">
            <span className="text-blue-600">Follow our</span>
            <br />
            <span className="text-black font-extrabold">
              fun learning adventures !
            </span>
          </h2>

          <p className="text-gray-700 text-[20px] mt-4 leading-relaxed">
            Follow PaperTraderX on social media for fun trading insights,
            confidence building,
            <br />
            and the latest updates.
          </p>
          <p>Let’s learn and grow together!</p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {/* X (Twitter) */}
            <a
              href="https://x.com/yourpage"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center transition transform hover:scale-105 hover:bg-[#000000] bg-[#FFECA8]">
                <img
                  src="/socials/xicon.svg"
                  alt="X"
                  className="w-[28px] h-[28px] group-hover:invert"
                />
              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/yourpage"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center transition transform hover:scale-105 hover:bg-[#FF0000] bg-[#FFECA8]">
                <img
                  src="/socials/youtubeicon.svg"
                  alt="YouTube"
                  className="w-[28px] h-[28px] group-hover:invert"
                />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-[#FFECA8] transition transform hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-600">
                <img
                  src="/socials/instagramicon.svg"
                  alt="Instagram"
                  className="w-[28px] h-[28px] group-hover:invert"
                />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/yourpage"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center transition transform hover:scale-105 hover:bg-[#0A66C2] bg-[#FFECA8]">
                <img
                  src="/socials/linkedinicon.svg"
                  alt="LinkedIn"
                  className="w-[28px] h-[28px] group-hover:invert"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-sky-900 text-gray-800 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of future traders who are preparing to master the
            markets with PaperTraderX.
            <p>No risk, all reward.</p>
          </p>
          <div className="max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-[300px] font-bold h-12 text-base bg-white/20 border-white/30 text-white placeholder:text-white/100 focus:bg-white/30"
              />
              <Button
                type="submit"
                className="h-12 px-8 bg-gradient-to-r from-cyan-500 to-sky-900 text-white font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
