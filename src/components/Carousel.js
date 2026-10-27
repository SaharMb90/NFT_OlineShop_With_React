import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import { collections, artists, img } from '../data';

// Featured collections hero: auto-advances, pauses on hover/focus, respects reduced motion.
export default function Carousel() {
  const { t, pick, btc } = useLang();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % collections.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const c = collections[i];
  const a = artists[c.artist];

  return (
    <section className="hero wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="hero-text">
        <span className="tag">{t('trending')}</span>
        <h1 key={c.id} className="hero-title">{pick(c.title)}</h1>
        <p className="lead">{pick(c.blurb)}</p>
        <div className="artist">
          <img src={img(a.avatar)} alt="" />
          <span>{t('by')} {pick(a.name)}</span>
        </div>
        <p className="muted">{t('priceRange')}: <b dir="ltr">{btc(c.range[0])} – {btc(c.range[1])}</b></p>
        <Link to={`/collection/${c.id}`} className="btn btn-primary">{t('heroCta')}</Link>
        <div className="dots" role="tablist">
          {collections.map((x, k) => (
            <button key={x.id} role="tab" aria-selected={k === i} aria-label={pick(x.title)}
              className={k === i ? 'on' : ''} onClick={() => setI(k)} />
          ))}
        </div>
      </div>
      <div className="hero-art">
        <img key={c.id} src={img(c.cover)} alt={pick(c.title)} />
      </div>
    </section>
  );
}
