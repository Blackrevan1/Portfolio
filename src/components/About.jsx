import { about } from '../data'
import Icon from './Icons'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__lead reveal">
            <div className="kicker kicker--muted">// who i am</div>
            {about.narrative.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div className="about__cards">
            {about.strengths.map((s) => (
              <div className="card reveal" key={s.index}>
                <div className="card__icon">
                  <Icon name={s.icon} />
                </div>
                <div className="card__title">{s.title}</div>
                <p className="card__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
