-- IgniteXT Supabase Database Schema
-- Run this in your Supabase SQL Editor to create all tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- On-demand class requests table
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

-- Class applications table
CREATE TABLE IF NOT EXISTS class_applications (
    id BIGSERIAL PRIMARY KEY,
    request_id TEXT NOT NULL REFERENCES on_demand_requests(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    roll TEXT NOT NULL,
    github TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mentor applications table
CREATE TABLE IF NOT EXISTS mentor_applications (
    id BIGSERIAL PRIMARY KEY,
    role TEXT NOT NULL CHECK (role IN ('student', 'teacher')),
    full_name TEXT NOT NULL,
    github TEXT NOT NULL,
    branch TEXT,
    year TEXT,
    room_number TEXT,
    experience_years INTEGER NOT NULL,
    teaching_count INTEGER NOT NULL,
    project_url TEXT NOT NULL,
    motivation TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contributor applications table
CREATE TABLE IF NOT EXISTS contributor_applications (
    id BIGSERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    github TEXT NOT NULL,
    engineering_path TEXT NOT NULL,
    motivation TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_on_demand_requests_created_at ON on_demand_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_class_applications_request_id ON class_applications(request_id);
CREATE INDEX IF NOT EXISTS idx_class_applications_created_at ON class_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_mentor_applications_created_at ON mentor_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contributor_applications_created_at ON contributor_applications(created_at DESC);

-- Create a function to increment request count
CREATE OR REPLACE FUNCTION increment_request_count(request_id TEXT)
RETURNS void AS $$
BEGIN
    UPDATE on_demand_requests 
    SET count = count + 1, 
        status = 'SYNCING'
    WHERE id = request_id;
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security (RLS) - Optional but recommended
ALTER TABLE on_demand_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contributor_applications ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read/write (adjust based on your security needs)
CREATE POLICY "Allow public read access on on_demand_requests" 
    ON on_demand_requests FOR SELECT 
    USING (true);

CREATE POLICY "Allow public insert on on_demand_requests" 
    ON on_demand_requests FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Allow public update on on_demand_requests" 
    ON on_demand_requests FOR UPDATE 
    USING (true);

CREATE POLICY "Allow public insert on class_applications" 
    ON class_applications FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Allow public insert on mentor_applications" 
    ON mentor_applications FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Allow public insert on contact_submissions" 
    ON contact_submissions FOR INSERT 
    WITH CHECK (true);

CREATE POLICY "Allow public insert on contributor_applications" 
    ON contributor_applications FOR INSERT 
    WITH CHECK (true);

-- Insert some sample data (optional)
INSERT INTO on_demand_requests (id, topic, field, initiator, count, type, status) VALUES
    ('req-1', 'LLM Fine-tuning', 'AI Engineering', 'Core Team', 18, 'ONLINE', 'SYNCING'),
    ('req-2', 'Rust Systems Programming', 'Systems Engineering', 'Core Team', 42, 'OFFLINE', 'PREPARING_CLUSTER'),
    ('req-3', 'Advanced Kubernetes', 'DevOps', 'Core Team', 8, 'ONLINE', 'QUEUED')
ON CONFLICT (id) DO NOTHING;
