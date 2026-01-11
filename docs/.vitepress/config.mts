import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "NoPaper Docs",
    description: "Digitizing Sustainability, Rewarding Impact",

    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        ['meta', { name: 'theme-color', content: '#10b981' }],
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        siteTitle: 'NoPaper',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Guide', link: '/guide/how-it-works' },
            { text: 'Technical', link: '/technical/architecture' },
            { text: 'About Us', link: '/about-us' }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: 'User Guide',
                    items: [
                        { text: 'How It Works', link: '/guide/how-it-works' },
                        { text: 'VIP Endorsers', link: '/guide/endorsers' },
                        { text: 'Ban Appeals', link: '/guide/appeals' },
                        { text: 'B3TR Rewards', link: '/guide/rewards' },
                        { text: 'Ecosystem Multipliers', link: '/guide/multipliers' },
                        { text: 'FAQ', link: '/guide/faq' }
                    ]
                }
            ],
            '/technical/': [
                {
                    text: 'Technical Documentation',
                    items: [
                        { text: 'Architecture', link: '/technical/architecture' },
                        { text: 'Security', link: '/technical/security' },
                        { text: 'Smart Contract', link: '/technical/smart-contract' }
                    ]
                }
            ],
            '/about-us': [
                {
                    text: 'About Us',
                    link: '/about-us'
                }
            ]
        },

        socialLinks: [
            { icon: 'medium', link: 'https://news.nopaper.life' }
        ],

        footer: {
            message: 'Copyright © 2026 NoPaper',
            copyright: 'support@nopaper.life | <a href="https://status.nopaper.life" target="_blank" rel="noopener noreferrer">Server Status</a>'
        },

        search: {
            provider: 'local'
        }
    }
})
