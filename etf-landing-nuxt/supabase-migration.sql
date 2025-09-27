-- Create the registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  experience VARCHAR(50) NOT NULL CHECK (experience IN ('beginner', 'intermediate', 'advanced')),
  goals TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows insert for anyone (since this is a registration form)
CREATE POLICY "Anyone can insert registrations" ON registrations
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reading for authenticated users only (optional, for admin access)
CREATE POLICY "Authenticated users can view registrations" ON registrations
  FOR SELECT USING (auth.role() = 'authenticated');

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON registrations TO anon;
GRANT USAGE ON SEQUENCE registrations_id_seq TO anon;