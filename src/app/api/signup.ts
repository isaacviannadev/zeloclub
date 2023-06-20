import { MailTypes } from '../types/apiTypes'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(payload: MailTypes) {
  const data = await fetch('https://mailer.zeloclub.com.br/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return NextResponse.json(data)
}
