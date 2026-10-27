import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const StoreCtx = createContext(null);
const START_BALANCE = 0.5;

function read(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}

export function StoreProvider({ children }) {
  const [wallet, setWallet] = useState(() => read('nft.wallet', null)); // { name, address, balance }
  const [owned, setOwned] = useState(() => read('nft.owned', []));
  const [toast, setToast] = useState('');

  useEffect(() => { try { localStorage.setItem('nft.wallet', JSON.stringify(wallet)); } catch {} }, [wallet]);
  useEffect(() => { try { localStorage.setItem('nft.owned', JSON.stringify(owned)); } catch {} }, [owned]);

  const notify = useCallback((msg) => {
    setToast(msg);
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => setToast(''), 3200);
  }, []);

  const connect = (name) => {
    const hex = Array.from({ length: 10 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    const w = { name, address: `0x${hex.slice(0, 5)}…${hex.slice(5)}`, balance: START_BALANCE };
    setWallet(w);
    return w;
  };
  const disconnect = () => { setWallet(null); setOwned([]); };

  // Returns 'ok' | 'funds' | 'owned'
  const buy = (nft, w = wallet) => {
    if (owned.includes(nft.id)) return 'owned';
    if (!w || w.balance < nft.price) return 'funds';
    setWallet({ ...w, balance: +(w.balance - nft.price).toFixed(4) });
    setOwned((o) => [...o, nft.id]);
    return 'ok';
  };

  return (
    <StoreCtx.Provider value={{ wallet, owned, connect, disconnect, buy, toast, notify }}>
      {children}
    </StoreCtx.Provider>
  );
}

export const useStore = () => useContext(StoreCtx);
