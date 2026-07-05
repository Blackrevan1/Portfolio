import { experience } from '../data'

export default function Experience() {
  return (
    <section className="section section--tight" id="experience">
      <div className="container">
        <div className="head reveal">
          <div className="kicker kicker--muted">// experience</div>
          <h2 className="head__title">Where I've built and shipped.</h2>
          <p className="head__sub">
            Moving from backend features to owning the full path — build, deploy, run.
          </p>
        </div>

        <div className="xp">
          {experience.map((job, i) => (
            <article className="xp__item reveal" key={i}>
              <div className="xp__meta">
                <span className="xp__period">{job.period}</span>
                <span className="xp__company">
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </span>
                <span className="xp__loc">{job.location}</span>
              </div>

              <div>
                <h3 className="xp__role">{job.role}</h3>
                <ul className="xp__pts">
                  {job.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
                <div className="xp__tags">
                  {job.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
