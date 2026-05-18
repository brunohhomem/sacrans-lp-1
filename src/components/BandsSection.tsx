import { bands } from '../content'
import jackVintageLogo from '../assets/logo_jackvintage.png'
import ressacaLogo from '../assets/logo_ressaca.png'

const bandLogos: Record<string, string> = {
  'Jack Vintage': jackVintageLogo,
  'Ressaca 11': ressacaLogo,
}

export function BandsSection() {
  return (
    <section className="section-band px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="red-ribbon">Show beneficente com as bandas</div>
        <div className="poster-wall mt-12 grid gap-8 sm:grid-cols-2">
          {bands.map((band, index) => (
            <article className="band-poster" key={band} data-tilt={index % 2 === 0 ? 'left' : 'right'}>
              <p className="poster-kicker">Ao vivo no esquenta</p>
              <div className="logo-image-frame band-logo-frame">
                <img src={bandLogos[band]} alt={band} className="logo-image" />
              </div>
              <p className="poster-meta">Rock beneficente / Araçatuba / 06.06</p>
              <div className="poster-tape poster-tape-bottom" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
