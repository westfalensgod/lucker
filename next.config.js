/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/notes',
                    has: [
                        {
                            type: 'host',
                            value: 'notes.yanisneverlies.com'
                        }
                    ],
                    destination: '/app/notes'
                }
            ]
        }
    }
}

module.exports = nextConfig
