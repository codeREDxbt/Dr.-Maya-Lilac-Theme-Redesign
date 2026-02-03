'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const password = formData.get('password')

    // Simple check against environment variable
    if (password === process.env.SITE_PASSWORD) {
        // Set cookie for 1 day
        const cookieStore = await cookies()
        cookieStore.set('site-access', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax', // Relaxed for better redirect compatibility
            maxAge: 60 * 60 * 24,
            path: '/',
        })
        redirect('/')
    } else {
        // Determine how to handle error - for now, just redirect back with error query param
        // In a real app complexity, we might return state
        redirect('/login?error=true')
    }
}
