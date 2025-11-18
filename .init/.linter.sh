#!/bin/bash
cd /home/kavia/workspace/code-generation/figma-ui-component-library-57-66/angular_library_generator
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

