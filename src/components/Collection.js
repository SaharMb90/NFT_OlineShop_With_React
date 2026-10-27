import { Link, useParams } from 'react-router-dom';
import { useLang } from '../i18n';
import { collections, artists, img } from '../data';
import Nft from './Nft';

export default function Collection() {
  const { id } = useParams();
  const { t, pick, btc } = useLang();
  const c = collections.find((x) => x.id === id) || collections[0];
  const a = artists[c.artist];

  return (
    <>
      <section className="hero wrap">
        <div className="hero-text">
          <Link to="/" className="back">{t('back')}</Link>
          <h1 className="hero-title">{pick(c.title)}</h1>
          <p className="lead">{pick(c.blurb)}</p>
          <div className="artist"><img src={img(a.avatar)} alt="" /><span>{t('by')} {pick(a.name)}</span></div>
          <p className="muted">{t('priceRange')}: <b dir="ltr">{btc(c.range[0])} – {btc(c.range[1])}</b></p>
        </div>
        <div className="hero-art"><img src={img(c.cover)} alt="" /></div>
      </section>
      <Nft filter={(n) => n.collection === c.id} />
    </>
  );
}
