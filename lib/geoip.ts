import { Reader } from '@maxmind/geoip2-node';
import fs from 'fs';
import path from 'path';
const dbBuffer = fs.readFileSync(path.resolve(`data/GeoLite2-Country.mmdb`));
const reader = Reader.openBuffer(dbBuffer);
export default reader;