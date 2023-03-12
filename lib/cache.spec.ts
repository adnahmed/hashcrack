import { captchaKv, geoKv } from './cache';
describe('cache', () => {
    it('has different storage for captcha and geo', async () => {
        captchaKv.set('a', '1')
        geoKv.set('a', '2');
        expect(await captchaKv.get('a')).toBe('1')
        expect(await geoKv.get('a')).toBe('2')
    })
})
