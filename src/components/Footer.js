import { useLang } from '../i18n';

const SOCIAL = [
  ['Twitter', 'TWITTER.png'], ['Instagram', 'INSTAGRAM.png'], ['Discord', 'DISCORD.png'], ['Facebook', 'facebook.png'],
];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <p className="muted small">{t('footer')}</p>
        <div className="social">
          {SOCIAL.map(([name, file]) => (
            <span key={name} title={name}><img src={require(`../assets/icons/${file}`)} alt={name} /></span>
          ))}
        </div>
      </div>
    </footer>
  );
}
