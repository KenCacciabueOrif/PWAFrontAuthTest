import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Front Auth Test',
        short_name: 'FPT',
        start_url: '/',
        icons: [
            {
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "16x16",
                type: "image/png"
            },
            {
                src: "/android-chrome-512x512.png",
                sizes: "32x32",
                type: "image/png"
            },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: '/',
        lang: 'en',
        dir: 'auto',
        orientation: 'any',
        description: 'A test for a client side authorisation',
        screenshots: [
            {
                src:'/Screenshot_Narrow.png',
                sizes: '412x915',
                type: 'image/png',
                form_factor: 'narrow',
                label:'narrow'
            },
            {
                src:'/Screenshot_Wide.png',
                sizes: '915x412',
                type: 'image/png',
                form_factor: 'wide',
                label:'wide'
            }
        ],
        categories: ['developer', 'education']
    }
}