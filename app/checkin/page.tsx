'use client'
import { useState } from 'react'

export default function CheckIn() {
  const [sleepTime, setSleepTime] = useState('')
  const [wakeTime, setWakeTime] = useState('')

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">⏰ Sleep Check-In</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">When did you sleep?</label>
            <input
              type="datetime-local"
              value={sleepTime}
              onChange={(e) => setSleepTime(e.target.value)}
              className="w-full p-3 rounded bg-slate-700 text-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">When did you wake up?</label>
            <input
              type="datetime-local"
              value={wakeTime}
              onChange={(e) => setWakeTime(e.target.value)}
              className="w-full p-3 rounded bg-slate-700 text-white"
            />
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 p-4 rounded-lg font-bold">
            Submit
          </button>
        </div>

        <a href="/dashboard" className="block text-center text-slate-400 mt-4">Back</a>
      </div>
    </div>
  )
}
