// Transcrypt'ed from Python, 2023-06-23 15:58:04
var hash_info = {};
var hash_namer = {};
var hashes = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_hashes__ from './hashes.js';
__nest__ (hashes, '', __module_hashes__);
import * as __module_hash_namer__ from './hash_namer.js';
__nest__ (hash_namer, '', __module_hash_namer__);
import * as __module_hash_info__ from './hash_info.js';
__nest__ (hash_info, '', __module_hash_info__);
var __name__ = '__main__';
export var nth = hash_namer.Name_That_Hash (hashes.prototypes);
export var popular = hash_info.HashInformation ().popular;
export var HashType =  __class__ ('HashType', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, chash) {
		self.chash = chash;
		self.prototypes = nth.identify (chash);
		self.prototypes = self.sort_by_popular ();
		self.hash_obj = dict ([[self.chash, self.prototypes]]);
	});},
	get get_prototypes () {return __get__ (this, function (self) {
		return self.prototypes;
	});},
	get sort_by_popular () {return __get__ (this, function (self) {
		var to_ret = [];
		var populars = [];
		for (var i of self.prototypes) {
			if (__in__ (i.py_name, self.popular)) {
				populars.append (i.__dict__);
			}
			else {
				to_ret.append (i.__dict__);
			}
		}
		return populars + to_ret;
	});}
});

//# sourceMappingURL=HashTypeObj.map