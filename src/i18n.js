import { createContext, useContext, useEffect, useState } from 'react';

const dict = {
  en: {
    brand: 'Marketplace',
    explore: 'Explore', myNfts: 'My NFTs',
    connect: 'Connect wallet', account: 'Account', disconnect: 'Disconnect',
    trending: 'Trending collection',
    heroCta: 'View collection',
    collections: 'Collections', allNfts: 'All NFTs',
    priceRange: 'Price range', by: 'by',
    buy: 'Buy', owned: 'Owned', buyFor: 'Buy for {p}',
    inWallet: 'In your wallet',
    noNfts: 'You don’t own any NFTs yet. Pick one from the marketplace to start.',
    startShopping: 'Browse NFTs',
    chooseWallet: 'Choose a wallet to connect',
    chooseHint: 'This is a demo — no real wallet or payment is used.',
    walletConnected: 'Wallet connected',
    bought: '“{t}” is now in your collection.',
    notEnough: 'Not enough balance for “{t}”.',
    back: 'Back to marketplace',
    pieces: '{n} pieces',
    footer: 'Demo NFT marketplace built with React. Prices and wallets are simulated.',
  },
  fa: {
    brand: 'مارکت‌پلیس',
    explore: 'کاوش', myNfts: 'NFTهای من',
    connect: 'اتصال کیف پول', account: 'حساب', disconnect: 'قطع اتصال',
    trending: 'کالکشن پرطرفدار',
    heroCta: 'دیدن کالکشن',
    collections: 'کالکشن‌ها', allNfts: 'همهٔ NFTها',
    priceRange: 'بازهٔ قیمت', by: 'اثر',
    buy: 'خرید', owned: 'خریداری‌شده', buyFor: 'خرید با {p}',
    inWallet: 'موجودی کیف پول',
    noNfts: 'هنوز NFTی ندارید. از مارکت یکی انتخاب کنید.',
    startShopping: 'دیدن NFTها',
    chooseWallet: 'کیف پول را برای اتصال انتخاب کنید',
    chooseHint: 'این یک دموست — هیچ کیف پول یا پرداخت واقعی استفاده نمی‌شود.',
    walletConnected: 'کیف پول متصل شد',
    bought: '«{t}» به کالکشن شما اضافه شد.',
    notEnough: 'موجودی برای خرید «{t}» کافی نیست.',
    back: 'بازگشت به مارکت',
    pieces: '{n} اثر',
    footer: 'مارکت‌پلیس نمایشی NFT ساخته‌شده با React. قیمت‌ها و کیف پول‌ها شبیه‌سازی شده‌اند.',
  },
};

const LangCtx = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('nft.lang') === 'fa' ? 'fa' : 'en'; } catch { return 'en'; }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    try { localStorage.setItem('nft.lang', lang); } catch { /* ignore */ }
  }, [lang]);

  const t = (key, vars = {}) =>
    String(dict[lang][key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars[k]);
  const num = (n, digits) =>
    Number(n).toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US',
      digits != null ? { minimumFractionDigits: digits, maximumFractionDigits: digits } : undefined);
  const btc = (n) => `${num(n, 2)} BTC`;
  const pick = (obj) => obj[lang];

  return <LangCtx.Provider value={{ lang, setLang, t, num, btc, pick }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
