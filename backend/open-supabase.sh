#!/bin/bash

echo "🚀 Opening Supabase SQL Editor..."
echo ""
echo "📋 Instructions:"
echo "   1. The SQL Editor will open in your browser"
echo "   2. Copy the content from: backend/supabase-schema.sql"
echo "   3. Paste it into the editor"
echo "   4. Click the 'Run' button"
echo ""
echo "Opening browser in 3 seconds..."
sleep 3

# Open the Supabase SQL editor
open "https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr/sql/new" 2>/dev/null || \
xdg-open "https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr/sql/new" 2>/dev/null || \
start "https://supabase.com/dashboard/project/isrkbkrznjnirzihdzzr/sql/new" 2>/dev/null || \
echo "❌ Could not open browser automatically"

echo ""
echo "✨ After running the SQL, test with: node test-connection.js"
