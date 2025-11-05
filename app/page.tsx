"use client";

import { useState } from "react";

interface Chapter {
  id: number;
  title: string;
  icon: string;
  content: string[];
  rules: string[];
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Foundation of Discipline",
    icon: "🏛️",
    content: [
      "Discipline is not punishment—it is the bridge between goals and accomplishment. It is the commitment to doing what needs to be done, regardless of how you feel.",
      "The disciplined mind understands that motivation is fleeting, but systems are permanent. You don't rise to the level of your goals; you fall to the level of your systems.",
      "Every act of discipline strengthens your character. Like a muscle, discipline grows stronger with consistent use. The pain of discipline weighs ounces, but the pain of regret weighs tons.",
    ],
    rules: [
      "Start before you feel ready",
      "Never break a promise to yourself",
      "Do the hardest task first",
      "Consistency beats intensity",
      "Discipline creates freedom, not restriction",
    ],
  },
  {
    id: 2,
    title: "Mastering Focus in a Distracted World",
    icon: "🎯",
    content: [
      "Focus is your competitive advantage. In an age of infinite distraction, the ability to concentrate deeply on meaningful work is increasingly rare—and therefore increasingly valuable.",
      "Your attention is your most precious resource. Guard it fiercely. Every notification, every interruption, every moment of divided attention is a withdrawal from your potential.",
      "Deep work produces extraordinary results. Shallow work produces busy mediocrity. Choose depth over breadth, quality over quantity, impact over activity.",
    ],
    rules: [
      "One primary goal at a time",
      "Eliminate before you optimize",
      "Create environment barriers for focus",
      "Schedule deep work blocks daily",
      "Embrace boredom to strengthen attention",
    ],
  },
  {
    id: 3,
    title: "The 12 Immutable Rules",
    icon: "📜",
    content: [
      "Rules create order from chaos. They are not constraints—they are the framework that allows excellence to flourish.",
      "These rules are not suggestions or guidelines. They are immutable principles observed in every successful person across history and cultures.",
      "Follow these rules, and success becomes inevitable. Ignore them, and you will struggle indefinitely, regardless of talent or opportunity.",
    ],
    rules: [
      "1. Take full responsibility for your life",
      "2. Define what success means to you",
      "3. Act despite fear",
      "4. Commit to continuous learning",
      "5. Build systems, not goals",
      "6. Control your inputs, not outcomes",
      "7. Embrace discomfort deliberately",
      "8. Guard your morning routine",
      "9. Say no to protect your yes",
      "10. Review and reflect weekly",
      "11. Invest in your body and mind",
      "12. Surround yourself with excellence",
    ],
  },
  {
    id: 4,
    title: "The Five Pillars of Lasting Success",
    icon: "⛩️",
    content: [
      "Success is not a destination—it is a structure built on unshakeable pillars. Remove any pillar, and the entire structure becomes unstable.",
      "These five pillars work synergistically. Strength in one amplifies the others. Weakness in one undermines them all.",
      "Most people focus on tactics and shortcuts. Winners focus on strengthening their pillars every single day.",
    ],
    rules: [
      "Pillar 1: Physical Vitality - Your body is the foundation",
      "Pillar 2: Mental Clarity - A sharp mind cuts through complexity",
      "Pillar 3: Emotional Resilience - Bounce back stronger",
      "Pillar 4: Financial Intelligence - Money is a tool for freedom",
      "Pillar 5: Meaningful Relationships - Success shared is success amplified",
    ],
  },
  {
    id: 5,
    title: "Building Unshakeable Habits",
    icon: "🔗",
    content: [
      "You are what you repeatedly do. Excellence is not an act, but a habit. Your habits are the compound interest of self-improvement.",
      "Small habits, repeated consistently, create extraordinary results. A 1% improvement every day compounds to 37 times better over a year.",
      "The secret to change is not fighting the old, but building the new. Make good behaviors obvious, attractive, easy, and satisfying.",
    ],
    rules: [
      "Stack new habits on existing ones",
      "Start ridiculously small",
      "Track your progress visibly",
      "Never miss twice in a row",
      "Optimize for consistency, not perfection",
    ],
  },
  {
    id: 6,
    title: "The Power of Strategic Thinking",
    icon: "♟️",
    content: [
      "Strategy is the art of making time your ally. Tactics win battles; strategy wins wars. Think long-term in a short-term world.",
      "Every decision is a vote for the person you want to become. Strategic thinking means understanding the second and third-order consequences of your choices.",
      "Plan meticulously, but act decisively. Strategic thinkers spend more time planning than doing, because proper planning reduces wasted effort exponentially.",
    ],
    rules: [
      "Work backward from your ideal future",
      "Prioritize leverage over effort",
      "Build optionality into your plans",
      "Question assumptions regularly",
      "Focus on high-impact activities only",
    ],
  },
  {
    id: 7,
    title: "Resilience Through Adversity",
    icon: "💪",
    content: [
      "Adversity doesn't build character—it reveals it. But how you respond to adversity does build character, one decision at a time.",
      "The obstacle is the way. Every challenge contains the seeds of opportunity. The greatest growth happens in the greatest discomfort.",
      "Resilience is not about avoiding failure—it's about failing forward. Each setback is data. Each failure is feedback. Each obstacle is training.",
    ],
    rules: [
      "Reframe problems as challenges",
      "Control what you can, accept what you can't",
      "Build a support network before you need it",
      "Practice stress inoculation deliberately",
      "Maintain perspective during crisis",
    ],
  },
  {
    id: 8,
    title: "The Daily Success System",
    icon: "☀️",
    content: [
      "How you start your day determines how you live your life. Morning routines are not optional for high performers—they are essential.",
      "The first hour of your day sets the tone for everything that follows. Win the morning, win the day. Win the day, win your life.",
      "Your daily system should be designed, not defaulted. Intentional morning rituals create momentum that carries through your entire day.",
    ],
    rules: [
      "Wake up at the same time daily",
      "Move your body first thing",
      "Prime your mind (meditation/journaling)",
      "Review your top 3 priorities",
      "Eat the frog before checking messages",
    ],
  },
];

const pillars = [
  {
    name: "Physical Vitality",
    icon: "💪",
    description: "Energy is the currency of achievement. Without physical vitality, everything else suffers.",
    practices: [
      "Exercise 30+ minutes daily",
      "Prioritize 7-8 hours of quality sleep",
      "Eat whole foods, minimize processed junk",
      "Stay hydrated throughout the day",
      "Take movement breaks every hour",
    ],
  },
  {
    name: "Mental Clarity",
    icon: "🧠",
    description: "A cluttered mind produces cluttered results. Clarity is power.",
    practices: [
      "Meditate or practice mindfulness daily",
      "Journal to process thoughts and emotions",
      "Limit information consumption",
      "Take regular digital detoxes",
      "Single-task instead of multitask",
    ],
  },
  {
    name: "Emotional Resilience",
    icon: "🛡️",
    description: "Emotional strength determines how far you can go when things get tough.",
    practices: [
      "Practice gratitude daily",
      "Develop a growth mindset",
      "Process emotions, don't suppress them",
      "Build stress management techniques",
      "Maintain perspective during challenges",
    ],
  },
  {
    name: "Financial Intelligence",
    icon: "💰",
    description: "Money is not the goal—freedom is. Financial intelligence creates options.",
    practices: [
      "Live below your means",
      "Invest before you spend",
      "Build multiple income streams",
      "Continuously educate yourself financially",
      "Make decisions for long-term wealth",
    ],
  },
  {
    name: "Meaningful Relationships",
    icon: "🤝",
    description: "Success without relationships is hollow. Your network is your net worth.",
    practices: [
      "Invest time in key relationships",
      "Add value before asking for value",
      "Communicate clearly and honestly",
      "Surround yourself with ambitious peers",
      "Be the person others want to be around",
    ],
  },
];

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [showPillars, setShowPillars] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            THE UNBREAKABLE PATH
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Master Discipline, Focus, and the Rules for Extraordinary Success
          </p>
          <p className="text-lg text-blue-200 italic">
            "Success is not an accident. It's a system."
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Welcome to Your Transformation
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              This is not another self-help book filled with fluffy motivation
              and empty promises. This is a blueprint—a systematic approach to
              building the discipline, focus, and mental frameworks required for
              lasting success.
            </p>
            <p>
              You're about to learn the principles that separate the top 1% from
              everyone else. These aren't theories—they're battle-tested rules
              followed by the most successful people in every field.
            </p>
            <p className="font-semibold text-gray-900">
              The question is not whether these principles work. The question is:
              will you have the discipline to apply them?
            </p>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Chapters
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className={`chapter-card cursor-pointer ${
                selectedChapter?.id === chapter.id
                  ? "border-blue-600"
                  : "border-gray-300"
              }`}
              onClick={() =>
                setSelectedChapter(
                  selectedChapter?.id === chapter.id ? null : chapter
                )
              }
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{chapter.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Chapter {chapter.id}
                  </h3>
                  <p className="text-lg text-gray-700">{chapter.title}</p>
                </div>
              </div>
              {selectedChapter?.id === chapter.id && (
                <div className="mt-6 space-y-4 animate-fadeIn">
                  {chapter.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-6 bg-blue-50 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">
                      Key Principles:
                    </h4>
                    <ul className="space-y-2">
                      {chapter.rules.map((rule, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-800"
                        >
                          <span className="text-blue-600 font-bold mt-1">
                            ▸
                          </span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Five Pillars */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              The Five Pillars of Lasting Success
            </h2>
            <p className="text-xl text-gray-700">
              Build your life on these unshakeable foundations
            </p>
            <button
              onClick={() => setShowPillars(!showPillars)}
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              {showPillars ? "Hide" : "Explore"} The Five Pillars
            </button>
          </div>

          {showPillars && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="text-center mb-4">
                    <span className="text-5xl">{pillar.icon}</span>
                    <h3 className="text-2xl font-bold mt-3 text-gray-900">
                      {pillar.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-center italic">
                    {pillar.description}
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-gray-900">
                      Daily Practices:
                    </h4>
                    <ul className="space-y-2">
                      {pillar.practices.map((practice, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-purple-600">✓</span>
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Your Journey Starts Now</h2>
          <p className="text-xl mb-8 text-gray-300">
            Knowledge without action is worthless. You now have the blueprint.
            The only question is: what will you do with it?
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              The 30-Day Challenge
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Commit to implementing one principle from each chapter every day
              for 30 days. Track your progress. Watch your life transform.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-bold mb-2">📅 Days 1-10</p>
                <p className="text-sm text-gray-300">
                  Build foundation with discipline and focus practices
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-bold mb-2">📅 Days 11-20</p>
                <p className="text-sm text-gray-300">
                  Strengthen the five pillars systematically
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-bold mb-2">📅 Days 21-30</p>
                <p className="text-sm text-gray-300">
                  Integrate all principles into your daily system
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-2xl font-bold">
            Success is a choice. Choose discipline. Choose focus. Choose
            excellence.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
        <p className="text-sm">
          "The path to success is simple, but simple doesn't mean easy."
        </p>
        <p className="text-xs mt-4">
          © 2025 The Unbreakable Path. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
