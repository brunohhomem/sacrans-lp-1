import { bands } from '../content'
import { PlaceholderLogo } from './PlaceholderLogo'

export function BandsSection() {
  return (
    <section className="section-band px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="red-ribbon">Show beneficente com as bandas</div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {bands.map((band) => (
            <div className="band-logo" key={band}>
              <PlaceholderLogo label={band} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
