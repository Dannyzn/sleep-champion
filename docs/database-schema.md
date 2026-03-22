# 数据库设计

## 1. 数据表结构

### users (用户表)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### sleep_records (睡眠记录表)
```sql
CREATE TABLE sleep_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  sleep_time TIMESTAMP NOT NULL,
  wake_time TIMESTAMP NOT NULL,
  duration_minutes INTEGER NOT NULL,
  record_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, record_date)
);
```

---

## 2. 索引设计

```sql
-- 排行榜查询优化
CREATE INDEX idx_sleep_records_date ON sleep_records(record_date);
CREATE INDEX idx_sleep_records_sleep_time ON sleep_records(sleep_time);
CREATE INDEX idx_sleep_records_user_date ON sleep_records(user_id, record_date);
```

---

## 3. 视图设计

### 今日排行榜视图
```sql
CREATE VIEW today_leaderboard AS
SELECT
  u.id,
  u.username,
  u.avatar_url,
  sr.sleep_time,
  sr.duration_minutes,
  RANK() OVER (ORDER BY sr.sleep_time DESC) as late_rank,
  RANK() OVER (ORDER BY sr.sleep_time ASC) as early_rank
FROM users u
JOIN sleep_records sr ON u.id = sr.user_id
WHERE sr.record_date = CURRENT_DATE;
```
