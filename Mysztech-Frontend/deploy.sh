#!/bin/bash
set -e

PROJECT_DIR="/home/u662735286/domains/guide.mysztechnology.com/public_html/Mysztech-Frontend"
PUBLIC_DIR="/home/u662735286/domains/guide.mysztechnology.com/public_html"

cd "$PROJECT_DIR"

git pull origin main
npm ci
npm run build

rsync -av --delete \
    --exclude="Mysztech-Frontend" \
    --exclude=".htaccess" \
    "$PROJECT_DIR/dist/" \
    "$PUBLIC_DIR/"