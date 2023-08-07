import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/UI/Card'
import Advantages from './components/advantages'
import Link from 'next/link'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import PhoneInput from '@zeloclub/components/PhoneInput'

const advantages = [
  {
    title: 'Mais oportunidades de trabalho.',
    description:
      'Como membro Premium, você terá acesso exclusivo a uma base maior de pessoas que procuram cuidadores profissionais. Aumente suas chances de encontrar as melhores oportunidades de trabalho e expandir sua carreira.',
  },
  {
    title: 'Maior visibilidade para se destacar.',
    description:
      'Destaque-se dos demais cuidadores com um perfil Premium que se destaca nas buscas dos usuários. Aumente sua visibilidade e conquiste a confiança das pessoas que buscam cuidadores profissionais experientes e dedicados.',
  },
  {
    title: 'Melhor remuneração com a possibilidade de definir seu valor.',
    description:
      'O Zeloclub Premium permite que você defina seu próprio valor de remuneração, refletindo sua experiência e expertise. Valorize seu trabalho e seja recompensado de forma justa por seu cuidado e dedicação.',
  },
  {
    title: 'Ferramentas avançadas.',
    description:
      'Tenha acesso a recursos exclusivos e ferramentas avançadas para facilitar a gestão de seus agendamentos, acompanhar suas horas de trabalho e manter-se organizado em sua prática de cuidado.',
  },
  {
    title: 'Suporte prioritário.',
    description:
      'Como membro Premium, você terá um suporte dedicado, com atendimento prioritário para responder a todas as suas dúvidas e necessidades. Estamos aqui para apoiá-lo em cada etapa de sua jornada como cuidador profissional.',
  },
]

export default function Signup() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-100/50 px-4 pt-24  lg:px-8">
      <Header variant="logo-only" />

      <Card classes="overflow-hidden shadow-xl flex flex-col lg:flex-row ">
        <div className="z-1 relative flex flex-1 flex-col items-center justify-center gap-3 overflow-hidden bg-brand-100 p-2 lg:p-8">
          <div className="-z-1 absolute -left-7 -top-5 h-40 w-40 rotate-12 rounded-t-3xl rounded-br-[80px] bg-brand-800/20 blur-lg  " />
          <div className="-z-1 absolute -bottom-5 -right-7 h-40 w-40 -rotate-12 rounded-t-3xl rounded-br-[80px] bg-brand-800/20 blur-lg " />
          <h2 className="text-md zc-balance text-center font-bold text-gray-900 lg:text-xl">
            ✨ Eleve seu cuidado a um novo patamar com o Zeloclub Premium! ✨
          </h2>

          <p className="mb-2 text-center text-xs text-gray-600 lg:mb-4 lg:text-sm">
            Cuidador dedicado, sabemos o quão essencial é o seu papel na vida
            daqueles que você assiste. Agora imagine levar sua prática de
            cuidado a um nível superior com o Zeloclub Premium. Aqui está o que
            você ganha ao desbloquear nosso plano premium:
          </p>

          <Advantages advantages={advantages} />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-8 lg:w-1/2 lg:p-6 ">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Registre-se
          </h2>

          <p className="mt-1 text-center text-sm text-gray-600 lg:mt-4">
            Você já tem uma conta?{' '}
            <Link
              href="/login"
              className="text-brand-300 transition-all duration-200 hover:text-brand-500"
            >
              Entrar
            </Link>
          </p>

          <form className="flex w-full flex-col gap-4">
            <Input
              label="Nome"
              type="text"
              placeholder="Digite seu nome"
              autoComplete="off"
              required
            />

            <PhoneInput label="Telefone" required />
            <Input label="Senha" type="password" autoComplete="off" required />

            <div className="">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="rounded text-brand-500 outline-brand-500 focus:ring-brand-500"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-xs font-semibold leading-6 text-gray-900"
              >
                Eu concordo com os{' '}
                <Link
                  href="/use-terms"
                  className="text-brand-600 underline hover:text-brand-500"
                >
                  termos de uso
                </Link>{' '}
                e{' '}
                <Link
                  href="/privacy-policy"
                  className="text-brand-600 underline hover:text-brand-500"
                >
                  política de privacidade
                </Link>
              </label>
            </div>
            <Button type="submit">Registrar e fazer parte!</Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
