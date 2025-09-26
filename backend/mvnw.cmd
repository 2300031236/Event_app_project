@ECHO OFF
SETLOCAL
set MAVEN_PROJECTBASEDIR=%~dp0
if not defined MAVEN_PROJECTBASEDIR set MAVEN_PROJECTBASEDIR=%CD%
set WRAPPER_JAR=%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.jar
set WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain

if exist "%WRAPPER_JAR%" (
  java -cp "%WRAPPER_JAR%" %WRAPPER_LAUNCHER% %*
) else (
  echo ERROR: %WRAPPER_JAR% not found. Please make sure the Maven Wrapper files are available.
  exit /b 1
)
