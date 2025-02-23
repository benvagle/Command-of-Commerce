#!/bin/bash
set -e

BRANCH="gh-pages"

echo "Deploying to GitHub Pages..."

git add .
git commit -m "Deploy update: $(date)"
git push origin $BRANCH

echo "Deployment complete!"

