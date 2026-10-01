// PROTOTYPE - throwaway. Question: which homepage direction fits "office plant rental in Noida, WhatsApp first"?
// Three structurally different variants on the "/" route, switched with ?variant=A|B|C. Delete before merge.
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const wa = (text) => `https://wa.me/919220404309?text=${encodeURIComponent(text)}`;
const OFFICE_MSG = 'Hi! I want to rent plants for my office in Noida. Please send a quote.';

const FONTS = "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=DM+Sans:wght@400;500;700&display=swap');";

const base = `
${FONTS}
.pv{font-family:'DM Sans',system-ui,sans-serif;color:#1d2b22;line-height:1.5}
.pv h1,.pv h2,.pv h3{font-family:'Fraunces',Georgia,serif;margin:0;line-height:1.1;color:inherit}
.pv a{text-decoration:none}
.pv .wa{display:inline-flex;align-items:center;gap:.5rem;background:#25D366;color:#06210f;font-weight:700;padding:.9rem 1.4rem;border-radius:999px;transition:transform .15s}
.pv .wa:hover{transform:translateY(-2px)}
.pv .ghost{display:inline-block;padding:.9rem 1.4rem;border-radius:999px;border:1.5px solid currentColor;font-weight:500;color:inherit}
.pv .wrap{max-width:1180px;margin:0 auto;padding:0 20px}
`;

/* ---------- A: editorial split ---------- */
export function VariantA() {
  const css = `
  .pvA{background:#f6f1e7}
  .pvA .hero{display:grid;grid-template-columns:1.05fr 1fr;gap:48px;align-items:center;padding:72px 0}
  .pvA .eyebrow{font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;color:#4d7a4a;font-weight:700;margin-bottom:16px}
  .pvA h1{font-size:clamp(2.4rem,5vw,4rem);color:#17301f;margin-bottom:20px}
  .pvA h1 em{color:#4d7a4a;font-style:italic}
  .pvA .lead{font-size:1.15rem;max-width:34rem;margin-bottom:28px;color:#3b4d41}
  .pvA .cta{display:flex;gap:12px;flex-wrap:wrap}
  .pvA .ghost{color:#17301f}
  .pvA .photo{aspect-ratio:4/5;border-radius:240px 240px 24px 24px;background:url(/assets/images/services/1.webp) center/cover;box-shadow:0 30px 60px -30px rgba(23,48,31,.5)}
  .pvA .proof{border-top:1px solid #d9d0bd;border-bottom:1px solid #d9d0bd;padding:22px 0;display:flex;gap:32px;justify-content:space-between;flex-wrap:wrap;font-size:.95rem}
  .pvA .proof b{font-family:'Fraunces',serif;font-size:1.6rem;display:block;color:#17301f}
  .pvA .cols{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;padding:72px 0}
  .pvA .cols h3{font-size:1.5rem;margin-bottom:10px;color:#17301f}
  .pvA .cols p{color:#3b4d41;margin-bottom:12px}
  .pvA .cols a{color:#4d7a4a;font-weight:700}
  @media(max-width:820px){.pvA .hero,.pvA .cols{grid-template-columns:1fr}.pvA .photo{aspect-ratio:4/3;border-radius:24px}}
  `;
  return (
    <div className="pv pvA">
      <style>{base + css}</style>
      <div className="wrap">
        <section className="hero">
          <div>
            <div className="eyebrow">Office plant rental · Noida</div>
            <h1>Green offices, <em>zero upkeep.</em></h1>
            <p className="lead">We place, water and swap healthy plants at your Noida office every month. You get a fresh workplace. We do the work.</p>
            <div className="cta">
              <a className="wa" href={wa(OFFICE_MSG)}>Get a quote on WhatsApp</a>
              <Link className="ghost" to="/plant-rent-in-office">See how it works</Link>
            </div>
          </div>
          <div className="photo" role="img" aria-label="Plants in a bright office" />
        </section>
        <div className="proof">
          <div><b>850+</b>happy customers</div>
          <div><b>Monthly</b>watering and care</div>
          <div><b>Free swap</b>of unhealthy plants</div>
          <div><b>Noida first</b>then all Delhi NCR</div>
        </div>
        <section className="cols">
          <div><h3>Office plant rental</h3><p>Pay monthly. We care for every plant.</p><Link to="/plant-rent-in-office">Learn more →</Link></div>
          <div><h3>Corporate gifting</h3><p>Plant gifts with your logo for staff and clients.</p><Link to="/corporate-gifting">Learn more →</Link></div>
          <div><h3>Terrace and balcony gardens</h3><p>Design and build for homes and societies.</p><Link to="/services">Learn more →</Link></div>
        </section>
      </div>
    </div>
  );
}

/* ---------- B: full-bleed photo + instant quote card ---------- */
export function VariantB() {
  const [size, setSize] = useState('10-25 desks');
  const [area, setArea] = useState('Noida');
  const css = `
  .pvB .hero{min-height:calc(100vh - 90px);display:flex;align-items:center;background:linear-gradient(90deg,rgba(8,26,15,.85) 0%,rgba(8,26,15,.35) 70%),url(/assets/images/services/2.webp) center/cover;color:#fff;padding:60px 0}
  .pvB .grid{display:grid;grid-template-columns:1.2fr .8fr;gap:48px;align-items:center}
  .pvB h1{font-size:clamp(2.2rem,5vw,3.8rem);margin-bottom:16px}
  .pvB .lead{font-size:1.15rem;max-width:32rem;opacity:.92}
  .pvB .card{background:#fff;color:#1d2b22;border-radius:20px;padding:28px;box-shadow:0 30px 60px -20px rgba(0,0,0,.5)}
  .pvB .card h3{font-size:1.4rem;margin-bottom:6px}
  .pvB .card small{color:#5c6b61}
  .pvB label{display:block;font-weight:700;font-size:.85rem;margin:16px 0 6px}
  .pvB select{width:100%;padding:.8rem;border:1.5px solid #cfd8d1;border-radius:10px;font:inherit;background:#fff}
  .pvB .card .wa{width:100%;justify-content:center;margin-top:20px}
  .pvB .chips{display:flex;gap:10px;overflow-x:auto;padding:18px 20px;background:#0f2a1a}
  .pvB .chips a{white-space:nowrap;color:#e9f3ec;border:1px solid #2f5a40;padding:.55rem 1rem;border-radius:999px;font-size:.92rem}
  @media(max-width:820px){.pvB .grid{grid-template-columns:1fr}}
  `;
  const msg = `Hi! I need plant rental for my office. Size: ${size}. Area: ${area}. Please send a quote.`;
  return (
    <div className="pv pvB">
      <style>{base + css}</style>
      <section className="hero">
        <div className="wrap grid">
          <div>
            <h1>Fresh plants for your Noida office. We handle the care.</h1>
            <p className="lead">Monthly plant rental with watering, cleaning and swaps. Tell us your office size. We send a quote on WhatsApp.</p>
          </div>
          <div className="card">
            <h3>Get your quote in minutes</h3>
            <small>Two taps. No form to fill.</small>
            <label htmlFor="pvb-size">Office size</label>
            <select id="pvb-size" value={size} onChange={(e) => setSize(e.target.value)}>
              <option>Under 10 desks</option><option>10-25 desks</option><option>25-100 desks</option><option>Over 100 desks</option>
            </select>
            <label htmlFor="pvb-area">Area</label>
            <select id="pvb-area" value={area} onChange={(e) => setArea(e.target.value)}>
              <option>Noida</option><option>Greater Noida</option><option>Delhi</option><option>Gurugram</option><option>Ghaziabad</option>
            </select>
            <a className="wa" href={wa(msg)}>Send on WhatsApp</a>
          </div>
        </div>
      </section>
      <div className="chips">
        <Link to="/plant-rent-in-office">Office plant rental</Link>
        <Link to="/corporate-gifting">Corporate gifting</Link>
        <Link to="/services/terrace-garden">Terrace garden</Link>
        <Link to="/services/balcony-garden">Balcony garden</Link>
        <Link to="/services/garden-maintenance">Garden maintenance</Link>
        <Link to="/portfolio">Our work</Link>
      </div>
    </div>
  );
}

/* ---------- C: bold dark, plans + big numbers ---------- */
export function VariantC() {
  const plans = [
    { n: 'Desk', d: 'Small plants for desks and reception.', f: ['Monthly care', 'Free swap'] },
    { n: 'Floor', d: 'Large plants and planters for open areas.', f: ['Monthly care', 'Free swap', 'Planter choice'], hot: true },
    { n: 'Campus', d: 'Many floors or sites. One manager for you.', f: ['Custom plan', 'Site visit', 'Priority support'] },
  ];
  const css = `
  .pvC{background:#0b1f14;color:#e9f3ec}
  .pvC .hero{padding:80px 0 56px;text-align:center}
  .pvC h1{font-size:clamp(2.6rem,7vw,5.2rem);letter-spacing:-.02em;margin-bottom:18px}
  .pvC h1 span{color:#b8f26a}
  .pvC .lead{font-size:1.2rem;max-width:36rem;margin:0 auto 28px;opacity:.85}
  .pvC .wa{background:#b8f26a;color:#0b1f14}
  .pvC .stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #1f4030;border-bottom:1px solid #1f4030;margin:40px 0}
  .pvC .stats div{padding:28px;text-align:center;border-right:1px solid #1f4030}
  .pvC .stats div:last-child{border:0}
  .pvC .stats b{display:block;font-family:'Fraunces',serif;font-size:2.6rem;color:#b8f26a}
  .pvC .plans{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding-bottom:72px}
  .pvC .plan{border:1px solid #1f4030;border-radius:18px;padding:28px;background:#102a1c}
  .pvC .plan.hot{border-color:#b8f26a;background:#143323}
  .pvC .plan h3{font-size:1.8rem;margin-bottom:8px}
  .pvC .plan ul{list-style:none;padding:0;margin:16px 0 22px;opacity:.9}
  .pvC .plan li:before{content:'✓ ';color:#b8f26a}
  .pvC .plan .ghost{width:100%;text-align:center;box-sizing:border-box;color:#e9f3ec}
  @media(max-width:820px){.pvC .stats,.pvC .plans{grid-template-columns:1fr}.pvC .stats div{border-right:0;border-bottom:1px solid #1f4030}}
  `;
  return (
    <div className="pv pvC">
      <style>{base + css}</style>
      <div className="wrap">
        <section className="hero">
          <h1>Office plants. <span>Rented.</span> Cared for.</h1>
          <p className="lead">Healthy plants in your Noida office. One monthly plan. We water, clean and swap.</p>
          <a className="wa" href={wa(OFFICE_MSG)}>Chat on WhatsApp</a>
        </section>
        <div className="stats">
          <div><b>850+</b>happy customers</div>
          <div><b>Noida</b>first, then Delhi NCR</div>
          <div><b>1 hour</b>to your quote</div>
        </div>
        <section className="plans">
          {plans.map((p) => (
            <div key={p.n} className={'plan' + (p.hot ? ' hot' : '')}>
              <h3>{p.n}</h3><p>{p.d}</p>
              <ul>{p.f.map((x) => <li key={x}>{x}</li>)}</ul>
              <a className="ghost" href={wa(`Hi! I want the ${p.n} plan for my Noida office.`)}>Ask about this plan</a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

/* ---------- switcher ---------- */
const NAMES = { Current: 'Current site', A: 'Editorial split', B: 'Photo + instant quote', C: 'Bold dark plans' };
const KEYS = Object.keys(NAMES);

export function PrototypeSwitcher({ current }) {
  const [, setParams] = useSearchParams();
  const go = (d) => { const k = KEYS[(KEYS.indexOf(current) + d + KEYS.length) % KEYS.length]; setParams(k === 'Current' ? {} : { variant: k }, { replace: true }); }
  useEffect(() => {
    const onKey = (e) => {
      if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.target.isContentEditable) return;
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  const btn = { background: 'none', border: 0, color: '#fff', fontSize: 20, cursor: 'pointer', padding: '0 8px' };
  return (
    <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 99999, background: '#111', color: '#fff', borderRadius: 999, padding: '8px 14px', boxShadow: '0 8px 24px rgba(0,0,0,.4)', font: '14px system-ui', display: 'flex', alignItems: 'center' }}>
      <button style={btn} onClick={() => go(-1)} aria-label="Previous variant">←</button>
      <span>{current} - {NAMES[current]}</span>
      <button style={btn} onClick={() => go(1)} aria-label="Next variant">→</button>
    </div>
  );
}

export const VARIANTS = { A: VariantA, B: VariantB, C: VariantC };
