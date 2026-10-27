# NFT Marketplace — React

**Live demo:** https://nft-oline-shop-with-react.vercel.app

A responsive NFT marketplace demo in **React 18 + React Router**, bilingual (**English / فارسی**) with full RTL support.

## Features
- Featured-collection hero that rotates automatically (pauses on hover, respects reduced motion)
- Collections and NFT grid, collection detail pages
- Simulated wallet connect (MetaMask / Coinbase / WalletConnect) with a demo balance
- Buy flow: buying without a wallet routes to wallet connect, then completes the purchase
- "My NFTs" page; wallet, purchases and language saved in `localStorage`
- Hand-written CSS, mobile-first; `vercel.json` rewrite so deep links work on refresh

## Run locally
```bash
npm install
npm start      # dev server
npm run build  # production build
```

No real wallet, blockchain or payment is used.
