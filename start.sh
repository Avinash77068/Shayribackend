#!/bin/bash

# Shayri Backend API Startup Script
# This script sets up and starts the backend server

echo "🚀 Starting Shayri Backend API Setup..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚙️  Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created. Please update it with your configuration."
fi

# Start the server
echo "🌟 Starting the server..."
echo "📊 Server will be available at: http://localhost:5000"
echo "🔍 Health check: http://localhost:5000/health"
echo "📚 API endpoints: http://localhost:5000/api"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start in development mode if nodemon is installed, otherwise use node
if command -v nodemon &> /dev/null; then
    npm run dev
else
    npm start
fi
