import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  fullName: string
  email: string
  phone: string
  customerType: string
  packageInterest: string
  preferredDates: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.customerType || !data.packageInterest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get Google Sheets Script URL from environment variable
    const googleScriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL

    if (!googleScriptUrl) {
      console.error('GOOGLE_SHEETS_SCRIPT_URL not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Send data to Google Sheets via Apps Script
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to save to Google Sheets')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
