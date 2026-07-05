import { profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          <b>{profile.name}</b> · © {year}{' '}
          <a href={profile.company} target="_blank" rel="noreferrer" className="accent">
            {profile.companyName}
          </a>
        </span>
        <span className="footer__stack">built with react · vite</span>
      </div>
    </footer>
  )
}
