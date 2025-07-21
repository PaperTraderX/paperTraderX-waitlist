import { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./components/ui/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import {
  Shield,
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  Bot,
  CalendarDays,
  BookOpenCheck,
  DollarSign,
  LineChart,
} from "lucide-react";
import WaitlistModal from "./WaitlistModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [referralId, setReferralId] = useState(null);
  const [referralLink, setReferralLink] = useState("");
  const [width, height] = useWindowSize();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) setReferralId(ref);
  }, []);

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
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        referralId={referralId}
        onSuccess={(res) => {
          setIsSubmitted(true);
          setShowConfetti(true);
          setReferralLink(res.referralLink);
        }}
      />

      {showConfetti && <Confetti width={width} height={height} />}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#EF4444",
            color: "black",
            padding: "16px",
            borderRadius: "8px",
            fontSize: "14px",
          },
          success: {
            style: { background: "white" },
          },
        }}
      />

      <main className="bg-gradient-to-r from-cyan-500 to-sky-900 text-gray-800 pt-24">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-[70vh] flex flex-col justify-center items-center px-4 text-center scroll-mt-[100px]"
        >
          <div className="max-w-3xl w-full space-y-4 sm:space-y-6">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs sm:text-sm bg-green-100 text-green-800 font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Coming Soon - Join the Waitlist
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
              PaperTraderX
            </h1>

            <h2 className="text-lg sm:text-2xl text-white font-semibold">
              Master the Market Without Risk
            </h2>

            <p className="text-white text-sm sm:text-base">
              The ultimate paper trading platform where you can practice trading
              strategies, learn market dynamics, and build confidence — all with
              virtual money.
            </p>

            {isSubmitted ? (
              <div className="bg-white text-green-500 rounded-lg py-4 px-6 font-semibold text-lg shadow text-center space-y-2">
                <div className="text-2xl font-bold text-green-500">
                  You're in! 🎉
                </div>
                <div className="text-green-500">
                  We'll notify you as soon as{" "}
                  <span className="font-bold">PaperTraderX</span> launches.
                </div>
                {referralLink && (
                  <div className="text-black text-base mt-2">
                    <span className="font-semibold">
                      Share your referral link and unlock exclusive rewards
                    </span>
                    <br />
                    <a
                      href={referralLink}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-blue-600 break-words"
                    >
                      {referralLink}
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-4">
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="h-10 px-6 text-sm sm:h-12 sm:px-8 bg-gradient-to-r from-cyan-500 to-sky-900 text-white font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            <p className="text-xs sm:text-sm text-white mt-2 sm:mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 sm:py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {s.icon}
                </div>
                <p className="text-2xl sm:text-3xl font-bold">{s.value}</p>
                <p className="text-xs sm:text-base text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          id="features"
          className="py-12 sm:py-20 bg-gradient-to-r from-cyan-500 to-sky-900 text-white text-center px-4 scroll-mt-[50px]"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Why Choose PaperTraderX?
            </h2>
            <p className="text-white/80 text-sm sm:text-lg mb-8 sm:mb-12">
              Everything you need to become a confident trader
              <br /> without risking your hard-earned money.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105 text-left backdrop-blur-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Socials Section */}
      <section
        id="socials"
        className="bg-white py-10 sm:py-16 px-4 sm:px-6 text-center scroll-mt-[50px]"
      >
        <div className="max-w-3xl mx-auto bg-[#e7ebee] rounded-3xl shadow-md p-6 sm:p-10">
          <h2 className="text-2xl sm:text-4xl font-bold leading-snug">
            <span className="text-blue-600">Follow our</span>
            <br />
            <span className="text-black font-extrabold">
              Fun Learning Adventures!
            </span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-lg mt-3 sm:mt-4">
            Follow PaperTraderX on social media for fun insights
            <br /> and the latest updates.
          </p>
          <p>Let’s learn, grow and conquer the markets together!</p>

          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
                        {/* X (Twitter) */}
            <a
              href="https://x.com/paperTraderX"
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
            {/* <a
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
            </a> */}

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
              href="https://linkedin.com/company/papertraderx"
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
      <section
        id="faqs"
        className="bg-gradient-to-r from-cyan-500 to-sky-900 text-gray-800 py-10 sm:py-16 px-4 text-center scroll-mt-[50px]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 font-bold text-sm sm:text-lg mb-6 sm:mb-12">
            Got questions? We've got answers!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-blue-100 font-bold rounded-3xl shadow-md hover:shadow-lg p-4 sm:p-6 transition transform hover:scale-105 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {openFAQ === index ? (
                  <p className="text-xs sm:text-sm text-gray-600">
                    {faq.answer}
                  </p>
                ) : (
                  <p className="text-xs sm:text-base">{faq.question}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="py-16 px-6 text-center scroll-mt-[50px]">
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
            href="https://forms.gle/qAgxPBoWENLx9xnV8"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-sky-900 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Join the Founding Team
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-sky-900 text-gray-800 py-10 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-base sm:text-xl text-white mb-6 sm:mb-8">
            Join thousands of future traders mastering the markets with
            PaperTraderX.
            <br />
            <span>No risk, all reward.</span>
          </p>

          <div className="max-w-md mx-auto">
            {isSubmitted ? (
                            <div className="bg-white text-green-500 rounded-lg py-4 px-6 font-semibold text-lg shadow text-center space-y-2">
                <div className="text-2xl font-bold text-green-500">
                  You're in! 🎉
                </div>
                <div className="text-green-500">
                  We'll notify you as soon as{" "}
                  <span className="font-bold">PaperTraderX</span> launches.
                </div>
                {referralLink && (
                  <div className="text-black text-base mt-2">
                    <span className="font-semibold">
                      Share your referral link and unlock exclusive rewards
                    </span>
                    <br />
                    <a
                      href={referralLink}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-blue-600 break-words"
                    >
                      {referralLink}
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-center">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="h-10 px-6 text-sm sm:h-12 sm:px-8 bg-gradient-to-r from-cyan-500 to-sky-900 text-white font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
