#!/bin/bash

echo "🚀 IgniteXT Database Setup"
echo "=========================="
echo ""
echo "📋 This will:"
echo "   1. Copy the SQL schema to your clipboard"
echo "   2. Open Supabase SQL Editor in your browser"
echo ""
echo "✨ Then you just need to:"
echo "   - Paste (Cmd+V or Ctrl+V)"
echo "   - Click 'Run'"
echo ""
read -p "Press Enter to continue..."

# Copy SQL to clipboard
if command -v pbcopy &> /dev/null; then
    # macOS
    cat backend/supabase-schema.sql | pbcopy
    echo "✅ SQL copied to clipboard (macOS)"
elif command -v xclip &> /dev/null; then
    # Linux with xclip
    cat backend/supabase-schema.sql | xclip -selection clipboard
    echo "✅ SQL copied to clipboard (Linux)"
elif command -v clip &> /dev/null; then
    # Windows
    cat backend/supabase-schema.sql | clip
    echo "✅ SQL copied to clipboard (Windows)"
else
    echo "⚠️  Could not copy to clipboard automatically"
    echo "   Please manually copy: backend/supabase-schema.sql"
fi

echo ""
echo "🌐 Opening Supabase SQL Editor..."
sleep 2

# Open browser
URL="https://supabase.com/dashboard/project/jwkaxzatydstkjbnqxcf/sql/new"

if command -v open &> /dev/null; then
    open "$URL"
elif command -v xdg-open &> /dev/null; then
    xdg-open "$URL"
elif command -v start &> /dev/null; then
    start "$URL"
else
    echo "❌ Could not open browser"
    echo "   Please open: $URL"
fi

echo ""
echo "✨ Next steps in the browser:"
echo "   1. Paste the SQL (Cmd+V or Ctrl+V)"
echo "   2. Click the 'Run' button"
echo "   3. Come back here and press Enter when done"
echo ""
read -p "Press Enter after running the SQL..."

echo ""
echo "🧪 Testing connection..."
cd backend && node test-connection.js
