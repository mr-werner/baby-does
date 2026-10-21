import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Clock, CreditCard, Gift, Mail, MapPin, Menu, Phone, RotateCcw, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/baby-does-logo.png";
import logoCream from "./assets/baby-does-logo-cream.png";

// ------------------------------------------------------------ Content (from babydoesclothing.com, all pages)
const COMPANY = "Baby Doe's";
const ABBR = "bd";
const END_DATE = "2026-11-25T23:59:59-07:00";
const ORIGINAL = "http://www.babydoesclothing.com/";

const PHONE = "(303) 279-8100";
const PHONE_TEL = "+13032798100";
const EMAIL = "info@babydoesclothing.com";
const ADDRESS = ["1116 Washington Ave.", "Golden, CO 80401"];
const HOURS = "10AM – 6PM";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Baby+Doe%27s+1116+Washington+Ave+Golden+CO+80401";
const GOOGLE_REVIEWS = "https://www.google.com/search?q=Baby+Doe%27s+Clothing+1116+Washington+Ave+Golden+CO+reviews";
const NEWSLETTER_URL = "https://eepurl.com/IxlgH";
const BUY_LOCAL_URL = "http://www.golden.com/BuyLocal/index.htm";

const SOCIAL_LINKS = [
  ["Facebook", "https://www.facebook.com/babydoesclothing"],
];

const photos = import.meta.glob("./assets/photos/*.jpg", { eager: true, import: "default" });
const ph = (name) => photos[`./assets/photos/${name}.jpg`];

const NAV = [
  ["Collection", "#collection"],
  ["Artisans", "#artisans"],
  ["Our Story", "#story"],
  ["Visit", "#visit"],
];

// Clothing lines named on the homepage.
const BRANDS = [
  "JAG Jeans", "Cut Loose", "dylan by True Grit", "Nomadic Traders", "YEST", "Neon Buddha", "Indigenous Designs",
  "Pure Sweaters", "Royal Robbins", "KAVU", "Aventura", "Chalet", "Tulip", "Tribal", "Tasha Polizzi", "ExOfficio",
  "Curio Sweaters", "Wooly Bully Wear", "Mismash", "Desigual", "Maruca Handbags",
];

// Photos from the Fashion page (each brand's own page).
const LOOKBOOK = [
  ["JAG Jeans", "b-jag-jeans"],
  ["Royal Robbins", "b-royal-robbins"],
  ["PJ Salvage", "b-pj-salvage"],
  ["Aventura", "b-aventura"],
  ["Indigenous Designs", "b-indigenous"],
  ["Maruca Bags", "b-maruca"],
  ["Pure Sweaters", "b-pure"],
  ["Icelandic", "b-icelandic"],
  ["Cut Loose", "b-cut-loose"],
  ["Wooly Bully Wear", "b-wooly-bully"],
  ["Nomadic Traders", "b-nomadic-traders"],
  ["Neon Buddha", "b-neon-buddha"],
].map(([name, img, label]) => ({ name: label || name, img }));

const DEPARTMENTS = [
  {
    no: "I",
    title: "Women's Clothing",
    script: "for the way you live",
    img: "store-collage",
    text: "Fun, casual clothing that works for the Colorado lifestyle, from a day in the mountains to a night on the town, picked for good fit, fabrics that feel wonderful, and a run of sizes so you won't see your outfit on everyone else.",
  },
  {
    no: "II",
    title: "Artisan Jewelry",
    script: "irresistible",
    img: "j-chelsea-stone",
    text: "An ever-changing case of local and regional artisan jewelry: sterling, pearls, glass, enamel and repurposed pieces from makers across Colorado and the country.",
  },
  {
    no: "III",
    title: "Fine Craft & Fiber Arts",
    script: "for the home, and to wear",
    img: "c-edward-nunez",
    text: "Handmade work for the home and garden, wearable art, felted and woven fiber pieces, art dolls, glass, paintings and cards by Colorado artists.",
  },
];

// Artisan spotlight: names and photos from the Artisan Jewelry, Fine Craft and Fiber Arts pages.
const ARTISANS = [
  { name: "Bijou Graphique", kind: "jewelry", img: "j-bijou-graphique" },
  { name: "Annie Ciszak Pazar", kind: "jewelry", img: "j-annie-ciszak-pazar" },
  { name: "Crazy as a Loom", kind: "fiber", img: "fiber-crazy-as-a-loom" },
  { name: "Pam Caidin", kind: "jewelry", img: "j-pam-caidin" },
  { name: "Laffing Stock", kind: "craft", img: "c-laffing-stock" },
  { name: "Cathrine Baird Young", kind: "jewelry", img: "j-cathrine-baird-young" },
  { name: "Patricia Zilinski", kind: "craft", img: "c-patricia-zilinski" },
  { name: "Bwyneth Fiber Arts", kind: "fiber", img: "f-bwyneth" },
  { name: "Jesse Crock", kind: "craft", img: "c-jesse-crock" },
  { name: "Wendy Witchner", kind: "jewelry", img: "j-wendy-witchner" },
  { name: "Angelic Relics", kind: "craft", img: "c-angelic-relics" },
  { name: "Unique Gems & Jewelry", kind: "jewelry", img: "j-unique-gems" },
  { name: "Doug Bitgood", kind: "craft", img: "c-doug-bitgood" },
  { name: "Magpie Pottery", kind: "jewelry", img: "j-magpie-pottery" },
  { name: "Nina Sampsel", kind: "craft", img: "c-nina-sampsel" },
  { name: "April Hale", kind: "jewelry", img: "j-april-hale" },
  { name: "Susan Schmitt", kind: "craft", img: "c-susan-schmitt" },
  { name: "Julie Glassman", kind: "jewelry", img: "j-julie-glassman" },
  { name: "Jan Archuleta", kind: "craft", img: "c-jan-archuleta" },
  { name: "Alex Horst", kind: "jewelry", img: "j-alex-horst" },
  { name: "Marcie Miller", kind: "craft", img: "c-marcie-miller" },
  { name: "Darlene Maestas", kind: "jewelry", img: "j-darlene-maestas" },
];

const KINDS = [
  ["all", "All makers"],
  ["jewelry", "Artisan jewelry"],
  ["craft", "Fine craft"],
  ["fiber", "Fiber arts"],
];
const KIND_LABEL = { jewelry: "Artisan jewelry", craft: "Fine craft", fiber: "Fiber arts" };

// The longer roll call from the Artists page.
const MORE_ARTISANS = [
  "Eye Candy", "Dawn Estrin", "Candice Kiesow", "CC Designs", "Dar's Designs", "Julie Shumaker", "Sterling Jules",
  "Maggie Mae Beyeler", "Margaret Hannan", "Rag Sky Art Studio", "Michelene Berkey", "Tigress Design Studio",
  "Diana Prianto Studio", "Rocky Stiers", "Chris Orlikowski", "Dennis & Marilyn Quinn", "Whitney", "Mama's Little Babies",
  "Fabiola Allen", "Lew 'n Me Bags", "Sondra Finch", "Loop to Loop", "Wanda Blackburn", "Gage Conrad", "Julie Leidel",
  "Bungalow Craft", "Deb Van Steenhoven", "Sunny Monaco", "Stella Riga Design", "Lois Barber", "Birds of a Feather",
  "Becky Pearson", "Connie Gallo", "Janet Nunn", "Edward Nuñez", "Open Range Art Dolls",
];

const TIMELINE = [
  ["1999", "Baby Doe's opens in historic downtown Golden."],
  ["2002", "The store moves into the historic building that once housed The Fair Variety Store, where locals still remember buying penny candy."],
  ["2006", "Named Business of the Year by the Golden Chamber of Commerce."],
  ["2014", "Receives the Golden Mayoral Award for Excellence."],
];

const AWARDS = [
  { year: "2006", title: "Business of the Year", by: "Golden Chamber of Commerce" },
  { year: "2014", title: "Golden Mayoral Award for Excellence", by: "" },
  { year: "2015", title: "Charlie O'Brien Volunteer Award", by: "Golden Chamber of Commerce" },
];

const CAUSES = ["Doctors Without Borders", "Golden Retriever Rescue of the Rockies", "Sky High Hope Camp"];

// Verbatim from the Testimonials list on the About page (unsigned on the original site).
const TESTIMONIALS = [
  "I LOVE the fact that I don’t go out and see my clothes on other people. Baby Doe's carefully selects a run of sizes and unique items to ensure that my wardrobe belongs to ME.",
  "I get compliments ALL THE TIME!! People stop me all the time to ask me where I got the item I am wearing. I always send them to Baby Doe's.",
  "Selection is hip, fun, chic… You can rest assured knowing that Baby Doe’s carries items for almost any occasion.",
  "I love the handmade items and fiber arts. I love having a unique wardrobe piece and knowing that nobody else in the world has something just like it.",
];

const POLICIES = [
  [CreditCard, "We accept", "VISA, Mastercard, American Express and Discover."],
  [Gift, "Gift certificates", "Available for any amount."],
  [RotateCcw, "Returns", "Exchange or store credit within 14 days with the original receipt. Items must be in sellable condition, not washed or worn. Clearance and layaway purchases are final."],
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// ------------------------------------------------------------ Ornaments (Victorian silver-boom flourishes)
function Flourish({ className = "" }) {
  return (
    <svg className={`flourish ${className}`} viewBox="0 0 240 24" aria-hidden="true">
      <path d="M2 12h86M152 12h86" />
      <path d="M88 12c8 0 10-8 18-8s8 8 14 8 6-8 14-8 10 8 18 8" />
      <path d="M88 12c8 0 10 8 18 8s8-8 14-8 6 8 14 8 10-8 18-8" />
      <circle cx="120" cy="12" r="2.6" />
      <circle cx="80" cy="12" r="1.6" />
      <circle cx="160" cy="12" r="1.6" />
    </svg>
  );
}

function Medallion() {
  return (
    <svg className="medallion" viewBox="0 0 200 200" role="img" aria-label="Established 1999, Golden, Colorado">
      <defs>
        <path id="ring-top" d="M30 100a70 70 0 0 1 140 0" />
        <path id="ring-bottom" d="M24 100a76 76 0 0 0 152 0" />
      </defs>
      <circle cx="100" cy="100" r="96" className="m-rim" />
      <circle cx="100" cy="100" r="88" className="m-face" />
      <circle cx="100" cy="100" r="58" className="m-inner" />
      {Array.from({ length: 60 }).map((_, i) => (
        <line key={i} x1="100" y1="6" x2="100" y2="12" transform={`rotate(${i * 6} 100 100)`} className="m-tick" />
      ))}
      <text className="m-ring"><textPath href="#ring-top" startOffset="50%" textAnchor="middle">GOLDEN · COLORADO</textPath></text>
      <text className="m-ring"><textPath href="#ring-bottom" startOffset="50%" textAnchor="middle">WASHINGTON AVENUE</textPath></text>
      <text x="100" y="92" textAnchor="middle" className="m-small">EST.</text>
      <text x="100" y="124" textAnchor="middle" className="m-year">1999</text>
      <path d="M58 100h-10M152 100h-10" className="m-tick" />
    </svg>
  );
}

function MiniMap() {
  // Simplified from the hand-drawn map on the original Contact page. Not to scale.
  return (
    <svg className="mini-map" viewBox="0 0 360 300" role="img" aria-label="Map: Baby Doe's is on Washington Avenue between 11th and 12th Streets, a block south of Clear Creek">
      <rect x="0" y="0" width="360" height="300" className="mm-ground" />
      <path d="M0 34c60-18 110 10 180-4s130-14 180 2v-34H0z" className="mm-creek" />
      <text x="20" y="22" className="mm-label mm-creek-label">Clear Creek</text>
      {[[78, "11th St"], [158, "12th St"], [238, "13th St"]].map(([y, label]) => (
        <g key={label}>
          <rect x="0" y={y} width="360" height="16" className="mm-street" />
          <text x="12" y={y + 12} className="mm-label">{label}</text>
        </g>
      ))}
      <rect x="196" y="34" width="24" height="266" className="mm-avenue" />
      <text x="0" y="0" transform="translate(212 290) rotate(-90)" className="mm-label mm-ave-label">Washington Ave</text>
      <g className="mm-pin" transform="translate(178 126)">
        <circle r="15" />
        <text y="5" textAnchor="middle">BD</text>
      </g>
      <text x="234" y="126" className="mm-label mm-strong">Baby Doe's</text>
      <text x="234" y="140" className="mm-label">1116 Washington</text>
    </svg>
  );
}

// ------------------------------------------------------------ Layout
function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return (
    <>
      <div className="ribbon">
        <div className="wrap ribbon-inner">
          <span><Clock size={14} aria-hidden="true" /> Open {HOURS}, 7 days a week</span>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer"><MapPin size={14} aria-hidden="true" /> {ADDRESS[0]} {ADDRESS[1]}</a>
          <a href={`tel:${PHONE_TEL}`} className="ribbon-phone"><Phone size={14} aria-hidden="true" /> {PHONE}</a>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="brand" aria-label="Baby Doe's home">
            <img src={logo} alt="Baby Doe's" width="780" height="496" />
            <span className="brand-tag">Clothing · Artisan Jewelry · Fine Craft</span>
          </a>
          <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
            {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a href={`tel:${PHONE_TEL}`} className="nav-call" onClick={() => setOpen(false)}><Phone size={16} aria-hidden="true" /> Call the shop</a>
          </nav>
          <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="awning" aria-hidden="true" />
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">A women's boutique on historic Washington Avenue</span>
          <h1>
            Delightful clothing, <em>artisan jewelry</em> & fine craft.
          </h1>
          <p className="hero-script">for the way you live</p>
          <p className="hero-lede">
            A short 15 minute drive from Denver, Baby Doe's is where women from all over the Front Range come for good fit, honest opinions and pieces by more than 40 regional artisans. You leave feeling good and looking great.
          </p>
          <div className="hero-actions">
            <a href="#visit" className="btn btn-primary">Plan a visit <ArrowRight size={18} aria-hidden="true" /></a>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost"><Phone size={17} aria-hidden="true" /> {PHONE}</a>
          </div>
        </div>
        <div className="hero-art">
          <figure className="arch">
            <img src={ph("store-mural")} alt="Inside Baby Doe's: clothing, scarves and craft displays beneath the old painted Wrigley's sign on the brick wall" width="450" height="297" />
          </figure>
          <figure className="cabinet-card">
            <img src={ph("j-annie-ciszak-pazar")} alt="Silver hoop earrings with pearls by Annie Ciszak Pazar" width="573" height="700" loading="lazy" />
            <figcaption>Annie Ciszak Pazar</figcaption>
          </figure>
          <Medallion />
        </div>
      </div>
      <div className="wrap">
        <ul className="proof">
          <li><strong>40+</strong><span>regional artisans</span></li>
          <li><strong>7</strong><span>days a week, {HOURS}</span></li>
          <li><strong>1999</strong><span>in downtown Golden</span></li>
          <li><strong>2006</strong><span>Chamber Business of the Year</span></li>
        </ul>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="marquee" aria-label="Clothing lines we carry">
      <div className="marquee-sign">
        <span className="marquee-title">Now showing</span>
        <div className="marquee-track">
          <div className="marquee-row">
            {row.map((b, i) => <span key={i} aria-hidden={i >= BRANDS.length ? "true" : undefined}>{b}<i>✦</i></span>)}
          </div>
        </div>
        <span className="marquee-title marquee-title-end">& much more</span>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section className="section collection" id="collection">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">The collection</span>
          <h2>Three rooms of <em>discoveries</em></h2>
          <Flourish />
          <p>We're always on the look-out for new lines and new artists, so there's always something new to find at Baby Doe's.</p>
        </div>
        <div className="dept-grid">
          {DEPARTMENTS.map((d) => (
            <article className="dept" key={d.title}>
              <div className="dept-photo"><img src={ph(d.img)} alt="" loading="lazy" /></div>
              <span className="dept-no">No. {d.no}</span>
              <h3>{d.title}</h3>
              <p className="dept-script">{d.script}</p>
              <p>{d.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Artisans() {
  const [kind, setKind] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const filtered = ARTISANS.filter((a) => kind === "all" || a.kind === kind);
  const list = showAll ? filtered : filtered.slice(0, 12);
  return (
    <section className="section artisans" id="artisans">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <span className="eyebrow">Artisan spotlight</span>
            <h2>The makers <em>behind the case</em></h2>
          </div>
          <p>Local and regional jewelers, painters, glass artists, fiber artists and repurposers. Their work changes with every season, so stop in to see what's new.</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Filter artisans">
          {KINDS.map(([k, label]) => (
            <button key={k} type="button" role="tab" aria-selected={kind === k} className={kind === k ? "is-on" : ""} onClick={() => setKind(k)}>{label}</button>
          ))}
        </div>
        <div className="maker-grid">
          {list.map((a) => (
            <figure className="maker" key={a.name}>
              <div className="maker-img"><img src={ph(a.img)} alt={`Work by ${a.name}`} loading="lazy" /></div>
              <figcaption>
                <span className="tag">{KIND_LABEL[a.kind]}</span>
                <strong>{a.name}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        {filtered.length > 12 && (
          <div className="more-row">
            <button type="button" className="btn btn-ghost" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
              {showAll ? "Show fewer makers" : `See all ${filtered.length} makers`}
            </button>
          </div>
        )}
        <div className="roll">
          <h3>Also in the shop</h3>
          <p>{MORE_ARTISANS.join(" · ")} <em>and more…</em></p>
        </div>
      </div>
    </section>
  );
}

function Lookbook() {
  return (
    <section className="section lookbook" aria-labelledby="lookbook-title">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <span className="eyebrow">On the racks</span>
            <h2 id="lookbook-title">Clothes for <em>everyday adventures</em></h2>
          </div>
          <p>Our customers want to have fun with how they dress and rely on Baby Doe's for the perfect mix of style, value and comfort. A few of the lines we carry:</p>
        </div>
      </div>
      <div className="look-strip">
        {LOOKBOOK.map((l) => (
          <figure className="look" key={l.img}>
            <img src={ph(l.img)} alt={`${l.name} clothing`} loading="lazy" />
            <figcaption>{l.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap story-grid">
        <div className="story-frame">
          <span className="eyebrow light">Why the name Baby Doe's?</span>
          <h2>Named for a <em>Colorado legend</em></h2>
          <Flourish className="light" />
          <p>
            We wanted a name that was regional and reflected the feisty, spirited women we admired and hoped would walk through our doors. Baby Doe Tabor, the second wife of silver baron Horace Tabor, lived a life that was anything but typical for a Victorian lady.
          </p>
          <p className="story-pull">Strong-willed, brave and determined.</p>
          <p>
            More than a boutique, Baby Doe's is a gathering place for women of all ages: somewhere to meet an old friend or make a new one, and to get an honest opinion on the jeans you're trying on or which scarf is the perfect color for you.
          </p>
        </div>
        <div className="timeline">
          <h3>From penny candy to pearls</h3>
          <ol>
            {TIMELINE.map(([year, text]) => (
              <li key={year}><span>{year}</span><p>{text}</p></li>
            ))}
          </ol>
          <figure className="story-photo">
            <img src={ph("c-designs-on-golden")} alt="Watercolor of Golden's Washington Avenue storefronts beneath the foothills, from Designs on Golden" loading="lazy" />
            <figcaption>Washington Avenue, by Designs on Golden, one of our artists</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="section community" aria-labelledby="community-title">
      <div className="wrap community-grid">
        <div>
          <span className="eyebrow">In the community</span>
          <h2 id="community-title">Helping make Golden <em>a place people want to be</em></h2>
          <p>
            Staff donate time and skills to the Golden Fine Arts Festival, and the store supports Golden schools, civic groups and local events. Our fundraising shopping days give a percentage of sales to causes such as:
          </p>
          <ul className="causes">
            {CAUSES.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <a className="buy-local" href={BUY_LOCAL_URL} target="_blank" rel="noopener noreferrer">
            <img src={ph("buy-local-golden")} alt="Buy Local Golden badge" width="91" height="74" loading="lazy" />
            <span>A proud <strong>Buy Local Golden</strong> shop</span>
          </a>
        </div>
        <div className="awards" aria-label="Awards">
          {AWARDS.map((a) => (
            <div className="award" key={a.title}>
              <div className="award-coin"><span>{a.year}</span></div>
              <div>
                <strong>{a.title}</strong>
                {a.by && <span>{a.by}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section words" aria-labelledby="words-title">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">In our customers' words</span>
          <h2 id="words-title">“Nobody else in the world <em>has something just like it.</em>”</h2>
          <Flourish />
        </div>
        <div className="quote-grid">
          {TESTIMONIALS.map((q, i) => (
            <blockquote className="quote" key={i}>
              <p>{q}</p>
            </blockquote>
          ))}
        </div>
        <p className="quote-source">
          Customer testimonials as published, unsigned, on the About page of babydoesclothing.com.{" "}
          <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">Read our reviews on Google <ArrowUpRight size={14} aria-hidden="true" /></a>
        </p>
      </div>
    </section>
  );
}

function Visit() {
  const today = (new Date().getDay() + 6) % 7;
  return (
    <section className="visit" id="visit">
      <div className="wrap visit-grid">
        <div className="signboard">
          <span className="eyebrow light">Come see us</span>
          <h2>Visit the shop</h2>
          <Flourish className="light" />
          <a className="visit-line" href={MAP_URL} target="_blank" rel="noopener noreferrer"><MapPin size={20} aria-hidden="true" /><span>{ADDRESS[0]}<br />{ADDRESS[1]}</span></a>
          <a className="visit-line" href={`tel:${PHONE_TEL}`}><Phone size={20} aria-hidden="true" /><span>{PHONE}</span></a>
          <a className="visit-line" href={`mailto:${EMAIL}`}><Mail size={20} aria-hidden="true" /><span>{EMAIL}</span></a>
          <table className="hours">
            <caption>Store hours</caption>
            <tbody>
              {DAYS.map((d, i) => (
                <tr key={d} className={i === today ? "is-today" : ""}>
                  <th scope="row">{d}</th>
                  <td>{HOURS}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="visit-actions">
            <a href={MAP_URL} className="btn btn-silver" target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-outline-light">Call {PHONE}</a>
          </div>
        </div>
        <div className="visit-side">
          <MiniMap />
          <p className="map-note">In the historic Fair Variety Store building on Washington Avenue, a short walk from Clear Creek. Map not to scale.</p>
          <div className="policies">
            {POLICIES.map(([Icon, title, text]) => (
              <div className="policy" key={title}>
                <Icon size={20} aria-hidden="true" />
                <div><strong>{title}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
          <div className="newsletter">
            <div>
              <strong>The Baby Doe's letter</strong>
              <p>New arrivals, artisan news and in-store events, once a month. We never share your email address.</p>
            </div>
            <a href={NEWSLETTER_URL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Subscribe <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src={logoCream} alt="Baby Doe's" width="780" height="496" loading="lazy" />
          <p>Delightful Clothing, Artisan Jewelry & Fine Craft</p>
        </div>
        <div>
          <h4>Visit</h4>
          <a href={MAP_URL} target="_blank" rel="noopener noreferrer">{ADDRESS[0]}<br />{ADDRESS[1]}</a>
          <span>Open {HOURS}, 7 days a week</span>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          {SOCIAL_LINKS.filter(([, url]) => url).map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
          ))}
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer">Newsletter</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Baby Doe's. Concept redesign by Blueprint WebStudio · Independent concept · not for official use. Current site: <a className="u" href={ORIGINAL}>babydoesclothing.com</a></span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a href="#collection" className="skip">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Artisans />
        <Lookbook />
        <Story />
        <Community />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
