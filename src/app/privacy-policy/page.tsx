'use client'

import React from 'react'
import privacyPolicy from '@zeloclub/assets/docs/privacy-policy'
import Link from 'next/link'
import { toast } from 'react-hot-toast'

function PrivacyPolicy() {
  const download = () => {
    const element = document.createElement('a')
    const textNatural = removeHTMLTags(privacyPolicy)
    const file = new Blob([textNatural], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'zeloclub-privacy-policy.txt'
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  function injectHTMLString(htmlString: string) {
    return (
      <div
        className="flex flex-col gap-2 font-sans"
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    )
  }

  function removeHTMLTags(htmlString: string) {
    const regex = /(<([^>]+)>)/gi
    return htmlString.replace(regex, '')
  }

  const injectedHTML = injectHTMLString(privacyPolicy)

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-brand-100/50 p-5 md:p-10 ">
      <Link href="/">
        <h1 className="font-alt text-5xl">zeloclub</h1>
      </Link>
      <div className="flex w-full max-w-6xl  flex-col items-center pb-5 pt-5 md:flex-row md:items-baseline md:justify-between md:pt-14 ">
        <h2 className="text-2xl ">Política de Privacidade</h2>
        <h3 className="text-right">Última atualização: 6 de junho de 2023</h3>
      </div>
      <div className="max-h-full w-full max-w-6xl overflow-y-auto rounded-lg bg-white p-6 text-sm shadow-md md:text-base">
        {injectedHTML}
      </div>

      <button
        className="mt-5 rounded-lg bg-brand-500 px-4 py-2 text-white shadow-md"
        onClick={() => {
          download()
          toast.success('Download feito com sucesso!')
        }}
      >
        Fazer download
      </button>
    </div>
  )
}

export default PrivacyPolicy
