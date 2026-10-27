import { useNavigate } from 'react-router-dom';
import { useLang } from '../i18n';
import { useStore } from '../store';
import { nfts, img } from '../data';

export function NftCard({ nft }) {
  const { t, pick, btc } = useLang();
  const { wallet, owned, buy, notify } = useStore();
  const navigate = useNavigate();
  const isOwned = owned.includes(nft.id);

  const onBuy = () => {
    if (!wallet) { navigate('/connecttowallet', { state: { pending: nft.id } }); return; }
    const r = buy(nft);
    if (r === 'ok') notify(t('bought', { t: pick(nft.title) }));
    if (r === 'funds') notify(t('notEnough', { t: pick(nft.title) }));
  };

  return (
    <article className="nft">
      <div className="nft-img"><img src={img(nft.image)} alt={pick(nft.title)} loading="lazy" /></div>
      <div className="nft-body">
        <h3>{pick(nft.title)}</h3>
        <span className="price" dir="ltr">{btc(nft.price)}</span>
      </div>
      <button className={'btn full ' + (isOwned ? 'btn-ghost' : 'btn-primary')} disabled={isOwned} onClick={onBuy}>
        {isOwned ? t('owned') : t('buyFor', { p: btc(nft.price) })}
      </button>
    </article>
  );
}

export default function Nft({ filter, title }) {
  const { t } = useLang();
  const list = filter ? nfts.filter(filter) : nfts;
  return (
    <section className="wrap block">
      <h2 className="h2">{title || t('allNfts')}</h2>
      <div className="grid">
        {list.map((n) => <NftCard nft={n} key={n.id} />)}
      </div>
    </section>
  );
}
