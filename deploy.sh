#!/bin/bash
set -e

PROJECT_DIR="/home/u662735286/domains/guide.mysztechnology.com/public_html"
PUBLIC_DIR="/home/u662735286/domains/guide.mysztechnology.com/public_html"

cd "$PROJECT_DIR"

echo "Fetching production..."
git fetch origin production
git reset --hard origin/production

echo "Removing old compiled assets..."
rm -rf "$PUBLIC_DIR/assets"

echo "Copying pre-built dist..."
rsync -av "$PROJECT_DIR/dist/" "$PUBLIC_DIR/"

echo "Deployment complete."