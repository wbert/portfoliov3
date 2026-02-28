# Portfolio v3

Next.js app (App Router) with local and Docker-based development workflows.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Docker Development

Run the app in a hot-reload container:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Then open `http://localhost:3000`.

Useful commands:

```bash
# Stop containers
docker compose -f docker-compose.dev.yml down

# Stop and remove named volumes
docker compose -f docker-compose.dev.yml down -v
```

## Notes

- Source is mounted into the container for live reload.
- `node_modules` and `.next` are stored in Docker volumes for better host/container compatibility.
