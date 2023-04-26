import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams

  if (params.size > 0) {
    let paramurl: string = '?'
    params.forEach((value, key) => {
      paramurl = paramurl + value + '=' + key + '&'
    })
    const res = await fetch(`http://localhost:8080/form${paramurl}`)
    const data = await res.json()

    return NextResponse.json({ data })
  }

  const res = await fetch('http://localhost:8080/form')
  const data = await res.json()

  return NextResponse.json({ data })
}

export async function POST(request: Request) {
  const res = await fetch('http://localhost:8080/form', {
    method: 'POST',
    body: request.body,
  })
  const data = await res.json()

  return NextResponse.json({ data })
}
