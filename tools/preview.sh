#!/usr/bin/env bash
# Preview the blog with the same Ruby version as GitHub Actions.
set -euo pipefail

preview_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required. Install and start Docker Desktop, then run this script again." >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "Docker is not running. Start Docker Desktop, then run this script again." >&2
  exit 1
fi

echo "Preparing the preview at http://localhost:4000 (Ctrl+C to stop)."

exec docker run --rm --init -i \
  --publish 127.0.0.1:4000:4000 \
  --publish 127.0.0.1:35729:35729 \
  --volume "$preview_root:/app" \
  --workdir /app \
  --env BUNDLE_PATH=/app/vendor/bundle \
  ruby:3.4 bash -e -c '
    bundle check || bundle install
    exec bundle exec jekyll serve \
      --livereload --force_polling --host 0.0.0.0 "$@"
  ' preview "$@"
