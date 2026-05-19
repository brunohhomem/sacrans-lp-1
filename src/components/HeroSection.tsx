import sacranLogo from '../assets/sacrans.png'
import sacranMc from '../assets/sacransmc.png'
import skullImage from '../assets/skull.png'

export function HeroSection() {
  return (
    <section className="hero-shell relative isolate min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[#d7d4cb]" />
      <div className="grit-layer absolute inset-0 -z-10" />

      <nav className="zine-nav mx-auto flex max-w-7xl items-center justify-between gap-4">
        <img src={sacranMc} alt="Sacrans Moto Clube" className="h-16 w-auto sm:h-20" />
        <div className="nav-stamp">
          <img src={skullImage} alt="" className="hero-skull" aria-hidden="true" />
        </div>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-10 pt-12 lg:grid-cols-[0.82fr_1fr] lg:items-center lg:pt-16">
        <div className="hero-copy max-w-3xl">
          <p className="brush-title mb-1 text-5xl font-black uppercase leading-none text-[#8b1f1f] sm:text-7xl">
            Esquenta
          </p>
          <div className="logo-cutout">
            <img src={sacranLogo} alt="Sacrans" className="w-full max-w-[30rem]" />
          </div>
          <div className="date-strip mb-7 flex flex-wrap items-center gap-x-5 gap-y-3 py-5 text-lg font-bold uppercase text-[#d7d4cb] sm:text-xl">
            <span>Sábado 06/06</span>
            <span className="hidden h-10 w-px bg-[#9a8b36] sm:block" />
            <span>A partir das 16h</span>
          </div>
          <h1 className="headline-ransom max-w-3xl text-5xl font-black uppercase leading-[0.9] text-[#272727] sm:text-7xl lg:text-8xl">
            3º Moto Rock Fest
          </h1>
          <div className="mt-8 flex flex-col gap-3 text-base font-bold sm:flex-row">
            <a className="red-ticket" href="#programacao">
              Lançamento oficial da festa
            </a>
            <a className="outline-ticket" href="#doacoes">
              Evento beneficente
            </a>
          </div>
        </div>

        <div className="hidden min-h-[34rem] lg:block" />
      </div>

      <div className="mx-auto max-w-7xl">
        <aside className="info-panel hero-info-panel taped-panel">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8b1f1f]">ESQUENTA | 3° MOTO ROCK FEST | SACRANS - MC</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#272727] sm:text-4xl">
            Lançamento oficial do maior evento motociclistico e de rock de Araçatuba e região.
          </h2>
          <div className="mt-8 space-y-5 border-t-2 border-dashed border-[#272727]/45 pt-7 text-[#272727]">
            <p>
              O Esquenta Sacrans não será apenas uma noite de rock, motos e cerveja gelada. Será o ponto de partida para uma edição que promete marcar a história do festival em 2026.
            </p>

            <p>
              Então prepare o colete, reúna a família, chame os irmãos de estrada e venha viver o início da edição mais intensa que o Sacrans já realizou.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
