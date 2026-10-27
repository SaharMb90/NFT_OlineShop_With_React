import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLang } from '../i18n';
import { useStore } from '../store';

export default function Header() {
  const { t, lang, setLang, btc, num } = useLang();
  const { wallet, owned, disconnect } = useStore();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const close = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, []);

  return (
    <header className="top">
      <div className="wrap top-inner">
        <Link to="/" className="brand"><span className="mark" aria-hidden="true" />{t('brand')}</Link>

        <nav className="nav">
          <NavLink to="/" end>{t('explore')}</NavLink>
          <NavLink to="/me">{t('myNfts')}{owned.length > 0 && <span className="pill">{num(owned.length)}</span>}</NavLink>
        </nav>

        <div className="actions">
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'fa' ? 'on' : ''} onClick={() => setLang('fa')}>فا</button>
          </div>

          {wallet ? (
            <div className="acct" ref={menuRef}>
              <button className="btn btn-ghost" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                <img src="/Rectangle10.png" alt="" className="avatar" />
                <span className="addr" dir="ltr">{wallet.address}</span>
              </button>
              {open && (
                <div className="menu" role="menu">
                  <p className="muted small">{t('inWallet')}</p>
                  <p className="bal">{btc(wallet.balance)}</p>
                  <p className="muted small" dir="ltr">{wallet.name} · {wallet.address}</p>
                  <button className="btn btn-primary full" onClick={() => { setOpen(false); navigate('/me'); }}>{t('myNfts')}</button>
                  <button className="btn btn-ghost full" onClick={() => { setOpen(false); disconnect(); }}>{t('disconnect')}</button>
                </div>
              )}
            </div>
          ) : (
            <button className="btn btn-primary" onClick={() => navigate('/connecttowallet')}>{t('connect')}</button>
          )}
        </div>
      </div>
    </header>
  );
}
