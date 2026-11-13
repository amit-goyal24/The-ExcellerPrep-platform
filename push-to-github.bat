@echo off
title Push ExcellerPrep to GitHub
echo ===================================================
echo   Pushing ExcellerPrep to GitHub
echo   Repository: https://github.com/amit-goyal24/The-ExcellerPrep-platform.git
echo ===================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Code pushed successfully to GitHub!
) else (
    echo [NOTE] If prompted, please complete the GitHub sign-in in your browser.
)
pause
