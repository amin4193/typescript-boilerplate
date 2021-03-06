import dotenv from 'dotenv'
import { IConfigModel } from '../../types/config'
dotenv.config()

const env = JSON.parse(JSON.stringify(process.env))

// All Configs that needed to be centralized
const config: IConfigModel = {

  // JWT Configuration
  jwt: {
    key             : env.JWT_SECRET?.toString(),
    expiration      : 20 * 60 * 1000,   // milliseconds (e.g.: 60, "2 days", "10h", "7d")
    algorithm       : 'HS384',          // (default: HS256)
    cache_prefix    : 'token:',
    allow_renew     : true,
    renew_threshold : 2 * 60 * 1000
  },

  // dotenv App Environment Variables
  env: env,

  // Base URL
  baseURL: `${env.SERVER_PROTOCOL}://${env.SERVER_HOST}:${env.SERVER_PORT}`,

  // Regex
  regex: {
    objectId: /^[0-9a-fA-F]{24}$/
  },

  // Role Types
  roleTypes: {
    normal: 'normal',
    admin: 'admin',
    agent: 'agent',
    other: 'other',
  },

  // MS Configs --- Should be declared in interface before usage
  MS: {
    some_microservice: {
      // url: 'https://localhost:3000/api',
      url: 'https://example.com/api',
      paths: {
        doSomething: '/v1/samples',
      }
    }
  }

}

export default config