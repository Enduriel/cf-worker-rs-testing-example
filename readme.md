
First generate the repo as per https://github.com/cloudflare/workers-rs#getting-started
```sh
cargo generate cloudflare/workers-rs
```
and select the axum template

Install Wrangler and Miniflare as per https://github.com/cloudflare/workers-rs#step-1-add-wrangler-and-miniflare-to-your-devdependencies
```sh
npm install --save-dev wrangler miniflare
```

Add
```toml
compatibility_flags = [ "nodejs_compat" ]
```
to wrangler.toml as per https://developers.cloudflare.com/workers/testing/vitest-integration/get-started/write-your-first-test/#prerequisites


Install vitest and @cloudflare/vitest-pool-workers as per https://developers.cloudflare.com/workers/testing/vitest-integration/get-started/write-your-first-test/#install-vitest-and-cloudflarevitest-pool-workers
```sh
npm install vitest@1.5.0 --save-dev --save-exact
npm install @cloudflare/vitest-pool-workers --save-dev
```

Copy vitest.config.js from https://developers.cloudflare.com/workers/testing/vitest-integration/get-started/write-your-first-test/#define-vitest-configuration

Add
```json
"scripts": {
  "test": "vitest run"
}
```
to package.json

Copy mf.ts from https://github.com/cloudflare/workers-rs/blob/main/worker-sandbox/tests/mf.ts
and comment out the MockAgent stuff and all the references to specific worker env variables

Create ./test/tests/hello.test.js using the examples in worker-sandbox as a basis

Build worker
```sh
wrangler deploy --dry-run
```

run vitest
```sh
npm test
```