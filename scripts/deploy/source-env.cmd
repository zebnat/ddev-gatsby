@echo off

if "%~1"=="" (
  echo Usage: source-env.cmd ^<env-file^>
  exit /b 1
)

if not exist "%~1" (
  echo Env file not found: %~1
  exit /b 1
)

for /f "usebackq eol=# tokens=1* delims==" %%A in ("%~1") do (
  set "%%A=%%B"
)

exit /b 0
