import sacranLogo from '../assets/sacrans.png'
import sacranMc from '../assets/sacransmc.png'
import skull from '../assets/skull.png'
import { EventAnimation } from './EventAnimation'
import { PlaceholderLogo } from './PlaceholderLogo'

export function HeroSection() {
  return (
    <section className="hero-shell relative isolate min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-black" />
      <img
        src={skull}
        alt=""
        className="pointer-events-none absolute -right-28 top-10 -z-10 w-[34rem] max-w-none rotate-[-10deg] opacity-[0.16] mix-blend-screen sm:-right-10 lg:right-8 lg:top-2 lg:w-[42rem]"
      />
      <div className="grit-layer absolute inset-0 -z-10" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <img src={sacranMc} alt="Sacrans Moto Clube" className="h-16 w-auto sm:h-20" />
        <PlaceholderLogo label="Vitrola" />
      </nav>

      <div className="mx-auto grid max-w-7xl gap-10 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-14">
        <div className="max-w-3xl">
          <p className="brush-title mb-1 text-5xl font-black uppercase leading-none text-red-600 sm:text-7xl">
            Esquenta
          </p>
          <img src={sacranLogo} alt="Sacrans" className="mb-5 w-full max-w-[34rem]" />
          <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-red-600/70 py-5 text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
            <span>Sábado 06/06</span>
            <span className="hidden h-10 w-px bg-zinc-300 sm:block" />
            <span>A partir das 16h</span>
          </div>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            3º Moto Rock Fest
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-zinc-200 sm:text-xl">
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

        <aside className="info-panel">
          <EventAnimation />
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-500">Praça Hugo Lippi Junior 440</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">Vila Bandeirantes, SP</h2>
          <p className="mt-2 text-lg text-zinc-300">Em frente ao Vitrola Vintage Bar</p>
          <div className="mt-8 space-y-5 border-t border-white/15 pt-7 text-zinc-200">
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
