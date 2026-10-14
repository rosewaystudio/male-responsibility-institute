import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import SignupForm from "@/components/SignupForm";
import SpeakerReel from "@/components/SpeakerReel";
import SmartLink from "@/components/SmartLink";
import { audiences, book, book2, bundlePerks, events, site, testimonials, topics } from "@/lib/content";

const roman = ["i.", "ii.", "iii.", "iv.", "v.", "vi."];

export default function Home() {
  return (
    <>
      {/* ============ NAV ============ */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" aria-label={`${site.name}, back to top`}>
            <Image className="brand-logo" src="/images/mri-logo.png" alt={site.name} width={905} height={595} priority />
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#speaking">Speaking</a>
            <a href="#book">Books</a>
            <a href="#events">Events</a>
            <a href="#reel">Watch</a>
          </nav>
          <div className="nav-ctas">
            <a className="btn btn-line" href="#book">Buy the Book</a>
            <a className="btn btn-gold" href="#inquire">
              <span>Book Odis</span> <span className="arr" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">Speaker · Author · Counselor</span>
              <h1>
                Odis Bellinger is here to tell young men <em>they can win.</em>
              </h1>
              <p className="lede">
                For 34 years, Odis has worked with young men across Detroit and beyond. Book him for your stage, or
                start with his book on seven steps to promote the success of African American males.
              </p>
              <div className="btn-row">
                <a className="btn btn-gold" href="#inquire">
                  <span>Book a Speaking Engagement</span>
                  <span className="arr" aria-hidden="true">→</span>
                </a>
                <a className="btn btn-line" href="#book">
                  <span>Get the Book · {book.paperback.price}</span>
                  <span className="arr" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hero-art">
              <Image
                className="hero-portrait"
                src="/images/odis-bellinger.png"
                alt="Odis Bellinger"
                width={1320}
                height={1621}
                sizes="(max-width: 980px) 480px, 45vw"
                priority
              />
              <Image
                className="hero-book"
                src={book.cover}
                alt={`${book.title} book cover`}
                width={212}
                height={327}
              />
            </div>
          </div>
        </section>

        {/* ============ TWO PATHS ============ */}
        <section className="dark" aria-label="Speaking and the book">
          <div className="wrap paths">
            <div className="path" id="speaking">
              <span className="path-k">01 · Speaking</span>
              <h2 className="path-title">
                Bring Odis to <em>your stage.</em>
              </h2>
              <p>Keynotes, workshops, and assemblies for schools, corporations, foundations, faith communities, and justice systems.</p>
              <a className="link" href="#topics">
                See the six talks <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="path">
              <span className="path-k">02 · The Book</span>
              <h2 className="path-title">
                <em>{book.title}</em>
              </h2>
              <p>
                Seven steps to promote the success of African American males. Paperback {book.paperback.price}.{" "}
                {book.kindle.price} on Kindle.
              </p>
              <a className="link" href="#book">
                Get your copy <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ MISSION ============ */}
        <section className="block mission" id="mission">
          <div className="wrap mission-grid">
            <figure>
              <span className="qmark" aria-hidden="true">“</span>
              <blockquote>
                <p className="pull">
                  Early funeral processions and prisons are not for our Black males. College, trade schools, and
                  entrepreneurship are.
                </p>
              </blockquote>
              <figcaption className="attr">
                <b>Odis Bellinger</b>Founder · {site.name}
              </figcaption>
            </figure>
            <div className="mission-copy">
              <span className="eyebrow">The Mission</span>
              <p style={{ marginTop: 24 }}>
                <span className="mission-name">The Male Responsibility Institute</span> is the speaking and publishing home
                for the work Odis began in Southeast Detroit in {site.founded}, when the city&apos;s institutions were doing
                little for its boys.
              </p>
              <p>
                It started as an after-school program at a single school. Today it&apos;s a national platform, built on
                what Odis has said for three decades: every boy is someone&apos;s responsibility, and every boy grows up
                to carry responsibility of his own.
              </p>
            </div>
          </div>
        </section>

        {/* ============ THE BOOK ============ */}
        <section className="block" id="book">
          <div className="wrap book-grid">
            <div>
              <Image
                className="book-cover"
                src={book.cover}
                alt={`${book.title}, by ${book.author}`}
                width={212}
                height={327}
              />
              <p className="book-meta">By {book.author}</p>
            </div>
            <div>
              <span className="eyebrow">The Book</span>
              <h2>
                {book.titleLead}
                <em>{book.titleEm}</em>
              </h2>
              <p className="book-sub">{book.subtitle}</p>
              <p className="lede">
                The message Odis has given in classrooms, gyms, and detention centers, in book form. Written for young
                men and for the parents, mentors, and educators working alongside them.
              </p>
              <div className="formats">
                <div className="fmt">
                  <span className="fmt-k">Paperback</span>
                  <span className="fmt-price">{book.paperback.price}</span>
                  <SmartLink className="btn btn-gold" href={book.paperback.orderDirectHref}>
                    <span>Order Direct</span>
                    <span className="arr" aria-hidden="true">→</span>
                  </SmartLink>
                  <SmartLink className="alt" href={book.paperback.amazonHref}>
                    or buy on Amazon
                  </SmartLink>
                </div>
                <div className="fmt">
                  <span className="fmt-k">Kindle</span>
                  <span className="fmt-price">
                    {book.kindle.price}
                    <small>on Amazon</small>
                  </span>
                  <SmartLink className="btn btn-line" href={book.kindle.href}>
                    <span>{book.kindle.price === "Free" ? "Download Free" : "Buy on Kindle"}</span>
                    <span className="arr" aria-hidden="true">→</span>
                  </SmartLink>
                </div>
              </div>
              <p className="bulk-note">
                Ordering for a school, program, or event? <a href="#bundle">See the Book + Talk bundle →</a>
              </p>
            </div>
          </div>

          <div className="wrap">
            <div className="book2">
              <div className="book2-cover">
                {book2.cover ? (
                  <Image src={book2.cover} alt={`${book2.titleLead}${book2.titleEm} book cover`} fill sizes="160px" />
                ) : (
                  "Book 2 cover"
                )}
              </div>
              <div>
                <span className="eyebrow">Also by Odis</span>
                <h3>
                  {book2.titleLead}
                  <em>{book2.titleEm}</em>
                </h3>
                <p className="book2-sub">{book2.subtitle}</p>
                <p className="book2-desc">{book2.description}</p>
                <div className="book2-row">
                  <span className="fmt-price" style={{ fontSize: 32 }}>{book2.price}</span>
                  <SmartLink className="btn btn-line" href={book2.href}>
                    <span>Buy the Book</span>
                    <span className="arr" aria-hidden="true">→</span>
                  </SmartLink>
                  <span className="ev-tag book2-tag">{book2.tag}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ REEL ============ */}
        <section className="block dark" id="reel">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Watch</span>
              <h2>
                See Odis <em>in the room.</em>
              </h2>
            </div>
            <SpeakerReel />
          </div>
        </section>

        {/* ============ TOPICS ============ */}
        <section className="block" id="topics">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Speaking Topics</span>
              <h2>
                Six talks, built around <em>who&apos;s in the room.</em>
              </h2>
            </div>
            <div>
              {topics.map((topic, i) => (
                <article className="topic" key={topic.titleEm}>
                  <div className="t-num">
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
                  </div>
                  <div className="t-meta">
                    {topic.meta[0]}
                    <br />
                    {topic.meta[1]}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BOOK + TALK BUNDLE ============ */}
        <section className="block bundle" id="bundle">
          <div className="wrap bundle-grid">
            <div className="bundle-visual">
              <Image src={book.cover} alt="" width={212} height={327} />
              <Image src={book.cover} alt={book.title} width={212} height={327} />
              <Image src={book.cover} alt="" width={212} height={327} />
            </div>
            <div>
              <span className="eyebrow">Book + Talk</span>
              <h2>
                Every attendee leaves with <em>a copy.</em>
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                Add books to any engagement so the message keeps going after the talk ends.
              </p>
              <ul>
                {bundlePerks.map((perk, i) => (
                  <li key={perk}>
                    <span>{roman[i]}</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a className="btn btn-gold" href="#inquire">
                <span>Ask About the Bundle</span>
                <span className="arr" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ EVENTS ============ */}
        <section className="block dark" id="events">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Upcoming</span>
              <h2>
                Where Odis is <em>speaking next.</em>
              </h2>
            </div>
            {events.map((ev, i) => (
              <div className="ev" key={`${ev.month}-${ev.day}-${i}`}>
                <div className="ev-date">
                  <span>{ev.month}</span>
                  <b>{ev.day}</b>
                </div>
                <div>
                  <h3>{ev.name}</h3>
                  <p>{ev.place}</p>
                </div>
                <span className="ev-tag">{ev.tag}</span>
              </div>
            ))}
            <div className="ev-foot">
              <span>Want Odis at your event?</span>
              <a className="btn btn-gold" href="#inquire">
                <span>Request a Date</span>
                <span className="arr" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="block" aria-labelledby="testimonials-heading">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">In Their Words</span>
              <h2 id="testimonials-heading">
                What hosts and <em>graduates</em> say.
              </h2>
            </div>
            <div className="quotes">
              {testimonials.map((t) => (
                <figure className="qt" key={t.name}>
                  <blockquote>
                    <p>{t.quote}</p>
                  </blockquote>
                  <figcaption>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ AUDIENCES ============ */}
        <section className="block" style={{ paddingTop: 0 }} id="audiences">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Who Books Odis</span>
              <h2>
                Audiences he&apos;s <em>already</em> spoken to.
              </h2>
            </div>
            <div className="aud">
              {audiences.map((aud) => (
                <div key={aud.title}>
                  <h3>{aud.title}</h3>
                  <p>{aud.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BOOKING ============ */}
        <section className="block booking" id="inquire">
          <div className="wrap form-shell">
            <div>
              <span className="eyebrow">Booking Inquiries</span>
              <h2>
                Tell us about <em>your event.</em>
              </h2>
              <p className="lede" style={{ marginTop: 22 }}>
                We&apos;ll reply within two business days with availability, scope, and fees. Fees are scaled to what
                the host can pay, so schools and community organizations are welcome to ask.
              </p>
              <div className="contact">
                <b>Direct</b>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                <br />
                {site.contact.phone}
                <br />
                {site.contact.location}
              </div>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* ============ EMAIL SIGN-UP ============ */}
        <section className="dark signup" aria-labelledby="signup-heading">
          <div className="wrap signup-grid">
            <div>
              <h2 id="signup-heading">
                Stay in the <em>loop.</em>
              </h2>
              <p>New events, book news, and occasional notes from Odis.</p>
            </div>
            <SignupForm />
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap foot">
          <div className="foot-name">
            {site.name}
            <span>Detroit · est. {site.founded}</span>
          </div>
          <span className="foot-copy">
            © {new Date().getFullYear()} {site.name} · Odis Bellinger, MA, LLPC
          </span>
          <nav className="foot-links" aria-label="Footer">
            <a href="#speaking">Speaking</a>
            <a href="#book">Book</a>
            <a href="#events">Events</a>
            <a href="#inquire">Contact</a>
          </nav>
        </div>
        <div className="wrap">
          <p className="foot-credit">
            Website powered by <SmartLink href={site.credit.href}>{site.credit.label}</SmartLink>
          </p>
        </div>
      </footer>
    </>
  );
}
