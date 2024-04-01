import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'ExpenseMan',
        short_name: 'ExpenseMan',
        description: 'Manage your income and expenses with ExpenseMan',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/img/icons/icon.png',
                type: 'image/png',
                sizes: '1024x1024'
            },
            {
                src: '/img/icons/maskable_icon.png',
                type: 'image/png',
                sizes: '1024x1024',
                purpose: 'maskable',
            },
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
        categories: ['finances', 'lifestyle', 'productivity']
    }
}