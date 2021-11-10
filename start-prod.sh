#!/bin/sh

echo "---------------------------------------"
echo "-- STARTING GQL-SERVER PROD SCRIPT   --"
echo "---------------------------------------"

npm i
npm run build
npm run start