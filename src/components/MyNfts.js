import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import { useStore } from '../store';
import Nft from './Nft';

export default function MyNfts() {
  const { t } = useLang();
  const { owned } = useStore();
  if (!owned.length) {
    return (
      <section className="wrap connect">
        <h1 className="h2">{t('myNfts')}</h1>
        <p className="muted">{t('noNfts')}</p>
        <Link to="/" className="btn btn-primary">{t('startShopping')}</Link>
      </section>
    );
  }
  return <Nft title={t('myNfts')} filter={(n) => owned.includes(n.id)} />;
}
