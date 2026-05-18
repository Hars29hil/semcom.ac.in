@echo off
title SEMCOM - Startup Manager
echo ===================================================
echo   SEMCOM Modernized Services Startup Manager
echo ===================================================
echo.
echo Starting all services in separate, dedicated terminal windows...
echo.

echo [1/3] Launching Express Backend Server on Port 5000...
start "SEMCOM - Backend Server" cmd /c "start-server.bat"

echo [2/3] Launching Main Website Frontend on Port 3000...
start "SEMCOM - Main Website" cmd /c "start-main.bat"

echo [3/3] Launching Admin Portal Frontend on Port 8080...
start "SEMCOM - Admin Portal" cmd /c "start-admin.bat"

echo.
echo ===================================================
echo All services have been successfully launched!
echo.
echo Ports:
echo - Backend API:  http://localhost:5000
echo - Main Website: http://localhost:3000
echo - Admin Portal: http://localhost:8080
echo ===================================================
echo.
pause
