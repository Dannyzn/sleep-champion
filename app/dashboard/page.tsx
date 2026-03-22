'use client'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sleep Champion</h1>
          <div className="flex gap-4">
            <span>👤 Username</span>
            <button className="text-slate-400">Logout</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <p className="text-slate-400 text-sm">Streak</p>
            <p className="text-3xl font-bold">7 days</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <p className="text-slate-400 text-sm">Avg Sleep</p>
            <p className="text-3xl font-bold">7.5h</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <p className="text-slate-400 text-sm">Rank</p>
            <p className="text-3xl font-bold">#42</p>
          </div>
        </div>

        {/* Check-in Button */}
        <div className="text-center mb-8">
          <a href="/checkin" className="inline-block bg-purple-600 hover:bg-purple-700 px-12 py-4 rounded-lg text-xl font-bold">
            ⏰ Check In Sleep
          </a>
        </div>

        {/* Leaderboards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Night Owl */}
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">🌙 Night Owl Champions</h2>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 mb-3 p-3 bg-slate-700 rounded">
                <span className="text-2xl">#{i}</span>
                <div className="w-10 h-10 bg-purple-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-bold">User{i}</p>
                  <p className="text-sm text-slate-400">Slept at 3:42 AM</p>
                </div>
              </div>
            ))}
          </div>

          {/* Early Bird */}
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">☀️ Early Bird Champions</h2>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 mb-3 p-3 bg-slate-700 rounded">
                <span className="text-2xl">#{i}</span>
                <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-bold">User{i}</p>
                  <p className="text-sm text-slate-400">Slept at 9:15 PM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
