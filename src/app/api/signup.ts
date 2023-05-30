import { MailTypes } from '../types/apiTypes';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return new Response('Hello, Next.js!');
}

export async function POST(payload: MailTypes) {
  fetch('https://mailer.zeloclub.com.br/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // return NextResponse.json(data);
    })
    .catch((err) => console.error(err));
}
