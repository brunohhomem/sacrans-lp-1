import { bands } from '../content'
import { PlaceholderLogo } from './PlaceholderLogo'

export function BandsSection() {
  return (
    <section className="section-band px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="red-ribbon">Show beneficente com as bandas</div>
        <div className="poster-wall mt-12 grid gap-8 sm:grid-cols-2">
          {bands.map((band, index) => (
            <article className="band-poster" key={band} data-tilt={index % 2 === 0 ? 'left' : 'right'}>
              <p className="poster-kicker">Ao vivo no esquenta</p>
              <PlaceholderLogo label={band} />
              <p className="poster-meta">Rock beneficente / Araçatuba / 06.06</p>
              <div className="poster-tape poster-tape-bottom" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
