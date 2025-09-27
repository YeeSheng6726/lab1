# Supabase Integration Setup Guide

## Overview

Your ETF Mastery landing page has been successfully integrated with Supabase! This document explains the setup and provides instructions for completing the configuration.

## What's Been Configured

### 1. Dependencies Installed
- `@supabase/supabase-js` - Official Supabase JavaScript client

### 2. Environment Configuration
- **File**: `.env`
- **Variables**:
  - `SUPABASE_URL`: Your Supabase project URL
  - `SUPABASE_KEY`: Your Supabase anon public key

### 3. Nuxt Configuration
- **File**: `nuxt.config.ts`
- **Updates**: Added Supabase environment variables to `runtimeConfig.public`

### 4. Supabase Client Setup
- **File**: `composables/useSupabase.ts`
- **Features**:
  - Creates Supabase client instance
  - Exports TypeScript interface for registration data
  - Reusable across the application

### 5. Form Integration
- **File**: `app.vue`
- **Features**:
  - Form validation with real-time feedback
  - Supabase database insertion
  - Error handling and user notifications
  - Form reset after successful submission

## Required: Database Setup

To complete the integration, you need to create the database table in your Supabase dashboard:

### Step 1: Access Supabase Dashboard
1. Go to [supabase.com](https://supabase.com)
2. Sign in to your account
3. Navigate to your project: `acsxbxuvkunoefntoegp`

### Step 2: Run Database Migration
1. Go to the **SQL Editor** in your Supabase dashboard
2. Copy the contents of `supabase-migration.sql` file
3. Paste it into the SQL Editor
4. Click **Run** to execute the migration

The migration will:
- Create a `registrations` table with all required fields
- Set up proper indexes for performance
- Configure Row Level Security (RLS)
- Create policies for anonymous insertions
- Grant necessary permissions

### Table Structure
```sql
registrations (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  experience VARCHAR(50) NOT NULL,
  goals TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)
```

## Testing the Integration

### Step 1: Start Development Server
```bash
cd etf-landing-nuxt
npm run dev
```

### Step 2: Fill Out Registration Form
1. Navigate to `http://localhost:3000`
2. Scroll down to the registration form
3. Fill out all required fields:
   - First Name
   - Last Name
   - Email Address
   - Phone Number
   - Investment Experience Level (dropdown)
   - Investment Goals (optional)

### Step 3: Submit and Verify
1. Click "Register Now - $497"
2. Check for success notification
3. Verify data in Supabase dashboard:
   - Go to **Table Editor**
   - Select `registrations` table
   - Confirm new record appears

## Form Fields Mapping

| Form Field | Database Column | Required | Type |
|------------|----------------|----------|------|
| First Name | `first_name` | Yes | VARCHAR(100) |
| Last Name | `last_name` | Yes | VARCHAR(100) |
| Email Address | `email` | Yes | VARCHAR(255) |
| Phone Number | `phone` | Yes | VARCHAR(20) |
| Investment Experience Level | `experience` | Yes | VARCHAR(50) |
| Investment Goals | `goals` | No | TEXT |

## Experience Level Options
- `beginner` - Beginner (0-2 years)
- `intermediate` - Intermediate (2-5 years)
- `advanced` - Advanced (5+ years)

## Security Features

### Row Level Security (RLS)
- **Enabled**: Protects data access
- **Anonymous Insert Policy**: Allows form submissions without authentication
- **Authenticated Read Policy**: Only authenticated users can view registrations

### Data Validation
- **Client-side**: Real-time form validation with visual feedback
- **Database-side**: Constraints and data type validation
- **Email uniqueness**: Prevents duplicate registrations

## Error Handling

The integration includes comprehensive error handling:

### Client-side Validation
- Required field validation
- Email format validation
- Visual feedback with border color changes
- User-friendly error notifications

### Server-side Error Handling
- Supabase connection errors
- Database constraint violations
- Network connectivity issues
- Graceful error messages for users

## Monitoring and Analytics

### Console Logging
- Form submission data logged to browser console
- Supabase errors logged for debugging
- Success confirmations logged

### Supabase Dashboard
- View all registrations in real-time
- Monitor database performance
- Check API usage and limits

## Next Steps

1. **Run the database migration** using the provided SQL file
2. **Test the form submission** to ensure everything works
3. **Customize notifications** if needed
4. **Set up email confirmations** (optional)
5. **Add admin dashboard** to view registrations (optional)

## Troubleshooting

### Common Issues

**Form submission fails with "Registration failed"**
- Check if database migration was run correctly
- Verify environment variables are set correctly
- Check browser console for detailed error messages

**"Please select an item in the list" error**
- Make sure to select an option from the Investment Experience Level dropdown
- This is a required field

**Database connection errors**
- Verify SUPABASE_URL and SUPABASE_KEY in `.env` file
- Check if Supabase project is active
- Ensure RLS policies are configured correctly

### Getting Help

If you encounter any issues:
1. Check the browser console for error messages
2. Review the Supabase dashboard for API errors
3. Verify all environment variables are correctly set
4. Ensure the database migration was successful

## File Structure

```
etf-landing-nuxt/
├── .env                          # Environment variables
├── nuxt.config.ts               # Nuxt configuration
├── composables/
│   └── useSupabase.ts           # Supabase client setup
├── app.vue                      # Main application with form
├── supabase-migration.sql       # Database setup script
└── SUPABASE_SETUP.md           # This documentation
```

Your Supabase integration is now complete and ready for testing!