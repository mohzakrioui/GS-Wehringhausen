import Link from 'next/link'
import { FileQuestion, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-6">
          <FileQuestion className="h-10 w-10 text-[var(--color-primary)]" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Seite nicht gefunden</h1>
        <p className="text-gray-600 mb-8">
          Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-transform hover:scale-105"
          style={{ background: 'var(--color-primary)' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}
