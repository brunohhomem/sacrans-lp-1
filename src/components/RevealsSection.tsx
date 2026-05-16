import { reveals } from '../content'

export function RevealsSection() {
  return (
    <section id="programacao" className="section-band px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="eyebrow">Durante o evento</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Tudo que está sendo preparado será revelado oficialmente.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reveals.map((item) => (
            <div className="reveal-item" key={item}>
              <span>+</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
