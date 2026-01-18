'use client'

import React, { useState } from 'react'

const page = () => {
  const [activeMessage, setActiveMessage] = useState(0)

  const ceoMessages = [
    {
      id: 1,
      title: "Our Purpose",
      content: "We're not just publishing content; we're building a community of thinkers. Every word you write should add value, spark conversation, and make someone's day better.",
      author: "The Founder"
    },
    {
      id: 2,
      title: "Quality Over Quantity",
      content: "One exceptional article is worth a hundred mediocre ones. Take the time to research, write, and polish. Your readers deserve your best work.",
      author: "The Editor"
    },
    {
      id: 3,
      title: "Your Voice Matters",
      content: "Don't try to sound like everyone else. Your unique perspective is what makes our platform special. Be authentic, be bold, be you.",
      author: "The Content Lead"
    }
  ]

  const goldenRules = [
    "Every article must teach something valuable",
    "Respect your readers' time - be concise",
    "Always fact-check before publishing",
    "Engage with every comment thoughtfully",
    "Take breaks - burned out writers create poor content",
    "Read what you write out loud before publishing",
    "One powerful story beats ten generic lists"
  ]

  const dailyMantras = [
    "📝 Today, I will write something worth reading",
    "💡 I will share one new idea that helps someone",
    "🎯 My words will be clear, helpful, and authentic",
    "✨ I will make the internet a slightly better place",
    "🤝 I will connect, not just broadcast"
  ]

  const [activeMantra, setActiveMantra] = useState(0)

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-12">
        
        {/* Welcome Message */}
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-800 mb-3">
            Welcome to Your Writing Space
          </h1>
          <p className="text-gray-600">
            This is where meaningful content is born
          </p>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-6"></div>
        </div>

        {/* CEO/Leadership Messages */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-medium text-gray-700">From The Leadership</h2>
            <div className="flex space-x-2">
              {ceoMessages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMessage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeMessage === index 
                      ? 'bg-indigo-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  title={`View message ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-lg font-medium text-gray-800 mb-2">
              {ceoMessages[activeMessage].title}
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {ceoMessages[activeMessage].content}
            </p>
            <div className="text-right">
              <span className="text-sm text-gray-500">
                — {ceoMessages[activeMessage].author}
              </span>
            </div>
          </div>
        </div>

        {/* Golden Rules */}
        <div>
          <h2 className="text-2xl font-medium text-gray-700 mb-6 text-center">
            Our Golden Rules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goldenRules.map((rule, index) => (
              <div 
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50/30 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-200 to-amber-300 flex items-center justify-center text-amber-800 text-sm font-bold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700 group-hover:text-gray-800">
                    {rule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Mantra */}
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Today's Writing Mantra
          </h3>
          <div 
            className="max-w-xl mx-auto p-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl border border-blue-100 cursor-pointer hover:from-blue-50 hover:to-indigo-50 transition-all duration-500"
            onClick={() => setActiveMantra((prev) => (prev + 1) % dailyMantras.length)}
          >
            <p className="text-xl text-gray-700">
              {dailyMantras[activeMantra]}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Click to refresh your mantra • Tap for inspiration
            </p>
          </div>
        </div>

        {/* Final Thought */}
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-gray-500 italic">
            Remember: Great writing isn't about being perfect. It's about being helpful.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Your next post could change someone's perspective. Make it count.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page