@echo off
rem 一键启动作品集网站预览：双击本文件即可
cd /d "%~dp0"
set "PATH=%USERPROFILE%\.local\lib\node-v22.14.0-win-x64;%PATH%"
echo ============================================
echo   正在启动麦林杰作品集网站预览...
echo   浏览器将自动打开 http://127.0.0.1:5173
echo   关闭本窗口即停止预览
echo ============================================
start "" "http://127.0.0.1:5173"
call npm run dev
