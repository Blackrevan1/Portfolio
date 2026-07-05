import { skills } from '../data'

export default function Stack() {
  return (
    <section className="section section--tight" id="stack">
      <div className="container">
        <div className="head reveal">
          <div className="kicker kicker--muted">// toolbox</div>
          <h2 className="head__title">The stack I reach for.</h2>
          <p className="head__sub">
            Backend and data at the core, wrapped in the DevOps, cloud and observability tooling
            that gets it to production and keeps it there.
          </p>
        </div>

        <div className="stack__grid">
          {skills.map((cat) => (
            <div
              className={`stack__card reveal${cat.learning ? ' stack__card--wide' : ''}`}
              key={cat.group}
            >
              <div className="stack__group">
                <span className="stack__dot" />
                {cat.group}
                {cat.note && <span className="stack__learn">{cat.note}</span>}
              </div>
              <div className="stack__items">
                {cat.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
