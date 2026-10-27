import { useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '../i18n';
import { useStore } from '../store';
import { nfts } from '../data';

const WALLETS = [
  { name: 'MetaMask', icon: '🦊' },
  { name: 'Coinbase Wallet', icon: '🔵' },
  { name: 'WalletConnect', icon: '🔗' },
];

export default function ConnectToWallet() {
  const { t, pick } = useLang();
  const { connect, buy, notify } = useStore();
  const navigate = useNavigate();
  const { state } = useLocation();
  const pending = state && nfts.find((n) => n.id === state.pending);

  const choose = (name) => {
    const w = connect(name);
    if (pending) {
      const r = buy(pending, w);
      notify(r === 'ok' ? t('bought', { t: pick(pending.title) }) : t('notEnough', { t: pick(pending.title) }));
      navigate('/me');
    } else {
      notify(t('walletConnected'));
      navigate('/');
    }
  };

  return (
    <section className="wrap connect">
      <h1 className="h2">{t('chooseWallet')}</h1>
      <p className="muted">{t('chooseHint')}</p>
      <div className="wallets">
        {WALLETS.map((w) => (
          <button key={w.name} className="wallet" onClick={() => choose(w.name)}>
            <span className="wallet-icon" aria-hidden="true">{w.icon}</span>
            <span>{w.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
