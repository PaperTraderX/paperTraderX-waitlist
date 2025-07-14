// App.tsx
import { toast, Toaster } from "react-hot-toast";
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
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } bg-red-500 text-white p-4 rounded-md shadow-lg w-[380px]`}
        >
          <strong className="block text-base">Email required</strong>
          <span className="text-sm">
            Please enter your email address to join the waitlist.
          </span>
        </div>
      ));
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
        toast.success("✅ You're on the waitlist!");
        setEmail("");
      } else {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } bg-red-500 text-white p-4 rounded-md shadow-lg w-[380px]`}
          >
            <strong className="block text-base">Submission Failed</strong>
            <span className="text-sm">
              Please try again later. If the issue persists, contact support.
            </span>
          </div>
        ));
        return;
      }
    } catch (error) {
      toast.error("Something went wrong. Please try later.");
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
        "Track your ROI, portfolio trends and trading behavior to improve.",
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
        "Get personalized feedback, emotion alerts and portfolio analysis.",
    },
    {
      icon: CalendarDays,
      title: "Gamified Experience",
      description:
        "Earn XP, unlock badges and climb leaderboards to stay motivated.",
    },
    {
      icon: BookOpenCheck,
      title: "Learning Center",
      description:
        "Boost your trading IQ with quizzes, blogs and bite-sized content.",
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
        "Track growth, get certified and showcase your trading progress.",
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

  const faqData = [
    {
      question: "What is PaperTraderX?",
      answer:
        "PaperTraderX is your risk-free gateway to learn, practice and master trading using virtual money.",
    },
    {
      question: "When is the official launch?",
      answer:
        "We’re launching soon! Join the waitlist to be among the first to know and get early access.",
    },
    {
      question: "Will I get any rewards for joining early?",
      answer:
        "Yes! Early supporters will enjoy exclusive perks and priority access when we open up.",
    },
    {
      question: "Do I need trading experience to join?",
      answer:
        "Absolutely not! Whether you're a beginner or a pro, PaperTraderX is built for everyone who wants to learn and practice.",
    },
    {
      question: "How will I know when I get access?",
      answer:
        "We’ll notify you via email when your spot is unlocked - so stay tuned!",
    },
    {
      question: "Is this a real-money trading app?",
      answer:
        "Nope. It’s a virtual trading platform designed for learning, practice and building confidence.",
    },
    {
      question: "How can I join the community?",
      answer:
        "Join the waitlist and follow us on socials - the community will be the first to know about upcoming features.",
    },
    {
      question: "Is PaperTraderX free to use?",
      answer:
        "Absolutely! Signing up and getting started is free - no hidden fees.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Header />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#EF4444", // Tailwind's red-500
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
            fontSize: "14px",
          },
          success: {
            style: { background: "#16A34A" }, // green-600 for success
          },
        }}
      />

      <main className="bg-gradient-to-r from-cyan-500 to-sky-900 text-gray-800 pt-24">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-[70vh] flex flex-col justify-center items-center px-4 text-center"
        >
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
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  {s.icon}
                </div>
                <p className="text-3xl md:text-4xl font-bold">{s.value}</p>
                <p className="text-base text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-sky-900 text-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose PaperTraderX?
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-12">
              Everything you need to become a confident trader<br></br>without
              risking your hard earned money.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105 text-left backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-white/80 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Socials Section */}
      <section id="socials" className="bg-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-[#e7ebee] rounded-3xl shadow-md p-10">
          <h2 className="text-[28px] md:text-[40px] leading-snug font-bold">
            <span className="text-blue-600">Follow our</span>
            <br />
            <span className="text-black font-extrabold">
              Fun Learning Adventures!
            </span>
          </h2>

          <p className="text-gray-700 text-[20px] mt-4 leading-relaxed">
            Follow PaperTraderX on social media for fun trading insights,
            confidence building
            <br />
            and the latest updates.
          </p>
          <p>Let’s learn, grow and conquer the markets together!</p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {/* X (Twitter) */}
            <a
              href="https://x.com/yourpage"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center transition transform hover:scale-105 bg-[#FFECA8] group-hover:bg-black">
                <img
                  src="/socials/xicon.svg"
                  alt="X"
                  className="w-[28px] h-[28px] transition group-hover:invert"
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
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center transition transform hover:scale-105 bg-[#FFECA8] group-hover:bg-red-600">
                <img
                  src="/socials/youtubeicon.svg"
                  alt="YouTube"
                  className="w-[28px] h-[28px] transition group-hover:invert"
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
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center transition transform hover:scale-105 bg-[#FFECA8] group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-600">
                <img
                  src="/socials/instagramicon.svg"
                  alt="Instagram"
                  className="w-[28px] h-[28px] transition group-hover:invert"
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
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center transition transform hover:scale-105 bg-[#FFECA8] group-hover:bg-[#0A66C2]">
                <img
                  src="/socials/linkedinicon.svg"
                  alt="LinkedIn"
                  className="w-[28px] h-[28px] transition group-hover:invert"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="bg-gradient-to-r from-cyan-500 to-sky-900 text-gray-800 py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 font-bold text-lg mb-12">
            Got questions? We've got answers!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-blue-100 font-bold rounded-3xl shadow-md hover:shadow-lg p-6 transition transform hover:scale-105 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {openFAQ === index ? (
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                ) : (
                  <p>{faq.question}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto  bg-[#e7ebee] rounded-3xl p-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Team Behind PaperTraderX
          </h2>
          <p className="font-semibold text-gray-700 text-lg mb-8">
            We want to build with the best. If you're passionate and skilled,
            <br></br>
            we want to hear from you.
          </p>

          <a
            href="https://your-career-form-link.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-sky-900 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Join the Founding Team
          </a>
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
