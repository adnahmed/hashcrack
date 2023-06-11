// Cryptographic hash function object
interface Chf {
    // @return [String] name of the identified hash type
    name: string;

    // @return [String] John the Ripper hash reference. nil if unknown.
    john: string | null;

    // @return [String] Hashcat hash ID. nil if unknown.
    hashcat: number | null;

    // @return [Boolean] Display by default or not. If true it is displayed in
    //   extended mode only, mostly hash type using salt.
    extended: boolean

    // @return [Array<String>] Examples of hashes
    samples?: string[];

}

class Chf {
    constructor(mode: Chf) {
        this.name = mode.name;
        this.john = mode.john;
        this.hashcat = mode.hashcat;
        this.extended = mode.extended;
        this.samples = mode.samples
    }
}

export default Chf;