# Deno Practice

To run: `deno run simple_server.ts`

Tun run in watch mode: `deno run --watch --unstable --allow-net simple_server.ts`

Tun run in watch mode without TS checks: `deno run --watch --unstable --allow-net --no-check simple_server.ts`

Performing url http requests: `deno run --allow-net(=pluralsight.com) simple_server.ts`

Reading from file system: `deno run --allow-read(=file.json) simple_server.ts`

Writing to file system: `deno run --allow-write(=.) simple_server.ts`
