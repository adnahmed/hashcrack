import COMMONS from '@/assets/hashtype_commons.json';
import PROTOTYPES from '@/assets/hashtype_prototypes.json';
import Chf from './CryptographicHashFunction';
// The global Hash Identifier class
// A new instance of hash identifier
// @param hash [String] the hash to identify
class HashIdentifier {
  PROTOTYPES = PROTOTYPES;
  // @return [String] the hash (as provided)
  // @example
  //   '5f4dcc3b5aa765d61d8327deb882cf99'
  hash: string;
  // @return [Array<Chf>] list of {Chf} objects, representing the identified
  //   hashes
  type: Chf[];

  constructor(hash: string) {
    this.hash = hash;
    this.type = this.identify(hash);
    this.sort_commons();
  }

  // Check which hash types are matching the provided hash
  // @param hash [String] the hash to identify
  // @return [Array<Chf>] list of {Chf} objects, representing the identified
  //   hashes
  identify = (hash: string): Chf[] => {
    const res: Chf[] = [];
    PROTOTYPES.forEach(prototype => {
      const reg = new RegExp(prototype.regex);
      if (!reg.test(hash)) return;
      prototype.modes.forEach(mode => {
        res.push(new Chf(mode))
      })
    });

    return res
  }

  // Sort common hash types first
  sort_commons = () => {
    return this.type.sort((a, b) => {
      const aIsCommon = COMMONS.includes(a.name);
      const bIsCommon = COMMONS.includes(b.name);
      return ((aIsCommon && bIsCommon) || (!aIsCommon && !bIsCommon) ? 0 : aIsCommon ? 1 : -1);
    });
  }
}

export default HashIdentifier;

