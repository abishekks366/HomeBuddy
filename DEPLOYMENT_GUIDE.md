# HomeBuddy Deployment Guide

## 🚀 Quick Setup Summary

Your backend is now configured for MongoDB Atlas and ready for deployment!

## 📋 Pre-Deployment Checklist

### 1. MongoDB Atlas Setup
- ✅ Connection string configured
- ⚠️  **IMPORTANT**: Add your IP address to MongoDB Atlas whitelist:
  1. Go to MongoDB Atlas dashboard
  2. Navigate to Network Access
  3. Click "Add IP Address"
  4. Add `0.0.0.0/0` for all IPs (or your specific IPs)

### 2. Backend Deployment (Render)
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Set these environment variables:
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://dbHomeBuddy:Jai29Abi@homebuddy.ueyclo1.mongodb.net/homebuddy?retryWrites=true&w=majority&appName=HomeBuddy
   JWT_SECRET=your_secure_random_jwt_secret_here
   CLIENT_URL=https://your-vercel-app.vercel.app
   ```
5. Build Command: `npm install`
6. Start Command: `npm start`

### 3. Frontend Deployment (Vercel)
1. Push frontend code to GitHub
2. Import project to Vercel
3. Set environment variable:
   ```
   VITE_API_URL=https://your-render-app.onrender.com/api
   ```
4. Deploy

## 🔧 Local Development
```bash
# Backend
cd server
npm install
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

## 🔍 Testing Connection
```bash
cd server
node test-atlas-connection.js
```

## 📝 Important Notes
- Update `CLIENT_URL` in Render with your actual Vercel URL
- Update `VITE_API_URL` in Vercel with your actual Render URL
- Ensure MongoDB Atlas IP whitelist includes `0.0.0.0/0` for Render deployment
- Generate a strong JWT secret for production