import sacranLogo from '../assets/sacrans.png'
import sacranMc from '../assets/sacransmc.png'
import skull from '../assets/skull.png'
import { PlaceholderLogo } from './PlaceholderLogo'

export function HeroSection() {
  return (
    <section className="hero-shell relative isolate min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[#e9e1d4]" />
      <img
        src={skull}
        alt=""
        className="hero-skull pointer-events-none absolute -z-10 max-w-none mix-blend-multiply"
      />
      <div className="grit-layer absolute inset-0 -z-10" />

      <nav className="zine-nav mx-auto flex max-w-7xl items-center justify-between gap-4">
        <img src={sacranMc} alt="Sacrans Moto Clube" className="h-16 w-auto sm:h-20" />
        <div className="nav-stamp">
          <PlaceholderLogo label="Vitrola" />
        </div>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-10 pt-12 lg:grid-cols-[0.82fr_1fr] lg:items-center lg:pt-16">
        <div className="hero-copy max-w-3xl">
          <p className="brush-title mb-1 text-5xl font-black uppercase leading-none text-[#8c2727] sm:text-7xl">
            Esquenta
          </p>
          <div className="logo-cutout">
            <img src={sacranLogo} alt="Sacrans" className="w-full max-w-[34rem]" />
          </div>
          <div className="date-strip mb-7 flex flex-wrap items-center gap-x-5 gap-y-3 py-5 text-lg font-bold uppercase text-[#e9e1d4] sm:text-xl">
            <span>Sábado 06/06</span>
            <span className="hidden h-10 w-px bg-[#b5a642] sm:block" />
            <span>A partir das 16h</span>
          </div>
          <h1 className="headline-ransom max-w-3xl text-5xl font-black uppercase leading-[0.9] text-[#2e2e2e] sm:text-7xl lg:text-8xl">
            3º Moto Rock Fest
          </h1>
          <p className="paper-note mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-[#2e2e2e] sm:text-xl">
            O motor já está roncando. O lançamento oficial do maior evento motociclístico e de rock de Araçatuba e
            região vai começar da forma que a cidade merece.
          </p>
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
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8c2727]">Praça Hugo Lippi Junior 440</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#2e2e2e] sm:text-4xl">
            Vila Bandeirantes, SP
          </h2>
          <p className="mt-2 text-lg font-bold text-[#2e2e2e]">Em frente ao Vitrola Vintage Bar</p>
          <div className="mt-8 space-y-5 border-t-2 border-dashed border-[#2e2e2e]/45 pt-7 text-[#2e2e2e]">
            <p>
              Será uma noite de rock, cerveja gelada e o início de uma experiência insana que promete elevar o nível
              do festival em 2026.
            </p>
            <p>
              Prepare o colete, reúna a família, convoque os irmãos de estrada e venha fazer parte do começo da edição
              mais grandiosa da nossa história.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
