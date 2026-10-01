import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import StagePhoto from "@/components/StagePhoto";
import { audiences, site, stagePhotos, testimonials, tiles, topics } from "@/lib/content";

const roman = ["i.", "ii.", "iii.", "iv.", "v.", "vi."];

export default function Home() {
  return (
    <>
      {/* ============ NAV ============ */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label={`${site.name} — back to top`}>
            <Image className="brand-logo" src="/images/mri-logo.png" alt={site.name} width={896} height={592} priority />
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#mission">Mission</a>
            <a href="#topics">Topics</a>
            <a href="#stage">On Stage</a>
            <a href="#audiences">Audiences</a>
          </nav>
          <a className="nav-cta" href="#book">
            Book Odis <span className="serif" style={{ fontSize: 16, letterSpacing: 0 }}>→</span>
          </a>
        </div>
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" id="top">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="eyebrow">Odis Bellinger · Founder &amp; Speaker</span>
                <h1>
                  Where boyhood<br />meets <em>brotherhood,</em><br />responsibility takes root.
                </h1>
                <p className="lede">
                  For more than three decades, Odis Bellinger has stood in front of young men, parents, educators, and
                  policymakers with one premise:{" "}
                  <em style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--bronze)" }}>
                    young men were not made for funeral processions and prisons.
                  </em>{" "}
                  The Male Responsibility Institute books him to say it out loud — on your stage.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#book">
                    <span>Book a Speaking Engagement</span>
                    <span className="arr" aria-hidden="true">→</span>
                  </a>
                  <a className="btn btn-secondary" href="#topics">
                    <span>Explore the Topics</span>
                    <span className="arr" aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
              <div className="hero-portrait">
                <Image
                  className="hero-img"
                  src="/images/odis_bellinger_headshot.png"
                  alt="Odis Bellinger"
                  width={978}
                  height={1211}
                  sizes="(max-width: 980px) 480px, 45vw"
                  priority
                />
                <span className="hero-caption">Odis Bellinger · MA, LLPC</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INFO TILES ============ */}
        <section className="tiles" aria-label="At a glance">
          <div className="wrap">
            <div className="tiles-inner">
              {tiles.map((tile) => (
                <div className="tile" key={tile.label}>
                  <span className="tile-label">{tile.label}</span>
                  <span className="tile-value">
                    {tile.big && <span className="big">{tile.big}</span>}
                    {tile.lines
                      ? tile.lines.map((line, i) => (
                          <span key={line}>{i > 0 && <br />}{line}</span>
                        ))
                      : tile.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ MISSION ============ */}
        <section className="story mission" id="mission">
          <div className="wrap">
            <div className="story-head">
              <span className="eyebrow">The Mission</span>
              <span className="chapter">Chapter I</span>
              <h2>A man is the sum of <em>the boys</em> who were never given the chance to grow into one.</h2>
            </div>
            <div className="mission-body">
              <figure>
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>
                  <p className="pull">
                    Young men were not created for funeral home processions and prisons. They were made for college,
                    trade schools, and entrepreneurship.
                  </p>
                </blockquote>
                <figcaption className="pull-attr">
                  <b>Odis Bellinger</b>Founder · Male Responsibility Institute
                </figcaption>
              </figure>
              <div className="mission-aside">
                <p>
                  The Male Responsibility Institute is the speaking and convening arm of the work Odis began in Southeast
                  Detroit in 1991 — when nearly three of every four children in the city were growing up in a
                  single-parent home, and the response from institutions was silence.
                </p>
                <p>
                  What started as an after-school program at a single school is now a national platform. Odis speaks to
                  school districts, corrections departments, philanthropies, faith communities, and corporate audiences
                  about the same thing he has been saying for thirty-four years: every boy is someone’s responsibility,
                  and every man becomes one.
                </p>
                <p>
                  Booking him is not a motivational keynote. It is a conversation about what it costs a community when
                  boys are written off — and what it returns when they are not.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TOPICS ============ */}
        <section className="story topics" id="topics">
          <div className="wrap">
            <div className="story-head">
              <span className="eyebrow">The Speaking Practice</span>
              <span className="chapter">Chapter II</span>
              <h2>Six talks, organized around <em>who is in the room</em> and what they came to hear.</h2>
            </div>
            {topics.map((topic, i) => (
              <article className="topic" key={topic.titleEm}>
                <div className="topic-num">
                  <small>No. {String(i + 1).padStart(2, "0")}</small>
                  {topic.format}
                </div>
                <div>
                  <h3>
                    {topic.titleLead}
                    <em>{topic.titleEm}</em>
                    {topic.titleTail}
                  </h3>
                  <p>{topic.body}</p>
                  <span className="tags">{topic.tags}</span>
                </div>
                <div className="topic-meta">
                  <div className="meta-label">Length</div>
                  <div className="meta-value">
                    {topic.length[0]}<br />{topic.length[1]}
                  </div>
                </div>
                <span className="arr" aria-hidden="true">→</span>
              </article>
            ))}
          </div>
        </section>

        {/* ============ ON STAGE ============ */}
        <section className="story stage" id="stage">
          <div className="wrap">
            <div className="story-head">
              <span className="eyebrow on-dark">On the Record</span>
              <span className="chapter" style={{ color: "var(--gold)" }}>Chapter III</span>
              <h2>What leaders and <em>parents</em> have said about Odis's programs impact on young men.</h2>
            </div>
          </div>
          <div className="wrap">
            <div className="stage-grid">
              {testimonials.map((t) => (
                <figure className="testimonial" key={t.name}>
                  <blockquote><p className="q">{t.quote}</p></blockquote>
                  <figcaption className="who"><b>{t.name}</b><span>{t.role}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="wrap" style={{ marginTop: 1 }}>
            <div className="stage-strip">
              {stagePhotos.map((photo) => (
                <StagePhoto key={photo.label} {...photo} />
              ))}
            </div>
          </div>
        </section>

        {/* ============ AUDIENCES ============ */}
        <section className="story audiences" id="audiences">
          <div className="wrap">
            <div className="story-head">
              <span className="eyebrow">Who Books Odis</span>
              <span className="chapter">Chapter IV</span>
              <h2>Audiences that have <em>already</em> been in the room.</h2>
            </div>
            <div className="aud-grid">
              {audiences.map((aud, i) => (
                <div className="aud" key={aud.title}>
                  <span className="aud-num">{roman[i]}</span>
                  <h3 className="h4">{aud.title}</h3>
                  <p>{aud.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BOOKING ============ */}
        <section className="story booking" id="book">
          <div className="wrap">
            <div className="form-shell">
              <div>
                <span className="eyebrow">Booking Inquiries</span>
                <h2>Tell us about your <em>stage.</em></h2>
                <p className="lede">
                  A staff member from the Male Responsibility Institute will respond within two business days with
                  availability, scope, and fees. Honorariums are scaled to the host’s capacity — schools and community
                  organizations are welcome to ask.
                </p>
                <div className="contact-meta">
                  <b>Direct</b>
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a><br />
                  {site.contact.phone}<br />
                  {site.contact.location}
                </div>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap foot">
          <div className="foot-brand">
            <span
              className="foot-meta"
              style={{
                fontStyle: "normal",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--cream)",
                lineHeight: 1.6,
              }}
            >
              {site.name}
              <br />
              <span style={{ color: "var(--gold)", fontWeight: 500, letterSpacing: ".22em", fontSize: 11 }}>
                Detroit · est. 1991
              </span>
            </span>
          </div>
          <span className="foot-copy">© {new Date().getFullYear()} {site.name} · Odis Bellinger, MA, LLPC</span>
          <nav className="foot-links" aria-label="Footer">
            <a href="#mission">Mission</a>
            <a href="#topics">Topics</a>
            <a href="#book">Book</a>
            {site.linkedin && <a href={site.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a>}
          </nav>
        </div>
      </footer>
    </>
  );
}
