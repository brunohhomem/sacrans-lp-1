import { donations } from '../content'
import larSaoJoaoLogo from '../assets/logo_larsaojoao.png'
import santaCasaLogo from '../assets/logo_santacasadearacatuba.png'

const donationLogos: Record<string, string> = {
  'Santa Casa de Araçatuba': santaCasaLogo,
  'Lar São João': larSaoJoaoLogo,
}

export function DonationsSection() {
  return (
    <section id="doacoes" className="paper-section relative px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">Respeito, união e solidariedade</p>
          <h2 className="headline-ransom mt-3 text-4xl font-black uppercase leading-tight text-[#2e2e2e] sm:text-6xl">
            O esquenta também tem propósito.
          </h2>
          <p className="paper-note mt-6 text-lg leading-relaxed text-[#2e2e2e]">
            Como tradição do Sacrans, estaremos arrecadando doações para ajudar instituições da nossa cidade. Aqui, além
            da paixão pelo rock e motociclismo, existe irmandade de verdade.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {donations.map((institution) => (
            <article className="donation-block taped-panel" key={institution.name}>
              <div className="logo-image-frame donation-logo-frame">
                <img src={donationLogos[institution.name]} alt={institution.name} className="logo-image" />
              </div>
              <h3>{institution.name}</h3>
              <ul>
                {institution.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
