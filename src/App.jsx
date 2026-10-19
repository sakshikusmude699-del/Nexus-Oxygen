import { useState } from 'react'

const WA = '919644269799'
const wa = (m) => `https://wa.me/${WA}?text=${encodeURIComponent(m)}`
const TEL = 'tel:+919131929456'
const MAIL = 'mailto:nexusoxygen.idr@gmail.com'
// ===== FACTS TO CONFIRM WITH NEXUS: replace the [bracketed] values here, once, and they update everywhere =====
const F = { noon: '[12 noon]', same: '[the same day]', hours: '[Mon–Sat, 8 am–8 pm]', travel: '20 minutes from Pithampur [confirm travel time]', indore: '[the next working day]', min: '[Confirm, e.g. 2 cylinders per delivery]', trial: '[confirm trial offer]', term: '[confirm term]', credit: '[confirm credit days]', deposit: '[Confirm deposit terms]', cert: '[confirm]', grades: '[confirm grades]', legal: '[Pvt Ltd — confirm legal name]', gstin: '[number]' }
const T = ({ children }) => String(children).split(/(\[[^\]]+\])/).map((x, i) => (x.startsWith('[') && x.endsWith(']') ? <mark key={i} className="tbc">{x}</mark> : x))
const HI = {
  tag: 'धारावाहिक: निरंतरता। शुद्धता। जुड़ाव।', h1: 'जिस दिन ऑर्डर, उसी दिन गैस रिफिल।',
  lead: 'पीथमपुर, इंदौर और धार के लिए ऑक्सीजन, आर्गन, नाइट्रोजन और CO₂ सिलेंडर।', btn: 'आज का रेट WhatsApp पर पाएं',
  Continuity: 'आपकी सप्लाई कभी नहीं रुकेगी।', Purity: 'हर बार पूरा भराव, सही ग्रेड।', Connection: 'एक नंबर, सीधी बात।', close: 'गैस खत्म होने वाली है? अभी मैसेज करें।',
}
const RATE = "Hello Nexus Oxygen, I need today's rate for gas cylinders in [my area]."

const I = {
  pin: 'M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z',
  chat: 'M4 5h16v11H9l-5 4V5z',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  cyl: 'M9 3h6v3l2 2v12a1 1 0 01-1 1H8a1 1 0 01-1-1V8l2-2z',
  cal: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  flow: 'M4 7h6v4H4zM14 13h6v4h-6zM10 9h4a2 2 0 012 2v2',
  box: 'M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2',
  link: 'M10 14a4 4 0 005.6 0l3-3a4 4 0 00-5.6-5.6l-1 1M14 10a4 4 0 00-5.6 0l-3 3a4 4 0 005.6 5.6l1-1',
  drop: 'M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z',
}
const Ic = ({ n, s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={I[n]} /></svg>
)

const nav = [['Home', '#home'], ['Gases We Supply', '#gases'], ['Why Nexus', '#why'], ['Industries', '#industries'], ['Contact', '#contact']]

const gases = [
  ['O₂', 'Industrial Oxygen', 'For gas cutting, brazing, welding and heat treatment. Steady pressure, full fills, on time.', 'Oxygen', 'oxygen', 'Industrial grade · per cylinder fill'],
  ['Ar', 'Argon', 'For MIG and TIG welding of stainless steel and aluminium. Argon–CO₂ mixes for cleaner welds.', 'Argon', 'argon', `Industrial and high purity ${F.grades} · per m³`],
  ['N₂', 'Nitrogen', 'For pharma inerting, purging, food packing and tyre curing. Purity certificate on request.', 'Nitrogen', 'nitrogen', `Industrial and high purity ${F.grades}`],
  ['CO₂', 'Carbon Dioxide', 'For soda and beverage bottling, food use and welding mixes.', 'CO₂', 'CO₂', `Beverage and industrial grade ${F.grades} · per kg`],
]

const pillars = [
  ['Continuity', 'Your supply doesn\'t break', `Order before ${F.noon} and get your refills ${F.same}. We plan refills before you run out, so a late cylinder never stops a job.`, 'Delivery time and order cut-off', 'cal'],
  ['Purity', 'Full fills, right grade, every time', `Every cylinder is filled to the right pressure and checked before it leaves. Purity certificates are available for nitrogen and argon ${F.cert}.`, 'Grades and certificates offered', 'drop'],
  ['Connection', 'One number, a real person', 'Orders, rates and emergencies all go to one WhatsApp number. We track every cylinder in and out, so you never pay for empties we failed to collect.', 'WhatsApp number, cylinder tracking', 'link'],
]

const steps = [
  ['Message us.', 'Send the gas, number of cylinders and your area on WhatsApp, or call.', 'chat'],
  ['Get your rate.', 'We reply with today\'s price and delivery time, usually within minutes.', 'flow'],
  ['We deliver.', 'Filled cylinders arrive at your gate and we collect your empties on the same trip.', 'box'],
  ['Set a schedule.', 'Regular users can fix a weekly or monthly refill plan so stock never runs out.', 'cal'],
]

const industries = [
  ['Fabrication and welding shops', 'Oxygen and argon on time, so your welders never wait.'],
  ['Auto and engineering plants', 'Backup and top-up supply for maintenance and production lines.'],
  ['Forging, castings and steel', 'Cutting oxygen in the volumes heavy work needs.'],
  ['Leaf spring and structure makers', 'Regular refill plans for daily cutting and welding.'],
  ['Pharma and chemical units', 'Nitrogen with purity certificates for audits.'],
  ['Food and beverage units', 'Nitrogen for packing and CO₂ for bottling.'],
  ['Gas dealers', 'Wholesale cylinders and steady allocation in peak months.'],
]

const areas = ['Pithampur Sector 1', 'Sector 2', 'Sector 3', 'Sagore', 'Betma', 'Mhow', 'Rau', 'Indore', 'Dhar', 'Dewas on request']

const faqs = [
  ['Which gases does Nexus Oxygen supply?', 'Industrial oxygen, argon and argon–CO₂ mixes, nitrogen and CO₂ in cylinders. Need a special mix, purity or cylinder size? Message us and we\'ll tell you what we can supply.'],
  ['Which areas do you serve?', 'Pithampur, Sagore, Betma, Mhow, Rau, Indore and Dhar, with Dewas on request. Outside these areas, message us your location and we\'ll tell you the delivery day.'],
  ["How do I request today's rates?", 'WhatsApp or call +91 96442 69799 or +91 91319 29456 with the gas, the number of cylinders and your area.'],
  ['How fast can you deliver?', `Orders placed before ${F.noon} reach Pithampur Sectors 1–3 ${F.same}. Indore and Dhar deliveries go out ${F.indore}.`],
  ['What is the minimum order?', `${F.min}. Message us for smaller one-off needs.`],
  ['Can I arrange regular refills?', 'Yes. Regular users can fix a weekly or monthly refill plan so stock never runs out.'],
  ['Do I need to own cylinders?', `No. You can use our cylinders against a refundable deposit, or we can refill your own tested cylinders. ${F.deposit}`],
  ['How do you charge?', 'Oxygen and CO₂ per cylinder fill or per kg, argon and nitrogen per m³ or per fill. Rates depend on volume; regular users get a rate contract.'],
  ['Do you give credit?', `Regular customers on a rate contract can get ${F.credit}. New customers pay on delivery for the first orders.`],
  ['Do you supply medical oxygen?', 'Not at present. We supply industrial gases only.'],
  ['Can I request a purity certificate?', `Yes, for nitrogen and argon lots ${F.cert}. Ask when you order.`],
  ['What happens to empty cylinders?', 'We collect empties on every delivery trip and record them, so you never pay holding charges for cylinders we failed to pick up.'],
]

const Btn = ({ href, kind = 'primary', children, ...p }) => (
  <a className={`btn btn-${kind}`} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...p}>{children}</a>
)

function Header({ hi, setHi }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a href="#home" className="brand" aria-label="Nexus Oxygen home">
          <img src="/assets/nexus-oxygen-logo.png" width="1120" height="983" alt="Nexus Oxygen logo with the tagline Dharavahik: Continuity. Purity. Connection." />
        </a>
        <nav id="nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
          {nav.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
          <button className="lang" onClick={() => setHi(!hi)} aria-label={hi ? 'Switch to English' : 'हिन्दी में देखें'}>{hi ? 'English' : 'हिन्दी'}</button>
          <Btn href={wa(RATE)} onClick={() => setOpen(false)}>{hi ? HI.btn : "Get Today's Rate"}</Btn>
        </nav>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

const Head = ({ title, text, light }) => (
  <div className={`sec-head ${light ? 'on-dark' : ''}`}>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
)

function Faq() {
  const [o, setO] = useState(0)
  return (
    <div className="faq">
      {faqs.map(([q, a], i) => (
        <div key={q} className={`faq-i ${o === i ? 'open' : ''}`}>
          <h3><button aria-expanded={o === i} aria-controls={`f${i}`} id={`fb${i}`} onClick={() => setO(o === i ? -1 : i)}>{q}<i aria-hidden="true" /></button></h3>
          <div className="faq-a" id={`f${i}`} role="region" aria-labelledby={`fb${i}`}><div><p><T>{a}</T></p></div></div>
        </div>
      ))}
    </div>
  )
}

function CopyEmail() {
  const [ok, setOk] = useState(false)
  const copy = () => { navigator.clipboard?.writeText('nexusoxygen.idr@gmail.com').then(() => { setOk(true); setTimeout(() => setOk(false), 1800) }).catch(() => {}) }
  return <button className="copy-btn" onClick={copy}>{ok ? 'Copied' : 'Copy email'}</button>
}

const schema = [{
  '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Nexus Oxygen', slogan: 'Dharavahik: Continuity. Purity. Connection.',
  description: 'Industrial gas supplier of oxygen, argon, nitrogen and CO2 cylinders for Pithampur, Indore, Mhow and Dhar.',
  telephone: ['+91-9644269799', '+91-9131929456'], email: 'nexusoxygen.idr@gmail.com',
  address: { '@type': 'PostalAddress', streetAddress: '111, Post Office Road', addressLocality: 'Mhow', addressRegion: 'Madhya Pradesh', postalCode: '453441', addressCountry: 'IN' },
  areaServed: ['Pithampur', 'Indore', 'Mhow', 'Dhar', 'Rau', 'Dewas'],
}, {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.filter(([, a]) => !a.includes('[')).map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}]

export default function App() {
  const [hi, setHi] = useState(false)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header hi={hi} setHi={setHi} />
      <main id="home">
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <p className="tagline-h">{hi ? HI.tag : 'Dharavahik: Continuity. Purity. Connection.'}</p>
              <p className="eyebrow">INDUSTRIAL GAS SUPPLIER · MHOW, MADHYA PRADESH</p>
              <h1>{hi ? HI.h1 : 'Gas refills that arrive the day you order.'}</h1>
              <p className="lead">{hi ? HI.lead : <><T>{`Industrial oxygen, argon, nitrogen and CO₂ cylinders for fabrication shops, factories and plants across Pithampur, Indore and nearby industrial areas. Order on WhatsApp before ${F.noon} and get your refills ${F.same}.`}</T></>}</p>
              <div className="btns">
                <Btn href={wa(RATE)}><Ic n="chat" s={20} />{hi ? HI.btn : "Get Today's Rate on WhatsApp"}</Btn>
                <Btn href={TEL} kind="ghost"><Ic n="phone" s={20} />Call Now</Btn>
              </div>
              <p className="hero-note">Four industrial gases. One direct point of contact.</p>
              <p className="hero-sub"><T>{`Call or WhatsApp +91 96442 69799 · +91 91319 29456 · ${F.hours}`}</T></p>
            </div>
          </div>
        </section>

        <section className="strip" aria-label="Highlights">
          <div className="wrap strip-g">
            {[['pin', `Local office in Mhow, ${F.travel}`], ['clock', `Same-day refills in Sectors 1–3 ${'[confirm]'}`], ['cyl', 'Four gases from one supplier'], ['phone', 'One WhatsApp number for orders and rates']].map(([n, t]) => (
              <div key={t} className="strip-i"><span className="ico"><Ic n={n} /></span><p><T>{t}</T></p></div>
            ))}
          </div>
        </section>

        <section className="sec" id="gases">
          <div className="wrap">
            <Head title="Four industrial gases. One supplier." text="Cylinder supplies for cutting, welding, purging, packing and other industrial applications." />
            <div className="grid4">
              {gases.map(([sym, title, txt, name, key, foot]) => (
                <article className="card gas" key={sym}>
                  <div className="gas-vis" aria-hidden="true">
                    <svg viewBox="0 0 120 120" className="ring"><circle cx="60" cy="60" r="52" fill="none" stroke="#19C6D2" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" /><circle cx="60" cy="8" r="5" fill="#00B8C7" /><circle cx="108" cy="78" r="4" fill="#fff" /><circle cx="22" cy="96" r="4" fill="#fff" /></svg>
                    <span>{sym}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{txt}</p>
                  <small className="gas-f"><T>{foot}</T></small>
                  <Btn kind="outline" href={wa(`Hello Nexus Oxygen, I need today's rate for ${key} cylinders in [my area].`)}>Get {name} rate</Btn>
                </article>
              ))}
            </div>
            <p className="note">Need a special mix, purity or cylinder size? Message us and we'll tell you what we can supply.</p>
            <p className="spec"><b>Cylinder:</b> D-type 46.7 L · <b>Typical fill:</b> about 7 m³ at 150 bar · <b>Gases:</b> O₂, Ar, N₂, CO₂ · <b>Delivery:</b> Pithampur, Indore, Dhar · <b>Order:</b> WhatsApp or call</p>
          </div>
        </section>

        <section className="sec alt" id="why">
          <div className="wrap">
            <Head title="Dharavahik means it never stops." text="Your work depends on a dependable gas supply. Nexus Oxygen focuses on continuity, purity and connection." />
            <div className="grid3 why">
              {pillars.map(([t, h, x, pr, n]) => (
                <div className="pillar" key={t}>
                  <span className="node"><Ic n={n} s={24} /></span>
                  <h3>{t}</h3>
                  <p className="p-h">{hi ? HI[t] : h}</p>
                  <p><T>{x}</T></p>
                  <small className="proof">{pr}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="ordering">
          <div className="wrap">
            <Head title="Ordering takes one message." />
            <ol className="steps">
              {steps.map(([t, x, n], i) => (
                <li key={t}>
                  <div className="step-top"><b>0{i + 1}</b><span className="ico"><Ic n={n} s={20} /></span></div>
                  <h3>{t}</h3>
                  <p>{x}</p>
                </li>
              ))}
            </ol>
            <p className="note"><T>{`First order? Ask for the trial rate on your first fill ${F.trial}.`}</T></p>
          </div>
        </section>

        <section className="sec alt" id="industries">
          <div className="wrap">
            <Head title="Built for the industries around Pithampur." />
            <ul className="ind">{industries.map(([t, x]) => <li key={t}><h3>{t}</h3><p>{x}</p></li>)}</ul>
            <div className="area">
              <h3>Where we serve</h3>
              <ul>{areas.map((a) => <li key={a}><Ic n="pin" s={14} />{a}</li>)}</ul>
              <p>Outside these areas? Message us your location and we'll tell you the delivery day.</p>
            </div>
          </div>
        </section>

        <section className="sec" id="enquiries">
          <div className="wrap grid2">
            {[
              ['Regular Industrial Users', 'Plan your regular supply.', 'Discuss recurring cylinder requirements, scheduled refills and rate-contract options with our team. Using 20 or more cylinders a month? A rate contract locks your price, sets a refill schedule and gives you a priority delivery slot.', 'Ask for a Rate Contract', 'Hello Nexus Oxygen, we use about [__] cylinders a month and want a rate contract.', [`Fixed monthly rate ${F.term}`, 'Scheduled refills', 'Priority in shortage months', 'Monthly statement for your accounts team']],
              ['Gas Dealers', 'Enquire about dealer supply.', 'Contact Nexus Oxygen to discuss wholesale requirements and supply arrangements. Buy filled cylinders at wholesale rates with steady allocation, even in peak months.', 'Get Dealer Rates', 'Hello Nexus Oxygen, I am a gas dealer and would like your wholesale rate card.', ['Wholesale price list', 'Agreed monthly allocation', 'Delivery to your godown']],
            ].map(([k, h, p, b, m, pts]) => (
              <article className="panel" key={h}>
                <span className="tag">{k}</span>
                <h2>{h}</h2>
                <p>{p}</p>
                <ul className="pts">{pts.map((x) => <li key={x}><T>{x}</T></li>)}</ul>
                <Btn href={wa(m)}>{b}</Btn>
              </article>
            ))}
          </div>
        </section>

        <section className="sec alt" id="contact">
          <div className="wrap grid2 contact">
            <div>
              <h2>Talk to Nexus directly.</h2>
              <p className="lead-d">Need a rate or want to discuss your cylinder requirements? Contact our team. No forms, no waiting: call or WhatsApp and you'll speak to our team.</p>
              <div className="btns">
                <Btn href={wa(RATE)}><Ic n="chat" s={20} />WhatsApp</Btn>
                <Btn href={TEL} kind="outline"><Ic n="phone" s={20} />Call Now</Btn>
              </div>
            </div>
            <ul className="cinfo">
              {[
                ['chat', 'WhatsApp', '+91 96442 69799', wa(RATE)],
                ['phone', 'Phone', '+91 91319 29456', TEL],
                ['mail', 'Email', 'nexusoxygen.idr@gmail.com', MAIL],
                ['pin', 'Address', '111, Post Office Road, Mhow, District Indore, Madhya Pradesh 453441', null],
                ['clock', 'Working hours', F.hours, null],
              ].map(([n, l, v, h]) => (
                <li key={l}>
                  <span className="ico"><Ic n={n} /></span>
                  <div><small>{l}</small>{h ? <a href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{v}</a> : <span><T>{v}</T></span>}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec alt about" id="about">
          <div className="wrap faq-w">
            <h2>Industrial gas supplier for Pithampur, Indore and Mhow</h2>
            <p>Nexus Oxygen is an industrial gas supplier based in Mhow, District Indore, serving the factories, fabrication shops and plants of Pithampur Industrial Area, Indore and Dhar. We supply industrial oxygen, argon, nitrogen and CO₂ in cylinders, delivered to your gate and refilled on a schedule that fits your work.</p>
            <p>Most of our customers cut and weld every day. For them we supply oxygen cylinders for gas cutting, brazing and heat treatment, and argon and argon–CO₂ mixes for MIG and TIG welding of stainless steel and aluminium. Pharma, chemical, food and tyre units use our nitrogen cylinders for purging, blanketing and packing, and beverage and soda units use our CO₂.</p>
            <p><T>{`Our promise is Dharavahik: continuity, purity and connection. Continuity means your supply does not break: order on WhatsApp before ${F.noon} and refills reach Pithampur Sectors 1, 2 and 3 ${F.same}. Purity means full fills at the right pressure and grade, with certificates available for nitrogen and argon ${F.cert}. Connection means one number for orders, rates and emergencies, and empties collected on every trip.`}</T></p>
            <h3>Oxygen and argon gas refilling in Pithampur</h3>
            <p>Whether you run a small fabrication shop in Sector 1 or a production line in Sector 3, you can order oxygen gas refilling, argon gas cylinders and welding gas from one supplier. Regular users can fix their rate with a monthly contract and scheduled refills, and gas dealers can buy at wholesale rates with steady allocation.</p>
            <p>Call +91 91319 29456 or WhatsApp +91 96442 69799 for today's rate. Our office is at 111, Post Office Road, Mhow, District Indore (M.P.) 453441.</p>
          </div>
        </section>

        <section className="sec" id="faq">
          <div className="wrap faq-w">
            <Head title="Questions buyers ask us" />
            <Faq />
          </div>
        </section>

        <section className="cta">
          <div className="wrap cta-in">
            <div>
              <h2>{hi ? HI.close : 'Running low? Message us now.'}</h2>
              <p>Send us the gas type, number of cylinders and your area. We'll reply with today's rate and a delivery time.</p>
            </div>
            <div className="btns">
              <Btn href={wa(RATE)}><Ic n="chat" s={20} />WhatsApp Nexus Oxygen</Btn>
              <Btn href={TEL} kind="ghost"><Ic n="phone" s={20} />Call Now</Btn>
            </div>
          </div>
        </section>
      </main>

      <footer className="ftr">
        <div className="wrap ftr-g">
          <div>
            <div className="logo-panel"><img src="/assets/nexus-oxygen-logo.png" width="1120" height="983" alt="Nexus Oxygen logo" loading="lazy" /></div>
            <p className="tag-l">Nexus Oxygen — Dharavahik: Continuity. Purity. Connection.</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul><li><a href="#gases">Gases</a></li><li><a href="#why">Why Nexus</a></li><li><a href="#enquiries">Rate contracts</a></li><li><a href="#enquiries">Dealers</a></li><li><a href="#faq">FAQs</a></li><li><a href="#contact">Contact</a></li></ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={wa(RATE)}>WhatsApp +91 96442 69799</a></li>
              <li><a href={TEL}>Phone +91 91319 29456</a></li>
              <li><a href={MAIL}>nexusoxygen.idr@gmail.com</a> <CopyEmail /></li>
              <li>111, Post Office Road, Mhow, District Indore, Madhya Pradesh 453441</li>
              <li>Working hours: <T>{F.hours}</T></li>
            </ul>
          </div>
          <div>
            <h4>What we supply</h4>
            <p>Industrial oxygen, argon, nitrogen and CO₂ cylinders. Industrial gases only.</p>
            <p>Pithampur, Sagore, Betma, Mhow, Rau, Indore and Dhar, with Dewas on request.</p>
          </div>
        </div>
        <div className="wrap copy"><T>{`© 2026 Nexus Oxygen ${F.legal} · Industrial gases only · GSTIN ${F.gstin}`}</T></div>
      </footer>

      <div className="bar" role="region" aria-label="Quick contact">
        <a className="btn btn-primary" href={wa(RATE)} target="_blank" rel="noopener noreferrer"><Ic n="chat" s={18} />WhatsApp</a>
        <a className="btn btn-navy" href={TEL}><Ic n="phone" s={18} />Call</a>
      </div>
    </>
  )
}
