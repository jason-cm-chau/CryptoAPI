const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://jason-cm-chau.github.io/CryptoAPI'