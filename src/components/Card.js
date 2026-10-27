import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import { collections, artists, nfts, img } from '../data';

// Collections row.
export default function Collections() {
  const { t, pick, btc, num } = useLang();
  return (
    <section className="wrap block">
      <h2 className="h2">{t('collections')}</h2>
      <div className="cols">
        {collections.map((c) => {
          const a = artists[c.artist];
          const count = nfts.filter((n) => n.collection === c.id).length;
          return (
            <Link to={`/collection/${c.id}`} className="col" key={c.id}>
              <div className="col-img"><img src={img(c.cover)} alt="" loading="lazy" /></div>
              <div className="col-body">
                <h3>{pick(c.title)}</h3>
                <p className="muted small">{t('pieces', { n: num(count) })} · <span dir="ltr">{btc(c.range[0])} – {btc(c.range[1])}</span></p>
                <div className="artist small"><img src={img(a.avatar)} alt="" />{pick(a.name)}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
