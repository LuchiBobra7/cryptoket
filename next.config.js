/** @type {import('next').NextConfig} */
require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT,
  },
  images: {
    domains: [],
  },
}
