import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm9.5 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
        <path d="M14.84 3c.36 1.95 1.53 3.9 3.5 5.06 1 .58 2.06.87 3.16.9v3.2a9.3 9.3 0 0 1-3.89-.9 9.36 9.36 0 0 1-1.93-1.24v6.2c0 1.4-.42 2.75-1.21 3.9A6.9 6.9 0 0 1 8.8 23a6.8 6.8 0 0 1-3.23-.81A6.9 6.9 0 0 1 2 16.1a6.92 6.92 0 0 1 10.22-6.08v3.33a3.75 3.75 0 0 0-1.92-.52 3.77 3.77 0 0 0-3.75 3.77c0 2.08 1.68 3.77 3.75 3.77 2.08 0 3.75-1.7 3.75-3.77V3h.79Z" />
      </svg>
    ),
  },
]

const informationLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-400/15 bg-gradient-to-b from-stone-950 via-black to-stone-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <Link href="/" className="inline-flex">
              <Image src="/logo.png" alt="Floriqu logo" width={230} height={36} className="h-auto w-[190px] sm:w-[230px]" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone-400">
              Elevated fragrance selections with a darker, refined storefront aesthetic designed to feel premium on every screen.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/25 bg-black/70 text-stone-300 transition hover:border-amber-300/50 hover:text-amber-200"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:pl-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-stone-300">
              <li>
                <Link href="mailto:hhassanalk@gmail.com" className="transition hover:text-amber-200">
                  hhassanalk@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/923171032052" target="_blank" className="transition hover:text-amber-200">
                  03171032052
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Information</h4>
            <ul className="mt-5 space-y-4 text-sm text-stone-300">
              {informationLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-amber-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-400/15 bg-gradient-to-br from-amber-300/10 via-transparent to-transparent p-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Floriqu</h4>
            <p className="mt-4 text-sm leading-7 text-stone-400">
              Distinctive scents, premium presentation, and a polished shopping experience built around modern fragrance lovers.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 floriqu.com. All rights reserved.</p>
          <p className="text-stone-600">Crafted for a premium perfume storefront.</p>
        </div>
      </div>
    </footer>
  )
}
