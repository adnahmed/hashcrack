import Keyv from "@keyvhq/core";
import KeyvPostgres from "@keyvhq/postgres";
const db_url = {
    captcha: process.env.CAPTCHA_DB_URL || process.env.dCAPTCHA_DB_URL,
    geo: process.env.GEO_DB_URL || process.env.dGEO_DB_URL
}
export function keyvStoreFactory(url: string) {
    return new Keyv({
        store: new KeyvPostgres(url)
    }).on('error', err => console.warn('Connection Error', err)) // TODO: Improve Error Handling 
}

export const geoKv = keyvStoreFactory(db_url.geo)
export const captchaKv = keyvStoreFactory(db_url.captcha)

/*
USAGE: 
_----_

- BASICS
await cache.set('foo', 'expires in 1 second', 1000) // true
await cache.set('foo', 'never expires') // true
await cache.get('foo') // 'never expires'
await cache.has('foo') // true
await cache.delete('foo') // true
await cache.has('foo') // false
await cache.clear() // undefined

*/
