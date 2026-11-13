@echo off
title Launch Exceller Prep (Presentation Version)
echo ===================================================
echo   Exceller Prep - Major Project Presentation
echo ===================================================
echo.
echo Starting Next.js Server on Port 3000...
start "" http://127.0.0.1:3000
start "" http://127.0.0.1:3000/slides.html
npm run dev

