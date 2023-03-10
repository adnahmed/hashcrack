import { NextApiRequest } from 'next';
import { publicIpv4 } from 'public-ip';
import requestIp from 'request-ip';
async function getClientIp(req: NextApiRequest) {
    let clientIp = requestIp.getClientIp(req);
    if (clientIp !== null) {
        // remove localhost addr
        clientIp = clientIp.split(':')[1]
        clientIp = clientIp.replace('::ffff', '').replace('127.0.0.1', '')
        try {
            if (clientIp.length === 0) clientIp = await publicIpv4()
        } catch (error) {
            console.log(error) // TODO: Log error gracefully
            clientIp = null;
        }
    }
    return clientIp;
}

export default getClientIp;