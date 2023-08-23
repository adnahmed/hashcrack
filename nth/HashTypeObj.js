// Transcrypt'ed from Python, 2023-06-23 19:21:08
var hash_info = {};
var hash_namer = {};
var hashes = {};
import * as __module_hash_info__ from './hash_info.js';
import * as __module_hash_namer__ from './hash_namer.js';
import * as __module_hashes__ from './hashes.js';
import { __class__, __get__, __in__, __nest__, dict, object } from './org.transcrypt.__runtime__.js';
__nest__(hashes, '', __module_hashes__);
__nest__(hash_namer, '', __module_hash_namer__);
__nest__(hash_info, '', __module_hash_info__);
var __name__ = '__main__';
export var nth = hash_namer.Name_That_Hash(hashes.prototypes);
export var popular = hash_info.HashInformation().popular;
export var HashType = __class__('HashType', [object], {
	__module__: __name__,
	get __init__() {
		return __get__(this, function (self, chash) {
			self.chash = chash;
			self.prototypes = nth.identify(chash);
			self.prototypes = self.sort_by_popular();
			self.hash_obj = dict([[self.chash, self.prototypes]]);
		});
	},
	get get_prototypes() {
		return __get__(this, function (self) {
			return self.prototypes;
		});
	},
	get sort_by_popular() {
		return __get__(this, function (self) {
			var to_ret = [];
			var populars = [];
			for (var i of self.prototypes) {
				if (__in__(i, popular)) {
					populars.append(i);
				}
				else {
					to_ret.append(i);
				}
			}
			return populars + to_ret;
		});
	}
});

//# sourceMappingURL=HashTypeObj.map