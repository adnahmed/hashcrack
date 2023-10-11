class File {
    data: Uint8Array;
    size = 0;
    pos = 0;
    constructor(file: Uint8Array) {
        this.data = file;
        this.size = file.length;
    }

    tell() { return this.pos; }
    seek(by: number) {
        if (by >= this.size - this.pos) return false;
        this.pos += by;
        return true;
    }
    read(by: number) {
        if (by > this.size - this.pos) return;
        const past_pos = this.pos;
        this.pos = this.pos + by;
        return this.data.slice(past_pos, this.pos);
    }
}

export default File;