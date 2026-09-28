#!/bin/bash
set -e

PROJECT_DIR="/home/u662735286/domains/guide.mysztechnology.com/public_html/Mysztech-Frontend"
PUBLIC_DIR="/home/u662735286/domains/guide.mysztechnology.com/public_html"

cd "$PROJECT_DIR"

echo "Fetching production branch..."
git fetch origin production
git reset --hard origin/production

echo "Deploying pre-built dist..."
rsync -av --delete \
    --exclude="Mysztech-Frontend" \
    --exclude=".htaccess" \
    "$PROJECT_DIR/dist/" \
    "$PUBLIC_DIR/"

echo "Deployment complete."