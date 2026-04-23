# Project 3

Simple storefront with a Node.js + Express backend and static frontend.

## Run locally

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
```

## Deploy

This app is ready for common Node hosting platforms like Render or Railway.

### Required environment variables

- `MAIL_USER`
- `MAIL_PASS`
- `MAIL_TO` optional, defaults to `MAIL_USER`
- `PORT` optional, usually set by the host
- `HOST` optional, defaults to `0.0.0.0`

### Start command

```bash
npm start
```

### Health check

Use:

```text
/health
```

to verify the server is running.

