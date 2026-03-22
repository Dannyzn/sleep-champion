export interface SleepRecord {
  id: string
  user_id: string
  sleep_time: string
  wake_time: string
  duration_minutes: number
  quality_rating?: number
  notes?: string
  record_date: string
  created_at: string
}

export interface UserProfile {
  id: string
  username: string
  avatar_url?: string
  is_premium: boolean
  premium_expires_at?: string
  timezone: string
}

export interface LeaderboardEntry {
  user_id: string
  username: string
  avatar_url?: string
  sleep_time: string
  rank: number
}
