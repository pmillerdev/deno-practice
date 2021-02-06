# Deno Practice

To run: `deno run simple_server.ts`

Tun run in watch mode: `deno run --watch --unstable --allow-net simple_server.ts`

Tun run in watch mode without TS checks: `deno run --watch --unstable --allow-net --no-check simple_server.ts`

Performing url http requests: `deno run --allow-net(=pluralsight.com) simple_server.ts`

Reading from file system: `deno run --allow-read(=file.json) simple_server.ts`

Writing to file system: `deno run --allow-write(=.) simple_server.ts`

To use import maps: `deno run ... --unstable --import-map=./import_map.json process_affiliate.ts 5`

To create a cache lockfile: `deno cache --lock=lock.json --lock-write process_affiliate_data.ts`

To run using cache lockfile: `deno run --allow-net --allow-write --lock=lock.json process_affiliate_data.ts 5`

Force a download of modules: `deno cache --reload process_affiliate_data.ts`
