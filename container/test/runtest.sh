#!/usr/bin/env bash
FILE=$(grep -rl ".only(" /application/src/ | head -1)
yarn test $FILE --runInBand --verbose