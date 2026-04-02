# ExamWeb 🎯

A production-ready frontend for an Online Competitive Exam Platform
(similar to GATE/JEE), built with React + Vite.

Consumes REST APIs from [ExamCore](https://github.com/shubhangamK/examcore)
— a Spring Boot + MongoDB backend.

## Tech Stack

- React 19 + Vite 8
- React Router DOM v7
- Axios (with interceptors)
- JWT Decode
- Tailwind CSS v4

## Project Phases

- [x] Phase 0 — Project Setup
- [x] Phase 1 — Authentication (Login, Register, Protected Routes)
- [ ] Phase 2 — Student Dashboard
- [ ] Phase 3 — Exam Attempt (Timer, Questions, Navigator)
- [ ] Phase 4 — Results & Review
- [ ] Phase 5 — Admin Panel

## Getting Started

1. Clone the repo
2. Run `npm install`
3. Copy `.env-example` to `.env` and update values
4. Make sure ExamCore backend is running on `http://localhost:8080`
5. Run `npm run dev`

## Features Completed

- JWT authentication with role-based access
- Protected routes (STUDENT/ADMIN)
- Token persistence across page refresh
- Global auth state via React Context
- Axios interceptor for automatic token attachment

## Backend

This project requires [ExamCore](https://github.com/shubhangamK/examcore)
backend running on `http://localhost:8080`
