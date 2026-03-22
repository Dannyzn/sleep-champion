export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">Sleep Champion</h1>
        <p className="text-center text-slate-300 mb-8">Track your sleep, compete globally</p>
        <div className="flex justify-center gap-4">
          <a href="/auth/signin" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg">Sign In</a>
          <a href="/auth/signup" className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg">Sign Up</a>
        </div>
      </div>
    </main>
  )
}
