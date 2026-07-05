import { projects } from '../data'
import Icon from './Icons'

export default function Projects() {
  return (
    <section className="section section--tight" id="work">
      <div className="container">
        <div className="head reveal">
          <div className="kicker kicker--muted">// selected work</div>
          <h2 className="head__title">Things I've designed, built and deployed.</h2>
          <p className="head__sub">
            Backend services, infrastructure-as-code and the pipelines that ship them — each one
            solving a concrete, load-bearing problem.
          </p>
        </div>

        <div className="work__grid">
          {projects.map((p, i) => (
            <article className={`proj reveal${p.featured ? ' proj--featured' : ''}`} key={i}>
              <div className="proj__top">
                <span className="proj__icon">
                  <Icon name={p.icon} />
                </span>
                <span className="proj__badge">{p.badge}</span>
              </div>
              <h3 className="proj__name">{p.name}</h3>
              <p className="proj__desc">{p.description}</p>
              <div className="proj__impact">
                <Icon name="trendingUp" />
                {p.impact}
              </div>
              <div className="proj__stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
