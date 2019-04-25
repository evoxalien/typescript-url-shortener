#!/bin/bash
export AWS_DEFAULT_PROFILE=johnvenz

echo "Running tsc"
tsc

echo "Zipping Code"
rm publish.zip
cd dist
zip -X -r ../publish.zip *
cd ..

echo "Deploying Code"
aws lambda update-function-code --function-name urlShortener --zip-file fileb://./publish.zip
