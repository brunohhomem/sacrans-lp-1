import vitrolaLogo from '../assets/logo_vitrola.png'

export function FinalCallSection() {
  return (
    <section className="final-call px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="max-w-4xl">
          <p className="brush-title w-fit text-4xl font-black uppercase text-[#8b1f1f] sm:text-6xl">
            Araçatuba vai tremer
          </p>
          <h2 className="headline-ransom mt-7 text-4xl font-black uppercase leading-tight text-[#272727] sm:text-6xl">
            O 3º Sacrans Moto Rock Fest está chegando.
          </h2>
          <p className="paper-note mt-6 max-w-3xl text-lg leading-relaxed text-[#272727]">
            Uma noite feita para quem vive a cultura do rock, das motos e da irmandade sobre duas rodas.
          </p>
        </div>

        <aside className="final-address taped-panel">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8b1f1f]">Sábado 06/06 - 16h</p>
            <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-[#272727]">Praça Hugo Lippi Junior 440</h3>
            <p className="mt-2 text-lg font-bold text-[#272727]">Em frente ao Vitrola Vintage Bar</p>
          </div>
          <div className="logo-image-frame final-vitrola-frame">
            <img src={vitrolaLogo} alt="Vitrola Vintage Bar" className="logo-image" />
          </div>
        </aside>
      </div>
    </section>
  )
}
