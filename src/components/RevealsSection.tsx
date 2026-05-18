import { reveals } from '../content'

export function RevealsSection() {
  return (
    <section id="programacao" className="section-band px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="eyebrow">Durante o evento</p>
          <h2 className="headline-ransom mt-3 text-4xl font-black uppercase leading-tight text-[#d7d4cb] sm:text-6xl">
            Tudo que está sendo preparado será revelado oficialmente.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reveals.map((item, index) => (
            <div className="reveal-item taped-panel" key={item} data-note={index % 3}>
              <span>+</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
