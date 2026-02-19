# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

n8n custom node plugin (`n8n-nodes-plentymarkets`) that integrates the Plentymarkets/PlentyONE e-commerce ERP with n8n workflow automation. TypeScript, compiled to CommonJS.

## Commands

```bash
npm run build        # TypeScript compile + copy SVG icons to dist/
npm run dev          # tsc --watch for development
npm run lint         # ESLint check (.ts, .js)
npm run lintfix      # ESLint auto-fix
npm run format       # Prettier on nodes/**/*.ts and credentials/**/*.ts
```

Build before testing changes in n8n: `npm run build`

## Architecture

Two source files drive the entire plugin:

- **`credentials/PlentymarketsApi.credentials.ts`** — Implements `ICredentialType`. Supports PlentyONE (plentyone.de) and custom URL environments. Fields: username/email, password, optional OAuth2 client ID/secret. Has a `preAuthentication` hook that sets the default PlentyONE base URL.

- **`nodes/Plentymarkets/Plentymarkets.node.ts`** (~2,345 lines) — Single `INodeType` implementation covering 16 resources and 40+ operations. All logic lives in the `execute()` method.

### execute() structure (line ~1890)

1. **Authentication**: `getAccessToken()` calls `POST /rest/login` with credentials, caches the Bearer token for the execution run.
2. **API wrapper**: `plentyRequest(method, endpoint, body?, qs?)` prepends `/rest` to all endpoints, attaches the Bearer token, wraps errors in `NodeApiError`.
3. **Dispatch**: Nested `if/else` on `resource` then `operation` — each branch gathers parameters via `this.getNodeParameter()`, builds the request body, and calls `plentyRequest`.
4. **Loop**: Iterates over all input items with `continueOnFail()` error handling.

### Resources

Commerce: order, contact, address, payment, shipping, document
Catalog: item, variation, category, property, propertySelection, manufacturer
Inventory: stock, warehouse, salesPrice, barcode

### Adding a new resource/operation

1. Add the resource option to the `resource` property's `options` array (alphabetical within its category group).
2. Add an `operation` property with `displayOptions.show.resource: ['yourResource']`.
3. Add parameter properties with appropriate `displayOptions`.
4. Add the `if (resource === 'yourResource')` branch in `execute()`.
5. UI labels are bilingual: German first, English in parentheses — e.g., `'Erstellen (Create)'`.

## Conventions

- **Bilingual UI**: All display names use `'German (English)'` format. Descriptions follow the same pattern.
- **n8n types**: Import types with `import type { ... } from 'n8n-workflow'`; import runtime values (like `NodeApiError`) separately.
- **Strict TypeScript**: `noImplicitAny`, `noUnusedLocals`, `noUnusedParameters` are all enabled.
- **Linting**: Uses `eslint-plugin-n8n-nodes-base` which enforces n8n-specific patterns (node class naming, credential structure, etc.).
- **Commits**: Follow Conventional Commits format (e.g., `feat(order): add search operation`).

## Build Output

`dist/` contains compiled JS, declaration files, source maps, and the SVG icon. The `dist/package.json` declares the n8n node entry point. n8n discovers the node via the `n8n` field in the root `package.json`.

## Plentymarkets API

All REST calls go to `{baseUrl}/rest/...`. Authentication is username/password login returning a short-lived Bearer token. The token is obtained once per execution run and reused across all items.
