import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const IS_DEV = process.env.NODE_ENV !== 'production'
export const IS_SERVER = !process.browser

export const ENV = process.env.NODE_ENV || 'development'

export const { SERVER_API_ENDPOINT } = publicRuntimeConfig
