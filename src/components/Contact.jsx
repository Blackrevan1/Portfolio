import { contact, profile } from '../data'
import Icon from './Icons'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact reveal">
        <div className="kicker">// get in touch</div>
        <h2
          className="contact__title"
          dangerouslySetInnerHTML={{ __html: contact.title }}
        />
        <p className="contact__body">{contact.body}</p>

        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            <Icon name="mail" />
            Email me
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
            <Icon name="github" />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
            <Icon name="linkedin" />
            LinkedIn
          </a>
        </div>

        <div className="contact__direct">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {'  ·  '}
          <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
        </div>
      </div>
    </section>
  )
}
