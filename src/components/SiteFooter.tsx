import { EventAnimation } from './EventAnimation'

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z"
      />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer px-5 py-10 sm:px-8 lg:px-12">
      <div className="footer-inner mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div className="footer-copy">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">Sacrans Motoclube</p>
          <p className="mt-3 text-sm text-zinc-400">CNPJ: 60.939.654/0001-07</p>
          <p className="mt-2 text-sm font-bold uppercase text-zinc-300">
            © 2026 SACRANS MOTOCLUBE. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>

        <div className="footer-animation">
          <EventAnimation />
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex gap-3">
            <a
              className="social-link"
              href="https://www.instagram.com/sacransmc/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do Sacrans Motoclube"
            >
              <InstagramIcon />
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/profile.php?id=61576617271824"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook do Sacrans Motoclube"
            >
              <FacebookIcon />
            </a>
          </div>

          <p className="text-sm text-zinc-400">
            Desenvolvido por{' '}
            <a
              className="font-bold text-zinc-100 transition hover:text-red-500"
              href="https://www.instagram.com/brunohhomem/"
              target="_blank"
              rel="noreferrer"
            >
              @brunohhomem
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
