
# SkillGPS UI Design

## Services
- `client` (Vite + React): runs on `http://localhost:5173`
- `server` (Node + Express): runs on `http://localhost:5000`
- `python_server` (FastAPI recommender): runs on `http://127.0.0.1:8000`

## Vercel Deployment Notes
- Frontend URL: `https://skillgpsuidesign.vercel.app/`
- Node backend URL: `https://skillgpsuidesign-5r88.vercel.app/`
- Python backend URL: `https://skillgpsuidesign-etwf.vercel.app/`
- `server` is configured to use `/tmp/data/users.json` on Vercel because the project directory is read-only.
- Set env vars in Vercel:
  - Frontend project: `VITE_API_URL=https://skillgpsuidesign-5r88.vercel.app`
  - Node backend project: `PYTHON_API_URL=https://skillgpsuidesign-etwf.vercel.app`
  - Node backend project: `JWT_SECRET`, `GEMINI_API_KEY`
  - Python backend project (optional): `COURSES_DATASET_URL=https://raw.githubusercontent.com/<user>/<repo>/<branch>/python_server/courses.csv`

## Setup
1. Install dependencies:
   - `cd client && npm install`
   - `cd ../server && npm install`
   - `cd ../python_server && pip install -r requirements.txt`
2. Create env files:
   - `client/.env` from `client/.env.example`
   - `server/.env` from `server/.env.example`

## Run
1. Start Python backend:
   - `cd python_server && python app.py`
2. Start Node backend:
   - `cd server && npm run dev`
3. Start frontend:
   - `cd client && npm run dev`
  
