// Transcrypt'ed from Python, 2023-10-30 19:06:15
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'Dict';
export var Dict =  __class__ ('Dict', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.data = dict ({});
	});},
	get __getitem__ () {return __get__ (this, function (self, key) {
		if (__in__ (key, self.data)) {
			return self.data [key];
		}
		else {
			var __except0__ = KeyError (key);
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		self.data [key] = value;
	});},
	get __delitem__ () {return __get__ (this, function (self, key) {
		if (__in__ (key, self.data)) {
			delete self.data [key];
		}
		else {
			var __except0__ = KeyError (key);
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get __contains__ () {return __get__ (this, function (self, key) {
		return __in__ (key, self.data);
	});},
	get py_get () {return __get__ (this, function (self, key, py_default) {
		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {;
			var py_default = null;
		};
		return self.data.py_get (key, py_default);
	});},
	get py_keys () {return __get__ (this, function (self) {
		return list (self.data.py_keys ());
	});},
	get py_values () {return __get__ (this, function (self) {
		return list (self.data.py_values ());
	});},
	get py_items () {return __get__ (this, function (self) {
		return list (self.data.py_items ());
	});},
	get __len__ () {return __get__ (this, function (self) {
		return len (self.data);
	});},
	get __str__ () {return __get__ (this, function (self) {
		var py_items = (function () {
			var __accu0__ = [];
			for (var [key, value] of self.py_items ()) {
				__accu0__.append ('"{}": {}'.format (key, value));
			}
			return __accu0__;
		}) ();
		return ('{' + ', '.join (py_items)) + '}';
	});},
	get py_clear () {return __get__ (this, function (self) {
		self.data.py_clear ();
	});},
	get copy () {return __get__ (this, function (self) {
		var new_dict = Dict ();
		new_dict.data = self.data.copy ();
		return new_dict;
	});},
	get py_update () {return __get__ (this, function (self, other_dict) {
		if (isinstance (other_dict, Dict)) {
			self.data.py_update (other_dict.data);
		}
		else {
			for (var [key, value] of other_dict.py_items ()) {
				self.data [key] = value;
			}
		}
	});}
});

//# sourceMappingURL=Dict.map