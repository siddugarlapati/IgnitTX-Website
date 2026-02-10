#!/bin/bash

echo "🚀 Installing IgniteXT Platform..."
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Install frontend dependencies
echo -e "${YELLOW}📦 Installing frontend dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
else
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

echo ""

# Install backend dependencies
echo -e "${YELLOW}📦 Installing backend dependencies...${NC}"
cd backend
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backend dependencies installed${NC}"
else
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

cd ..

echo ""
echo -e "${GREEN}✅ Installation complete!${NC}"
echo ""
echo "📝 Next steps:"
echo "1. Setup Supabase database (see SUPABASE_SETUP.md)"
echo "2. Configure environment variables:"
echo "   - Frontend: Add VITE_API_URL to .env.local"
echo "   - Backend: Check backend/.env"
echo "3. Replace public/logo.png with your logo"
echo "4. Run the app:"
echo "   Terminal 1: cd backend && npm run dev"
echo "   Terminal 2: npm run dev"
echo ""
echo "📖 See QUICKSTART.md for detailed instructions"
