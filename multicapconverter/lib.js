// Transcrypt'ed from Python, 2023-11-03 13:14:21
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'lib';
export var b2a_hex = function (s) {
	var result = [];
	for (var char of s) {
		var c = ord (char) >> 4 & 15;
		if (c > 9) {
			var c = (c + ord ('a')) - 10;
		}
		else {
			var c = c + ord ('0');
		}
		result.append (chr (c));
		var c = ord (char) & 15;
		if (c > 9) {
			var c = (c + ord ('a')) - 10;
		}
		else {
			var c = c + ord ('0');
		}
		result.append (chr (c));
	}
	return ''.join (result);
};
export var hexlify = b2a_hex;
export var table_hex = [-(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -(1), -(1), -(1), -(1), -(1), -(1), -(1), 10, 11, 12, 13, 14, 15, -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), 10, 11, 12, 13, 14, 15, -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1), -(1)];
export var a2b_hex = function (t) {
	var result = [];
	var pairs_gen = function* (s) {
		while (s) {
			try {
				yield tuple ([table_hex [ord (s [0])], table_hex [ord (s [1])]]);
			}
			catch (__except0__) {
				if (isinstance (__except0__, IndexError)) {
					if (len (s)) {
						var __except1__ = py_TypeError ('Odd-length string');
						__except1__.__cause__ = null;
						throw __except1__;
					}
					return ;
				}
				else {
					throw __except0__;
				}
			}
			var s = s.__getslice__ (2, null, 1);
		}
		};
	for (var [a, b] of pairs_gen (t)) {
		if (a < 0 || b < 0) {
			var __except0__ = py_TypeError ('Non-hexadecimal digit found');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		result.append (chr ((a << 4) + b));
	}
	return bytes (''.join (result), __kwargtrans__ ({encoding: 'utf-8'}));
};
export var unhexlify = a2b_hex;
export var fromhex = function (_hex) {
	if (len (_hex) == 0) {
		var __except0__ = ValueError ('Error: Empty Hex value.');
		__except0__.__cause__ = null;
		throw __except0__;
	}
	var _hex = _hex.py_replace (' ', '');
	if (__mod__ (len (_hex), 2) != 0) {
		var __except0__ = ValueError ('Error: Hex value has odd length.');
		__except0__.__cause__ = null;
		throw __except0__;
	}
	var _bytes = [];
	var i = 0;
	while (i < len (_hex)) {
		var v = _hex [i] + _hex [i + 1];
		_bytes.append (int (v, 16));
		i += 2;
	}
	return Uint8Array.from(_bytes)
};
export var hex = function (bytes) {
	return ''.join ((function () {
		var __accu0__ = [];
		for (var a of (function () {
			var __accu1__ = [];
			for (var b of bytes) {
				__accu1__.append (b);
			}
			return __accu1__;
		}) ()) {
			__accu0__.append ('{:02x}'.format (a));
		}
		return py_iter (__accu0__);
	}) ());
};

//# sourceMappingURL=lib.map