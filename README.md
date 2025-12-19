# HomeBuddy - Home Service Platform

## Deployment Instructions

### Backend (Render)
1. Push your code to GitHub
2. Connect your GitHub repo to Render
3. Set environment variables in Render dashboard:
   - `NODE_ENV=production`
   - `MONGODB_URI=mongodb+srv://dbHomeBuddy:Jai29Abi@homebuddy.ueyclo1.mongodb.net/?appName=HomeBuddy`
   - `JWT_SECRET=your_secure_jwt_secret`
   - `CLIENT_URL=https://your-vercel-app-url.vercel.app`

### Frontend (Vercel)
1. Push your frontend code to GitHub
2. Connect your GitHub repo to Vercel
3. Set environment variable in Vercel dashboard:
   - `VITE_API_URL=https://your-render-backend-url.onrender.com/api`
4. Build command: `npm run build`
5. Output directory: `dist`

### Local Development
1. Backend: `cd server && npm run dev`
2. Frontend: `cd frontend && npm run dev`

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://dbHomeBuddy:Jai29Abi@homebuddy.ueyclo1.mongodb.net/?appName=HomeBuddy
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```