#!/bin/bash
export AWS_DEFAULT_PROFILE=johnvenz

tsc

rm publish.zip
cd dist
zip -X -r ../publish.zip *
cd ..
aws lambda update-function-code --function-name urlShortener --zip-file fileb://publish.zip
