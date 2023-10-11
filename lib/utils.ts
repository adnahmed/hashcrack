import { scaleThreshold } from 'd3-scale';

// Useful for Testing of Lazy Loading
// Add a fixed delay so you can see the loading state
export function delayForDemo(promise: any) {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}

/* palette generation utility */
/* Source: http://www.vis4.net/palettes/#/9|s|7bcffc,ff4299,ffffe0|ffffe0,ff005e,93003a|1|1 */
function palette(min: number, max: number) {
    const d = (max - min) / 9;
    return scaleThreshold<number, string>()
        .range(['#7bcffc', '#febac5', '#ffc4c9', '#ffcecc', '#ffd8d0', '#ffe2d4', '#ffecd8', '#fff5dc', '#ffffe0'])
        .domain([min + d * 1, min + d * 2, min + d * 3, min + d * 4, min + d * 5, min + d * 6, min + d * 7, min + d * 8]);
}

export function trimNewLines(str: string) {
    const regex = /[^\r\n]/;
    const result = str.match(regex);
    if (!result) {
        return '';
    }
    const firstIndex = result.index as number;
    let lastIndex = str.length - 1;
    while (str[lastIndex] === '\r' || str[lastIndex] === '\n') {
        lastIndex--;
    }
    return str.substring(firstIndex, lastIndex + 1);
}

export function condenseWhitespace(string: string) {
    return string.trim().replace(/\s{2,}/gu, ' ');
}

export function getHashlist(text: string) {
    return condenseWhitespace(trimNewLines(text)).split(' ');
}

export const encodeToUtf16 = (uint8array: Uint8Array): string => {
    let extra = 0;
    const output = [];
    const { length } = uint8array;
    const len = Math.ceil(length / 2);
    for (let j = 0, i = 0; i < len; i++)
        output.push(
            String.fromCharCode(
                (uint8array[j++] << 8) +
                (j < length ? uint8array[j++] : extra++)
            )
        );
    output.push(String.fromCharCode(extra));
    return output.join('');
};

export const decodeUtf16 = (chars: string): Uint8Array => {
    const codes = [];
    const length = chars.length - 1;
    for (let i = 0; i < length; i++) {
        const c = chars.charCodeAt(i);
        codes.push(c >> 8, c & 0xFF);
    }
    if (chars.charCodeAt(length))
        codes.pop();
    return Uint8Array.from(codes);
};
