import Link from 'next/link'
import { Phone, Mail, MapPin, School } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        background:
          'linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Branding */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: 'var(--color-accent)' }}
              >
                <School className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">GS Wehringhausen</div>
                <div className="text-xs opacity-70">Grundschule</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Eine lebendige Gemeinschaftsschule im Herzen von Hagen-Wehringhausen.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide opacity-60 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 opacity-70 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  Mineralstraße 37<br />
                  58089 Hagen
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 opacity-70 flex-shrink-0" />
                <a
                  href="tel:+492331348190"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  02331 / 348190
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 opacity-70 flex-shrink-0" />
                <a
                  href="mailto:100189@schule.nrw.de"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity break-all"
                >
                  100189@schule.nrw.de
                </a>
              </li>
            </ul>
          </div>

          {/* Schnelllinks */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide opacity-60 mb-4">
              Schnelllinks
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Startseite', href: '/' },
                { label: 'Aktuelles', href: '/aktuelles' },
                { label: 'Galerie', href: '/galerie' },
                { label: 'Eltern', href: '/eltern' },
                { label: 'Kontakt', href: '/kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide opacity-60 mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Impressum', href: '/impressum' },
                { label: 'Datenschutz', href: '/datenschutz' },
                { label: 'Cookie-Einstellungen', href: '/cookies' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Grundschule Wehringhausen · Alle Rechte vorbehalten
          </p>
          <p className="text-xs opacity-60">
            Schulnummer: 100189 · Schulträger: Stadt Hagen
          </p>
        </div>
      </div>
    </footer>
  )
}
