// Transcrypt'ed from Python, 2023-10-30 19:06:15
var re = {};
var sys = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {fromhex, hex} from './lib.js';
import {Dict} from './Dict.js';
import {itemgetter} from './operator.js';
import {Process} from './multiprocessing.js';
import {groupby} from './itertools.js';
import * as __module_sys__ from './sys.js';
__nest__ (sys, '', __module_sys__);
import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
var __name__ = '__main__';
export var xprint = print;
if (sys.byteorder == 'big') {
	var BIG_ENDIAN_HOST = true;
	xprint ('WARNING! Endianness is not well tested on BIG_ENDIAN_HOST.');
}
else {
	var BIG_ENDIAN_HOST = false;
}
export var HCCAPX_VERSION = 4;
export var HCCAPX_SIGNATURE = 1481655112;
export var HCWPAX_SIGNATURE = 'WPA';
export var TCPDUMP_MAGIC = 2712847316;
export var TCPDUMP_CIGAM = 3569595041;
export var PCAPNG_MAGIC = 439041101;
export var PCAPNG_CIGAM = 3569595041;
export var TCPDUMP_DECODE_LEN = 65535;
export var DLT_IEEE802_11 = 105;
export var DLT_IEEE802_11_PRISM = 119;
export var DLT_IEEE802_11_RADIO = 127;
export var DLT_IEEE802_11_PPI_HDR = 192;
export var IEEE80211_FCTL_FTYPE = 12;
export var IEEE80211_FCTL_STYPE = 240;
export var IEEE80211_FCTL_TODS = 256;
export var IEEE80211_FCTL_FROMDS = 512;
export var IEEE80211_FTYPE_MGMT = 0;
export var IEEE80211_FTYPE_DATA = 8;
export var IEEE80211_STYPE_ASSOC_REQ = 0;
export var IEEE80211_STYPE_REASSOC_REQ = 32;
export var IEEE80211_STYPE_PROBE_REQ = 64;
export var IEEE80211_STYPE_PROBE_RESP = 80;
export var IEEE80211_STYPE_BEACON = 128;
export var IEEE80211_STYPE_QOS_DATA = 128;
export var IEEE80211_LLC_DSAP = 170;
export var IEEE80211_LLC_SSAP = 170;
export var IEEE80211_LLC_CTRL = 3;
export var IEEE80211_DOT1X_AUTHENTICATION = 36488;
export var MFIE_TYPE_SSID = 0;
export var MFIE_TYPE_RATES = 1;
export var SIZE_OF_pcap_pkthdr_t = 16;
export var SIZE_OF_pcap_file_header_t = 24;
export var SIZE_OF_prism_header_t = 144;
export var SIZE_OF_ieee80211_radiotap_header_t = 8;
export var SIZE_OF_ppi_packet_header_t = 8;
export var SIZE_OF_ieee80211_hdr_3addr_t = 24;
export var SIZE_OF_ieee80211_qos_hdr_t = 26;
export var SIZE_OF_beacon_t = 12;
export var SIZE_OF_assocreq_t = 4;
export var SIZE_OF_reassocreq_t = 10;
export var SIZE_OF_ieee80211_llc_snap_header_t = 8;
export var SIZE_OF_EAPOL = 256;
export var AUTH_EAP = 0;
export var AUTH_EAPOL = 3;
export var AUTH_EAP_MD5 = 4;
export var AUTH_EAP_LEAP = 17;
export var BROADCAST_MAC = tuple ([255, 255, 255, 255, 255, 255]);
export var MAX_ESSID_LEN = 32;
export var EAPOL_TTL = 1;
export var ZERO = fromhex ('00');
export var WPA_KEY_INFO_TYPE_MASK = 7;
export var WPA_KEY_INFO_INSTALL = 64;
export var WPA_KEY_INFO_ACK = 128;
export var WPA_KEY_INFO_SECURE = 512;
export var ESSID_SOURCE_REASSOC = 20;
export var ESSID_SOURCE_ASSOC = 30;
export var ESSID_SOURCE_PROBE = 40;
export var ESSID_SOURCE_BEACON = 60;
export var EXC_PKT_NUM_1 = 1;
export var EXC_PKT_NUM_2 = 2;
export var EXC_PKT_NUM_3 = 3;
export var EXC_PKT_NUM_4 = 4;
export var MESSAGE_PAIR_M12E2 = 0;
export var MESSAGE_PAIR_M14E4 = 1;
export var MESSAGE_PAIR_M32E2 = 2;
export var MESSAGE_PAIR_M32E3 = 3;
export var MESSAGE_PAIR_M34E3 = 4;
export var MESSAGE_PAIR_M34E4 = 5;
export var MESSAGE_PAIR_APLESS = 16;
export var MESSAGE_PAIR_LE = 32;
export var MESSAGE_PAIR_BE = 64;
export var MESSAGE_PAIR_NC = 128;
export var Enhanced_Packet_Block = 6;
export var Section_Header_Block = 168627466;
export var Custom_Block = 2989;
export var Custom_Option_Codes = [2988, 2989, 19372, 19373];
export var if_tsresol_code = 9;
export var opt_endofopt = 0;
export var HCXDUMPTOOL_PEN = [42, 206, 70, 161];
export var HCXDUMPTOOL_MAGIC_NUMBER = [42, 206, 70, 161, 121, 160, 114, 51, 131, 55, 39, 171, 89, 51, 179, 98, 69, 55, 17, 71, 167, 207, 50, 127, 141, 105, 128, 192, 137, 94, 94, 152];
export var HCXDUMPTOOL_OPTIONCODE_RC = 62108;
export var HCXDUMPTOOL_OPTIONCODE_ANONCE = 62109;
export var SUITE_OUI = fromhex ('000fac');
export var AK_PSK = 2;
export var AK_PSKSHA256 = 6;
export var AK_SAFE = -(1);
export var DB_ESSID_MAX = 50000;
export var DB_EXCPKT_MAX = 100000;
export var MAX_WORK_PER_PROCESS = 100;
export var INFO = 10;
export var WARNING = 20;
export var ERROR = 30;
export var CRITICAL = 40;
export var DEBUG = 50;
export var QUIET = false;
export var CUSTOM_ESSID = bytes ('');
export var l_messages =  __class__ ('l_messages', [Dict], {
	__module__: __name__,
	get log () {return __get__ (this, function (self, key, value) {
		if (typeof value == 'undefined' || (value != null && value.hasOwnProperty ("__kwargtrans__"))) {;
			var value = 1;
		};
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
		else {
			self [key] += value;
		}
	});}
});
export var Logger =  __class__ ('Logger', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.info = l_messages ();
		self.warning = l_messages ();
		self.error = l_messages ();
		self.critical = l_messages ();
		self.debug = l_messages ();
	});},
	get log () {return __get__ (this, function (self, message, level) {
		if (level >= DEBUG) {
			self.debug.log (message);
		}
		else if (level >= CRITICAL) {
			self.critical.log (message);
		}
		else if (level >= ERROR) {
			self.error.log (message);
		}
		else if (level >= WARNING) {
			self.warning.log (message);
		}
		else {
			self.info.log (message);
		}
	});}
});
export var LOGGER = Logger ();
export var GetUint16 = function (b) {
	return b [0] | b [1] << 8;
};
export var GetUint32 = function (b) {
	return ((b [0] | b [1] << 8) | b [2] << 16) | b [3] << 24;
};
export var GetUint64 = function (b) {
	return ((((((b [0] | b [1] << 8) | b [2] << 16) | b [3] << 24) | b [4] << 32) | b [5] << 40) | b [6] << 48) | b [7] << 56;
};
export var PutUint16 = function (v) {
	return tuple ([v & 255, (v & 65280) >> 8]);
};
export var PutUint32 = function (v) {
	return tuple ([v & 255, (v & 65280) >> 8, (v & 16711680) >> 16, (v & 4278190080) >> 24]);
};
export var byte_swap_16 = function (n) {
	
			return Number((BigInt(n) & 0xff00n) >> 8n | (BigInt(n) & 0x00ffn) << 8n) 
	    
};
export var byte_swap_32 = function (n) {
	
			return Number(
				(BigInt(n) & 0xff000000n) >> 24n 			| (BigInt(n) & 0x00ff0000n) >>  8n 			| (BigInt(n) & 0x0000ff00n) <<  8n 			| (BigInt(n) & 0x000000ffn) << 24n
			) 
	    
};
export var byte_swap_64 = function (n) {
	
			return Number(
		  (BigInt(n) & 0xff00000000000000n) >> 56n 	| (BigInt(n) & 0x00ff000000000000n) >> 40n 	| (BigInt(n) & 0x0000ff0000000000n) >> 24n 	| (BigInt(n) & 0x000000ff00000000n) >>  8n 	| (BigInt(n) & 0x00000000ff000000n) <<  8n 	| (BigInt(n) & 0x0000000000ff0000n) << 24n 	| (BigInt(n) & 0x000000000000ff00n) << 40n 	| (BigInt(n) & 0x00000000000000ffn) << 56n
		) 
	    
};
export var to_signed_32 = function (n) {
	
			let _n = BigInt(n) & 0xffffffffn
			return Number((_n ^ 0x80000000n) - 0x80000000n) 
	    
};
export var get_valid_bssid = function (bssid) {
	var bssid = re.match ('[0-9a-f]{2}([-:]?)[0-9a-f]{2}(\\1[0-9a-f]{2}){4}$', bssid.lower ());
	if (bssid) {
		return bssid [0].py_replace (':', '').py_replace ('-', '');
	}
};
export var get_valid_filename = function (s, r) {
	if (typeof r == 'undefined' || (r != null && r.hasOwnProperty ("__kwargtrans__"))) {;
		var r = '_';
	};
	var s = str (s).strip ().py_replace (' ', '_');
	return re.sub ('(?u)[^-\\w.\\@]', r, s);
};
var xprint = function (text, end, flush) {
	if (typeof text == 'undefined' || (text != null && text.hasOwnProperty ("__kwargtrans__"))) {;
		var text = '';
	};
	if (typeof end == 'undefined' || (end != null && end.hasOwnProperty ("__kwargtrans__"))) {;
		var end = '\n';
	};
	if (typeof flush == 'undefined' || (flush != null && flush.hasOwnProperty ("__kwargtrans__"))) {;
		var flush = true;
	};
	print (text, __kwargtrans__ ({end: end, flush: flush}));
};
export var statistics =  __class__ ('statistics', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, dict ([[value, 1]]));
		}
		else if (!__in__ (value, self [key])) {
			self [key].__setitem__ (value, 1);
		}
		else {
			self [key] [value]++;
		}
	});}
});
export var essids =  __class__ ('essids', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
		else if (value ['essid_source'] > self [key] ['essid_source']) {
			self [key] ['essid_source'] = value ['essid_source'];
		}
	});}
});
export var excpkts =  __class__ ('excpkts', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
		else {
			var subkey = list (value.py_keys ()) [0];
			if (!__in__ (subkey, self [key])) {
				self [key].__setitem__ (subkey, list (value.py_values ()) [0]);
			}
			else {
				var subsubkey = list (list (value.py_values ()) [0].py_keys ()) [0];
				if (!__in__ (subsubkey, self [key] [subkey])) {
					self [key] [subkey].__setitem__ (subsubkey, list (list (value.py_values ()) [0].py_values ()) [0]);
				}
				else {
					self [key] [subkey] [subsubkey].append (list (list (value.py_values ()) [0].py_values ()) [0] [0]);
				}
			}
		}
	});}
});
export var eapmd5s =  __class__ ('eapmd5s', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
		else {
			var subkey = list (value.py_keys ()) [0];
			if (!__in__ (subkey, self [key])) {
				self [key].__setitem__ (subkey, list (value.py_values ()) [0]);
			}
			else {
				if (!(self [key] [subkey] ['hash']) && list (value.py_values ()) [0] ['hash']) {
					self [key] [subkey] ['hash'] = list (value.py_values ()) [0] ['hash'];
				}
				if (!(self [key] [subkey] ['salt']) && list (value.py_values ()) [0] ['salt']) {
					self [key] [subkey] ['salt'] = list (value.py_values ()) [0] ['salt'];
				}
			}
		}
	});}
});
export var eapleaps =  __class__ ('eapleaps', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
		else {
			var subkey = list (value.py_keys ()) [0];
			if (!__in__ (subkey, self [key])) {
				self [key].__setitem__ (subkey, list (value.py_values ()) [0]);
			}
			else {
				if (!(self [key] [subkey] ['resp1']) && list (value.py_values ()) [0] ['resp1']) {
					self [key] [subkey] ['resp1'] = list (value.py_values ()) [0] ['resp1'];
				}
				if (!(self [key] [subkey] ['resp2']) && list (value.py_values ()) [0] ['resp2']) {
					self [key] [subkey] ['resp2'] = list (value.py_values ()) [0] ['resp2'];
				}
			}
		}
	});}
});
export var hcwpaxs =  __class__ ('hcwpaxs', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
	});}
});
export var hcpmkids =  __class__ ('hcpmkids', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
	});}
});
export var pmkids =  __class__ ('pmkids', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
		else {
			self [key] ['pmkid'] = value ['pmkid'];
		}
	});}
});
export var pcapng_info =  __class__ ('pcapng_info', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, [value]);
		}
		else {
			self [key].append (value);
		}
	});}
});
export var hceapmd5s =  __class__ ('hceapmd5s', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
	});}
});
export var hceapleaps =  __class__ ('hceapleaps', [Dict], {
	__module__: __name__,
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		if (!__in__ (key, self)) {
			Dict.__setitem__ (self, key, value);
		}
	});}
});
export var Outputs =  __class__ ('Outputs', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.wordlist_file = null;
		self.hccap_file = null;
		self.hccapx_file = null;
		self.hcwpax_file = null;
		self.hcpmkid_file = null;
		self.hceapmd5_file = null;
		self.hceapleap_file = null;
	});}
});
export var Database =  __class__ ('Database', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.statistics = statistics ();
		self.passwords = [];
		self.essids = essids ();
		self.excpkts = excpkts ();
		self.eapmd5s = eapmd5s ();
		self.eapleaps = eapleaps ();
		self.hccaps = [];
		self.hccapxs = [];
		self.hcwpaxs = hcwpaxs ();
		self.hcpmkids = hcpmkids ();
		self.pmkids = pmkids ();
		self.pcapng_info = pcapng_info ();
		self.hceapmd5s = hceapmd5s ();
		self.hceapleaps = hceapleaps ();
	});},
	get statistic_add () {return __get__ (this, function (self, bssid, data) {
		self.statistics.__setitem__ (bssid, data);
	});},
	get password_add () {return __get__ (this, function (self, password) {
		for (var char of password) {
			if (char < 32 || char > 126) {
				self.passwords.append ('$HEX[{}]'.format (hex (password)));
				return ;
			}
		}
		self.passwords.append (password.decode ('ascii'));
	});},
	get essid_add () {return __get__ (this, function (self, bssid, essid, essid_len, essid_source) {
		var key = bssid;
		self.statistic_add (key, essid_source);
		if (essid_len == 0 || !(essid)) {
			return ;
		}
		if (len (self.essids) == DB_ESSID_MAX) {
			LOGGER.log ('DB_ESSID_MAX Exceeded!', CRITICAL);
			var __except0__ = ValueError ('DB_ESSID_MAX Exceeded!');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self.essids.__setitem__ (key, dict ({'bssid': key, 'essid': essid, 'essid_len': essid_len, 'essid_source': essid_source}));
	});},
	get excpkt_add () {return __get__ (this, function (self, excpkt_num, tv_sec, tv_usec, replay_counter, mac_ap, mac_sta, nonce, eapol_len, eapol, keyver, keymic) {
		var key = mac_ap;
		var subkey = mac_sta;
		var subsubkey = (__in__ (excpkt_num, [EXC_PKT_NUM_1, EXC_PKT_NUM_3]) ? 'ap' : 'sta');
		self.statistic_add (key, excpkt_num);
		if (nonce == ZERO * 32) {
			return ;
		}
		if (len (self.excpkts) == DB_EXCPKT_MAX) {
			LOGGER.log ('DB_EXCPKT_MAX Exceeded!', CRITICAL);
			var __except0__ = ValueError ('DB_EXCPKT_MAX Exceeded!');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self.excpkts.__setitem__ (key, dict ([[subkey, dict ([[subsubkey, [dict ({'excpkt_num': excpkt_num, 'tv_sec': tv_sec, 'tv_usec': tv_usec, 'tv_abs': (tv_sec * 1000) * 1000 + tv_usec, 'replay_counter': replay_counter, 'mac_ap': key, 'mac_sta': subkey, 'nonce': nonce, 'eapol_len': eapol_len, 'eapol': eapol, 'keyver': keyver, 'keymic': keymic})]]])]]));
	});},
	get eapmd5_add () {return __get__ (this, function (self, auth_id, mac_ap, mac_sta, auth_hash, auth_salt) {
		var key = mac_ap;
		var subkey = hash (auth_id + hex (mac_ap + mac_sta));
		self.eapmd5s.__setitem__ (key, dict ([[subkey, dict ({'id': auth_id, 'mac_ap': mac_ap, 'mac_sta': mac_sta, 'hash': auth_hash, 'salt': auth_salt})]]));
	});},
	get eapleap_add () {return __get__ (this, function (self, auth_id, mac_ap, mac_sta, auth_resp1, auth_resp2, auth_name) {
		var key = mac_ap;
		var subkey = hash (auth_id + hex (mac_ap + mac_sta));
		self.eapleaps.__setitem__ (key, dict ([[subkey, dict ({'id': auth_id, 'mac_ap': mac_ap, 'mac_sta': mac_sta, 'resp1': auth_resp1, 'resp2': auth_resp2, 'name': auth_name})]]));
	});},
	get hccap_add () {return __get__ (this, function (self, bssid, essid, raw_data) {
		self.hccaps.append (dict ({'bssid': bssid, 'essid': essid, 'raw_data': raw_data}));
	});},
	get hccap_groupby () {return __get__ (this, function (self, group_by) {
		if (group_by === null || group_by == 'none') {
			self.hccaps = [dict ({'key': 'none', 'raw_data': (function () {
				var __accu0__ = [];
				for (var v of self.hccaps) {
					__accu0__.append (v ['raw_data']);
				}
				return __accu0__;
			}) ()})];
		}
		else if (group_by == 'handshake') {
			self.hccaps = (function () {
				var __accu0__ = [];
				for (var [k, v] of enumerate (self.hccaps)) {
					__accu0__.append (dict ({'key': (v ['bssid'] + '_') + str (k), 'raw_data': [v ['raw_data']]}));
				}
				return __accu0__;
			}) ();
		}
		else {
			self.hccaps.py_sort (__kwargtrans__ ({key: itemgetter (group_by)}));
			self.hccaps = groupby (self.hccaps, __kwargtrans__ ({key: itemgetter (group_by)}));
			self.hccaps = (function () {
				var __accu0__ = [];
				for (var [k, v] of self.hccaps) {
					__accu0__.append (dict ({'key': k, 'raw_data': (function () {
						var __accu1__ = [];
						for (var x of v) {
							__accu1__.append (x ['raw_data']);
						}
						return __accu1__;
					}) ()}));
				}
				return __accu0__;
			}) ();
		}
	});},
	get hccapx_add () {return __get__ (this, function (self, bssid, essid, raw_data) {
		self.hccapxs.append (dict ({'bssid': bssid, 'essid': essid, 'raw_data': raw_data}));
	});},
	get hccapx_groupby () {return __get__ (this, function (self, group_by) {
		if (group_by === null || group_by == 'none') {
			self.hccapxs = [dict ({'key': 'none', 'raw_data': (function () {
				var __accu0__ = [];
				for (var v of self.hccapxs) {
					__accu0__.append (v ['raw_data']);
				}
				return __accu0__;
			}) ()})];
		}
		else if (group_by == 'handshake') {
			self.hccapxs = (function () {
				var __accu0__ = [];
				for (var [k, v] of enumerate (self.hccapxs)) {
					__accu0__.append (dict ({'key': (v ['bssid'] + '_') + str (k), 'raw_data': [v ['raw_data']]}));
				}
				return __accu0__;
			}) ();
		}
		else {
			self.hccapxs.py_sort (__kwargtrans__ ({key: itemgetter (group_by)}));
			self.hccapxs = groupby (self.hccapxs, __kwargtrans__ ({key: itemgetter (group_by)}));
			self.hccapxs = (function () {
				var __accu0__ = [];
				for (var [k, v] of self.hccapxs) {
					__accu0__.append (dict ({'key': k, 'raw_data': (function () {
						var __accu1__ = [];
						for (var x of v) {
							__accu1__.append (x ['raw_data']);
						}
						return __accu1__;
					}) ()}));
				}
				return __accu0__;
			}) ();
		}
	});},
	get hcwpaxs_add () {return __get__ (this, function (self, signature, ftype, pmkid_or_mic, mac_ap, mac_sta, essid, anonce, eapol, message_pair) {
		if (typeof anonce == 'undefined' || (anonce != null && anonce.hasOwnProperty ("__kwargtrans__"))) {;
			var anonce = null;
		};
		if (typeof eapol == 'undefined' || (eapol != null && eapol.hasOwnProperty ("__kwargtrans__"))) {;
			var eapol = null;
		};
		if (typeof message_pair == 'undefined' || (message_pair != null && message_pair.hasOwnProperty ("__kwargtrans__"))) {;
			var message_pair = null;
		};
		if (ftype == '01') {
			var key = pmkid_or_mic;
			self.hcwpaxs.__setitem__ (key, dict ({'signature': signature, 'type': ftype, 'pmkid_or_mic': pmkid_or_mic, 'mac_ap': mac_ap, 'mac_sta': mac_sta, 'essid': hex (essid), 'anonce': '', 'eapol': '', 'message_pair': ''}));
		}
		else {
			var key = hash (tuple ([pmkid_or_mic, message_pair]));
			self.hcwpaxs.__setitem__ (key, dict ({'signature': signature, 'type': ftype, 'pmkid_or_mic': hex (pmkid_or_mic), 'mac_ap': hex (mac_ap), 'mac_sta': hex (mac_sta), 'essid': hex (essid), 'anonce': hex (anonce), 'eapol': hex (eapol), 'message_pair': '{:02x}'.format (message_pair)}));
		}
	});},
	get hcpmkid_add () {return __get__ (this, function (self, pmkid, mac_ap, mac_sta, essid) {
		var key = pmkid;
		self.hcpmkids.__setitem__ (key, dict ({'pmkid': pmkid, 'mac_ap': mac_ap, 'mac_sta': mac_sta, 'essid': hex (essid)}));
	});},
	get pmkid_add () {return __get__ (this, function (self, mac_ap, mac_sta, pmkid, akm) {
		var key = hash (mac_ap + mac_sta);
		self.pmkids.__setitem__ (key, dict ({'mac_ap': hex (mac_ap), 'mac_sta': hex (mac_sta), 'pmkid': pmkid, 'akm': akm}));
	});},
	get pcapng_info_add () {return __get__ (this, function (self, key, info) {
		self.pcapng_info.__setitem__ (key, info);
	});},
	get hceapmd5_add () {return __get__ (this, function (self, auth_id, auth_hash, auth_salt) {
		if (!(auth_id && auth_hash && auth_salt)) {
			return ;
		}
		var key = hash ((auth_id + auth_hash) + auth_salt);
		self.hceapmd5s.__setitem__ (key, dict ({'auth_hash': auth_hash, 'auth_salt': auth_salt, 'auth_id': auth_id}));
	});},
	get hceapleap_add () {return __get__ (this, function (self, auth_resp1, auth_resp2, auth_name) {
		if (!(auth_resp1 && auth_resp2 && auth_name)) {
			return ;
		}
		var key = hash ((auth_resp1 + auth_resp2) + auth_name);
		self.hceapleaps.__setitem__ (key, dict ({'auth_name': auth_name, 'unused1': '', 'unused2': '', 'unused3': '', 'resp1': auth_resp1, 'resp2': auth_resp2}));
	});}
});
export var DB = Database ();
export var outputs = Outputs ();
export var Status =  __class__ ('Status', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.total_filesize = 0;
		self.current_filepos = 0;
		self.current_packet = 0;
	});},
	get set_filesize () {return __get__ (this, function (self, filesize) {
		self.total_filesize = filesize;
	});},
	get step_packet () {return __get__ (this, function (self) {
		self.current_packet++;
	});},
	get set_filepos () {return __get__ (this, function (self, filepos) {
		self.current_filepos = filepos;
	});}
});
export var STATUS = Status ();
export var get_essid_from_tag = function (packet, header, length_skip) {
	if (length_skip > header ['caplen']) {
		return tuple ([-(1), null]);
	}
	var length = header ['caplen'] - length_skip;
	var beacon = packet.__getslice__ (length_skip, length_skip + length, 1);
	var cur = 0;
	var end = len (beacon);
	while (cur < end) {
		if (cur + 2 >= end) {
			break;
		}
		var tagtype = beacon [cur];
		cur++;
		var taglen = beacon [cur];
		cur++;
		if (cur + taglen >= end) {
			break;
		}
		if (tagtype == MFIE_TYPE_SSID) {
			if (taglen <= MAX_ESSID_LEN) {
				var essid = dict ({});
				if (len (CUSTOM_ESSID) > 0) {
					essid ['essid'] = CUSTOM_ESSID;
					essid ['essid_len'] = len (essid ['essid']);
					
										const __essid__ = new Uint8Array(MAX_ESSID_LEN);
										__essid__.set(essid['essid']);
										essid['essid'] = __essid__;
										
				}
				else {
					essid ['essid'] = beacon.__getslice__ (cur, cur + taglen, 1);
					
										const __essid__ = new Uint8Array(MAX_ESSID_LEN);
										__essid__.set(essid['essid']);			
										essid['essid'] = __essid__;
										
					essid ['essid_len'] = taglen;
				}
				return tuple ([0, essid]);
			}
		}
		cur += taglen;
	}
	return tuple ([-(1), null]);
};
export var get_pmkid_from_packet = function* (packet, source) {
	if (source == 'EAPOL-M1') {
		var akm = null;
		if (packet) {
			var pos = 0;
			while (true) {
				try {
					var tag_id = packet [pos];
					var tag_len = packet [pos + 1];
					var tag_data = packet.__getslice__ (pos + 2, (pos + 2) + tag_len, 1);
					if (tag_id == 221) {
						if (tag_data.__getslice__ (0, 3, 1) == SUITE_OUI) {
							var pmkid = hex (tag_data.__getslice__ (4, null, 1));
							if (pmkid != '0' * 32) {
								yield tuple ([pmkid, akm]);
							}
						}
					}
					var pos = (pos + 2) + tag_len;
				}
				catch (__except0__) {
					break;
				}
			}
		}
		return ;
	}
	else if (source == 'EAPOL-M2') {
		var pos = 0;
	}
	else if (source == IEEE80211_STYPE_ASSOC_REQ) {
		var pos = 28;
	}
	else if (source == IEEE80211_STYPE_REASSOC_REQ) {
		var pos = 34;
	}
	else {
		return ;
	}
	while (true) {
		try {
			var tag_id = packet [pos];
			var tag_len = packet [pos + 1];
			var tag_data = packet.__getslice__ (pos + 2, (pos + 2) + tag_len, 1);
			if (tag_id == 48) {
				var tag_pairwise_suite_count = GetUint16 (tag_data.__getslice__ (6, 8, 1));
				if (BIG_ENDIAN_HOST) {
					var tag_pairwise_suite_count = byte_swap_16 (tag_pairwise_suite_count);
				}
				var pos = 8;
				pos += 4 * tag_pairwise_suite_count;
				var tag_authentication_suite_count = GetUint16 (tag_data.__getslice__ (pos, pos + 2, 1));
				if (BIG_ENDIAN_HOST) {
					var tag_authentication_suite_count = byte_swap_16 (tag_authentication_suite_count);
				}
				var pos = pos + 2;
				var skip = 0;
				for (var i = 0; i < tag_authentication_suite_count; i++) {
					pos += 4 * i + 4;
					var akm = tag_data.__getslice__ (pos - 4, pos, 1);
					if (akm.__getslice__ (0, 3, 1) != SUITE_OUI) {
						var skip = 1;
						break;
					}
				}
				if (skip == 1) {
					break;
				}
				try {
					var pmkid_count = GetUint16 (tag_data.__getslice__ (pos + 2, pos + 4, 1));
					if (BIG_ENDIAN_HOST) {
						var pmkid_count = byte_swap_16 (pmkid_count);
					}
					var pos = pos + 4;
					for (var i = 0; i < pmkid_count; i++) {
						pos += 16 * i + 16;
						var pmkid = hex (tag_data.__getslice__ (pos - 16, pos, 1));
						if (pmkid != '0' * 32) {
							yield tuple ([pmkid, akm [3]]);
						}
					}
				}
				catch (__except0__) {
					break;
				}
				break;
			}
			var pos = (pos + 2) + tag_len;
		}
		catch (__except0__) {
			break;
		}
	}
	};
export var handle_llc = function (ieee80211_llc_snap_header) {
	if (ieee80211_llc_snap_header ['dsap'] != IEEE80211_LLC_DSAP) {
		return -(1);
	}
	if (ieee80211_llc_snap_header ['ssap'] != IEEE80211_LLC_SSAP) {
		return -(1);
	}
	if (ieee80211_llc_snap_header ['ctrl'] != IEEE80211_LLC_CTRL) {
		return -(1);
	}
	if (ieee80211_llc_snap_header ['ethertype'] != IEEE80211_DOT1X_AUTHENTICATION) {
		return -(1);
	}
	return 0;
};
export var handle_auth = function (auth_packet, auth_packet_copy, auth_packet_t_size, keymic_size, rest_packet, pkt_offset, pkt_size) {
	var ap_length = byte_swap_16 (auth_packet ['length']);
	var ap_key_information = byte_swap_16 (auth_packet ['key_information']);
	var ap_replay_counter = byte_swap_64 (auth_packet ['replay_counter']);
	var ap_wpa_key_data_length = byte_swap_16 (auth_packet ['wpa_key_data_length']);
	if (ap_length == 0) {
		return tuple ([-(1), null]);
	}
	if (ap_key_information & WPA_KEY_INFO_ACK) {
		if (ap_key_information & WPA_KEY_INFO_INSTALL) {
			var excpkt_num = EXC_PKT_NUM_3;
		}
		else {
			var excpkt_num = EXC_PKT_NUM_1;
		}
	}
	else if (ap_key_information & WPA_KEY_INFO_SECURE) {
		var excpkt_num = EXC_PKT_NUM_4;
	}
	else {
		var excpkt_num = EXC_PKT_NUM_2;
	}
	var excpkt = dict ({});
	excpkt ['nonce'] = auth_packet ['wpa_key_nonce'];
	
		var __excpkt__ = new Uint8Array(32);
		__excpkt__.set(excpkt['nonce'])
		excpkt['nonce'] = __excpkt__;
		
	excpkt ['replay_counter'] = ap_replay_counter;
	excpkt ['excpkt_num'] = excpkt_num;
	excpkt ['eapol_len'] = auth_packet_t_size + ap_wpa_key_data_length;
	if (pkt_offset + excpkt ['eapol_len'] > pkt_size) {
		return tuple ([-(1), null]);
	}
	if (auth_packet_t_size + ap_wpa_key_data_length > SIZE_OF_EAPOL) {
		return tuple ([-(1), null]);
	}
	excpkt ['eapol'] = auth_packet_copy;
	
		var __excpkt__ = new Uint8Array(auth_packet_t_size);
		__excpkt__.set(excpkt['eapol']);
		excpkt['eapol'] = __excpkt__;
		
	excpkt ['eapol'] += rest_packet.__getslice__ (0, ap_wpa_key_data_length, 1);
	
		var __excpkt__ = new Uint8Array(SIZE_OF_EAPOL);
		__excpkt__.set(excpkt['eapol']);
		excpkt['eapol'] = __excpkt__;
		
	excpkt ['keymic'] = auth_packet ['wpa_key_mic'];
	excpkt ['keyver'] = ap_key_information & WPA_KEY_INFO_TYPE_MASK;
	if (excpkt_num == EXC_PKT_NUM_3 || excpkt_num == EXC_PKT_NUM_4) {
		excpkt ['replay_counter']--;
	}
	return tuple ([0, excpkt]);
};
export var read_blocks = function* (pcapng) {
	while (true) {
		var __left0__ = tuple ([GetUint32 (pcapng.read (4)), GetUint32 (pcapng.read (4))]);
		var block_type = __left0__ [0];
		var block_length = __left0__ [1];
		if (BIG_ENDIAN_HOST) {
			var block_type = byte_swap_32 (block_type);
			var block_length = byte_swap_32 (block_length);
		}
		var block_body_length = max (block_length - 12, 0);
		var block = dict ({'block_type': block_type, 'block_length': block_length, 'block_body': pcapng.read (block_body_length), 'block_length_2': GetUint32 (pcapng.read (4))});
		yield block;
	}
	};
export var read_options = function* (options_block, bitness) {
	while (true) {
		var option = dict ({});
		try {
			option ['code'] = GetUint16 (options_block.__getslice__ (0, 2, 1));
			option ['length'] = GetUint16 (options_block.__getslice__ (2, 4, 1));
		}
		catch (__except0__) {
			break;
		}
		if (BIG_ENDIAN_HOST) {
			option ['code'] = byte_swap_16 (option ['code']);
			option ['length'] = byte_swap_16 (option ['length']);
		}
		if (bitness) {
			option ['code'] = byte_swap_16 (option ['code']);
			option ['length'] = byte_swap_16 (option ['length']);
		}
		if (option ['code'] == opt_endofopt) {
			break;
		}
		var option_length = option ['length'] + __mod__ (-(option ['length']), 4);
		option ['value'] = options_block.__getslice__ (4, 4 + option_length, 1);
		if (__in__ (option ['code'], Custom_Option_Codes)) {
			var pen = option ['value'].__getslice__ (0, 4, 1);
			if (pen == HCXDUMPTOOL_PEN) {
				var magic = option ['value'].__getslice__ (4, 36, 1);
				if (magic == HCXDUMPTOOL_MAGIC_NUMBER) {
					for (var custom_option of read_options (option ['value'].__getslice__ (36, null, 1), bitness)) {
						yield custom_option;
					}
				}
			}
			var options_block = options_block.__getslice__ (4 + option_length, null, 1);
		}
		else {
			option ['value'] = option ['value'];
			var options_block = options_block.__getslice__ (4 + option_length, null, 1);
			yield option;
		}
	}
	};
export var read_custom_block = function (custom_block, bitness) {
	var __left0__ = tuple ([null, null, null]);
	var py_name = __left0__ [0];
	var data = __left0__ [1];
	var options = __left0__ [2];
	var pen = custom_block.__getslice__ (0, 4, 1);
	if (pen == HCXDUMPTOOL_PEN) {
		var magic = custom_block.__getslice__ (4, 36, 1);
		if (magic == HCXDUMPTOOL_MAGIC_NUMBER) {
			var py_name = 'hcxdumptool';
			var data = null;
			var options = [];
			for (var option of read_options (custom_block.__getslice__ (36, null, 1), bitness)) {
				if (option ['code'] == HCXDUMPTOOL_OPTIONCODE_RC) {
					option ['value'] = GetUint64 (option ['value']);
					if (BIG_ENDIAN_HOST) {
						option ['value'] = byte_swap_64 (option ['value']);
					}
					if (bitness) {
						option ['value'] = byte_swap_64 (option ['value']);
					}
				}
				options.append (option);
			}
		}
	}
	return tuple ([py_name, data, options]);
};
export var read_pcap_file_header = function (pcap) {
	try {
		var pcap_header = pcap.read (SIZE_OF_pcap_file_header_t);
		var pcap_file_header = dict ({'magic': GetUint32 (pcap_header.__getslice__ (0, 4, 1)), 'linktype': GetUint32 (pcap_header.__getslice__ (20, 24, 1))});
	}
	catch (__except0__) {
		if (isinstance (__except0__, IndexError)) {
			LOGGER.log ('Could not read pcap header', WARNING);
			var __except1__ = ValueError ('Could not read pcap header');
			__except1__.__cause__ = null;
			throw __except1__;
		}
		else {
			throw __except0__;
		}
	}
	if (BIG_ENDIAN_HOST) {
		pcap_file_header ['magic'] = byte_swap_32 (pcap_file_header ['magic']);
		pcap_file_header ['linktype'] = byte_swap_32 (pcap_file_header ['linktype']);
	}
	if (pcap_file_header ['magic'] == TCPDUMP_MAGIC) {
		var bitness = 0;
	}
	else if (pcap_file_header ['magic'] == TCPDUMP_CIGAM) {
		var bitness = 1;
		pcap_file_header ['linktype'] = byte_swap_32 (pcap_file_header ['linktype']);
		xprint ('WARNING! BigEndian (Endianness) files are not well tested.');
	}
	else {
		LOGGER.log ('Invalid pcap header', WARNING);
		var __except0__ = ValueError ('Invalid pcap header');
		__except0__.__cause__ = null;
		throw __except0__;
	}
	if (pcap_file_header ['linktype'] != DLT_IEEE802_11 && pcap_file_header ['linktype'] != DLT_IEEE802_11_PRISM && pcap_file_header ['linktype'] != DLT_IEEE802_11_RADIO && pcap_file_header ['linktype'] != DLT_IEEE802_11_PPI_HDR) {
		LOGGER.log ('Unsupported linktype detected', WARNING);
		var __except0__ = ValueError ('Unsupported linktype detected');
		__except0__.__cause__ = null;
		throw __except0__;
	}
	return tuple ([pcap_file_header, bitness]);
};
export var read_pcapng_file_header = function* (pcapng) {
	var blocks = read_blocks (pcapng);
	for (var block of blocks) {
		if (block ['block_type'] == Section_Header_Block) {
			try {
				var _interface = py_next (blocks);
			}
			catch (__except0__) {
				break;
			}
			var pcapng_file_header = dict ({});
			pcapng_file_header ['magic'] = block ['block_body'].__getslice__ (0, 4, 1);
			pcapng_file_header ['linktype'] = _interface ['block_body'] [0];
			if (BIG_ENDIAN_HOST) {
				pcapng_file_header ['magic'] = byte_swap_32 (pcapng_file_header ['magic']);
				pcapng_file_header ['linktype'] = byte_swap_32 (pcapng_file_header ['linktype']);
			}
			var magic = GetUint32 (pcapng_file_header ['magic']);
			if (magic == PCAPNG_MAGIC) {
				var bitness = 0;
			}
			else if (magic == PCAPNG_CIGAM) {
				var bitness = 1;
				pcapng_file_header ['linktype'] = byte_swap_32 (pcapng_file_header ['linktype']);
				xprint ('WARNING! BigEndian (Endianness) files are not well tested.');
			}
			else {
				continue;
			}
			pcapng_file_header ['section_options'] = [];
			for (var option of read_options (block ['block_body'].__getslice__ (16, null, 1), bitness)) {
				pcapng_file_header ['section_options'].append (option);
			}
			var if_tsresol = 6;
			pcapng_file_header ['interface_options'] = [];
			for (var option of read_options (_interface ['block_body'].__getslice__ (8, null, 1), bitness)) {
				if (option ['code'] == if_tsresol_code) {
					var if_tsresol = option ['value'].__getslice__ (0, option ['length'], 1) [0];
					if (if_tsresol != 6) {
						LOGGER.log ('Unsupported if_tsresol', WARNING);
						continue;
					}
				}
				pcapng_file_header ['interface_options'].append (option);
			}
			if (pcapng_file_header ['linktype'] != DLT_IEEE802_11 && pcapng_file_header ['linktype'] != DLT_IEEE802_11_PRISM && pcapng_file_header ['linktype'] != DLT_IEEE802_11_RADIO && pcapng_file_header ['linktype'] != DLT_IEEE802_11_PPI_HDR) {
				continue;
			}
			yield tuple ([pcapng_file_header, bitness, if_tsresol, blocks]);
		}
	}
	};
export var process_packet = function (packet, header) {
	if (!(QUIET)) {
		xprint ('Reading file: {}/{} ({} packets)'.format (STATUS.current_filepos, STATUS.total_filesize, STATUS.current_packet), __kwargtrans__ ({end: '\r'}));
	}
	if (header ['caplen'] < SIZE_OF_ieee80211_hdr_3addr_t) {
		return ;
	}
	try {
		var ieee80211_hdr_3addr = dict ({'frame_control': GetUint16 (packet.__getslice__ (0, 2, 1)), 'addr1': tuple ([packet [4], packet [5], packet [6], packet [7], packet [8], packet [9]]), 'addr2': tuple ([packet [10], packet [11], packet [12], packet [13], packet [14], packet [15]]), 'addr3': tuple ([packet [16], packet [17], packet [18], packet [19], packet [20], packet [21]])});
		if (BIG_ENDIAN_HOST) {
			ieee80211_hdr_3addr ['frame_control'] = byte_swap_16 (ieee80211_hdr_3addr ['frame_control']);
		}
		var frame_control = ieee80211_hdr_3addr ['frame_control'];
		if ((frame_control & IEEE80211_FCTL_FTYPE) == IEEE80211_FTYPE_MGMT) {
			var stype = frame_control & IEEE80211_FCTL_STYPE;
			if (stype == IEEE80211_STYPE_BEACON) {
				var length_skip = SIZE_OF_ieee80211_hdr_3addr_t + SIZE_OF_beacon_t;
				var __left0__ = get_essid_from_tag (packet, header, length_skip);
				var rc_beacon = __left0__ [0];
				var essid = __left0__ [1];
				if (rc_beacon == -(1)) {
					return ;
				}
				DB.password_add (essid ['essid'].__getslice__ (0, essid ['essid_len'], 1));
				if (ieee80211_hdr_3addr ['addr3'] == BROADCAST_MAC) {
					return ;
				}
				DB.essid_add (__kwargtrans__ ({bssid: ieee80211_hdr_3addr ['addr3'], essid: essid ['essid'], essid_len: essid ['essid_len'], essid_source: ESSID_SOURCE_BEACON}));
			}
			else if (stype == IEEE80211_STYPE_PROBE_REQ) {
				var length_skip = SIZE_OF_ieee80211_hdr_3addr_t;
				var __left0__ = get_essid_from_tag (packet, header, length_skip);
				var rc_beacon = __left0__ [0];
				var essid = __left0__ [1];
				if (rc_beacon == -(1)) {
					return ;
				}
				DB.password_add (essid ['essid'].__getslice__ (0, essid ['essid_len'], 1));
				if (ieee80211_hdr_3addr ['addr3'] == BROADCAST_MAC) {
					return ;
				}
				DB.essid_add (__kwargtrans__ ({bssid: ieee80211_hdr_3addr ['addr3'], essid: essid ['essid'], essid_len: essid ['essid_len'], essid_source: ESSID_SOURCE_PROBE}));
			}
			else if (stype == IEEE80211_STYPE_PROBE_RESP) {
				var length_skip = SIZE_OF_ieee80211_hdr_3addr_t + SIZE_OF_beacon_t;
				var __left0__ = get_essid_from_tag (packet, header, length_skip);
				var rc_beacon = __left0__ [0];
				var essid = __left0__ [1];
				if (rc_beacon == -(1)) {
					return ;
				}
				DB.password_add (essid ['essid'].__getslice__ (0, essid ['essid_len'], 1));
				if (ieee80211_hdr_3addr ['addr3'] == BROADCAST_MAC) {
					return ;
				}
				DB.essid_add (__kwargtrans__ ({bssid: ieee80211_hdr_3addr ['addr3'], essid: essid ['essid'], essid_len: essid ['essid_len'], essid_source: ESSID_SOURCE_PROBE}));
			}
			else if (stype == IEEE80211_STYPE_ASSOC_REQ) {
				var length_skip = SIZE_OF_ieee80211_hdr_3addr_t + SIZE_OF_assocreq_t;
				var __left0__ = get_essid_from_tag (packet, header, length_skip);
				var rc_beacon = __left0__ [0];
				var essid = __left0__ [1];
				if (rc_beacon == -(1)) {
					return ;
				}
				DB.password_add (essid ['essid'].__getslice__ (0, essid ['essid_len'], 1));
				if (ieee80211_hdr_3addr ['addr3'] == BROADCAST_MAC) {
					return ;
				}
				DB.essid_add (__kwargtrans__ ({bssid: ieee80211_hdr_3addr ['addr3'], essid: essid ['essid'], essid_len: essid ['essid_len'], essid_source: ESSID_SOURCE_ASSOC}));
				var mac_ap = ieee80211_hdr_3addr ['addr3'];
				if (mac_ap == ieee80211_hdr_3addr ['addr1']) {
					var mac_sta = ieee80211_hdr_3addr ['addr2'];
				}
				else {
					var mac_sta = ieee80211_hdr_3addr ['addr1'];
				}
				for (var [pmkid, akm] of get_pmkid_from_packet (packet, stype)) {
					DB.pmkid_add (__kwargtrans__ ({mac_ap: mac_ap, mac_sta: mac_sta, pmkid: pmkid, akm: akm}));
				}
			}
			else if (stype == IEEE80211_STYPE_REASSOC_REQ) {
				var length_skip = SIZE_OF_ieee80211_hdr_3addr_t + SIZE_OF_reassocreq_t;
				var __left0__ = get_essid_from_tag (packet, header, length_skip);
				var rc_beacon = __left0__ [0];
				var essid = __left0__ [1];
				if (rc_beacon == -(1)) {
					return ;
				}
				DB.password_add (essid ['essid'].__getslice__ (0, essid ['essid_len'], 1));
				if (ieee80211_hdr_3addr ['addr3'] == BROADCAST_MAC) {
					return ;
				}
				DB.essid_add (__kwargtrans__ ({bssid: ieee80211_hdr_3addr ['addr3'], essid: essid ['essid'], essid_len: essid ['essid_len'], essid_source: ESSID_SOURCE_REASSOC}));
				var mac_ap = ieee80211_hdr_3addr ['addr3'];
				if (mac_ap == ieee80211_hdr_3addr ['addr1']) {
					var mac_sta = ieee80211_hdr_3addr ['addr2'];
				}
				else {
					var mac_sta = ieee80211_hdr_3addr ['addr1'];
				}
				for (var [pmkid, akm] of get_pmkid_from_packet (packet, stype)) {
					DB.pmkid_add (__kwargtrans__ ({mac_ap: mac_ap, mac_sta: mac_sta, pmkid: pmkid, akm: akm}));
				}
			}
		}
		else if ((frame_control & IEEE80211_FCTL_FTYPE) == IEEE80211_FTYPE_DATA) {
			var addr4_exist = (frame_control & (IEEE80211_FCTL_TODS | IEEE80211_FCTL_FROMDS)) == (IEEE80211_FCTL_TODS | IEEE80211_FCTL_FROMDS);
			if ((frame_control & IEEE80211_FCTL_STYPE) == IEEE80211_STYPE_QOS_DATA) {
				var llc_offset = SIZE_OF_ieee80211_qos_hdr_t;
			}
			else {
				var llc_offset = SIZE_OF_ieee80211_hdr_3addr_t;
			}
			if (header ['caplen'] < llc_offset + SIZE_OF_ieee80211_llc_snap_header_t) {
				return ;
			}
			if (addr4_exist) {
				llc_offset += 6;
			}
			var ieee80211_llc_snap_header = dict ({'dsap': packet [llc_offset], 'ssap': packet [llc_offset + 1], 'ctrl': packet [llc_offset + 2], 'ethertype': GetUint16 (packet.__getslice__ (llc_offset + 6, llc_offset + 8, 1))});
			if (BIG_ENDIAN_HOST) {
				ieee80211_llc_snap_header ['ethertype'] = byte_swap_16 (ieee80211_llc_snap_header ['ethertype']);
			}
			var rc_llc = handle_llc (ieee80211_llc_snap_header);
			if (rc_llc == -(1)) {
				return ;
			}
			var auth_offset = llc_offset + SIZE_OF_ieee80211_llc_snap_header_t;
			var __left0__ = tuple ([packet [auth_offset], packet [auth_offset + 1], GetUint16 (packet.__getslice__ (auth_offset + 2, auth_offset + 4, 1))]);
			var auth_head_version = __left0__ [0];
			var auth_head_type = __left0__ [1];
			var auth_head_length = __left0__ [2];
			if (auth_head_type == AUTH_EAPOL) {
				if (len (packet.__getslice__ (auth_offset, null, 1)) < 107) {
					var keymic_size = 16;
					var auth_packet_t_size = 99;
				}
				else {
					var l1 = GetUint16 (packet.__getslice__ (auth_offset + 97, auth_offset + 99, 1));
					var l2 = GetUint16 (packet.__getslice__ (auth_offset + 105, auth_offset + 107, 1));
					if (BIG_ENDIAN_HOST) {
						var auth_head_length = byte_swap_16 (auth_head_length);
						var l1 = byte_swap_16 (l1);
						var l2 = byte_swap_16 (l2);
					}
					var auth_head_length = byte_swap_16 (auth_head_length);
					var l1 = byte_swap_16 (l1);
					var l2 = byte_swap_16 (l2);
					if (l1 + 99 == auth_head_length + 4) {
						var keymic_size = 16;
						var auth_packet_t_size = 99;
					}
					else if (l2 + 107 == auth_head_length + 4) {
						var keymic_size = 24;
						var auth_packet_t_size = 107;
						LOGGER.log ("Keymic is 24 bytes (hccap(x) can't handle this)", WARNING);
					}
					else {
						return ;
					}
				}
				if (header ['caplen'] < auth_offset + auth_packet_t_size) {
					return ;
				}
				if (keymic_size == 16) {
					var auth_packet = dict ({'length': GetUint16 (packet.__getslice__ (auth_offset + 2, auth_offset + 4, 1)), 'key_information': GetUint16 (packet.__getslice__ (auth_offset + 5, auth_offset + 7, 1)), 'replay_counter': GetUint64 (packet.__getslice__ (auth_offset + 9, auth_offset + 17, 1)), 'wpa_key_nonce': packet.__getslice__ (auth_offset + 17, auth_offset + 49, 1), 'wpa_key_mic': packet.__getslice__ (auth_offset + 81, auth_offset + 97, 1), 'wpa_key_data_length': GetUint16 (packet.__getslice__ (auth_offset + 97, auth_offset + 99, 1))});
					var auth_packet_copy = tuple ([packet.__getslice__ (auth_offset, auth_offset + 81, 1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, packet.__getslice__ (auth_offset + 97, auth_offset + 99, 1)]);
				}
				else if (keymic_size == 24) {
					var auth_packet = dict ({'length': GetUint16 (packet.__getslice__ (auth_offset + 2, auth_offset + 4, 1)), 'key_information': GetUint16 (packet.__getslice__ (auth_offset + 5, auth_offset + 7, 1)), 'replay_counter': GetUint64 (packet.__getslice__ (auth_offset + 9, auth_offset + 17, 1)), 'wpa_key_nonce': packet.__getslice__ (auth_offset + 17, auth_offset + 49, 1), 'wpa_key_mic': packet.__getslice__ (auth_offset + 81, auth_offset + 105, 1), 'wpa_key_data_length': GetUint16 (packet.__getslice__ (auth_offset + 105, auth_offset + 107, 1))});
					var auth_packet_copy = tuple ([packet.__getslice__ (auth_offset, auth_offset + 81, 1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, packet.__getslice__ (auth_offset + 105, auth_offset + 107, 1)]);
				}
				else {
					return ;
				}
				if (BIG_ENDIAN_HOST) {
					auth_packet ['length'] = byte_swap_16 (auth_packet ['length']);
					auth_packet ['key_information'] = byte_swap_16 (auth_packet ['key_information']);
					auth_packet ['replay_counter'] = byte_swap_64 (auth_packet ['replay_counter']);
					auth_packet ['wpa_key_data_length'] = byte_swap_16 (auth_packet ['wpa_key_data_length']);
				}
				var rest_packet = packet.__getslice__ (auth_offset + auth_packet_t_size, null, 1);
				var __left0__ = handle_auth (auth_packet, auth_packet_copy, auth_packet_t_size, keymic_size, rest_packet, auth_offset, header ['caplen']);
				var rc_auth = __left0__ [0];
				var excpkt = __left0__ [1];
				if (rc_auth == -(1)) {
					return ;
				}
				if (excpkt ['excpkt_num'] == EXC_PKT_NUM_1 || excpkt ['excpkt_num'] == EXC_PKT_NUM_3) {
					DB.excpkt_add (__kwargtrans__ ({excpkt_num: excpkt ['excpkt_num'], tv_sec: header ['tv_sec'], tv_usec: header ['tv_usec'], replay_counter: excpkt ['replay_counter'], mac_ap: ieee80211_hdr_3addr ['addr2'], mac_sta: ieee80211_hdr_3addr ['addr1'], nonce: excpkt ['nonce'], eapol_len: excpkt ['eapol_len'], eapol: excpkt ['eapol'], keyver: excpkt ['keyver'], keymic: excpkt ['keymic']}));
					if (excpkt ['excpkt_num'] == EXC_PKT_NUM_1) {
						for (var [pmkid, akm] of get_pmkid_from_packet (rest_packet, 'EAPOL-M1')) {
							if (akm === null && __in__ (excpkt ['keyver'], [1, 2, 3])) {
								var akm = AK_SAFE;
							}
							DB.pmkid_add (__kwargtrans__ ({mac_ap: ieee80211_hdr_3addr ['addr2'], mac_sta: ieee80211_hdr_3addr ['addr1'], pmkid: pmkid, akm: akm}));
						}
					}
				}
				else if (excpkt ['excpkt_num'] == EXC_PKT_NUM_2 || excpkt ['excpkt_num'] == EXC_PKT_NUM_4) {
					DB.excpkt_add (__kwargtrans__ ({excpkt_num: excpkt ['excpkt_num'], tv_sec: header ['tv_sec'], tv_usec: header ['tv_usec'], replay_counter: excpkt ['replay_counter'], mac_ap: ieee80211_hdr_3addr ['addr1'], mac_sta: ieee80211_hdr_3addr ['addr2'], nonce: excpkt ['nonce'], eapol_len: excpkt ['eapol_len'], eapol: excpkt ['eapol'], keyver: excpkt ['keyver'], keymic: excpkt ['keymic']}));
					if (excpkt ['excpkt_num'] == EXC_PKT_NUM_2) {
						for (var [pmkid, akm] of get_pmkid_from_packet (rest_packet, 'EAPOL-M2')) {
							if (akm === null && __in__ (excpkt ['keyver'], [1, 2, 3])) {
								var akm = AK_SAFE;
							}
							DB.pmkid_add (__kwargtrans__ ({mac_ap: ieee80211_hdr_3addr ['addr1'], mac_sta: ieee80211_hdr_3addr ['addr2'], pmkid: pmkid, akm: akm}));
						}
					}
				}
			}
			else if (auth_head_type == AUTH_EAP) {
				if (__in__ (packet [auth_offset + 4], [1, 2])) {
					var auth_id = hex (packet.__getslice__ (auth_offset + 5, (auth_offset + 5) + 1, 1));
					var auth_type = packet [auth_offset + 8];
					if (auth_type == AUTH_EAP_MD5) {
						if (packet [auth_offset + 4] == 1) {
							var auth_hash = '';
							var auth_salt = hex (packet.__getslice__ (auth_offset + 10, (auth_offset + 10) + packet [auth_offset + 9], 1));
							var mac_ap = ieee80211_hdr_3addr ['addr3'];
							var mac_sta = (ieee80211_hdr_3addr ['addr3'] != ieee80211_hdr_3addr ['addr1'] ? ieee80211_hdr_3addr ['addr1'] : ieee80211_hdr_3addr ['addr2']);
						}
						else {
							var auth_hash = hex (packet.__getslice__ (auth_offset + 10, (auth_offset + 10) + packet [auth_offset + 9], 1));
							var auth_salt = '';
							var mac_ap = ieee80211_hdr_3addr ['addr3'];
							var mac_sta = (ieee80211_hdr_3addr ['addr3'] != ieee80211_hdr_3addr ['addr1'] ? ieee80211_hdr_3addr ['addr1'] : ieee80211_hdr_3addr ['addr2']);
						}
						DB.eapmd5_add (__kwargtrans__ ({auth_id: auth_id, mac_ap: mac_ap, mac_sta: mac_sta, auth_hash: auth_hash, auth_salt: auth_salt}));
					}
					else if (auth_type == AUTH_EAP_LEAP) {
						if (packet [auth_offset + 4] == 1) {
							var auth_resp1 = '';
							var auth_resp2 = hex (packet.__getslice__ (auth_offset + 12, (auth_offset + 12) + packet [auth_offset + 11], 1));
							var auth_name = packet.__getslice__ ((auth_offset + 12) + packet [auth_offset + 11], null, 1).decode (__kwargtrans__ ({encoding: 'utf-8', errors: 'ignore'})).rstrip ('\x00');
							var mac_ap = ieee80211_hdr_3addr ['addr3'];
							var mac_sta = (ieee80211_hdr_3addr ['addr3'] != ieee80211_hdr_3addr ['addr1'] ? ieee80211_hdr_3addr ['addr1'] : ieee80211_hdr_3addr ['addr2']);
						}
						else {
							var auth_resp1 = hex (packet.__getslice__ (auth_offset + 12, (auth_offset + 12) + packet [auth_offset + 11], 1));
							var auth_resp2 = '';
							var auth_name = packet.__getslice__ ((auth_offset + 12) + packet [auth_offset + 11], null, 1).decode (__kwargtrans__ ({encoding: 'utf-8', errors: 'ignore'})).rstrip ('\x00');
							var mac_ap = ieee80211_hdr_3addr ['addr3'];
							var mac_sta = (ieee80211_hdr_3addr ['addr3'] != ieee80211_hdr_3addr ['addr1'] ? ieee80211_hdr_3addr ['addr1'] : ieee80211_hdr_3addr ['addr2']);
						}
						DB.eapleap_add (__kwargtrans__ ({auth_id: auth_id, mac_ap: mac_ap, mac_sta: mac_sta, auth_resp1: auth_resp1, auth_resp2: auth_resp2, auth_name: auth_name}));
					}
				}
			}
		}
	}
	catch (__except0__) {
		LOGGER.log ('Packet processing error', WARNING);
	}
};
export var read_pcap_packets = function (cap_file, pcap_file_header, bitness, ignore_ts) {
	if (typeof ignore_ts == 'undefined' || (ignore_ts != null && ignore_ts.hasOwnProperty ("__kwargtrans__"))) {;
		var ignore_ts = false;
	};
	var header_count = 0;
	var header_error = null;
	var packet_count = 0;
	var packet_error = null;
	while (true) {
		var pcap_pkthdr = cap_file.read (SIZE_OF_pcap_pkthdr_t);
		if (!(pcap_pkthdr)) {
			break;
		}
		try {
			var header_error = null;
			var header = dict ({'tv_sec': GetUint32 (pcap_pkthdr.__getslice__ (0, 4, 1)), 'tv_usec': GetUint32 (pcap_pkthdr.__getslice__ (4, 8, 1)), 'caplen': GetUint32 (pcap_pkthdr.__getslice__ (8, 12, 1)), 'len': GetUint32 (pcap_pkthdr.__getslice__ (12, 16, 1))});
			if (BIG_ENDIAN_HOST) {
				header ['tv_sec'] = byte_swap_32 (header ['tv_sec']);
				header ['tv_usec'] = byte_swap_32 (header ['tv_usec']);
				header ['caplen'] = byte_swap_32 (header ['caplen']);
				header ['len'] = byte_swap_32 (header ['len']);
			}
			if (bitness) {
				header ['tv_sec'] = byte_swap_32 (header ['tv_sec']);
				header ['tv_usec'] = byte_swap_32 (header ['tv_usec']);
				header ['caplen'] = byte_swap_32 (header ['caplen']);
				header ['len'] = byte_swap_32 (header ['len']);
			}
			if (header ['tv_sec'] == 0 && header ['tv_usec'] == 0) {
				var header_error = 'Zero value timestamps detected';
				if (!(ignore_ts)) {
					var __except0__ = ValueError (header_error);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				else {
					LOGGER.log (header_error, WARNING);
				}
			}
			if (header ['caplen'] >= TCPDUMP_DECODE_LEN || to_signed_32 (header ['caplen']) < 0) {
				var header_error = 'Oversized packet detected';
				var __except0__ = ValueError (header_error);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			header_count++;
			try {
				var packet_error = null;
				var packet = cap_file.read (max (header ['caplen'], 0));
				if (pcap_file_header ['linktype'] == DLT_IEEE802_11_PRISM) {
					if (header ['caplen'] < SIZE_OF_prism_header_t) {
						var packet_error = 'Could not read prism header';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var prism_header = dict ({'msgcode': GetUint32 (packet.__getslice__ (0, 4, 1)), 'msglen': GetUint32 (packet.__getslice__ (4, 8, 1))});
					if (BIG_ENDIAN_HOST) {
						prism_header ['msgcode'] = byte_swap_32 (prism_header ['msgcode']);
						prism_header ['msglen'] = byte_swap_32 (prism_header ['msglen']);
					}
					if (to_signed_32 (prism_header ['msglen']) < 0) {
						var packet_error = 'Oversized packet detected';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					if (to_signed_32 (header ['caplen'] - prism_header ['msglen']) < 0) {
						var packet_error = 'Oversized packet detected';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var packet = packet.__getslice__ (prism_header ['msglen'], null, 1);
					header ['caplen'] -= prism_header ['msglen'];
					header ['len'] -= prism_header ['msglen'];
				}
				else if (pcap_file_header ['linktype'] == DLT_IEEE802_11_RADIO) {
					if (header ['caplen'] < SIZE_OF_ieee80211_radiotap_header_t) {
						var packet_error = 'Could not read radiotap header';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var ieee80211_radiotap_header = dict ({'it_version': packet [0], 'it_len': GetUint16 (packet.__getslice__ (2, 4, 1)), 'it_present': GetUint32 (packet.__getslice__ (4, 8, 1))});
					if (BIG_ENDIAN_HOST) {
						ieee80211_radiotap_header ['it_len'] = byte_swap_16 (ieee80211_radiotap_header ['it_len']);
						ieee80211_radiotap_header ['it_present'] = byte_swap_32 (ieee80211_radiotap_header ['it_present']);
					}
					if (ieee80211_radiotap_header ['it_version'] != 0) {
						var packet_error = 'Invalid radiotap header';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var packet = packet.__getslice__ (ieee80211_radiotap_header ['it_len'], null, 1);
					header ['caplen'] -= ieee80211_radiotap_header ['it_len'];
					header ['len'] -= ieee80211_radiotap_header ['it_len'];
				}
				else if (pcap_file_header ['linktype'] == DLT_IEEE802_11_PPI_HDR) {
					if (header ['caplen'] < SIZE_OF_ppi_packet_header_t) {
						var packet_error = 'Could not read ppi header';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var ppi_packet_header = dict ({'pph_len': GetUint16 (packet.__getslice__ (2, 4, 1))});
					if (BIG_ENDIAN_HOST) {
						ppi_packet_header ['pph_len'] = byte_swap_16 (ppi_packet_header ['pph_len']);
					}
					var packet = packet.__getslice__ (ppi_packet_header ['pph_len'], null, 1);
					header ['caplen'] -= ppi_packet_header ['pph_len'];
					header ['len'] -= ppi_packet_header ['pph_len'];
				}
				packet_count++;
			}
			catch (__except0__) {
				var packet_error = 'Could not read pcap packet data';
				var __except1__ = ValueError (packet_error);
				__except1__.__cause__ = null;
				throw __except1__;
			}
			try {
				try {
					if (!(QUIET)) {
						STATUS.step_packet ();
						STATUS.set_filepos (cap_file.tell ());
					}
					process_packet (packet, header);
				}
				catch (__except0__) {
					if (isinstance (__except0__, ValueError)) {
						var e = __except0__;
						LOGGER.log (str (e), WARNING);
						continue;
					}
					else {
						throw __except0__;
					}
				}
			}
			catch (__except0__) {
			}
		}
		catch (__except0__) {
			if (isinstance (__except0__, IndexError)) {
				continue;
			}
			else if (isinstance (__except0__, ValueError)) {
				var e = __except0__;
				LOGGER.log (str (e), WARNING);
				continue;
			}
			else {
				throw __except0__;
			}
		}
	}
	if (header_count == 0 || packet_count == 0) {
		if (header_error) {
			var __except0__ = ValueError (header_error);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else if (packet_error) {
			var __except0__ = ValueError (packet_error);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else {
			var __except0__ = ValueError ('Something went wrong');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	}
};
export var read_pcapng_packets = function (cap_file, pcapng, pcapng_file_header, bitness, if_tsresol, ignore_ts) {
	if (typeof ignore_ts == 'undefined' || (ignore_ts != null && ignore_ts.hasOwnProperty ("__kwargtrans__"))) {;
		var ignore_ts = false;
	};
	var header_count = 0;
	var header_error = null;
	var packet_count = 0;
	var packet_error = null;
	while (true) {
		try {
			var header_error = null;
			try {
				var header_block = py_next (pcapng);
			}
			catch (__except0__) {
				var header_block = null;
			}
			if (!(header_block)) {
				break;
			}
			if (header_block ['block_type'] == Enhanced_Packet_Block) {
				// pass;
			}
			else if (header_block ['block_type'] == Custom_Block) {
				var __left0__ = read_custom_block (header_block ['block_body'], bitness);
				var py_name = __left0__ [0];
				var data = __left0__ [1];
				var options = __left0__ [2];
				if (py_name == 'hcxdumptool') {
					DB.pcapng_info_add ('hcxdumptool', options);
				}
				continue;
			}
			else if (header_block ['block_type'] == Section_Header_Block) {
				cap_file.seek (cap_file.tell () - header_block ['block_length']);
				break;
			}
			else {
				continue;
			}
			var header = dict ({});
			var timestamp = ((((((header_block ['block_body'] [8] | header_block ['block_body'] [9] << 8) | header_block ['block_body'] [10] << 16) | header_block ['block_body'] [11] << 24) | header_block ['block_body'] [4] << 32) | header_block ['block_body'] [5] << 40) | header_block ['block_body'] [6] << 48) | header_block ['block_body'] [7] << 56;
			header ['caplen'] = GetUint32 (header_block ['block_body'].__getslice__ (12, 16, 1));
			header ['len'] = GetUint32 (header_block ['block_body'].__getslice__ (16, 20, 1));
			if (BIG_ENDIAN_HOST) {
				var timestamp = byte_swap_64 (timestamp);
				header ['caplen'] = byte_swap_32 (header ['caplen']);
				header ['len'] = byte_swap_32 (header ['len']);
			}
			if (bitness) {
				var timestamp = byte_swap_64 (timestamp);
				header ['caplen'] = byte_swap_32 (header ['caplen']);
				header ['len'] = byte_swap_32 (header ['len']);
			}
			var __left0__ = tuple ([Math.floor (timestamp / 1000000), __mod__ (timestamp, 1000000)]);
			header ['tv_sec'] = __left0__ [0];
			header ['tv_usec'] = __left0__ [1];
			if (header ['tv_sec'] == 0 && header ['tv_usec'] == 0) {
				var header_error = 'Zero value timestamps detected';
				if (!(ignore_ts)) {
					var __except0__ = ValueError (header_error);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				else {
					LOGGER.log (header_error, WARNING);
				}
			}
			if (header ['caplen'] >= TCPDUMP_DECODE_LEN || to_signed_32 (header ['caplen']) < 0) {
				var header_error = 'Oversized packet detected';
				var __except0__ = ValueError (header_error);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			header_count++;
			try {
				var packet_error = null;
				var packet = header_block ['block_body'].__getslice__ (20, 20 + header ['caplen'], 1);
				if (pcapng_file_header ['linktype'] == DLT_IEEE802_11_PRISM) {
					if (header ['caplen'] < SIZE_OF_prism_header_t) {
						var packet_error = 'Could not read prism header';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var prism_header = dict ({'msgcode': GetUint32 (packet.__getslice__ (0, 4, 1)), 'msglen': GetUint32 (packet.__getslice__ (4, 8, 1))});
					if (BIG_ENDIAN_HOST) {
						prism_header ['msgcode'] = byte_swap_32 (prism_header ['msgcode']);
						prism_header ['msglen'] = byte_swap_32 (prism_header ['msglen']);
					}
					if (to_signed_32 (prism_header ['msglen']) < 0) {
						var packet_error = 'Oversized packet detected';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					if (to_signed_32 (header ['caplen'] - prism_header ['msglen']) < 0) {
						var packet_error = 'Oversized packet detected';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var packet = packet.__getslice__ (prism_header ['msglen'], null, 1);
					header ['caplen'] -= prism_header ['msglen'];
					header ['len'] -= prism_header ['msglen'];
				}
				else if (pcapng_file_header ['linktype'] == DLT_IEEE802_11_RADIO) {
					if (header ['caplen'] < SIZE_OF_ieee80211_radiotap_header_t) {
						var packet_error = 'Could not read radiotap header';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var ieee80211_radiotap_header = dict ({'it_version': packet [0], 'it_len': GetUint16 (packet.__getslice__ (2, 4, 1)), 'it_present': GetUint32 (packet.__getslice__ (4, 8, 1))});
					if (BIG_ENDIAN_HOST) {
						ieee80211_radiotap_header ['it_len'] = byte_swap_16 (ieee80211_radiotap_header ['it_len']);
						ieee80211_radiotap_header ['it_present'] = byte_swap_32 (ieee80211_radiotap_header ['it_present']);
					}
					if (ieee80211_radiotap_header ['it_version'] != 0) {
						var packet_error = 'Invalid radiotap header';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var packet = packet.__getslice__ (ieee80211_radiotap_header ['it_len'], null, 1);
					header ['caplen'] -= ieee80211_radiotap_header ['it_len'];
					header ['len'] -= ieee80211_radiotap_header ['it_len'];
				}
				else if (pcapng_file_header ['linktype'] == DLT_IEEE802_11_PPI_HDR) {
					if (header ['caplen'] < SIZE_OF_ppi_packet_header_t) {
						var packet_error = 'Could not read ppi header';
						var __except0__ = ValueError (packet_error);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var ppi_packet_header = dict ({'pph_len': GetUint16 (packet.__getslice__ (2, 4, 1))});
					if (BIG_ENDIAN_HOST) {
						ppi_packet_header ['pph_len'] = byte_swap_16 (ppi_packet_header ['pph_len']);
					}
					var packet = packet.__getslice__ (ppi_packet_header ['pph_len'], null, 1);
					header ['caplen'] -= ppi_packet_header ['pph_len'];
					header ['len'] -= ppi_packet_header ['pph_len'];
				}
				packet_count++;
			}
			catch (__except0__) {
				var packet_error = 'Could not read pcapng packet data';
				var __except1__ = ValueError (packet_error);
				__except1__.__cause__ = null;
				throw __except1__;
			}
			try {
				try {
					if (!(QUIET)) {
						STATUS.step_packet ();
						STATUS.set_filepos (cap_file.tell ());
					}
					process_packet (packet, header);
				}
				catch (__except0__) {
					if (isinstance (__except0__, ValueError)) {
						var e = __except0__;
						LOGGER.log (str (e), WARNING);
						continue;
					}
					else {
						throw __except0__;
					}
				}
			}
			catch (__except0__) {
			}
		}
		catch (__except0__) {
			if (isinstance (__except0__, IndexError)) {
				continue;
			}
			else if (isinstance (__except0__, ValueError)) {
				var e = __except0__;
				LOGGER.log (str (e), WARNING);
				continue;
			}
			else {
				throw __except0__;
			}
		}
	}
	if (header_count == 0 || packet_count == 0) {
		if (header_error) {
			var __except0__ = ValueError (header_error);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else if (packet_error) {
			var __except0__ = ValueError (packet_error);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else {
			var __except0__ = ValueError ('Something went wrong');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	}
};
export var __xbuild__ = function (Builder, DB, essid_list) {
	Builder.__build__ (DB, essid_list);
};
export var Builder =  __class__ ('Builder', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, _export, export_unauthenticated, filters, group_by, do_not_clean, ignore_ie) {
		if (typeof export_unauthenticated == 'undefined' || (export_unauthenticated != null && export_unauthenticated.hasOwnProperty ("__kwargtrans__"))) {;
			var export_unauthenticated = false;
		};
		if (typeof filters == 'undefined' || (filters != null && filters.hasOwnProperty ("__kwargtrans__"))) {;
			var filters = null;
		};
		if (typeof group_by == 'undefined' || (group_by != null && group_by.hasOwnProperty ("__kwargtrans__"))) {;
			var group_by = null;
		};
		if (typeof do_not_clean == 'undefined' || (do_not_clean != null && do_not_clean.hasOwnProperty ("__kwargtrans__"))) {;
			var do_not_clean = false;
		};
		if (typeof ignore_ie == 'undefined' || (ignore_ie != null && ignore_ie.hasOwnProperty ("__kwargtrans__"))) {;
			var ignore_ie = false;
		};
		self.export = _export;
		self.export_unauthenticated = export_unauthenticated;
		self.filters = filters;
		self.group_by = group_by;
		self.do_not_clean = do_not_clean;
		self.ignore_ie = ignore_ie;
		self.DB_hcwpaxs_add_list = [];
		self.DB_hccap_add_list = [];
		self.DB_hccap_groupby_list = [];
		self.DB_hccapx_add_list = [];
		self.DB_hccapx_groupby_list = [];
		self.DB_hcpmkid_add_list = [];
		self.DB_hceapmd5_add_list = [];
		self.DB_hceapleap_add_list = [];
	});},
	get DB_hcwpaxs_add () {return __get__ (this, function (self) {
		self.DB_hcwpaxs_add_list.append (kwords);
	});},
	get DB_hccap_add () {return __get__ (this, function (self) {
		self.DB_hccap_add_list.append (kwords);
	});},
	get DB_hccap_groupby () {return __get__ (this, function (self) {
		if (self.DB_hccap_groupby_list) {
			return ;
		}
		self.DB_hccap_groupby_list.append (kwords);
	});},
	get DB_hccapx_add () {return __get__ (this, function (self) {
		self.DB_hccapx_add_list.append (kwords);
	});},
	get DB_hccapx_groupby () {return __get__ (this, function (self) {
		if (self.DB_hccapx_groupby_list) {
			return ;
		}
		self.DB_hccapx_groupby_list.append (kwords);
	});},
	get DB_hcpmkid_add () {return __get__ (this, function (self) {
		self.DB_hcpmkid_add_list.append (kwords);
	});},
	get DB_hceapmd5_add () {return __get__ (this, function (self) {
		self.DB_hceapmd5_add_list.append (kwords);
	});},
	get DB_hceapleap_add () {return __get__ (this, function (self) {
		self.DB_hceapleap_add_list.append (kwords);
	});},
	get __build__ () {return __get__ (this, function (self, DB, essid_list) {
		for (var essid of essid_list.py_values ()) {
			var bssid = hex (essid ['bssid']);
			var essidf = essid ['essid'].decode (__kwargtrans__ ({encoding: 'utf-8', errors: 'ignore'})).rstrip ('\x00');
			var bssidf = ':'.join ((function () {
				var __accu0__ = [];
				for (var i = 0; i < 12; i += 2) {
					__accu0__.append (bssid.__getslice__ (i, i + 2, 1));
				}
				return py_iter (__accu0__);
			}) ());
			if (!(QUIET)) {
				xprint ('\n|*| BSSID={} ESSID={} (Vendor MAC)'.format (bssidf, essidf));
			}
			if (self.filters [0] == 'essid' && self.filters [1] != essidf || self.filters [0] == 'bssid' && self.filters [1] != bssid) {
				continue;
			}
			if (!(QUIET)) {
				var FRAMES_EAPOL_M1 = DB.statistics [essid ['bssid']].py_get (EXC_PKT_NUM_1, 0);
				var FRAMES_EAPOL_M2 = DB.statistics [essid ['bssid']].py_get (EXC_PKT_NUM_2, 0);
				var FRAMES_EAPOL_M3 = DB.statistics [essid ['bssid']].py_get (EXC_PKT_NUM_3, 0);
				var FRAMES_EAPOL_M4 = DB.statistics [essid ['bssid']].py_get (EXC_PKT_NUM_4, 0);
				var FRAMES_BEACON = DB.statistics [essid ['bssid']].py_get (ESSID_SOURCE_BEACON, 0);
				var FRAMES_ASSOC = DB.statistics [essid ['bssid']].py_get (ESSID_SOURCE_ASSOC, 0);
				var FRAMES_REASSOC = DB.statistics [essid ['bssid']].py_get (ESSID_SOURCE_REASSOC, 0);
				var FRAMES_PROBE = DB.statistics [essid ['bssid']].py_get (ESSID_SOURCE_PROBE, 0);
				xprint ('| | EAPOL-M1: {}, EAPOL-M2: {}, EAPOL-M3: {}, EAPOL-M4: {}'.format (FRAMES_EAPOL_M1, FRAMES_EAPOL_M2, FRAMES_EAPOL_M3, FRAMES_EAPOL_M4));
				xprint ('| | BEACON: {}, ASSOC: {}, REASSOC: {}, PROBE: {}'.format (FRAMES_BEACON, FRAMES_ASSOC, FRAMES_REASSOC, FRAMES_PROBE));
			}
			if (!__in__ (self.export, ['hceapmd5', 'hceapleap'])) {
				if (!(QUIET)) {
					if (FRAMES_EAPOL_M1 < 2) {
						xprint ('| ! WARNING! Not enough EAPOL-M1 frames. This makes it impossible to calculate nonce-error-correction values.');
					}
					if (FRAMES_ASSOC + FRAMES_REASSOC == 0) {
						xprint ('| ! WARNING! Missing important frames (ASSOC, REASSOC). This makes it hard to recover the PSK.');
					}
					if (FRAMES_PROBE == 0) {
						xprint ('| ! WARNING! Missing undirected probe frames (PROBE). This makes it hard to recover the PSK.');
					}
				}
				var excpkts_AP_ = DB.excpkts.py_get (essid ['bssid']);
				if (excpkts_AP_ && self.export != 'hcpmkid') {
					for (var excpkts_AP_STA_ of excpkts_AP_.py_values ()) {
						var excpkts_AP_STA_ap = excpkts_AP_STA_.py_get ('ap');
						if (!(excpkts_AP_STA_ap)) {
							continue;
						}
						for (var excpkt_ap of excpkts_AP_STA_ap) {
							if (self.export == 'hcwpax' && !(self.do_not_clean)) {
								var pmkid = DB.pmkids.py_get (hash (excpkt_ap ['mac_ap'] + excpkt_ap ['mac_sta']));
								if (pmkid) {
									if (self.ignore_ie || __in__ (pmkid ['akm'], [AK_PSK, AK_PSKSHA256, AK_SAFE])) {
										break;
									}
								}
							}
							var excpkts_AP_STA_sta = excpkts_AP_STA_.py_get ('sta');
							if (!(excpkts_AP_STA_sta)) {
								continue;
							}
							for (var excpkt_sta of excpkts_AP_STA_sta) {
								if (excpkt_ap ['replay_counter'] != excpkt_sta ['replay_counter']) {
									continue;
								}
								if (excpkt_ap ['excpkt_num'] < excpkt_sta ['excpkt_num']) {
									if (excpkt_ap ['tv_abs'] > excpkt_sta ['tv_abs']) {
										continue;
									}
									if (excpkt_ap ['tv_abs'] + (EAPOL_TTL * 1000) * 1000 < excpkt_sta ['tv_abs']) {
										continue;
									}
								}
								else {
									if (excpkt_sta ['tv_abs'] > excpkt_ap ['tv_abs']) {
										continue;
									}
									if (excpkt_sta ['tv_abs'] + (EAPOL_TTL * 1000) * 1000 < excpkt_ap ['tv_abs']) {
										continue;
									}
								}
								var message_pair = 255;
								if (excpkt_ap ['excpkt_num'] == EXC_PKT_NUM_1 && excpkt_sta ['excpkt_num'] == EXC_PKT_NUM_2) {
									if (excpkt_sta ['eapol_len'] > 0) {
										var message_pair = MESSAGE_PAIR_M12E2;
									}
									else {
										continue;
									}
								}
								else if (excpkt_ap ['excpkt_num'] == EXC_PKT_NUM_1 && excpkt_sta ['excpkt_num'] == EXC_PKT_NUM_4) {
									if (excpkt_sta ['eapol_len'] > 0) {
										var message_pair = MESSAGE_PAIR_M14E4;
									}
									else {
										continue;
									}
								}
								else if (excpkt_ap ['excpkt_num'] == EXC_PKT_NUM_3 && excpkt_sta ['excpkt_num'] == EXC_PKT_NUM_2) {
									if (excpkt_sta ['eapol_len'] > 0) {
										var message_pair = MESSAGE_PAIR_M32E2;
									}
									else if (excpkt_ap ['eapol_len'] > 0) {
										var message_pair = MESSAGE_PAIR_M32E3;
									}
									else {
										continue;
									}
								}
								else if (excpkt_ap ['excpkt_num'] == EXC_PKT_NUM_3 && excpkt_sta ['excpkt_num'] == EXC_PKT_NUM_4) {
									if (excpkt_ap ['eapol_len'] > 0) {
										var message_pair = MESSAGE_PAIR_M34E3;
									}
									else if (excpkt_sta ['eapol_len'] > 0) {
										var message_pair = MESSAGE_PAIR_M34E4;
									}
									else {
										continue;
									}
								}
								else {
									xprint ('| ! BUG! AP:{} STA:{}'.format (excpkt_ap ['excpkt_num'], excpkt_sta ['excpkt_num']));
								}
								var skip = 0;
								var auth = 1;
								var ap_less = 0;
								if (message_pair == MESSAGE_PAIR_M32E3 || message_pair == MESSAGE_PAIR_M34E3) {
									var skip = 1;
								}
								if (message_pair == MESSAGE_PAIR_M12E2) {
									var auth = 0;
									if (DB.pcapng_info.py_get ('hcxdumptool')) {
										for (var pcapng_info of DB.pcapng_info ['hcxdumptool']) {
											var check_1 = false;
											var check_2 = false;
											for (var info of pcapng_info) {
												if (info ['code'] == HCXDUMPTOOL_OPTIONCODE_RC) {
													if (excpkt_ap ['replay_counter'] == info ['value']) {
														var check_1 = true;
													}
												}
												else if (info ['code'] == HCXDUMPTOOL_OPTIONCODE_ANONCE) {
													if (excpkt_ap ['nonce'] == info ['value']) {
														var check_2 = true;
													}
												}
											}
											if (check_1 && check_2) {
												var ap_less = 1;
												message_pair |= MESSAGE_PAIR_APLESS;
												break;
											}
										}
									}
								}
								for (var excpkt_ap_k of excpkts_AP_STA_ap) {
									if (excpkt_ap ['nonce'].__getslice__ (0, 28, 1) == excpkt_ap_k ['nonce'].__getslice__ (0, 28, 1) && excpkt_ap ['nonce'].__getslice__ (28, null, 1) != excpkt_ap_k ['nonce'].__getslice__ (28, null, 1)) {
										message_pair |= MESSAGE_PAIR_NC;
										if (excpkt_ap ['nonce'] [31] != excpkt_ap_k ['nonce'] [31]) {
											message_pair |= MESSAGE_PAIR_LE;
										}
										else if (excpkt_ap ['nonce'] [28] != excpkt_ap_k ['nonce'] [28]) {
											message_pair |= MESSAGE_PAIR_BE;
										}
									}
								}
								for (var excpkt_sta_k of excpkts_AP_STA_sta) {
									if (excpkt_sta ['nonce'].__getslice__ (0, 28, 1) == excpkt_sta_k ['nonce'].__getslice__ (0, 28, 1) && excpkt_sta ['nonce'].__getslice__ (28, null, 1) != excpkt_sta_k ['nonce'].__getslice__ (28, null, 1)) {
										message_pair |= MESSAGE_PAIR_NC;
										if (excpkt_sta ['nonce'] [31] != excpkt_sta_k ['nonce'] [31]) {
											message_pair |= MESSAGE_PAIR_LE;
										}
										else if (excpkt_sta ['nonce'] [28] != excpkt_sta_k ['nonce'] [28]) {
											message_pair |= MESSAGE_PAIR_BE;
										}
									}
								}
								var mac_sta = hex (excpkt_sta ['mac_sta']);
								if (skip == 0) {
									if (auth == 1) {
										if (!(QUIET)) {
											xprint ('| > STA={}, Message Pair={}, Replay Counter={}, Time Gap={}, Authenticated=Y'.format (':'.join ((function () {
												var __accu0__ = [];
												for (var i = 0; i < 12; i += 2) {
													__accu0__.append (mac_sta.__getslice__ (i, i + 2, 1));
												}
												return py_iter (__accu0__);
											}) ()), message_pair, excpkt_sta ['replay_counter'], abs (excpkt_ap ['tv_abs'] - excpkt_sta ['tv_abs'])));
										}
									}
									else {
										if (!(QUIET)) {
											xprint ('| > STA={}, Message Pair={}, Replay Counter={}, Time Gap={}, Authenticated=N{}{}'.format (':'.join ((function () {
												var __accu0__ = [];
												for (var i = 0; i < 12; i += 2) {
													__accu0__.append (mac_sta.__getslice__ (i, i + 2, 1));
												}
												return py_iter (__accu0__);
											}) ()), message_pair, excpkt_sta ['replay_counter'], abs (excpkt_ap ['tv_abs'] - excpkt_sta ['tv_abs']), (ap_less ? ' (AP-LESS)' : ''), (self.export_unauthenticated ? '' : ' [Skipped]')));
										}
										if (!(self.export_unauthenticated)) {
											continue;
										}
									}
								}
								else {
									if (!(QUIET)) {
										xprint ('| > STA={}, Message Pair={} [Skipped]'.format (':'.join ((function () {
											var __accu0__ = [];
											for (var i = 0; i < 12; i += 2) {
												__accu0__.append (mac_sta.__getslice__ (i, i + 2, 1));
											}
											return py_iter (__accu0__);
										}) ()), message_pair));
									}
									continue;
								}
								var hccapx_to_pack = dict ({});
								hccapx_to_pack ['signature'] = HCCAPX_SIGNATURE;
								hccapx_to_pack ['version'] = HCCAPX_VERSION;
								hccapx_to_pack ['message_pair'] = message_pair;
								hccapx_to_pack ['essid_len'] = essid ['essid_len'];
								hccapx_to_pack ['essid'] = essid ['essid'];
								hccapx_to_pack ['mac_ap'] = excpkt_ap ['mac_ap'];
								hccapx_to_pack ['nonce_ap'] = excpkt_ap ['nonce'];
								hccapx_to_pack ['mac_sta'] = excpkt_sta ['mac_sta'];
								hccapx_to_pack ['nonce_sta'] = excpkt_sta ['nonce'];
								if (excpkt_sta ['eapol_len'] > 0) {
									hccapx_to_pack ['keyver'] = excpkt_sta ['keyver'];
									hccapx_to_pack ['keymic'] = excpkt_sta ['keymic'];
									hccapx_to_pack ['eapol_len'] = excpkt_sta ['eapol_len'];
									hccapx_to_pack ['eapol'] = excpkt_sta ['eapol'];
								}
								else {
									hccapx_to_pack ['keyver'] = excpkt_ap ['keyver'];
									hccapx_to_pack ['keymic'] = excpkt_ap ['keymic'];
									hccapx_to_pack ['eapol_len'] = excpkt_ap ['eapol_len'];
									hccapx_to_pack ['eapol'] = excpkt_ap ['eapol'];
								}
								if (BIG_ENDIAN_HOST) {
									hccapx_to_pack ['signature'] = byte_swap_32 (hccapx_to_pack ['signature']);
									hccapx_to_pack ['version'] = byte_swap_32 (hccapx_to_pack ['version']);
									hccapx_to_pack ['eapol_len'] = byte_swap_16 (hccapx_to_pack ['eapol_len']);
								}
								if (self.export == 'hcwpax') {
									self.DB_hcwpaxs_add (__kwargtrans__ ({signature: HCWPAX_SIGNATURE, ftype: '02', pmkid_or_mic: hccapx_to_pack ['keymic'], mac_ap: hccapx_to_pack ['mac_ap'], mac_sta: hccapx_to_pack ['mac_sta'], essid: hccapx_to_pack ['essid'].__getslice__ (0, hccapx_to_pack ['essid_len'], 1), anonce: hccapx_to_pack ['nonce_ap'], eapol: hccapx_to_pack ['eapol'].__getslice__ (0, hccapx_to_pack ['eapol_len'], 1), message_pair: hccapx_to_pack ['message_pair']}));
								}
								else if (self.export == 'hccapx') {
									if (len (hccapx_to_pack ['keymic']) != 16) {
										continue;
									}
									var hccapx = (((((((((((PutUint32 (hccapx_to_pack ['signature']) + PutUint32 (hccapx_to_pack ['version'])) + [hccapx_to_pack ['message_pair']]) + [hccapx_to_pack ['essid_len']]) + hccapx_to_pack ['essid']) + [hccapx_to_pack ['keyver']]) + hccapx_to_pack ['keymic']) + hccapx_to_pack ['mac_ap']) + hccapx_to_pack ['nonce_ap']) + hccapx_to_pack ['mac_sta']) + hccapx_to_pack ['nonce_sta']) + PutUint16 (hccapx_to_pack ['eapol_len'])) + hccapx_to_pack ['eapol'];
									self.DB_hccapx_add (__kwargtrans__ ({bssid: bssidf.py_replace (':', '-').upper (), essid: essidf, raw_data: hccapx}));
								}
								else if (self.export == 'hccap') {
									if (len (hccapx_to_pack ['keymic']) != 16) {
										continue;
									}
									
																		const __hccap_essid__ = new Uint8Array(len(hccapx_to_pack['essid']) + 4 )
																		__hccap_essid__.set(hccapx_to_pack['essid'])
																		hccap_essid = __hccap_essid__
																		
									var hccap = (((((((hccap_essid + hccapx_to_pack ['mac_ap']) + hccapx_to_pack ['mac_sta']) + hccapx_to_pack ['nonce_sta']) + hccapx_to_pack ['nonce_ap']) + hccapx_to_pack ['eapol']) + PutUint32 (hccapx_to_pack ['eapol_len'])) + PutUint32 (hccapx_to_pack ['keyver'])) + hccapx_to_pack ['keymic'];
									self.DB_hccap_add (__kwargtrans__ ({bssid: bssidf.py_replace (':', '-').upper (), essid: essidf, raw_data: hccap}));
								}
							}
						}
					}
				}
				if (self.export == 'hcwpax') {
					for (var pmkid of DB.pmkids.py_values ()) {
						if (pmkid ['mac_ap'] == bssid && (self.ignore_ie || __in__ (pmkid ['akm'], [AK_PSK, AK_PSKSHA256, AK_SAFE]))) {
							self.DB_hcwpaxs_add (__kwargtrans__ ({signature: HCWPAX_SIGNATURE, ftype: '01', pmkid_or_mic: pmkid ['pmkid'], mac_ap: pmkid ['mac_ap'], mac_sta: pmkid ['mac_sta'], essid: essid ['essid'].__getslice__ (0, essid ['essid_len'], 1)}));
							var mac_sta = pmkid ['mac_sta'];
							if (!(QUIET)) {
								xprint ('| > STA={} [PMKID {}]'.format (':'.join ((function () {
									var __accu0__ = [];
									for (var i = 0; i < 12; i += 2) {
										__accu0__.append (mac_sta.__getslice__ (i, i + 2, 1));
									}
									return py_iter (__accu0__);
								}) ()), pmkid ['pmkid']));
							}
						}
					}
				}
				else if (self.export == 'hcpmkid') {
					for (var pmkid of DB.pmkids.py_values ()) {
						if (pmkid ['mac_ap'] == bssid && (self.ignore_ie || __in__ (pmkid ['akm'], [AK_PSK, AK_PSKSHA256, AK_SAFE]))) {
							self.DB_hcpmkid_add (__kwargtrans__ ({pmkid: pmkid ['pmkid'], mac_ap: pmkid ['mac_ap'], mac_sta: pmkid ['mac_sta'], essid: essid ['essid'].__getslice__ (0, essid ['essid_len'], 1)}));
							var mac_sta = pmkid ['mac_sta'];
							if (!(QUIET)) {
								xprint ('| > STA={} [PMKID {}]'.format (':'.join ((function () {
									var __accu0__ = [];
									for (var i = 0; i < 12; i += 2) {
										__accu0__.append (mac_sta.__getslice__ (i, i + 2, 1));
									}
									return py_iter (__accu0__);
								}) ()), pmkid ['pmkid']));
							}
						}
					}
				}
			}
			else if (self.export == 'hceapmd5') {
				var eapmd5s_AP_ = DB.eapmd5s.py_get (essid ['bssid']);
				if (eapmd5s_AP_) {
					for (var eapmd5s_AP_STA_ of eapmd5s_AP_.py_values ()) {
						if (!(QUIET)) {
							xprint ('| > STA={}, ID={}'.format ((function () {
								var __accu0__ = [];
								for (var i = 0; i < 12; i += 2) {
									__accu0__.append (':'.join (hex (eapmd5s_AP_STA_ ['mac_sta'])).__getslice__ (i, i + 2, 1));
								}
								return py_iter (__accu0__);
							}) (), eapmd5s_AP_STA_ ['id']));
						}
						self.DB_hceapmd5_add (__kwargtrans__ ({auth_id: eapmd5s_AP_STA_ ['id'], auth_hash: eapmd5s_AP_STA_ ['hash'], auth_salt: eapmd5s_AP_STA_ ['salt']}));
					}
				}
			}
			else if (self.export == 'hceapleap') {
				var eapleaps_AP_ = DB.eapleaps.py_get (essid ['bssid']);
				if (eapleaps_AP_) {
					for (var eapleaps_AP_STA_ of eapleaps_AP_.py_values ()) {
						if (!(QUIET)) {
							xprint ('| > STA={}, ID={}, NAME={}'.format ((function () {
								var __accu0__ = [];
								for (var i = 0; i < 12; i += 2) {
									__accu0__.append (':'.join (hex (eapleaps_AP_STA_ ['mac_sta'])).__getslice__ (i, i + 2, 1));
								}
								return py_iter (__accu0__);
							}) (), eapleaps_AP_STA_ ['id'], eapleaps_AP_STA_ ['name']));
						}
						self.DB_hceapleap_add (__kwargtrans__ ({auth_resp1: eapleaps_AP_STA_ ['resp1'], auth_resp2: eapleaps_AP_STA_ ['resp2'], auth_name: eapleaps_AP_STA_ ['name']}));
					}
				}
			}
		}
		if (self.export == 'hccapx') {
			self.DB_hccapx_groupby (__kwargtrans__ ({group_by: self.group_by}));
		}
		else if (self.export == 'hccap') {
			self.DB_hccap_groupby (__kwargtrans__ ({group_by: self.group_by}));
		}
	});},
	get _pre_build () {return __get__ (this, function (self) {
		// pass;
	});},
	get _build () {return __get__ (this, function (self) {
		var task_list = [];
		for (var jq of range (0, len (DB.essids), MAX_WORK_PER_PROCESS)) {
			var task = Process (__kwargtrans__ ({target: __xbuild__, args: [self, DB, dict (list (DB.essids.py_items ()).__getslice__ (jq, jq + MAX_WORK_PER_PROCESS, 1))]}));
			task_list.append (task);
		}
		for (var task of task_list) {
			task.start ();
		}
		for (var task of task_list) {
			task.join ();
		}
		for (var DB_hcwpaxs_add of self.DB_hcwpaxs_add_list) {
			DB.hcwpaxs_add (__kwargtrans__ (DB_hcwpaxs_add));
		}
		for (var DB_hccap_add of self.DB_hccap_add_list) {
			DB.hccap_add (__kwargtrans__ (DB_hccap_add));
		}
		if (self.DB_hccap_groupby_list) {
			DB.hccap_groupby (__kwargtrans__ (self.DB_hccap_groupby_list [0]));
		}
		for (var DB_hccapx_add of self.DB_hccapx_add_list) {
			DB.hccapx_add (__kwargtrans__ (DB_hccapx_add));
		}
		if (self.DB_hccapx_groupby_list) {
			DB.hccapx_groupby (__kwargtrans__ (self.DB_hccapx_groupby_list [0]));
		}
		for (var DB_hcpmkid_add of self.DB_hcpmkid_add_list) {
			DB.hcpmkid_add (__kwargtrans__ (DB_hcpmkid_add));
		}
		for (var DB_hceapmd5_add of self.DB_hceapmd5_add_list) {
			DB.hceapmd5_add (__kwargtrans__ (DB_hceapmd5_add));
		}
		for (var DB_hceapleap_add of self.DB_hceapleap_add_list) {
			DB.hceapleap_add (__kwargtrans__ (DB_hceapleap_add));
		}
	});},
	get _post_build () {return __get__ (this, function (self) {
		if (self.export == 'hceapmd5') {
			for (var [key, value] of DB.eapmd5s.py_items ()) {
				if (!(DB.essids.py_get (key))) {
					var bssid = hex (key);
					var bssidf = ':'.join ((function () {
						var __accu0__ = [];
						for (var i = 0; i < 12; i += 2) {
							__accu0__.append (bssid.__getslice__ (i, i + 2, 1));
						}
						return py_iter (__accu0__);
					}) ());
					xprint ('\n|*| BSSID={} (Vendor MAC) (Undetected)'.format (bssidf), __kwargtrans__ ({end: ''}));
					if (self.filters [0] == 'essid' || self.filters [0] == 'bssid' && self.filters [1] != bssid) {
						xprint (' [Skipped]');
						continue;
					}
					xprint ();
					for (var v of value.py_values ()) {
						xprint ('| > STA={}, ID={}'.format ((function () {
							var __accu0__ = [];
							for (var i = 0; i < 12; i += 2) {
								__accu0__.append (':'.join (hex (v ['mac_sta'])).__getslice__ (i, i + 2, 1));
							}
							return py_iter (__accu0__);
						}) (), v ['id']));
						DB.hceapmd5_add (__kwargtrans__ ({auth_id: v ['id'], auth_hash: v ['hash'], auth_salt: v ['salt']}));
					}
				}
			}
		}
		if (self.export == 'hceapleap') {
			for (var [key, value] of DB.eapleaps.py_items ()) {
				if (!(DB.essids.py_get (key))) {
					var bssid = hex (key);
					var bssidf = ':'.join ((function () {
						var __accu0__ = [];
						for (var i = 0; i < 12; i += 2) {
							__accu0__.append (bssid.__getslice__ (i, i + 2, 1));
						}
						return py_iter (__accu0__);
					}) ());
					xprint ('\n|*| BSSID={} (VENDOR_MAC) (Undetected)'.format (bssidf), __kwargtrans__ ({end: ''}));
					if (self.filters [0] == 'essid' || self.filters [0] == 'bssid' && self.filters [1] != bssid) {
						xprint (' [Skipped]');
						continue;
					}
					xprint ();
					for (var v of value.py_values ()) {
						xprint ('| > STA={}, ID={}, NAME={}'.format ((function () {
							var __accu0__ = [];
							for (var i = 0; i < 12; i += 2) {
								__accu0__.append (':'.join (hex (v ['mac_sta'])).__getslice__ (i, i + 2, 1));
							}
							return py_iter (__accu0__);
						}) (), v ['id'], v ['name']));
						DB.hceapleap_add (__kwargtrans__ ({auth_resp1: v ['resp1'], auth_resp2: v ['resp2'], auth_name: v ['name']}));
					}
				}
			}
		}
	});},
	get build () {return __get__ (this, function (self) {
		self._pre_build ();
		self._build ();
		self._post_build ();
	});}
});
export var main = function (args, cap_file, filesize) {
	if (args.overwrite_essid) {
		CUSTOM_ESSID = tuple ([args.overwrite_essid, 'utf-8']);
	}
	if (!(QUIET)) {
		STATUS.set_filesize (filesize);
	}
	try {
		if (args.input.lower ().endswith ('.pcapng') || args.input.lower ().endswith ('.pcapng.gz')) {
			for (var [pcapng_file_header, bitness, if_tsresol, pcapng] of read_pcapng_file_header (cap_file)) {
				read_pcapng_packets (cap_file, pcapng, pcapng_file_header, bitness, if_tsresol, args.ignore_ts);
			}
		}
		else if (args.input.lower ().endswith ('.cap') || args.input.lower ().endswith ('.cap.gz') || args.input.lower ().endswith ('.pcap') || args.input.lower ().endswith ('.pcap.gz')) {
			var __left0__ = read_pcap_file_header (cap_file);
			var pcap_file_header = __left0__ [0];
			var bitness = __left0__ [1];
			read_pcap_packets (cap_file, pcap_file_header, bitness, args.ignore_ts);
		}
		else {
			var __except0__ = ValueError ('Unsupported capture file');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		try {
			if (!(QUIET)) {
				xprint (' ' * 77, __kwargtrans__ ({end: '\r'}));
				if (len (DB.essids) == 0 && len (DB.excpkts) == 0 && len (DB.eapmd5s) == 0 && len (DB.eapleaps) == 0) {
					xprint ('[!] No Networks found\n');
				}
				xprint ('[i] Networks detected: {}'.format (len (DB.essids)));
				for (var [message, count] of LOGGER.info.py_items ()) {
					xprint ('[i] {}: {}'.format (message, count));
				}
				for (var [message, count] of LOGGER.warning.py_items ()) {
					xprint ('[!] {}: {}'.format (message, count));
				}
				for (var [message, count] of LOGGER.error.py_items ()) {
					xprint ('[!] {}: {}'.format (message, count));
				}
				for (var [message, count] of LOGGER.critical.py_items ()) {
					xprint ('[!] {}: {}'.format (message, count));
				}
				for (var [message, count] of LOGGER.debug.py_items ()) {
					xprint ('[@] {}: {}'.format (message, count));
				}
			}
			Builder (__kwargtrans__ ({export: args.export, export_unauthenticated: args.all, filters: args.filter_by, group_by: args.group_by, do_not_clean: args.do_not_clean, ignore_ie: args.ignore_ie})).build ();
			if (args.wordlist && len (DB.passwords)) {
				xprint ('\nMiscellaneous:');
				DB.passwords = list (set (DB.passwords));
				outputs.wordlist_file = '\n'.join (DB.passwords) + '\n';
				xprint ('Extracted {} AP-LESS possible passwords to {}\n'.format (len (DB.passwords), args.wordlist), __kwargtrans__ ({end: ''}));
			}
			if (args.export == 'hccap' && len (DB.hccaps)) {
				var written = 0;
				xprint ('\nOutput hccap files:');
				for (var hccap of DB.hccaps) {
					if (args.output) {
						var hccap_filename = re.sub ('\\.hccap(x?)$', '', args.output, __kwargtrans__ ({flags: re.IGNORECASE})) + get_valid_filename ('{}.hccap'.format ((hccap ['key'] != 'none' ? '_' + str (hccap ['key']) : '')));
					}
					else if (hccap ['key'] == 'none') {
						var hccap_filename = re.sub ('\\.(p?)cap((ng)?)((\\.gz)?)$', '', args.input, __kwargtrans__ ({flags: re.IGNORECASE})) + '.hccap';
					}
					else {
						var hccap_filename = get_valid_filename ('{}.hccap'.format (str (hccap ['key'])));
					}
					print (hccap_filename);
					outputs.hccap_file = hccap ['raw_data'];
					written += len (hccap ['raw_data']);
				}
				if (written) {
					xprint ('\nWritten {} WPA Handshakes to {} files'.format (written, len (DB.hccaps)), __kwargtrans__ ({end: ''}));
				}
			}
			else if (args.export == 'hccapx' && len (DB.hccapxs)) {
				var written = 0;
				xprint ('\nOutput hccapx files:');
				for (var hccapx of DB.hccapxs) {
					if (args.output) {
						var hccapx_filename = re.sub ('\\.hccap(x?)$', '', args.output, __kwargtrans__ ({flags: re.IGNORECASE})) + get_valid_filename ('{}.hccapx'.format ((hccapx ['key'] != 'none' ? '_' + str (hccapx ['key']) : '')));
					}
					else if (hccapx ['key'] == 'none') {
						var hccapx_filename = re.sub ('\\.(p?)cap((ng)?)((\\.gz)?)$', '', args.input, __kwargtrans__ ({flags: re.IGNORECASE})) + '.hccapx';
					}
					else {
						var hccapx_filename = get_valid_filename ('{}.hccapx'.format (str (hccapx ['key'])));
					}
					print (hccapx_filename);
					outputs.hccapx_file = hccapx ['raw_data'];
					written += len (hccapx ['raw_data']);
				}
				if (written) {
					xprint ('\nWritten {} WPA Handshakes to {} files'.format (written, len (DB.hccapxs)), __kwargtrans__ ({end: ''}));
				}
			}
			else if (args.export == 'hcwpax' && len (DB.hcwpaxs)) {
				if (args.output) {
					var written = 0;
					xprint ('\nOutput hcwpax files:');
					var hcwpax_filename = args.output;
					print (hcwpax_filename);
					var hcwpax_file = '';
					for (var hcwpax of DB.hcwpaxs.py_values ()) {
						var hcwpax_line = '*'.join (hcwpax.py_values ());
						hcwpax_file += hcwpax_line + '\n';
						written++;
					}
					outputs.hcwpax_file = hcwpax_file;
					if (written) {
						xprint ('\nWritten {} WPA Handshakes to 1 files'.format (written), __kwargtrans__ ({end: ''}));
					}
				}
				else {
					xprint ('\nhcWPAx:');
					for (var hcwpax of DB.hcwpaxs.py_values ()) {
						var hcwpax_line = '*'.join (hcwpax.py_values ());
						print (hcwpax_line);
					}
				}
			}
			else if (args.export == 'hcpmkid' && len (DB.hcpmkids)) {
				if (args.output) {
					var written = 0;
					xprint ('\nOutput hcpmkid files:');
					var hcpmkid_filename = args.output;
					print (hcpmkid_filename);
					var hcpmkid_file = '';
					for (var hcpmkid of DB.hcpmkids.py_values ()) {
						var hcpmkid_line = ':'.join (hcpmkid.py_values ());
						hcpmkid_file += hcpmkid_line + '\n';
						written++;
					}
					outputs.hcpmkid_file = hcpmkid_file;
					if (written) {
						xprint ('\nWritten {} WPA Handshakes to 1 files'.format (written), __kwargtrans__ ({end: ''}));
					}
				}
				else {
					xprint ('\nhcPMKID:');
					for (var hcpmkid of DB.hcpmkids.py_values ()) {
						var hcpmkid_line = ':'.join (hcpmkid.py_values ());
						print (hcpmkid_line);
					}
				}
			}
			else if (args.export == 'hceapmd5' && len (DB.hceapmd5s)) {
				if (args.output) {
					var written = 0;
					xprint ('\nOutput hceapmd5 files:');
					var hceapmd5_filename = args.output;
					print (hceapmd5_filename);
					var hceapmd5_file = '';
					for (var hceapmd5 of DB.hceapmd5s.py_values ()) {
						var hceapmd5_line = ':'.join (hceapmd5.py_values ());
						hceapmd5_file += hceapmd5_line + '\n';
						written++;
					}
					outputs.hceapmd5_file = hceapmd5_file;
					if (written) {
						xprint ('\nWritten {} EAP-MD5 Authentications to 1 files'.format (written), __kwargtrans__ ({end: ''}));
					}
				}
				else {
					xprint ('\nhcEAP-MD5:');
					for (var hceapmd5 of DB.hceapmd5s.py_values ()) {
						var hceapmd5_line = ':'.join (hceapmd5.py_values ());
						print (hceapmd5_line);
					}
				}
			}
			else if (args.export == 'hceapleap' && len (DB.hceapleaps)) {
				if (args.output) {
					var written = 0;
					xprint ('\nOutput hceapleap files:');
					var hceapleap_filename = args.output;
					print (hceapleap_filename);
					var hceapleap_file = '';
					for (var hceapleap of DB.hceapleaps.py_values ()) {
						var hceapleap_line = ':'.join (hceapleap.py_values ());
						hceapleap_file += hceapleap_line + '\n';
						written++;
					}
					outputs.hceapleap_file = hceapleap_file;
					if (written) {
						xprint ('\nWritten {} EAP-LEAP Authentications to 1 files'.format (written), __kwargtrans__ ({end: ''}));
					}
				}
				else {
					xprint ('\nhcEAP-LEAP:');
					for (var hceapleap of DB.hceapleaps.py_values ()) {
						var hceapleap_line = ':'.join (hceapleap.py_values ());
						print (hceapleap_line);
					}
				}
			}
			else if (!(QUIET)) {
				xprint (((((('\nNothing exported. You may want to: ' + '\n- Try a different export format (-x/--export)') + (!(args.all) ? '\n- Use -a/--all to export unauthenticated handshakes' : '')) + (args.filter_by != [null, null] ? '\n- Clear the filter (-f/--filter-by)' : '')) + (!(args.ignore_ie) ? '\n- Use --ignore-ie to ignore ie (AKM Check) (Not Recommended)' : '')) + (!(args.ignore_ts) && LOGGER.warning.py_get ('Zero value timestamps detected') ? '\n- Use --ignore-ts to ignore timestamps check (Not Recommended)' : '')) + (!(args.overwrite_essid) ? '\n- Use --overwrite-essid to set a custom essid (useful for cloaked ESSID) (DANGEROUS)' : ''));
			}
		}
		catch (__except0__) {
		}
	}
	catch (__except0__) {
		if (isinstance (__except0__, ValueError)) {
			var error = __except0__;
			xprint (str (error));
			xprint ('This may be due to using the wrong file extension (.pcap instead of .pcapng or vice versa)');
		}
		else {
			throw __except0__;
		}
	}
};

//# sourceMappingURL=multicapconverter.map