import { education, certifications } from '../data'

export default function Education() {
  return (
    <section className="section section--tight" id="education">
      <div className="container">
        <div className="head reveal">
          <div className="kicker kicker--muted">// foundations</div>
          <h2 className="head__title">Education &amp; certifications.</h2>
        </div>

        <div className="edu__grid">
          <div className="reveal">
            {education.map((e, i) => (
              <div className="edu__card" key={i}>
                <div className="edu__period">{e.year}</div>
                <div className="edu__degree">{e.degree}</div>
                <div className="edu__school">{e.school}</div>
                <div className="edu__detail">{e.detail}</div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <div className="certs__label">Certifications &amp; coursework</div>
            {certifications.map((c) => (
              <div className="certs__item" key={c.name}>
                <span className="certs__name">{c.name}</span>
                <span className="certs__by">{c.by}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
