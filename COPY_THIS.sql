-- Copy ALL of this and paste into Supabase SQL Editor
-- Then click "Run" button

CREATE TABLE IF NOT EXISTS on_demand_requests (
    id TEXT PRIMARY KEY,
    topic TEXT NOT NULL,
    field TEXT NOT NULL,
    initiator TEXT NOT NULL,
    count INTEGER DEFAULT 1,
    type TEXT DEFAULT 'ONLINE' CHECK (type IN ('ONLINE', 'OFFLINE')),
    status TEXT DEFAULT 'QUEUED' CHECK (status IN ('QUEUED', 'SYNCING', 'PREPARING_CLUSTER')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS class_applications (
    id BIGSERIAL PRIMARY KEY,
    request_id TEXT NOT NULL REFERENCES on_demand_requests(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    roll TEXT NOT NULL,
    github TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS mentor_applications (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contributor_applications (
    id BIGSERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    github TEXT NOT NULL,
    engineering_path TEXT NOT NULL,
    motivation TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE on_demand_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contributor_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON on_demand_requests FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON on_demand_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON on_demand_requests FOR UPDATE USING (true);
CREATE POLICY "Allow public insert apps" ON class_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert contact" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert mentor" ON mentor_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert contrib" ON contributor_applications FOR INSERT WITH CHECK (true);

CREATE OR REPLACE FUNCTION increment_request_count(request_id TEXT)
RETURNS void AS $$
BEGIN
    UPDATE on_demand_requests 
    SET count = count + 1, status = 'SYNCING'
    WHERE id = request_id;
END;
$$ LANGUAGE plpgsql;
