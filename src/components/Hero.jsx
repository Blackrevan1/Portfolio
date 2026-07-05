import { profile, highlights } from '../data'
import Icon from './Icons'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__glow" />
      <div className="container">
        <div className="hero__inner reveal">
          <div className="kicker">
            <span className="kicker__dot" />
            {profile.kicker} · Available for work
          </div>

          <h1
            className="hero__title"
            dangerouslySetInnerHTML={{ __html: profile.headline.replace(/\n/g, ' ') }}
          />

          <p className="hero__lead">{profile.summary}</p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View my work
              <Icon name="arrowRight" />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>

          <div className="hero__stats">
            {highlights.map((h) => (
              <div className="hero__stat" key={h.value}>
                <b>{h.value}</b>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
