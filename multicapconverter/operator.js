// Transcrypt'ed from Python, 2023-11-03 13:14:21
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'operator';
export var itemgetter =  __class__ ('itemgetter', [object], {
	__module__: __name__,
	__slots__: tuple (['_items', '_call']),
	get __init__ () {return __get__ (this, function (self, item) {
		var py_items = tuple ([].slice.apply (arguments).slice (2));
		if (!(py_items)) {
			self._items = tuple ([item]);
			var func = function (obj) {
				return obj [item];
			};
			self._call = func;
		}
		else {
			var __left0__ = tuple ([item]) + py_items;
			self._items = __left0__;
			var py_items = __left0__;
			var func = function (obj) {
				return tuple ((function () {
					var __accu0__ = [];
					for (var i of py_items) {
						__accu0__.append (obj [i]);
					}
					return py_iter (__accu0__);
				}) ());
			};
			self._call = func;
		}
	});},
	get __call__ () {return __get__ (this, function (self, obj) {
		return self._call (obj);
	});},
	get __repr__ () {return __get__ (this, function (self) {
		return __mod__ ('%s.%s(%s)', tuple ([self.__class__.__module__, self.__class__.__name__, ', '.join (map (repr, self._items))]));
	});},
	get __reduce__ () {return __get__ (this, function (self) {
		return tuple ([self.__class__, self._items]);
	});}
});

//# sourceMappingURL=operator.map