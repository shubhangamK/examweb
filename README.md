# ExamWeb 🎯

A production-ready frontend for an Online Competitive Exam Platform 
(similar to GATE/JEE), built with React + Vite.

Consumes REST APIs from [ExamCore](https://github.com/shubhangamK/examcore) 
— a Spring Boot + MongoDB backend.

## Tech Stack
- React 19 + Vite
- React Router DOM v7
- Axios
- JWT Decode

## Project Phases
- [ ] Phase 1 — Authentication (Login, Register, Protected Routes)
- [ ] Phase 2 — Student Dashboard
- [ ] Phase 3 — Exam Attempt (Timer, Questions, Navigator)
- [ ] Phase 4 — Results & Review
- [ ] Phase 5 — Admin Panel

## Getting Started
1. Clone the repo
2. Run `npm install`
3. Copy `.env-example` to `.env` and update values
4. Run `npm run dev`

## Backend
This project requires ExamCore backend running on `http://localhost:8080`
```

Save it, then run:
```
git add README.md
git commit -m "Resolve README merge conflict"
git push