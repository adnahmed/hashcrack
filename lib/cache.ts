import Keyv from "@keyvhq/core";
import KeyvPostgres from "@keyvhq/postgres";
export function keyvStoreFactory() {
    const cache = new Keyv({
        store: new KeyvPostgres(process.env.DATABASE_URL || process.env.DEFAULT_DB_URL)
    }) // in-memory, by default

    // Handle database connection errors
    cache.on('error', err => console.log('Connection Error', err)) // TODO: Improve Error Handling
    return cache
}

const cache = keyvStoreFactory()
export const geoKv = keyvStoreFactory()
export const captchaKv = keyvStoreFactory()
export default cache;

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
