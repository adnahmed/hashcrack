import { Reader } from '@maxmind/geoip2-node';
import { readFileSync } from 'fs';
import path from 'path';
const file = path.join(process.cwd(), 'assets', 'GeoLite2-Country.mmdb');
const dbBuffer = readFileSync(file);
const reader = Reader.openBuffer(dbBuffer);
export default reader;
