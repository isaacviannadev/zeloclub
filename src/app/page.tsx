/* eslint-disable @next/next/no-img-element */
import Contact from './components/Contact'
import Header from './components/Header'
import SVGHero from './components/SVGHero'
import Button from './components/UI/Button'
import { HeartIcon, HomeIcon } from '@heroicons/react/20/solid'

const values = [
  {
    name: 'Conexão',
    description:
      'O zeloclub oferece uma plataforma intuitiva que facilita a busca por cuidadores qualificados e a contratação dos serviços desejados. Com alguns cliques, você pode encontrar o profissional certo e agendar horários convenientes para atender às necessidades do seu ente querido.',
  },
  {
    name: 'Respeito',
    description:
      'Entendemos a importância da compatibilidade entre o cuidador e o idoso. Com base nas necessidades e preferências específicas, nosso algoritmo inteligente faz a combinação ideal para garantir uma relação de confiança e harmonia. Afinal, relacionamentos saudáveis ​​são essenciais para um cuidado eficiente e afetuoso.',
  },
  {
    name: 'Comunicação',
    description:
      'Acreditamos na importância da comunicação contínua e transparente entre cuidadores, idosos e familiares. Por meio de nossa plataforma, você pode acompanhar o progresso, receber atualizações em tempo real e compartilhar informações relevantes, garantindo que todos estejam sempre conectados.',
  },
  {
    name: 'Qualidade',
    description:
      'Selecionamos cuidadosamente uma equipe de profissionais altamente capacitados, comprometidos em oferecer cuidados personalizados e atenciosos aos idosos. Nossos cuidadores são treinados para lidar com diversas necessidades, proporcionando conforto e segurança em cada interação.',
  },
]

const features = [
  {
    name: 'Para cuidadores',
    description:
      'Somo uma plataforma de conexão entre cuidadores e idosos, nosso objetivo é dar visibilidade a essa categoria e permitir mais oportunidades de trabalho. Ao se cadastrar no zeloclub, você terá acesso a uma rede de idosos e familiares em busca de profissionais qualificados e confiáveis.',
    icon: HeartIcon,
  },
  {
    name: 'Para quem precisa de cuidados',
    description:
      'Acreditamos que cada idoso merece receber cuidados amorosos e respeitosos, e buscamos garantir que essas necessidades sejam atendidas de forma eficiente e confiável. Ao escolher o zeloclub, você terá acesso a um clube de profissionais altamente capacitados, com experiência comprovada e um compromisso genuíno em oferecer cuidado de excelência',
    icon: HomeIcon,
  },
]

export default function Home() {
  return (
    <div className="bg-white ">
      <Header />

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <SVGHero />

          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[40.0625rem] bg-[#ABEDD8] "
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="font-alt text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {/* We’re changing the way people connect. */}
                    Conectando corações, cuidando de vidas.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    O <strong className="text-black">zeloclub</strong> é a
                    plataforma perfeita para conectar cuidadores com pessoas que
                    precisam de cuidados para seus entes queridos. Nossa
                    plataforma, segura e intuitva facilita o encontro de
                    cuidadores para que eles possam auxiliar a rotina das
                    pessoas proporcionando qualidade de vida.
                    <br />
                    Experimente o{' '}
                    <strong className="text-black">zeloclub</strong> e viva essa
                    experiência.
                  </p>

                  <div className="mt-10 flex w-full flex-col items-center gap-4 gap-x-6 sm:flex-row">
                    <a href="#contact" className="w-full sm:w-fit">
                      <Button>Sou cuidador!</Button>
                    </a>
                    <a href="#contact" className="w-full sm:w-fit">
                      <button
                        type="button"
                        className="text-md h-14 w-full rounded-md bg-white px-3.5 py-2.5 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-fit"
                      >
                        Preciso de um cuidador!
                      </button>
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/cuidador-de-idosos-3b-850x560.jpg?v=1685398591426"
                        alt="Cuidador de idosos e paciente"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1537735319956-df7db4b6a4e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=731&q=80"
                        alt="dois idosos sorrindo"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1626668011660-051379e9b211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="mãos de idosa com aliança dourada e sorrindo ao fundo"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://casaderepousomoradaprimavera.com/wp-content/uploads/2020/02/Dia-Nacional-do-Cuidador-de-Idosos-morada.jpg.webp"
                        alt="paciente e cuidadora sorrindo"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://casaderepousoemsaopaulo.com/blog/wp-content/uploads/2021/08/profissionais-capacitados-cuidador-de-idosos.jpg"
                        alt="cuidadora com as mão no ombro de idosa sorrindo"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}

        <div className="py-4 pb-24 sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="font-alt text-base font-semibold leading-7 text-brand-200">
                zeloclub
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
                Nossa missão
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A nossa missão é ser a ponte que une cuidadores de idosos
                dedicados a famílias em busca de assistência.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <feature.icon
                        className="h-5 w-5 flex-none text-brand-200"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 gap-x-6 sm:flex-row">
              <a href="#contact" className="w-full sm:w-fit">
                <Button>Sou cuidador!</Button>
              </a>
              <a href="#contact" className="w-full sm:w-fit">
                <button
                  type="button"
                  className="text-md h-14 w-full rounded-md bg-white px-3.5 py-2.5 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-fit"
                >
                  Preciso de um cuidador!
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="xl:mx-auto xl:max-w-7xl xl:px-8 ">
          <img
            src="https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/a3be40c7-13f0-41d1-a6c9-7a85073102b6.image.png?v=1685448650023"
            alt=""
            className="aspect-[5/2] w-full object-cover object-top xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="relative mx-auto my-28 max-w-7xl px-6 sm:my-32 lg:px-8">
          <div
            className="absolute left-0 right-1/2 top-0 -z-10 -ml-24 -scale-x-[1] transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[40.0625rem] bg-gradient-to-tr from-[#ABEDD8] to-[#15eca8] opacity-40"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-alt text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nossos valores
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nossos valores são a base de tudo o que fazemos. Eles definem a
              forma como trabalhamos e se relacionamos com nossos clientes,
              parceiros e colegas.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none ">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-10 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-24 sm:pb-24 lg:px-8">
        <div className=" space-10 flex justify-center">
          <img
            src="https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zc-favicon.png?v=1685107525308"
            alt="Zelo"
            className="h-12 w-auto"
          />
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 zeloclub, ltda. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}
