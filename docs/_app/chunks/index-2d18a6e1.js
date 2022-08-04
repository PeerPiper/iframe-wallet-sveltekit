var ArweaveUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get concatBuffers() {
    return concatBuffers;
  },
  get b64UrlToString() {
    return b64UrlToString;
  },
  get bufferToString() {
    return bufferToString;
  },
  get stringToBuffer() {
    return stringToBuffer;
  },
  get stringToB64Url() {
    return stringToB64Url;
  },
  get b64UrlToBuffer() {
    return b64UrlToBuffer;
  },
  get bufferTob64() {
    return bufferTob64;
  },
  get bufferTob64Url() {
    return bufferTob64Url;
  },
  get b64UrlEncode() {
    return b64UrlEncode;
  },
  get b64UrlDecode() {
    return b64UrlDecode;
  },
  get getSignatureData() {
    return getSignatureData;
  },
  get setSignature() {
    return setSignature;
  },
  get Tag() {
    return Tag;
  },
  get default() {
    return utils;
  },
  get Transaction() {
    return Transaction;
  },
  get winstonToAr() {
    return winstonToAr;
  },
  get arToWinston() {
    return arToWinston;
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn) {
  var module = { exports: {} };
  return fn(module, module.exports), module.exports;
}
var dist = createCommonjsModule(function(module, exports) {
  (function(global2, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    let wasm$1;
    const heap = new Array(32).fill(void 0);
    heap.push(void 0, null, true, false);
    function getObject(idx) {
      return heap[idx];
    }
    let heap_next = heap.length;
    function dropObject(idx) {
      if (idx < 36)
        return;
      heap[idx] = heap_next;
      heap_next = idx;
    }
    function takeObject(idx) {
      const ret = getObject(idx);
      dropObject(idx);
      return ret;
    }
    let WASM_VECTOR_LEN = 0;
    let cachegetUint8Memory0 = null;
    function getUint8Memory0() {
      if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm$1.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm$1.memory.buffer);
      }
      return cachegetUint8Memory0;
    }
    let cachedTextEncoder = new TextEncoder("utf-8");
    const encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
      return cachedTextEncoder.encodeInto(arg, view);
    } : function(arg, view) {
      const buf = cachedTextEncoder.encode(arg);
      view.set(buf);
      return {
        read: arg.length,
        written: buf.length
      };
    };
    function passStringToWasm0(arg, malloc, realloc) {
      if (realloc === void 0) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr2 = malloc(buf.length);
        getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr2;
      }
      let len = arg.length;
      let ptr = malloc(len);
      const mem = getUint8Memory0();
      let offset = 0;
      for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 127)
          break;
        mem[ptr + offset] = code;
      }
      if (offset !== len) {
        if (offset !== 0) {
          arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        offset += ret.written;
      }
      WASM_VECTOR_LEN = offset;
      return ptr;
    }
    function isLikeNone(x) {
      return x === void 0 || x === null;
    }
    let cachegetInt32Memory0 = null;
    function getInt32Memory0() {
      if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm$1.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm$1.memory.buffer);
      }
      return cachegetInt32Memory0;
    }
    let cachedTextDecoder = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    });
    cachedTextDecoder.decode();
    function getStringFromWasm0(ptr, len) {
      return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }
    function addHeapObject(obj) {
      if (heap_next === heap.length)
        heap.push(heap.length + 1);
      const idx = heap_next;
      heap_next = heap[idx];
      heap[idx] = obj;
      return idx;
    }
    let cachegetFloat64Memory0 = null;
    function getFloat64Memory0() {
      if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm$1.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(wasm$1.memory.buffer);
      }
      return cachegetFloat64Memory0;
    }
    function debugString(val) {
      const type = typeof val;
      if (type == "number" || type == "boolean" || val == null) {
        return `${val}`;
      }
      if (type == "string") {
        return `"${val}"`;
      }
      if (type == "symbol") {
        const description = val.description;
        if (description == null) {
          return "Symbol";
        } else {
          return `Symbol(${description})`;
        }
      }
      if (type == "function") {
        const name = val.name;
        if (typeof name == "string" && name.length > 0) {
          return `Function(${name})`;
        } else {
          return "Function";
        }
      }
      if (Array.isArray(val)) {
        const length = val.length;
        let debug = "[";
        if (length > 0) {
          debug += debugString(val[0]);
        }
        for (let i = 1; i < length; i++) {
          debug += ", " + debugString(val[i]);
        }
        debug += "]";
        return debug;
      }
      const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
      let className;
      if (builtInMatches.length > 1) {
        className = builtInMatches[1];
      } else {
        return toString.call(val);
      }
      if (className == "Object") {
        try {
          return "Object(" + JSON.stringify(val) + ")";
        } catch (_) {
          return "Object";
        }
      }
      if (val instanceof Error) {
        return `${val.name}: ${val.message}
${val.stack}`;
      }
      return className;
    }
    function generate_mnemonic() {
      var ret = wasm$1.generate_mnemonic();
      return takeObject(ret);
    }
    function seed_to_proxcryptor(seed) {
      var ret = wasm$1.seed_to_proxcryptor(addHeapObject(seed));
      return Proxcryptor.__wrap(ret);
    }
    function mnemonic_to_proxcryptor(mnemonic_str) {
      var ptr0 = passStringToWasm0(mnemonic_str, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      var ret = wasm$1.mnemonic_to_proxcryptor(ptr0, len0);
      return Proxcryptor.__wrap(ret);
    }
    function generate_ed25519_keypair() {
      var ret = wasm$1.generate_ed25519_keypair();
      return SimpleKeypair.__wrap(ret);
    }
    function passArray8ToWasm0(arg, malloc) {
      const ptr = malloc(arg.length * 1);
      getUint8Memory0().set(arg, ptr / 1);
      WASM_VECTOR_LEN = arg.length;
      return ptr;
    }
    function getArrayU8FromWasm0(ptr, len) {
      return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
    }
    function sign(secret_key_bytes, message) {
      try {
        const retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);
        var ptr0 = passArray8ToWasm0(message, wasm$1.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm$1.sign(retptr, addHeapObject(secret_key_bytes), ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm$1.__wbindgen_free(r0, r1 * 1);
        return v1;
      } finally {
        wasm$1.__wbindgen_add_to_stack_pointer(16);
      }
    }
    function verify(public_key, message, signature) {
      var ret = wasm$1.verify(addHeapObject(public_key), addHeapObject(message), addHeapObject(signature));
      return ret !== 0;
    }
    function generate_ed25519_keypair_from_seed(secret) {
      var ret = wasm$1.generate_ed25519_keypair_from_seed(addHeapObject(secret));
      return SimpleKeypair.__wrap(ret);
    }
    function re_encrypt(target_keypair, encrypted_message, re_key) {
      var ret = wasm$1.re_encrypt(addHeapObject(target_keypair), addHeapObject(encrypted_message), addHeapObject(re_key));
      return takeObject(ret);
    }
    function handleError(f, args) {
      try {
        return f.apply(this, args);
      } catch (e) {
        wasm$1.__wbindgen_exn_store(addHeapObject(e));
      }
    }
    class Proxcryptor {
      static __wrap(ptr) {
        const obj = Object.create(Proxcryptor.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        wasm$1.__wbg_proxcryptor_free(ptr);
      }
      static new(secret) {
        var ret = wasm$1.proxcryptor_new(addHeapObject(secret));
        return Proxcryptor.__wrap(ret);
      }
      public_key() {
        var ret = wasm$1.proxcryptor_public_key(this.ptr);
        return takeObject(ret);
      }
      public_key_base58() {
        var ret = wasm$1.proxcryptor_public_key_base58(this.ptr);
        return takeObject(ret);
      }
      public_key_jwk() {
        var ret = wasm$1.proxcryptor_public_key_jwk(this.ptr);
        return takeObject(ret);
      }
      self_encrypt(data, tag) {
        var ptr0 = passArray8ToWasm0(data, wasm$1.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(tag, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = wasm$1.proxcryptor_self_encrypt(this.ptr, ptr0, len0, ptr1, len1);
        return takeObject(ret);
      }
      self_decrypt(encrypted_message) {
        var ret = wasm$1.proxcryptor_self_decrypt(this.ptr, addHeapObject(encrypted_message));
        return takeObject(ret);
      }
      generate_re_key(public_key, tag) {
        var ptr0 = passStringToWasm0(tag, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm$1.proxcryptor_generate_re_key(this.ptr, addHeapObject(public_key), ptr0, len0);
        return takeObject(ret);
      }
      re_decrypt(rem) {
        var ret = wasm$1.proxcryptor_re_decrypt(this.ptr, addHeapObject(rem));
        return takeObject(ret);
      }
      sign(msg) {
        try {
          const retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passArray8ToWasm0(msg, wasm$1.__wbindgen_malloc);
          var len0 = WASM_VECTOR_LEN;
          wasm$1.proxcryptor_sign(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v1 = getArrayU8FromWasm0(r0, r1).slice();
          wasm$1.__wbindgen_free(r0, r1 * 1);
          return v1;
        } finally {
          wasm$1.__wbindgen_add_to_stack_pointer(16);
        }
      }
    }
    class SimpleKeypair {
      static __wrap(ptr) {
        const obj = Object.create(SimpleKeypair.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        wasm$1.__wbg_simplekeypair_free(ptr);
      }
      public() {
        var ret = wasm$1.simplekeypair_public(this.ptr);
        return takeObject(ret);
      }
      secret() {
        var ret = wasm$1.simplekeypair_secret(this.ptr);
        return takeObject(ret);
      }
    }
    async function load(module2, imports) {
      if (typeof Response === "function" && module2 instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === "function") {
          try {
            return await WebAssembly.instantiateStreaming(module2, imports);
          } catch (e) {
            if (module2.headers.get("Content-Type") != "application/wasm") {
              console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
            } else {
              throw e;
            }
          }
        }
        const bytes = await module2.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
      } else {
        const instance = await WebAssembly.instantiate(module2, imports);
        if (instance instanceof WebAssembly.Instance) {
          return { instance, module: module2 };
        } else {
          return instance;
        }
      }
    }
    async function init(input) {
      const imports = {};
      imports.wbg = {};
      imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
      };
      imports.wbg.__wbg_log_2d3255d249750bce = function(arg0, arg1) {
        console.log(getStringFromWasm0(arg0, arg1));
      };
      imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        var ret = typeof obj === "string" ? obj : void 0;
        var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
      };
      imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = getObject(arg0);
        var ret = typeof val === "object" && val !== null;
        return ret;
      };
      imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
        var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
      };
      imports.wbg.__wbindgen_is_null = function(arg0) {
        var ret = getObject(arg0) === null;
        return ret;
      };
      imports.wbg.__wbindgen_is_undefined = function(arg0) {
        var ret = getObject(arg0) === void 0;
        return ret;
      };
      imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        var ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
        return ret;
      };
      imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        var ret = typeof obj === "number" ? obj : void 0;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
      };
      imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        var ret = getObject(arg0);
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_get_2d1407dba3452350 = function(arg0, arg1) {
        var ret = getObject(arg0)[takeObject(arg1)];
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_getRandomValues_98117e9a7e993920 = function() {
        return handleError(function(arg0, arg1) {
          getObject(arg0).getRandomValues(getObject(arg1));
        }, arguments);
      };
      imports.wbg.__wbg_randomFillSync_64cc7d048f228ca8 = function() {
        return handleError(function(arg0, arg1, arg2) {
          getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
        }, arguments);
      };
      imports.wbg.__wbg_process_2f24d6544ea7b200 = function(arg0) {
        var ret = getObject(arg0).process;
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_versions_6164651e75405d4a = function(arg0) {
        var ret = getObject(arg0).versions;
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_node_4b517d861cbcb3bc = function(arg0) {
        var ret = getObject(arg0).node;
        return addHeapObject(ret);
      };
      imports.wbg.__wbindgen_is_string = function(arg0) {
        var ret = typeof getObject(arg0) === "string";
        return ret;
      };
      imports.wbg.__wbg_modulerequire_3440a4bcf44437db = function() {
        return handleError(function(arg0, arg1) {
          var ret = module2.require(getStringFromWasm0(arg0, arg1));
          return addHeapObject(ret);
        }, arguments);
      };
      imports.wbg.__wbg_crypto_98fc271021c7d2ad = function(arg0) {
        var ret = getObject(arg0).crypto;
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_msCrypto_a2cdb043d2bfe57f = function(arg0) {
        var ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
      };
      imports.wbg.__wbindgen_is_function = function(arg0) {
        var ret = typeof getObject(arg0) === "function";
        return ret;
      };
      imports.wbg.__wbg_newnoargs_be86524d73f67598 = function(arg0, arg1) {
        var ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_next_c4151d46d5fa7097 = function(arg0) {
        var ret = getObject(arg0).next;
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_next_7720502039b96d00 = function() {
        return handleError(function(arg0) {
          var ret = getObject(arg0).next();
          return addHeapObject(ret);
        }, arguments);
      };
      imports.wbg.__wbg_done_b06cf0578e89ff68 = function(arg0) {
        var ret = getObject(arg0).done;
        return ret;
      };
      imports.wbg.__wbg_value_e74a542443d92451 = function(arg0) {
        var ret = getObject(arg0).value;
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_iterator_4fc4ce93e6b92958 = function() {
        var ret = Symbol.iterator;
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_get_4d0f21c2f823742e = function() {
        return handleError(function(arg0, arg1) {
          var ret = Reflect.get(getObject(arg0), getObject(arg1));
          return addHeapObject(ret);
        }, arguments);
      };
      imports.wbg.__wbg_call_888d259a5fefc347 = function() {
        return handleError(function(arg0, arg1) {
          var ret = getObject(arg0).call(getObject(arg1));
          return addHeapObject(ret);
        }, arguments);
      };
      imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        var ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_isArray_eb7ad55f2da67dde = function(arg0) {
        var ret = Array.isArray(getObject(arg0));
        return ret;
      };
      imports.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3 = function(arg0) {
        var ret = getObject(arg0) instanceof ArrayBuffer;
        return ret;
      };
      imports.wbg.__wbg_values_364ae56c608e6824 = function(arg0) {
        var ret = getObject(arg0).values();
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_new_342a24ca698edd87 = function(arg0, arg1) {
        var ret = new Error(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_isSafeInteger_0dfc6d38b7184f06 = function(arg0) {
        var ret = Number.isSafeInteger(getObject(arg0));
        return ret;
      };
      imports.wbg.__wbg_self_c6fbdfc2918d5e58 = function() {
        return handleError(function() {
          var ret = self.self;
          return addHeapObject(ret);
        }, arguments);
      };
      imports.wbg.__wbg_window_baec038b5ab35c54 = function() {
        return handleError(function() {
          var ret = window.window;
          return addHeapObject(ret);
        }, arguments);
      };
      imports.wbg.__wbg_globalThis_3f735a5746d41fbd = function() {
        return handleError(function() {
          var ret = globalThis.globalThis;
          return addHeapObject(ret);
        }, arguments);
      };
      imports.wbg.__wbg_global_1bc0b39582740e95 = function() {
        return handleError(function() {
          var ret = commonjsGlobal.global;
          return addHeapObject(ret);
        }, arguments);
      };
      imports.wbg.__wbg_buffer_397eaa4d72ee94dd = function(arg0) {
        var ret = getObject(arg0).buffer;
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_new_a7ce447f15ff496f = function(arg0) {
        var ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_set_969ad0a60e51d320 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
      };
      imports.wbg.__wbg_length_1eb8fc608a0d4cdb = function(arg0) {
        var ret = getObject(arg0).length;
        return ret;
      };
      imports.wbg.__wbg_instanceof_Uint8Array_08a1f3a179095e76 = function(arg0) {
        var ret = getObject(arg0) instanceof Uint8Array;
        return ret;
      };
      imports.wbg.__wbg_newwithlength_929232475839a482 = function(arg0) {
        var ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
      };
      imports.wbg.__wbg_subarray_8b658422a224f479 = function(arg0, arg1, arg2) {
        var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
      };
      imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        var ret = debugString(getObject(arg1));
        var ptr0 = passStringToWasm0(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
      };
      imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
      };
      imports.wbg.__wbindgen_memory = function() {
        var ret = wasm$1.memory;
        return addHeapObject(ret);
      };
      if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
        input = fetch(input);
      }
      const { instance, module: module2 } = await load(await input, imports);
      wasm$1 = instance.exports;
      init.__wbindgen_wasm_module = module2;
      return wasm$1;
    }
    var exports$1 = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate_mnemonic,
      seed_to_proxcryptor,
      mnemonic_to_proxcryptor,
      generate_ed25519_keypair,
      sign,
      verify,
      generate_ed25519_keypair_from_seed,
      re_encrypt,
      Proxcryptor,
      SimpleKeypair,
      default: init
    });
    const base64codes = [
      62,
      0,
      0,
      0,
      63,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      0,
      0,
      0,
      0,
      0,
      0,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51
    ];
    function getBase64Code(charCode) {
      return base64codes[charCode - 43];
    }
    function base64_decode(str) {
      let missingOctets = str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0;
      let n = str.length;
      let result = new Uint8Array(3 * (n / 4));
      let buffer;
      for (let i = 0, j = 0; i < n; i += 4, j += 3) {
        buffer = getBase64Code(str.charCodeAt(i)) << 18 | getBase64Code(str.charCodeAt(i + 1)) << 12 | getBase64Code(str.charCodeAt(i + 2)) << 6 | getBase64Code(str.charCodeAt(i + 3));
        result[j] = buffer >> 16;
        result[j + 1] = buffer >> 8 & 255;
        result[j + 2] = buffer & 255;
      }
      return result.subarray(0, result.length - missingOctets);
    }
    var wasm = async () => {
      await init(wasm_code);
      return exports$1;
    };
    const getWallet = async () => wasm();
    exports2.getWallet = getWallet;
    Object.defineProperty(exports2, "__esModule", { value: true });
  });
});
var MessageType;
(function(MessageType2) {
  MessageType2["Call"] = "call";
  MessageType2["Reply"] = "reply";
  MessageType2["Syn"] = "syn";
  MessageType2["SynAck"] = "synAck";
  MessageType2["Ack"] = "ack";
})(MessageType || (MessageType = {}));
var Resolution;
(function(Resolution2) {
  Resolution2["Fulfilled"] = "fulfilled";
  Resolution2["Rejected"] = "rejected";
})(Resolution || (Resolution = {}));
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2["ConnectionDestroyed"] = "ConnectionDestroyed";
  ErrorCode2["ConnectionTimeout"] = "ConnectionTimeout";
  ErrorCode2["NoIframeSrc"] = "NoIframeSrc";
})(ErrorCode || (ErrorCode = {}));
var NativeErrorName;
(function(NativeErrorName2) {
  NativeErrorName2["DataCloneError"] = "DataCloneError";
})(NativeErrorName || (NativeErrorName = {}));
var NativeEventType;
(function(NativeEventType2) {
  NativeEventType2["Message"] = "message";
})(NativeEventType || (NativeEventType = {}));
var createDestructor = (localName, log) => {
  const callbacks = [];
  let destroyed = false;
  return {
    destroy(error) {
      if (!destroyed) {
        destroyed = true;
        log(`${localName}: Destroying connection`);
        callbacks.forEach((callback) => {
          callback(error);
        });
      }
    },
    onDestroy(callback) {
      destroyed ? callback() : callbacks.push(callback);
    }
  };
};
var createLogger = (debug) => {
  return (...args) => {
    if (debug) {
      console.log("[Penpal]", ...args);
    }
  };
};
const serializeError = ({ name, message, stack }) => ({
  name,
  message,
  stack
});
const deserializeError = (obj) => {
  const deserializedError = new Error();
  Object.keys(obj).forEach((key) => deserializedError[key] = obj[key]);
  return deserializedError;
};
var connectCallReceiver = (info, serializedMethods, log) => {
  const { localName, local, remote, originForSending, originForReceiving } = info;
  let destroyed = false;
  const handleMessageEvent = (event) => {
    if (event.source !== remote || event.data.penpal !== MessageType.Call) {
      return;
    }
    if (originForReceiving !== "*" && event.origin !== originForReceiving) {
      log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
      return;
    }
    const callMessage = event.data;
    const { methodName, args, id: id2 } = callMessage;
    log(`${localName}: Received ${methodName}() call`);
    const createPromiseHandler = (resolution) => {
      return (returnValue) => {
        log(`${localName}: Sending ${methodName}() reply`);
        if (destroyed) {
          log(`${localName}: Unable to send ${methodName}() reply due to destroyed connection`);
          return;
        }
        const message = {
          penpal: MessageType.Reply,
          id: id2,
          resolution,
          returnValue
        };
        if (resolution === Resolution.Rejected && returnValue instanceof Error) {
          message.returnValue = serializeError(returnValue);
          message.returnValueIsError = true;
        }
        try {
          remote.postMessage(message, originForSending);
        } catch (err) {
          if (err.name === NativeErrorName.DataCloneError) {
            const errorReplyMessage = {
              penpal: MessageType.Reply,
              id: id2,
              resolution: Resolution.Rejected,
              returnValue: serializeError(err),
              returnValueIsError: true
            };
            remote.postMessage(errorReplyMessage, originForSending);
          }
          throw err;
        }
      };
    };
    new Promise((resolve) => resolve(serializedMethods[methodName].apply(serializedMethods, args))).then(createPromiseHandler(Resolution.Fulfilled), createPromiseHandler(Resolution.Rejected));
  };
  local.addEventListener(NativeEventType.Message, handleMessageEvent);
  return () => {
    destroyed = true;
    local.removeEventListener(NativeEventType.Message, handleMessageEvent);
  };
};
let id = 0;
var generateId = () => ++id;
const KEY_PATH_DELIMITER = ".";
const keyPathToSegments = (keyPath) => keyPath ? keyPath.split(KEY_PATH_DELIMITER) : [];
const segmentsToKeyPath = (segments) => segments.join(KEY_PATH_DELIMITER);
const createKeyPath = (key, prefix) => {
  const segments = keyPathToSegments(prefix || "");
  segments.push(key);
  return segmentsToKeyPath(segments);
};
const setAtKeyPath = (subject, keyPath, value) => {
  const segments = keyPathToSegments(keyPath);
  segments.reduce((prevSubject, key, idx) => {
    if (typeof prevSubject[key] === "undefined") {
      prevSubject[key] = {};
    }
    if (idx === segments.length - 1) {
      prevSubject[key] = value;
    }
    return prevSubject[key];
  }, subject);
  return subject;
};
const serializeMethods = (methods, prefix) => {
  const flattenedMethods = {};
  Object.keys(methods).forEach((key) => {
    const value = methods[key];
    const keyPath = createKeyPath(key, prefix);
    if (typeof value === "object") {
      Object.assign(flattenedMethods, serializeMethods(value, keyPath));
    }
    if (typeof value === "function") {
      flattenedMethods[keyPath] = value;
    }
  });
  return flattenedMethods;
};
const deserializeMethods = (flattenedMethods) => {
  const methods = {};
  for (const keyPath in flattenedMethods) {
    setAtKeyPath(methods, keyPath, flattenedMethods[keyPath]);
  }
  return methods;
};
var connectCallSender = (callSender, info, methodKeyPaths, destroyConnection, log) => {
  const { localName, local, remote, originForSending, originForReceiving } = info;
  let destroyed = false;
  log(`${localName}: Connecting call sender`);
  const createMethodProxy = (methodName) => {
    return (...args) => {
      log(`${localName}: Sending ${methodName}() call`);
      let iframeRemoved;
      try {
        if (remote.closed) {
          iframeRemoved = true;
        }
      } catch (e) {
        iframeRemoved = true;
      }
      if (iframeRemoved) {
        destroyConnection();
      }
      if (destroyed) {
        const error = new Error(`Unable to send ${methodName}() call due to destroyed connection`);
        error.code = ErrorCode.ConnectionDestroyed;
        throw error;
      }
      return new Promise((resolve, reject) => {
        const id2 = generateId();
        const handleMessageEvent = (event) => {
          if (event.source !== remote || event.data.penpal !== MessageType.Reply || event.data.id !== id2) {
            return;
          }
          if (originForReceiving !== "*" && event.origin !== originForReceiving) {
            log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
            return;
          }
          const replyMessage = event.data;
          log(`${localName}: Received ${methodName}() reply`);
          local.removeEventListener(NativeEventType.Message, handleMessageEvent);
          let returnValue = replyMessage.returnValue;
          if (replyMessage.returnValueIsError) {
            returnValue = deserializeError(returnValue);
          }
          (replyMessage.resolution === Resolution.Fulfilled ? resolve : reject)(returnValue);
        };
        local.addEventListener(NativeEventType.Message, handleMessageEvent);
        const callMessage = {
          penpal: MessageType.Call,
          id: id2,
          methodName,
          args
        };
        remote.postMessage(callMessage, originForSending);
      });
    };
  };
  const flattenedMethods = methodKeyPaths.reduce((api, name) => {
    api[name] = createMethodProxy(name);
    return api;
  }, {});
  Object.assign(callSender, deserializeMethods(flattenedMethods));
  return () => {
    destroyed = true;
  };
};
var startConnectionTimeout = (timeout, callback) => {
  let timeoutId;
  if (timeout !== void 0) {
    timeoutId = window.setTimeout(() => {
      const error = new Error(`Connection timed out after ${timeout}ms`);
      error.code = ErrorCode.ConnectionTimeout;
      callback(error);
    }, timeout);
  }
  return () => {
    clearTimeout(timeoutId);
  };
};
var handleSynAckMessageFactory = (parentOrigin, serializedMethods, destructor, log) => {
  const { destroy, onDestroy } = destructor;
  return (event) => {
    let originQualifies = parentOrigin instanceof RegExp ? parentOrigin.test(event.origin) : parentOrigin === "*" || parentOrigin === event.origin;
    if (!originQualifies) {
      log(`Child: Handshake - Received SYN-ACK from origin ${event.origin} which did not match expected origin ${parentOrigin}`);
      return;
    }
    log("Child: Handshake - Received SYN-ACK, responding with ACK");
    const originForSending = event.origin === "null" ? "*" : event.origin;
    const ackMessage = {
      penpal: MessageType.Ack,
      methodNames: Object.keys(serializedMethods)
    };
    window.parent.postMessage(ackMessage, originForSending);
    const info = {
      localName: "Child",
      local: window,
      remote: window.parent,
      originForSending,
      originForReceiving: event.origin
    };
    const destroyCallReceiver = connectCallReceiver(info, serializedMethods, log);
    onDestroy(destroyCallReceiver);
    const callSender = {};
    const destroyCallSender = connectCallSender(callSender, info, event.data.methodNames, destroy, log);
    onDestroy(destroyCallSender);
    return callSender;
  };
};
const areGlobalsAccessible = () => {
  try {
    clearTimeout();
  } catch (e) {
    return false;
  }
  return true;
};
var connectToParent = (options = {}) => {
  const { parentOrigin = "*", methods = {}, timeout, debug = false } = options;
  const log = createLogger(debug);
  const destructor = createDestructor("Child", log);
  const { destroy, onDestroy } = destructor;
  const serializedMethods = serializeMethods(methods);
  const handleSynAckMessage = handleSynAckMessageFactory(parentOrigin, serializedMethods, destructor, log);
  const sendSynMessage = () => {
    log("Child: Handshake - Sending SYN");
    const synMessage = { penpal: MessageType.Syn };
    const parentOriginForSyn = parentOrigin instanceof RegExp ? "*" : parentOrigin;
    window.parent.postMessage(synMessage, parentOriginForSyn);
  };
  const promise = new Promise((resolve, reject) => {
    const stopConnectionTimeout = startConnectionTimeout(timeout, destroy);
    const handleMessage = (event) => {
      if (!areGlobalsAccessible()) {
        return;
      }
      if (event.source !== parent || !event.data) {
        return;
      }
      if (event.data.penpal === MessageType.SynAck) {
        const callSender = handleSynAckMessage(event);
        if (callSender) {
          window.removeEventListener(NativeEventType.Message, handleMessage);
          stopConnectionTimeout();
          resolve(callSender);
        }
      }
    };
    window.addEventListener(NativeEventType.Message, handleMessage);
    sendSynMessage();
    onDestroy((error) => {
      window.removeEventListener(NativeEventType.Message, handleMessage);
      if (error) {
        reject(error);
      }
    });
  });
  return {
    promise,
    destroy() {
      destroy();
    }
  };
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends$1(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics2 = function(d, b) {
    extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics2(d, b);
  };
  return function(d, b) {
    extendStatics2(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var INVALID_BYTE = 256;
var Coder = function() {
  function Coder2(_paddingCharacter) {
    if (_paddingCharacter === void 0) {
      _paddingCharacter = "=";
    }
    this._paddingCharacter = _paddingCharacter;
  }
  Coder2.prototype.encodedLength = function(length) {
    if (!this._paddingCharacter) {
      return (length * 8 + 5) / 6 | 0;
    }
    return (length + 2) / 3 * 4 | 0;
  };
  Coder2.prototype.encode = function(data) {
    var out = "";
    var i = 0;
    for (; i < data.length - 2; i += 3) {
      var c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
      out += this._encodeByte(c >>> 3 * 6 & 63);
      out += this._encodeByte(c >>> 2 * 6 & 63);
      out += this._encodeByte(c >>> 1 * 6 & 63);
      out += this._encodeByte(c >>> 0 * 6 & 63);
    }
    var left = data.length - i;
    if (left > 0) {
      var c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
      out += this._encodeByte(c >>> 3 * 6 & 63);
      out += this._encodeByte(c >>> 2 * 6 & 63);
      if (left === 2) {
        out += this._encodeByte(c >>> 1 * 6 & 63);
      } else {
        out += this._paddingCharacter || "";
      }
      out += this._paddingCharacter || "";
    }
    return out;
  };
  Coder2.prototype.maxDecodedLength = function(length) {
    if (!this._paddingCharacter) {
      return (length * 6 + 7) / 8 | 0;
    }
    return length / 4 * 3 | 0;
  };
  Coder2.prototype.decodedLength = function(s) {
    return this.maxDecodedLength(s.length - this._getPaddingLength(s));
  };
  Coder2.prototype.decode = function(s) {
    if (s.length === 0) {
      return new Uint8Array(0);
    }
    var paddingLength = this._getPaddingLength(s);
    var length = s.length - paddingLength;
    var out = new Uint8Array(this.maxDecodedLength(length));
    var op = 0;
    var i = 0;
    var haveBad = 0;
    var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
    for (; i < length - 4; i += 4) {
      v0 = this._decodeChar(s.charCodeAt(i + 0));
      v1 = this._decodeChar(s.charCodeAt(i + 1));
      v2 = this._decodeChar(s.charCodeAt(i + 2));
      v3 = this._decodeChar(s.charCodeAt(i + 3));
      out[op++] = v0 << 2 | v1 >>> 4;
      out[op++] = v1 << 4 | v2 >>> 2;
      out[op++] = v2 << 6 | v3;
      haveBad |= v0 & INVALID_BYTE;
      haveBad |= v1 & INVALID_BYTE;
      haveBad |= v2 & INVALID_BYTE;
      haveBad |= v3 & INVALID_BYTE;
    }
    if (i < length - 1) {
      v0 = this._decodeChar(s.charCodeAt(i));
      v1 = this._decodeChar(s.charCodeAt(i + 1));
      out[op++] = v0 << 2 | v1 >>> 4;
      haveBad |= v0 & INVALID_BYTE;
      haveBad |= v1 & INVALID_BYTE;
    }
    if (i < length - 2) {
      v2 = this._decodeChar(s.charCodeAt(i + 2));
      out[op++] = v1 << 4 | v2 >>> 2;
      haveBad |= v2 & INVALID_BYTE;
    }
    if (i < length - 3) {
      v3 = this._decodeChar(s.charCodeAt(i + 3));
      out[op++] = v2 << 6 | v3;
      haveBad |= v3 & INVALID_BYTE;
    }
    if (haveBad !== 0) {
      throw new Error("Base64Coder: incorrect characters for decoding");
    }
    return out;
  };
  Coder2.prototype._encodeByte = function(b) {
    var result = b;
    result += 65;
    result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
    result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
    result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
    result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
    return String.fromCharCode(result);
  };
  Coder2.prototype._decodeChar = function(c) {
    var result = INVALID_BYTE;
    result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
    result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
    result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
    result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
    result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
    return result;
  };
  Coder2.prototype._getPaddingLength = function(s) {
    var paddingLength = 0;
    if (this._paddingCharacter) {
      for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] !== this._paddingCharacter) {
          break;
        }
        paddingLength++;
      }
      if (s.length < 4 || paddingLength > 2) {
        throw new Error("Base64Coder: incorrect padding");
      }
    }
    return paddingLength;
  };
  return Coder2;
}();
var stdCoder = new Coder();
function encode(data) {
  return stdCoder.encode(data);
}
var encode_1 = encode;
function decode(s) {
  return stdCoder.decode(s);
}
var decode_1 = decode;
var URLSafeCoder = function(_super) {
  __extends(URLSafeCoder2, _super);
  function URLSafeCoder2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  URLSafeCoder2.prototype._encodeByte = function(b) {
    var result = b;
    result += 65;
    result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
    result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
    result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
    result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
    return String.fromCharCode(result);
  };
  URLSafeCoder2.prototype._decodeChar = function(c) {
    var result = INVALID_BYTE;
    result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
    result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
    result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
    result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
    result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
    return result;
  };
  return URLSafeCoder2;
}(Coder);
new URLSafeCoder();
function deepHash(data) {
  return __awaiter(this, void 0, void 0, function() {
    var tag_1, _a, _b, tag, taggedHash, _c, _d, _e;
    return __generator(this, function(_f) {
      switch (_f.label) {
        case 0:
          if (!Array.isArray(data))
            return [3, 3];
          tag_1 = concatBuffers([
            stringToBuffer("list"),
            stringToBuffer(data.length.toString())
          ]);
          _a = deepHashChunks;
          _b = [data];
          return [4, crypto.subtle.digest("SHA-384", tag_1)];
        case 1:
          return [4, _a.apply(void 0, _b.concat([_f.sent()]))];
        case 2:
          return [2, _f.sent()];
        case 3:
          tag = concatBuffers([
            stringToBuffer("blob"),
            stringToBuffer(data.byteLength.toString())
          ]);
          _d = (_c = ArweaveUtils).concatBuffers;
          return [4, crypto.subtle.digest("SHA-384", tag)];
        case 4:
          _e = [
            _f.sent()
          ];
          return [4, crypto.subtle.digest("SHA-384", data)];
        case 5:
          taggedHash = _d.apply(_c, [_e.concat([
            _f.sent()
          ])]);
          return [4, crypto.subtle.digest("SHA-384", taggedHash)];
        case 6:
          return [2, _f.sent()];
      }
    });
  });
}
function deepHashChunks(chunks, acc) {
  return __awaiter(this, void 0, void 0, function() {
    var hashPair, _a, _b, _c, newAcc;
    return __generator(this, function(_d) {
      switch (_d.label) {
        case 0:
          if (chunks.length < 1) {
            return [2, acc];
          }
          _b = (_a = ArweaveUtils).concatBuffers;
          _c = [acc];
          return [4, deepHash(chunks[0])];
        case 1:
          hashPair = _b.apply(_a, [_c.concat([_d.sent()])]);
          return [4, crypto.subtle.digest("SHA-384", hashPair)];
        case 2:
          newAcc = _d.sent();
          return [4, deepHashChunks(chunks.slice(1), newAcc)];
        case 3:
          return [2, _d.sent()];
      }
    });
  });
}
var bignumber = createCommonjsModule(function(module) {
  (function(globalObject) {
    var BigNumber, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
    function clone(configObject) {
      var div, convertBase, parseNumeric, P = BigNumber2.prototype = { constructor: BigNumber2, toString: null, valueOf: null }, ONE = new BigNumber2(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: "\xA0",
        suffix: ""
      }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
      function BigNumber2(v, b) {
        var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
        if (!(x instanceof BigNumber2))
          return new BigNumber2(v, b);
        if (b == null) {
          if (v && v._isBigNumber === true) {
            x.s = v.s;
            if (!v.c || v.e > MAX_EXP) {
              x.c = x.e = null;
            } else if (v.e < MIN_EXP) {
              x.c = [x.e = 0];
            } else {
              x.e = v.e;
              x.c = v.c.slice();
            }
            return;
          }
          if ((isNum = typeof v == "number") && v * 0 == 0) {
            x.s = 1 / v < 0 ? (v = -v, -1) : 1;
            if (v === ~~v) {
              for (e = 0, i = v; i >= 10; i /= 10, e++)
                ;
              if (e > MAX_EXP) {
                x.c = x.e = null;
              } else {
                x.e = e;
                x.c = [v];
              }
              return;
            }
            str = String(v);
          } else {
            if (!isNumeric.test(str = String(v)))
              return parseNumeric(x, str, isNum);
            x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
          }
          if ((e = str.indexOf(".")) > -1)
            str = str.replace(".", "");
          if ((i = str.search(/e/i)) > 0) {
            if (e < 0)
              e = i;
            e += +str.slice(i + 1);
            str = str.substring(0, i);
          } else if (e < 0) {
            e = str.length;
          }
        } else {
          intCheck(b, 2, ALPHABET.length, "Base");
          if (b == 10 && alphabetHasNormalDecimalDigits) {
            x = new BigNumber2(v);
            return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
          }
          str = String(v);
          if (isNum = typeof v == "number") {
            if (v * 0 != 0)
              return parseNumeric(x, str, isNum, b);
            x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
            if (BigNumber2.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
              throw Error(tooManyDigits + v);
            }
          } else {
            x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
          }
          alphabet = ALPHABET.slice(0, b);
          e = i = 0;
          for (len = str.length; i < len; i++) {
            if (alphabet.indexOf(c = str.charAt(i)) < 0) {
              if (c == ".") {
                if (i > e) {
                  e = len;
                  continue;
                }
              } else if (!caseChanged) {
                if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                  caseChanged = true;
                  i = -1;
                  e = 0;
                  continue;
                }
              }
              return parseNumeric(x, String(v), isNum, b);
            }
          }
          isNum = false;
          str = convertBase(str, b, 10, x.s);
          if ((e = str.indexOf(".")) > -1)
            str = str.replace(".", "");
          else
            e = str.length;
        }
        for (i = 0; str.charCodeAt(i) === 48; i++)
          ;
        for (len = str.length; str.charCodeAt(--len) === 48; )
          ;
        if (str = str.slice(i, ++len)) {
          len -= i;
          if (isNum && BigNumber2.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error(tooManyDigits + x.s * v);
          }
          if ((e = e - i - 1) > MAX_EXP) {
            x.c = x.e = null;
          } else if (e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = e;
            x.c = [];
            i = (e + 1) % LOG_BASE;
            if (e < 0)
              i += LOG_BASE;
            if (i < len) {
              if (i)
                x.c.push(+str.slice(0, i));
              for (len -= LOG_BASE; i < len; ) {
                x.c.push(+str.slice(i, i += LOG_BASE));
              }
              i = LOG_BASE - (str = str.slice(i)).length;
            } else {
              i -= len;
            }
            for (; i--; str += "0")
              ;
            x.c.push(+str);
          }
        } else {
          x.c = [x.e = 0];
        }
      }
      BigNumber2.clone = clone;
      BigNumber2.ROUND_UP = 0;
      BigNumber2.ROUND_DOWN = 1;
      BigNumber2.ROUND_CEIL = 2;
      BigNumber2.ROUND_FLOOR = 3;
      BigNumber2.ROUND_HALF_UP = 4;
      BigNumber2.ROUND_HALF_DOWN = 5;
      BigNumber2.ROUND_HALF_EVEN = 6;
      BigNumber2.ROUND_HALF_CEIL = 7;
      BigNumber2.ROUND_HALF_FLOOR = 8;
      BigNumber2.EUCLID = 9;
      BigNumber2.config = BigNumber2.set = function(obj) {
        var p, v;
        if (obj != null) {
          if (typeof obj == "object") {
            if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
              v = obj[p];
              intCheck(v, 0, MAX, p);
              DECIMAL_PLACES = v;
            }
            if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
              v = obj[p];
              intCheck(v, 0, 8, p);
              ROUNDING_MODE = v;
            }
            if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
              v = obj[p];
              if (v && v.pop) {
                intCheck(v[0], -MAX, 0, p);
                intCheck(v[1], 0, MAX, p);
                TO_EXP_NEG = v[0];
                TO_EXP_POS = v[1];
              } else {
                intCheck(v, -MAX, MAX, p);
                TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
              }
            }
            if (obj.hasOwnProperty(p = "RANGE")) {
              v = obj[p];
              if (v && v.pop) {
                intCheck(v[0], -MAX, -1, p);
                intCheck(v[1], 1, MAX, p);
                MIN_EXP = v[0];
                MAX_EXP = v[1];
              } else {
                intCheck(v, -MAX, MAX, p);
                if (v) {
                  MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                } else {
                  throw Error(bignumberError + p + " cannot be zero: " + v);
                }
              }
            }
            if (obj.hasOwnProperty(p = "CRYPTO")) {
              v = obj[p];
              if (v === !!v) {
                if (v) {
                  if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                    CRYPTO = v;
                  } else {
                    CRYPTO = !v;
                    throw Error(bignumberError + "crypto unavailable");
                  }
                } else {
                  CRYPTO = v;
                }
              } else {
                throw Error(bignumberError + p + " not true or false: " + v);
              }
            }
            if (obj.hasOwnProperty(p = "MODULO_MODE")) {
              v = obj[p];
              intCheck(v, 0, 9, p);
              MODULO_MODE = v;
            }
            if (obj.hasOwnProperty(p = "POW_PRECISION")) {
              v = obj[p];
              intCheck(v, 0, MAX, p);
              POW_PRECISION = v;
            }
            if (obj.hasOwnProperty(p = "FORMAT")) {
              v = obj[p];
              if (typeof v == "object")
                FORMAT = v;
              else
                throw Error(bignumberError + p + " not an object: " + v);
            }
            if (obj.hasOwnProperty(p = "ALPHABET")) {
              v = obj[p];
              if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                ALPHABET = v;
              } else {
                throw Error(bignumberError + p + " invalid: " + v);
              }
            }
          } else {
            throw Error(bignumberError + "Object expected: " + obj);
          }
        }
        return {
          DECIMAL_PLACES,
          ROUNDING_MODE,
          EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
          RANGE: [MIN_EXP, MAX_EXP],
          CRYPTO,
          MODULO_MODE,
          POW_PRECISION,
          FORMAT,
          ALPHABET
        };
      };
      BigNumber2.isBigNumber = function(v) {
        if (!v || v._isBigNumber !== true)
          return false;
        if (!BigNumber2.DEBUG)
          return true;
        var i, n, c = v.c, e = v.e, s = v.s;
        out:
          if ({}.toString.call(c) == "[object Array]") {
            if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
              if (c[0] === 0) {
                if (e === 0 && c.length === 1)
                  return true;
                break out;
              }
              i = (e + 1) % LOG_BASE;
              if (i < 1)
                i += LOG_BASE;
              if (String(c[0]).length == i) {
                for (i = 0; i < c.length; i++) {
                  n = c[i];
                  if (n < 0 || n >= BASE || n !== mathfloor(n))
                    break out;
                }
                if (n !== 0)
                  return true;
              }
            }
          } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
            return true;
          }
        throw Error(bignumberError + "Invalid BigNumber: " + v);
      };
      BigNumber2.maximum = BigNumber2.max = function() {
        return maxOrMin(arguments, P.lt);
      };
      BigNumber2.minimum = BigNumber2.min = function() {
        return maxOrMin(arguments, P.gt);
      };
      BigNumber2.random = function() {
        var pow2_53 = 9007199254740992;
        var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
          return mathfloor(Math.random() * pow2_53);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(dp) {
          var a, b, e, k, v, i = 0, c = [], rand = new BigNumber2(ONE);
          if (dp == null)
            dp = DECIMAL_PLACES;
          else
            intCheck(dp, 0, MAX);
          k = mathceil(dp / LOG_BASE);
          if (CRYPTO) {
            if (crypto.getRandomValues) {
              a = crypto.getRandomValues(new Uint32Array(k *= 2));
              for (; i < k; ) {
                v = a[i] * 131072 + (a[i + 1] >>> 11);
                if (v >= 9e15) {
                  b = crypto.getRandomValues(new Uint32Array(2));
                  a[i] = b[0];
                  a[i + 1] = b[1];
                } else {
                  c.push(v % 1e14);
                  i += 2;
                }
              }
              i = k / 2;
            } else if (crypto.randomBytes) {
              a = crypto.randomBytes(k *= 7);
              for (; i < k; ) {
                v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                if (v >= 9e15) {
                  crypto.randomBytes(7).copy(a, i);
                } else {
                  c.push(v % 1e14);
                  i += 7;
                }
              }
              i = k / 7;
            } else {
              CRYPTO = false;
              throw Error(bignumberError + "crypto unavailable");
            }
          }
          if (!CRYPTO) {
            for (; i < k; ) {
              v = random53bitInt();
              if (v < 9e15)
                c[i++] = v % 1e14;
            }
          }
          k = c[--i];
          dp %= LOG_BASE;
          if (k && dp) {
            v = POWS_TEN[LOG_BASE - dp];
            c[i] = mathfloor(k / v) * v;
          }
          for (; c[i] === 0; c.pop(), i--)
            ;
          if (i < 0) {
            c = [e = 0];
          } else {
            for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
              ;
            for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
              ;
            if (i < LOG_BASE)
              e -= LOG_BASE - i;
          }
          rand.e = e;
          rand.c = c;
          return rand;
        };
      }();
      BigNumber2.sum = function() {
        var i = 1, args = arguments, sum = new BigNumber2(args[0]);
        for (; i < args.length; )
          sum = sum.plus(args[i++]);
        return sum;
      };
      convertBase = function() {
        var decimal = "0123456789";
        function toBaseOut(str, baseIn, baseOut, alphabet) {
          var j, arr = [0], arrL, i = 0, len = str.length;
          for (; i < len; ) {
            for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
              ;
            arr[0] += alphabet.indexOf(str.charAt(i++));
            for (j = 0; j < arr.length; j++) {
              if (arr[j] > baseOut - 1) {
                if (arr[j + 1] == null)
                  arr[j + 1] = 0;
                arr[j + 1] += arr[j] / baseOut | 0;
                arr[j] %= baseOut;
              }
            }
          }
          return arr.reverse();
        }
        return function(str, baseIn, baseOut, sign, callerIsToString) {
          var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
          if (i >= 0) {
            k = POW_PRECISION;
            POW_PRECISION = 0;
            str = str.replace(".", "");
            y = new BigNumber2(baseIn);
            x = y.pow(str.length - i);
            POW_PRECISION = k;
            y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
            y.e = y.c.length;
          }
          xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
          e = k = xc.length;
          for (; xc[--k] == 0; xc.pop())
            ;
          if (!xc[0])
            return alphabet.charAt(0);
          if (i < 0) {
            --e;
          } else {
            x.c = xc;
            x.e = e;
            x.s = sign;
            x = div(x, y, dp, rm, baseOut);
            xc = x.c;
            r = x.r;
            e = x.e;
          }
          d = e + dp + 1;
          i = xc[d];
          k = baseOut / 2;
          r = r || d < 0 || xc[d + 1] != null;
          r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
          if (d < 1 || !xc[0]) {
            str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
          } else {
            xc.length = d;
            if (r) {
              for (--baseOut; ++xc[--d] > baseOut; ) {
                xc[d] = 0;
                if (!d) {
                  ++e;
                  xc = [1].concat(xc);
                }
              }
            }
            for (k = xc.length; !xc[--k]; )
              ;
            for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]))
              ;
            str = toFixedPoint(str, e, alphabet.charAt(0));
          }
          return str;
        };
      }();
      div = function() {
        function multiply(x, k, base) {
          var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
          for (x = x.slice(); i--; ) {
            xlo = x[i] % SQRT_BASE;
            xhi = x[i] / SQRT_BASE | 0;
            m = khi * xlo + xhi * klo;
            temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
            carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
            x[i] = temp % base;
          }
          if (carry)
            x = [carry].concat(x);
          return x;
        }
        function compare2(a, b, aL, bL) {
          var i, cmp;
          if (aL != bL) {
            cmp = aL > bL ? 1 : -1;
          } else {
            for (i = cmp = 0; i < aL; i++) {
              if (a[i] != b[i]) {
                cmp = a[i] > b[i] ? 1 : -1;
                break;
              }
            }
          }
          return cmp;
        }
        function subtract(a, b, aL, base) {
          var i = 0;
          for (; aL--; ) {
            a[aL] -= i;
            i = a[aL] < b[aL] ? 1 : 0;
            a[aL] = i * base + a[aL] - b[aL];
          }
          for (; !a[0] && a.length > 1; a.splice(0, 1))
            ;
        }
        return function(x, y, dp, rm, base) {
          var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
          if (!xc || !xc[0] || !yc || !yc[0]) {
            return new BigNumber2(!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
          }
          q = new BigNumber2(s);
          qc = q.c = [];
          e = x.e - y.e;
          s = dp + e + 1;
          if (!base) {
            base = BASE;
            e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
            s = s / LOG_BASE | 0;
          }
          for (i = 0; yc[i] == (xc[i] || 0); i++)
            ;
          if (yc[i] > (xc[i] || 0))
            e--;
          if (s < 0) {
            qc.push(1);
            more = true;
          } else {
            xL = xc.length;
            yL = yc.length;
            i = 0;
            s += 2;
            n = mathfloor(base / (yc[0] + 1));
            if (n > 1) {
              yc = multiply(yc, n, base);
              xc = multiply(xc, n, base);
              yL = yc.length;
              xL = xc.length;
            }
            xi = yL;
            rem = xc.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; rem[remL++] = 0)
              ;
            yz = yc.slice();
            yz = [0].concat(yz);
            yc0 = yc[0];
            if (yc[1] >= base / 2)
              yc0++;
            do {
              n = 0;
              cmp = compare2(yc, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL)
                  rem0 = rem0 * base + (rem[1] || 0);
                n = mathfloor(rem0 / yc0);
                if (n > 1) {
                  if (n >= base)
                    n = base - 1;
                  prod = multiply(yc, n, base);
                  prodL = prod.length;
                  remL = rem.length;
                  while (compare2(prod, rem, prodL, remL) == 1) {
                    n--;
                    subtract(prod, yL < prodL ? yz : yc, prodL, base);
                    prodL = prod.length;
                    cmp = 1;
                  }
                } else {
                  if (n == 0) {
                    cmp = n = 1;
                  }
                  prod = yc.slice();
                  prodL = prod.length;
                }
                if (prodL < remL)
                  prod = [0].concat(prod);
                subtract(rem, prod, remL, base);
                remL = rem.length;
                if (cmp == -1) {
                  while (compare2(yc, rem, yL, remL) < 1) {
                    n++;
                    subtract(rem, yL < remL ? yz : yc, remL, base);
                    remL = rem.length;
                  }
                }
              } else if (cmp === 0) {
                n++;
                rem = [0];
              }
              qc[i++] = n;
              if (rem[0]) {
                rem[remL++] = xc[xi] || 0;
              } else {
                rem = [xc[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] != null) && s--);
            more = rem[0] != null;
            if (!qc[0])
              qc.splice(0, 1);
          }
          if (base == BASE) {
            for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
              ;
            round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
          } else {
            q.e = e;
            q.r = +more;
          }
          return q;
        };
      }();
      function format(n, i, rm, id2) {
        var c0, e, ne, len, str;
        if (rm == null)
          rm = ROUNDING_MODE;
        else
          intCheck(rm, 0, 8);
        if (!n.c)
          return n.toString();
        c0 = n.c[0];
        ne = n.e;
        if (i == null) {
          str = coeffToString(n.c);
          str = id2 == 1 || id2 == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
        } else {
          n = round(new BigNumber2(n), i, rm);
          e = n.e;
          str = coeffToString(n.c);
          len = str.length;
          if (id2 == 1 || id2 == 2 && (i <= e || e <= TO_EXP_NEG)) {
            for (; len < i; str += "0", len++)
              ;
            str = toExponential(str, e);
          } else {
            i -= ne;
            str = toFixedPoint(str, e, "0");
            if (e + 1 > len) {
              if (--i > 0)
                for (str += "."; i--; str += "0")
                  ;
            } else {
              i += e - len;
              if (i > 0) {
                if (e + 1 == len)
                  str += ".";
                for (; i--; str += "0")
                  ;
              }
            }
          }
        }
        return n.s < 0 && c0 ? "-" + str : str;
      }
      function maxOrMin(args, method) {
        var n, i = 1, m = new BigNumber2(args[0]);
        for (; i < args.length; i++) {
          n = new BigNumber2(args[i]);
          if (!n.s) {
            m = n;
            break;
          } else if (method.call(m, n)) {
            m = n;
          }
        }
        return m;
      }
      function normalise(n, c, e) {
        var i = 1, j = c.length;
        for (; !c[--j]; c.pop())
          ;
        for (j = c[0]; j >= 10; j /= 10, i++)
          ;
        if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
          n.c = n.e = null;
        } else if (e < MIN_EXP) {
          n.c = [n.e = 0];
        } else {
          n.e = e;
          n.c = c;
        }
        return n;
      }
      parseNumeric = function() {
        var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(x, str, isNum, b) {
          var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
          if (isInfinityOrNaN.test(s)) {
            x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
          } else {
            if (!isNum) {
              s = s.replace(basePrefix, function(m, p1, p2) {
                base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                return !b || b == base ? p1 : m;
              });
              if (b) {
                base = b;
                s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
              }
              if (str != s)
                return new BigNumber2(s, base);
            }
            if (BigNumber2.DEBUG) {
              throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
            }
            x.s = null;
          }
          x.c = x.e = null;
        };
      }();
      function round(x, sd, rm, r) {
        var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
        if (xc) {
          out: {
            for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
              ;
            i = sd - d;
            if (i < 0) {
              i += LOG_BASE;
              j = sd;
              n = xc[ni = 0];
              rd = n / pows10[d - j - 1] % 10 | 0;
            } else {
              ni = mathceil((i + 1) / LOG_BASE);
              if (ni >= xc.length) {
                if (r) {
                  for (; xc.length <= ni; xc.push(0))
                    ;
                  n = rd = 0;
                  d = 1;
                  i %= LOG_BASE;
                  j = i - LOG_BASE + 1;
                } else {
                  break out;
                }
              } else {
                n = k = xc[ni];
                for (d = 1; k >= 10; k /= 10, d++)
                  ;
                i %= LOG_BASE;
                j = i - LOG_BASE + d;
                rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
              }
            }
            r = r || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
            r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
            if (sd < 1 || !xc[0]) {
              xc.length = 0;
              if (r) {
                sd -= x.e + 1;
                xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                x.e = -sd || 0;
              } else {
                xc[0] = x.e = 0;
              }
              return x;
            }
            if (i == 0) {
              xc.length = ni;
              k = 1;
              ni--;
            } else {
              xc.length = ni + 1;
              k = pows10[LOG_BASE - i];
              xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
            }
            if (r) {
              for (; ; ) {
                if (ni == 0) {
                  for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                    ;
                  j = xc[0] += k;
                  for (k = 1; j >= 10; j /= 10, k++)
                    ;
                  if (i != k) {
                    x.e++;
                    if (xc[0] == BASE)
                      xc[0] = 1;
                  }
                  break;
                } else {
                  xc[ni] += k;
                  if (xc[ni] != BASE)
                    break;
                  xc[ni--] = 0;
                  k = 1;
                }
              }
            }
            for (i = xc.length; xc[--i] === 0; xc.pop())
              ;
          }
          if (x.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (x.e < MIN_EXP) {
            x.c = [x.e = 0];
          }
        }
        return x;
      }
      function valueOf(n) {
        var str, e = n.e;
        if (e === null)
          return n.toString();
        str = coeffToString(n.c);
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
        return n.s < 0 ? "-" + str : str;
      }
      P.absoluteValue = P.abs = function() {
        var x = new BigNumber2(this);
        if (x.s < 0)
          x.s = 1;
        return x;
      };
      P.comparedTo = function(y, b) {
        return compare(this, new BigNumber2(y, b));
      };
      P.decimalPlaces = P.dp = function(dp, rm) {
        var c, n, v, x = this;
        if (dp != null) {
          intCheck(dp, 0, MAX);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(new BigNumber2(x), dp + x.e + 1, rm);
        }
        if (!(c = x.c))
          return null;
        n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
        if (v = c[v])
          for (; v % 10 == 0; v /= 10, n--)
            ;
        if (n < 0)
          n = 0;
        return n;
      };
      P.dividedBy = P.div = function(y, b) {
        return div(this, new BigNumber2(y, b), DECIMAL_PLACES, ROUNDING_MODE);
      };
      P.dividedToIntegerBy = P.idiv = function(y, b) {
        return div(this, new BigNumber2(y, b), 0, 1);
      };
      P.exponentiatedBy = P.pow = function(n, m) {
        var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
        n = new BigNumber2(n);
        if (n.c && !n.isInteger()) {
          throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
        }
        if (m != null)
          m = new BigNumber2(m);
        nIsBig = n.e > 14;
        if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
          y = new BigNumber2(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
          return m ? y.mod(m) : y;
        }
        nIsNeg = n.s < 0;
        if (m) {
          if (m.c ? !m.c[0] : !m.s)
            return new BigNumber2(NaN);
          isModExp = !nIsNeg && x.isInteger() && m.isInteger();
          if (isModExp)
            x = x.mod(m);
        } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
          k = x.s < 0 && isOdd(n) ? -0 : 0;
          if (x.e > -1)
            k = 1 / k;
          return new BigNumber2(nIsNeg ? 1 / k : k);
        } else if (POW_PRECISION) {
          k = mathceil(POW_PRECISION / LOG_BASE + 2);
        }
        if (nIsBig) {
          half = new BigNumber2(0.5);
          if (nIsNeg)
            n.s = 1;
          nIsOdd = isOdd(n);
        } else {
          i = Math.abs(+valueOf(n));
          nIsOdd = i % 2;
        }
        y = new BigNumber2(ONE);
        for (; ; ) {
          if (nIsOdd) {
            y = y.times(x);
            if (!y.c)
              break;
            if (k) {
              if (y.c.length > k)
                y.c.length = k;
            } else if (isModExp) {
              y = y.mod(m);
            }
          }
          if (i) {
            i = mathfloor(i / 2);
            if (i === 0)
              break;
            nIsOdd = i % 2;
          } else {
            n = n.times(half);
            round(n, n.e + 1, 1);
            if (n.e > 14) {
              nIsOdd = isOdd(n);
            } else {
              i = +valueOf(n);
              if (i === 0)
                break;
              nIsOdd = i % 2;
            }
          }
          x = x.times(x);
          if (k) {
            if (x.c && x.c.length > k)
              x.c.length = k;
          } else if (isModExp) {
            x = x.mod(m);
          }
        }
        if (isModExp)
          return y;
        if (nIsNeg)
          y = ONE.div(y);
        return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
      };
      P.integerValue = function(rm) {
        var n = new BigNumber2(this);
        if (rm == null)
          rm = ROUNDING_MODE;
        else
          intCheck(rm, 0, 8);
        return round(n, n.e + 1, rm);
      };
      P.isEqualTo = P.eq = function(y, b) {
        return compare(this, new BigNumber2(y, b)) === 0;
      };
      P.isFinite = function() {
        return !!this.c;
      };
      P.isGreaterThan = P.gt = function(y, b) {
        return compare(this, new BigNumber2(y, b)) > 0;
      };
      P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
        return (b = compare(this, new BigNumber2(y, b))) === 1 || b === 0;
      };
      P.isInteger = function() {
        return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
      };
      P.isLessThan = P.lt = function(y, b) {
        return compare(this, new BigNumber2(y, b)) < 0;
      };
      P.isLessThanOrEqualTo = P.lte = function(y, b) {
        return (b = compare(this, new BigNumber2(y, b))) === -1 || b === 0;
      };
      P.isNaN = function() {
        return !this.s;
      };
      P.isNegative = function() {
        return this.s < 0;
      };
      P.isPositive = function() {
        return this.s > 0;
      };
      P.isZero = function() {
        return !!this.c && this.c[0] == 0;
      };
      P.minus = function(y, b) {
        var i, j, t, xLTy, x = this, a = x.s;
        y = new BigNumber2(y, b);
        b = y.s;
        if (!a || !b)
          return new BigNumber2(NaN);
        if (a != b) {
          y.s = -b;
          return x.plus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
          if (!xc || !yc)
            return xc ? (y.s = -b, y) : new BigNumber2(yc ? x : NaN);
          if (!xc[0] || !yc[0]) {
            return yc[0] ? (y.s = -b, y) : new BigNumber2(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
          }
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        if (a = xe - ye) {
          if (xLTy = a < 0) {
            a = -a;
            t = xc;
          } else {
            ye = xe;
            t = yc;
          }
          t.reverse();
          for (b = a; b--; t.push(0))
            ;
          t.reverse();
        } else {
          j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
          for (a = b = 0; b < j; b++) {
            if (xc[b] != yc[b]) {
              xLTy = xc[b] < yc[b];
              break;
            }
          }
        }
        if (xLTy)
          t = xc, xc = yc, yc = t, y.s = -y.s;
        b = (j = yc.length) - (i = xc.length);
        if (b > 0)
          for (; b--; xc[i++] = 0)
            ;
        b = BASE - 1;
        for (; j > a; ) {
          if (xc[--j] < yc[j]) {
            for (i = j; i && !xc[--i]; xc[i] = b)
              ;
            --xc[i];
            xc[j] += BASE;
          }
          xc[j] -= yc[j];
        }
        for (; xc[0] == 0; xc.splice(0, 1), --ye)
          ;
        if (!xc[0]) {
          y.s = ROUNDING_MODE == 3 ? -1 : 1;
          y.c = [y.e = 0];
          return y;
        }
        return normalise(y, xc, ye);
      };
      P.modulo = P.mod = function(y, b) {
        var q, s, x = this;
        y = new BigNumber2(y, b);
        if (!x.c || !y.s || y.c && !y.c[0]) {
          return new BigNumber2(NaN);
        } else if (!y.c || x.c && !x.c[0]) {
          return new BigNumber2(x);
        }
        if (MODULO_MODE == 9) {
          s = y.s;
          y.s = 1;
          q = div(x, y, 0, 3);
          y.s = s;
          q.s *= s;
        } else {
          q = div(x, y, 0, MODULO_MODE);
        }
        y = x.minus(q.times(y));
        if (!y.c[0] && MODULO_MODE == 1)
          y.s = x.s;
        return y;
      };
      P.multipliedBy = P.times = function(y, b) {
        var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber2(y, b)).c;
        if (!xc || !yc || !xc[0] || !yc[0]) {
          if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
            y.c = y.e = y.s = null;
          } else {
            y.s *= x.s;
            if (!xc || !yc) {
              y.c = y.e = null;
            } else {
              y.c = [0];
              y.e = 0;
            }
          }
          return y;
        }
        e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
        y.s *= x.s;
        xcL = xc.length;
        ycL = yc.length;
        if (xcL < ycL)
          zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
        for (i = xcL + ycL, zc = []; i--; zc.push(0))
          ;
        base = BASE;
        sqrtBase = SQRT_BASE;
        for (i = ycL; --i >= 0; ) {
          c = 0;
          ylo = yc[i] % sqrtBase;
          yhi = yc[i] / sqrtBase | 0;
          for (k = xcL, j = i + k; j > i; ) {
            xlo = xc[--k] % sqrtBase;
            xhi = xc[k] / sqrtBase | 0;
            m = yhi * xlo + xhi * ylo;
            xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
            c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
            zc[j--] = xlo % base;
          }
          zc[j] = c;
        }
        if (c) {
          ++e;
        } else {
          zc.splice(0, 1);
        }
        return normalise(y, zc, e);
      };
      P.negated = function() {
        var x = new BigNumber2(this);
        x.s = -x.s || null;
        return x;
      };
      P.plus = function(y, b) {
        var t, x = this, a = x.s;
        y = new BigNumber2(y, b);
        b = y.s;
        if (!a || !b)
          return new BigNumber2(NaN);
        if (a != b) {
          y.s = -b;
          return x.minus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
          if (!xc || !yc)
            return new BigNumber2(a / 0);
          if (!xc[0] || !yc[0])
            return yc[0] ? y : new BigNumber2(xc[0] ? x : a * 0);
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        if (a = xe - ye) {
          if (a > 0) {
            ye = xe;
            t = yc;
          } else {
            a = -a;
            t = xc;
          }
          t.reverse();
          for (; a--; t.push(0))
            ;
          t.reverse();
        }
        a = xc.length;
        b = yc.length;
        if (a - b < 0)
          t = yc, yc = xc, xc = t, b = a;
        for (a = 0; b; ) {
          a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
          xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
        }
        if (a) {
          xc = [a].concat(xc);
          ++ye;
        }
        return normalise(y, xc, ye);
      };
      P.precision = P.sd = function(sd, rm) {
        var c, n, v, x = this;
        if (sd != null && sd !== !!sd) {
          intCheck(sd, 1, MAX);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(new BigNumber2(x), sd, rm);
        }
        if (!(c = x.c))
          return null;
        v = c.length - 1;
        n = v * LOG_BASE + 1;
        if (v = c[v]) {
          for (; v % 10 == 0; v /= 10, n--)
            ;
          for (v = c[0]; v >= 10; v /= 10, n++)
            ;
        }
        if (sd && x.e + 1 > n)
          n = x.e + 1;
        return n;
      };
      P.shiftedBy = function(k) {
        intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
        return this.times("1e" + k);
      };
      P.squareRoot = P.sqrt = function() {
        var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber2("0.5");
        if (s !== 1 || !c || !c[0]) {
          return new BigNumber2(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
        }
        s = Math.sqrt(+valueOf(x));
        if (s == 0 || s == 1 / 0) {
          n = coeffToString(c);
          if ((n.length + e) % 2 == 0)
            n += "0";
          s = Math.sqrt(+n);
          e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
          if (s == 1 / 0) {
            n = "5e" + e;
          } else {
            n = s.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
          }
          r = new BigNumber2(n);
        } else {
          r = new BigNumber2(s + "");
        }
        if (r.c[0]) {
          e = r.e;
          s = e + dp;
          if (s < 3)
            s = 0;
          for (; ; ) {
            t = r;
            r = half.times(t.plus(div(x, t, dp, 1)));
            if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
              if (r.e < e)
                --s;
              n = n.slice(s - 3, s + 1);
              if (n == "9999" || !rep && n == "4999") {
                if (!rep) {
                  round(t, t.e + DECIMAL_PLACES + 2, 0);
                  if (t.times(t).eq(x)) {
                    r = t;
                    break;
                  }
                }
                dp += 4;
                s += 4;
                rep = 1;
              } else {
                if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                  round(r, r.e + DECIMAL_PLACES + 2, 1);
                  m = !r.times(r).eq(x);
                }
                break;
              }
            }
          }
        }
        return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
      };
      P.toExponential = function(dp, rm) {
        if (dp != null) {
          intCheck(dp, 0, MAX);
          dp++;
        }
        return format(this, dp, rm, 1);
      };
      P.toFixed = function(dp, rm) {
        if (dp != null) {
          intCheck(dp, 0, MAX);
          dp = dp + this.e + 1;
        }
        return format(this, dp, rm);
      };
      P.toFormat = function(dp, rm, format2) {
        var str, x = this;
        if (format2 == null) {
          if (dp != null && rm && typeof rm == "object") {
            format2 = rm;
            rm = null;
          } else if (dp && typeof dp == "object") {
            format2 = dp;
            dp = rm = null;
          } else {
            format2 = FORMAT;
          }
        } else if (typeof format2 != "object") {
          throw Error(bignumberError + "Argument not an object: " + format2);
        }
        str = x.toFixed(dp, rm);
        if (x.c) {
          var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
          if (g2)
            i = g1, g1 = g2, g2 = i, len -= i;
          if (g1 > 0 && len > 0) {
            i = len % g1 || g1;
            intPart = intDigits.substr(0, i);
            for (; i < len; i += g1)
              intPart += groupSeparator + intDigits.substr(i, g1);
            if (g2 > 0)
              intPart += groupSeparator + intDigits.slice(i);
            if (isNeg)
              intPart = "-" + intPart;
          }
          str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format2.fractionGroupSeparator || "")) : fractionPart) : intPart;
        }
        return (format2.prefix || "") + str + (format2.suffix || "");
      };
      P.toFraction = function(md) {
        var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
        if (md != null) {
          n = new BigNumber2(md);
          if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
            throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
          }
        }
        if (!xc)
          return new BigNumber2(x);
        d = new BigNumber2(ONE);
        n1 = d0 = new BigNumber2(ONE);
        d1 = n0 = new BigNumber2(ONE);
        s = coeffToString(xc);
        e = d.e = s.length - x.e - 1;
        d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
        md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
        exp = MAX_EXP;
        MAX_EXP = 1 / 0;
        n = new BigNumber2(s);
        n0.c[0] = 0;
        for (; ; ) {
          q = div(n, d, 0, 1);
          d2 = d0.plus(q.times(d1));
          if (d2.comparedTo(md) == 1)
            break;
          d0 = d1;
          d1 = d2;
          n1 = n0.plus(q.times(d2 = n1));
          n0 = d2;
          d = n.minus(q.times(d2 = d));
          n = d2;
        }
        d2 = div(md.minus(d0), d1, 0, 1);
        n0 = n0.plus(d2.times(n1));
        d0 = d0.plus(d2.times(d1));
        n0.s = n1.s = x.s;
        e = e * 2;
        r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
        MAX_EXP = exp;
        return r;
      };
      P.toNumber = function() {
        return +valueOf(this);
      };
      P.toPrecision = function(sd, rm) {
        if (sd != null)
          intCheck(sd, 1, MAX);
        return format(this, sd, rm, 2);
      };
      P.toString = function(b) {
        var str, n = this, s = n.s, e = n.e;
        if (e === null) {
          if (s) {
            str = "Infinity";
            if (s < 0)
              str = "-" + str;
          } else {
            str = "NaN";
          }
        } else {
          if (b == null) {
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
          } else if (b === 10 && alphabetHasNormalDecimalDigits) {
            n = round(new BigNumber2(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
            str = toFixedPoint(coeffToString(n.c), n.e, "0");
          } else {
            intCheck(b, 2, ALPHABET.length, "Base");
            str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
          }
          if (s < 0 && n.c[0])
            str = "-" + str;
        }
        return str;
      };
      P.valueOf = P.toJSON = function() {
        return valueOf(this);
      };
      P._isBigNumber = true;
      if (configObject != null)
        BigNumber2.set(configObject);
      return BigNumber2;
    }
    function bitFloor(n) {
      var i = n | 0;
      return n > 0 || n === i ? i : i - 1;
    }
    function coeffToString(a) {
      var s, z, i = 1, j = a.length, r = a[0] + "";
      for (; i < j; ) {
        s = a[i++] + "";
        z = LOG_BASE - s.length;
        for (; z--; s = "0" + s)
          ;
        r += s;
      }
      for (j = r.length; r.charCodeAt(--j) === 48; )
        ;
      return r.slice(0, j + 1 || 1);
    }
    function compare(x, y) {
      var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
      if (!i || !j)
        return null;
      a = xc && !xc[0];
      b = yc && !yc[0];
      if (a || b)
        return a ? b ? 0 : -j : i;
      if (i != j)
        return i;
      a = i < 0;
      b = k == l;
      if (!xc || !yc)
        return b ? 0 : !xc ^ a ? 1 : -1;
      if (!b)
        return k > l ^ a ? 1 : -1;
      j = (k = xc.length) < (l = yc.length) ? k : l;
      for (i = 0; i < j; i++)
        if (xc[i] != yc[i])
          return xc[i] > yc[i] ^ a ? 1 : -1;
      return k == l ? 0 : k > l ^ a ? 1 : -1;
    }
    function intCheck(n, min, max, name) {
      if (n < min || n > max || n !== mathfloor(n)) {
        throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
      }
    }
    function isOdd(n) {
      var k = n.c.length - 1;
      return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
    }
    function toExponential(str, e) {
      return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
    }
    function toFixedPoint(str, e, z) {
      var len, zs;
      if (e < 0) {
        for (zs = z + "."; ++e; zs += z)
          ;
        str = zs + str;
      } else {
        len = str.length;
        if (++e > len) {
          for (zs = z, e -= len; --e; zs += z)
            ;
          str += zs;
        } else if (e < len) {
          str = str.slice(0, e) + "." + str.slice(e);
        }
      }
      return str;
    }
    BigNumber = clone();
    BigNumber["default"] = BigNumber.BigNumber = BigNumber;
    if (module.exports) {
      module.exports = BigNumber;
    } else {
      if (!globalObject) {
        globalObject = typeof self != "undefined" && self ? self : window;
      }
      globalObject.BigNumber = BigNumber;
    }
  })(commonjsGlobal);
});
function concatBuffers(buffers) {
  var total_length = 0;
  for (var i = 0; i < buffers.length; i++) {
    total_length += buffers[i].byteLength;
  }
  var temp = new Uint8Array(total_length);
  var offset = 0;
  temp.set(new Uint8Array(buffers[0]), offset);
  offset += buffers[0].byteLength;
  for (var i = 1; i < buffers.length; i++) {
    temp.set(new Uint8Array(buffers[i]), offset);
    offset += buffers[i].byteLength;
  }
  return temp;
}
function b64UrlToString(b64UrlString) {
  var buffer = b64UrlToBuffer(b64UrlString);
  if (typeof TextDecoder == "undefined") {
    var TextDecoder_1 = require("util").TextDecoder;
    return new TextDecoder_1("utf-8", { fatal: true }).decode(buffer);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
}
function bufferToString(buffer) {
  if (typeof TextDecoder == "undefined") {
    var TextDecoder_2 = require("util").TextDecoder;
    return new TextDecoder_2("utf-8", { fatal: true }).decode(buffer);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
}
function stringToBuffer(string) {
  if (typeof TextEncoder == "undefined") {
    var TextEncoder_1 = require("util").TextEncoder;
    return new TextEncoder_1().encode(string);
  }
  return new TextEncoder().encode(string);
}
function stringToB64Url(string) {
  return bufferTob64Url(stringToBuffer(string));
}
function b64UrlToBuffer(b64UrlString) {
  return new Uint8Array(decode_1(b64UrlDecode(b64UrlString)));
}
function bufferTob64(buffer) {
  return encode_1(new Uint8Array(buffer));
}
function bufferTob64Url(buffer) {
  return b64UrlEncode(bufferTob64(buffer));
}
function b64UrlEncode(b64UrlString) {
  return b64UrlString.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
function b64UrlDecode(b64UrlString) {
  b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
  var padding;
  b64UrlString.length % 4 == 0 ? padding = 0 : padding = 4 - b64UrlString.length % 4;
  return b64UrlString.concat("=".repeat(padding));
}
function getSignatureData(tx) {
  return __awaiter(this, void 0, void 0, function() {
    var _a, tags, tagList;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          tx = new Transaction(tx);
          _a = tx.format;
          switch (_a) {
            case 1:
              return [3, 1];
            case 2:
              return [3, 2];
          }
          return [3, 6];
        case 1:
          tags = tx.tags.reduce(function(accumulator, tag) {
            return concatBuffers([
              accumulator,
              tag.get("name", { decode: true, string: false }),
              tag.get("value", { decode: true, string: false })
            ]);
          }, new Uint8Array());
          return [2, concatBuffers([
            tx.get("owner", { decode: true, string: false }),
            tx.get("target", { decode: true, string: false }),
            tx.get("data", { decode: true, string: false }),
            stringToBuffer(tx.quantity),
            stringToBuffer(tx.reward),
            tx.get("last_tx", { decode: true, string: false }),
            tags
          ])];
        case 2:
          if (!!tx.data_root)
            return [3, 4];
          return [4, tx.prepareChunks(tx.data)];
        case 3:
          _b.sent();
          _b.label = 4;
        case 4:
          tagList = tx.tags.map(function(tag) {
            return [
              tag.get("name", { decode: true, string: false }),
              tag.get("value", { decode: true, string: false })
            ];
          });
          return [4, deepHash([
            stringToBuffer(tx.format.toString()),
            tx.get("owner", { decode: true, string: false }),
            tx.get("target", { decode: true, string: false }),
            stringToBuffer(tx.quantity),
            stringToBuffer(tx.reward),
            tx.get("last_tx", { decode: true, string: false }),
            tagList,
            stringToBuffer(tx.data_size),
            tx.get("data_root", { decode: true, string: false })
          ])];
        case 5:
          return [2, _b.sent()];
        case 6:
          throw new Error("Unexpected transaction format: ".concat(tx.format));
      }
    });
  });
}
function setSignature(tx, _a) {
  var id2 = _a.id, owner = _a.owner, reward = _a.reward, tags = _a.tags, signature = _a.signature;
  tx.id = id2;
  tx.owner = owner;
  if (reward)
    tx.reward = reward;
  if (tags)
    tx.tags = tags;
  tx.signature = signature;
  return tx;
}
var BaseObject = function() {
  function BaseObject2() {
  }
  BaseObject2.prototype.get = function(field, options) {
    if (!Object.getOwnPropertyNames(this).includes(field)) {
      throw new Error('Field "'.concat(field, '" is not a property of the Arweave Transaction class.'));
    }
    if (this[field] instanceof Uint8Array) {
      if (options && options.decode && options.string) {
        return bufferToString(this[field]);
      }
      if (options && options.decode && !options.string) {
        return this[field];
      }
      return bufferTob64Url(this[field]);
    }
    if (options && options.decode == true) {
      if (options && options.string) {
        return b64UrlToString(this[field]);
      }
      return b64UrlToBuffer(this[field]);
    }
    return this[field];
  };
  return BaseObject2;
}();
var Tag = function(_super) {
  __extends$1(Tag2, _super);
  function Tag2(name, value, decode2) {
    var _this = _super.call(this) || this;
    _this.name = name;
    _this.value = value;
    return _this;
  }
  return Tag2;
}(BaseObject);
var utils = {};
var Transaction = function(_super) {
  __extends$1(Transaction2, _super);
  function Transaction2(attributes) {
    if (attributes === void 0) {
      attributes = {};
    }
    var _this = _super.call(this) || this;
    _this.format = 2;
    _this.id = "";
    _this.last_tx = "";
    _this.owner = "";
    _this.tags = [];
    _this.target = "";
    _this.quantity = "0";
    _this.data_size = "0";
    _this.data = new Uint8Array();
    _this.data_root = "";
    _this.reward = "0";
    _this.signature = "";
    Object.assign(_this, attributes);
    if (typeof _this.data === "string") {
      _this.data = b64UrlToBuffer(_this.data);
    }
    if (attributes.tags) {
      _this.tags = attributes.tags.map(function(tag) {
        return new Tag(tag.name, tag.value);
      });
    }
    return _this;
  }
  Transaction2.prototype.addTag = function(name, value) {
    this.tags.push(new Tag(stringToB64Url(name), stringToB64Url(value)));
  };
  Transaction2.prototype.toJSON = function() {
    return {
      format: this.format,
      id: this.id,
      last_tx: this.last_tx,
      owner: this.owner,
      tags: this.tags,
      target: this.target,
      quantity: this.quantity,
      data: bufferTob64Url(this.data),
      data_size: this.data_size,
      data_root: this.data_root,
      data_tree: this.data_tree,
      reward: this.reward,
      signature: this.signature
    };
  };
  Transaction2.prototype.setOwner = function(owner) {
    this.owner = owner;
  };
  Transaction2.prototype.setSignature = function(_a) {
    var id2 = _a.id, owner = _a.owner, reward = _a.reward, tags = _a.tags, signature = _a.signature;
    this.id = id2;
    this.owner = owner;
    if (reward)
      this.reward = reward;
    if (tags)
      this.tags = tags;
    this.signature = signature;
  };
  Transaction2.prototype.prepareChunks = function(data) {
    return __awaiter(this, void 0, void 0, function() {
      var _a;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            if (!(!this.chunks && data.byteLength > 0))
              return [3, 2];
            _a = this;
            return [4, generateTransactionChunks(data)];
          case 1:
            _a.chunks = _b.sent();
            this.data_root = bufferTob64Url(this.chunks.data_root);
            _b.label = 2;
          case 2:
            if (!this.chunks && data.byteLength === 0) {
              this.chunks = {
                chunks: [],
                data_root: new Uint8Array(),
                proofs: []
              };
              this.data_root = "";
            }
            return [2];
        }
      });
    });
  };
  Transaction2.prototype.getChunk = function(idx, data) {
    if (!this.chunks) {
      throw new Error("Chunks have not been prepared");
    }
    var proof = this.chunks.proofs[idx];
    var chunk = this.chunks.chunks[idx];
    return {
      data_root: this.data_root,
      data_size: this.data_size,
      data_path: bufferTob64Url(proof.proof),
      offset: proof.offset.toString(),
      chunk: bufferTob64Url(data.slice(chunk.minByteRange, chunk.maxByteRange))
    };
  };
  Transaction2.prototype.getSignatureData = function() {
    return __awaiter(this, void 0, void 0, function() {
      var _a, tags, tagList;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _a = this.format;
            switch (_a) {
              case 1:
                return [3, 1];
              case 2:
                return [3, 2];
            }
            return [3, 6];
          case 1:
            tags = this.tags.reduce(function(accumulator, tag) {
              return concatBuffers([
                accumulator,
                tag.get("name", { decode: true, string: false }),
                tag.get("value", { decode: true, string: false })
              ]);
            }, new Uint8Array());
            return [2, concatBuffers([
              this.get("owner", { decode: true, string: false }),
              this.get("target", { decode: true, string: false }),
              this.get("data", { decode: true, string: false }),
              stringToBuffer(this.quantity),
              stringToBuffer(this.reward),
              this.get("last_tx", { decode: true, string: false }),
              tags
            ])];
          case 2:
            if (!!this.data_root)
              return [3, 4];
            return [4, this.prepareChunks(this.data)];
          case 3:
            _b.sent();
            _b.label = 4;
          case 4:
            tagList = this.tags.map(function(tag) {
              return [
                tag.get("name", { decode: true, string: false }),
                tag.get("value", { decode: true, string: false })
              ];
            });
            return [4, deepHash([
              stringToBuffer(this.format.toString()),
              this.get("owner", { decode: true, string: false }),
              this.get("target", { decode: true, string: false }),
              stringToBuffer(this.quantity),
              stringToBuffer(this.reward),
              this.get("last_tx", { decode: true, string: false }),
              tagList,
              stringToBuffer(this.data_size),
              this.get("data_root", { decode: true, string: false })
            ])];
          case 5:
            return [2, _b.sent()];
          case 6:
            throw new Error("Unexpected transaction format: ".concat(this.format));
        }
      });
    });
  };
  return Transaction2;
}(BaseObject);
function winstonToAr(winstonString, _a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.formatted, formatted = _c === void 0 ? false : _c, _d = _b.decimals, decimals = _d === void 0 ? 12 : _d;
  _b.trim;
  var number = stringToBigNum(winstonString, decimals).shiftedBy(-12);
  return formatted ? number.toFormat(decimals) : number.toFixed(decimals);
}
function arToWinston(arString, _a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.formatted, formatted = _c === void 0 ? false : _c;
  var number = stringToBigNum(arString).shiftedBy(12);
  return formatted ? number.toFormat() : number.toFixed(0);
}
function stringToBigNum(stringValue, decimalPlaces) {
  if (decimalPlaces === void 0) {
    decimalPlaces = 12;
  }
  return BigNum(stringValue, decimalPlaces);
}
var BigNum = function(value, decimals) {
  var instance;
  try {
    instance = bignumber.clone({ DECIMAL_PLACES: decimals });
  } catch (error) {
    console.warn("Caught big num issues, try default", error);
    instance = bignumber["default"].clone({ DECIMAL_PLACES: decimals });
  }
  return new instance(value);
};
var storedPermissions;
var jwkToCryptoKey = function(jwk) {
  return __awaiter(void 0, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, crypto.subtle.importKey("jwk", jwk, {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        }
      }, false, ["sign"])];
    });
  });
};
var subtleSign = function(jwk, data, _a) {
  var _b = _a === void 0 ? { saltLength: 32 } : _a, saltLength = _b.saltLength;
  return __awaiter(void 0, void 0, void 0, function() {
    var signature, _c, _d, _e;
    return __generator(this, function(_f) {
      switch (_f.label) {
        case 0:
          _d = (_c = crypto.subtle).sign;
          _e = [{
            name: "RSA-PSS",
            saltLength
          }];
          return [4, jwkToCryptoKey(jwk)];
        case 1:
          return [4, _d.apply(_c, _e.concat([_f.sent(), data]))];
        case 2:
          signature = _f.sent();
          return [2, new Uint8Array(signature)];
      }
    });
  });
};
var generateJWK = function() {
  return __awaiter(void 0, void 0, void 0, function() {
    var cryptoKey, jwk, kid;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, crypto.subtle.generateKey({
            name: "RSA-PSS",
            modulusLength: 4096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: {
              name: "SHA-256"
            }
          }, true, ["sign"])];
        case 1:
          cryptoKey = _a.sent();
          return [4, crypto.subtle.exportKey("jwk", cryptoKey.privateKey)];
        case 2:
          jwk = _a.sent();
          return [
            4,
            ownerToAddress(jwk.n)
          ];
        case 3:
          kid = _a.sent();
          return [2, {
            kty: jwk.kty,
            e: jwk.e,
            n: jwk.n,
            d: jwk.d,
            p: jwk.p,
            q: jwk.q,
            dp: jwk.dp,
            dq: jwk.dq,
            qi: jwk.qi,
            kid
          }];
      }
    });
  });
};
function ownerToAddress(owner) {
  return __awaiter(this, void 0, void 0, function() {
    var _a, _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          _b = (_a = ArweaveUtils).bufferTob64Url;
          return [4, crypto.subtle.digest("SHA-256", b64UrlToBuffer(owner))];
        case 1:
          return [2, _b.apply(_a, [_c.sent()])];
      }
    });
  });
}
var arweaveWalletAPI = {
  generateJWK: function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var jwk;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, generateJWK()];
          case 1:
            jwk = _a.sent();
            return [2, jwk];
        }
      });
    });
  },
  connect: function(permissions, appInfo) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        storedPermissions = permissions;
        return [2, true];
      });
    });
  },
  disconnect: function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, true];
      });
    });
  },
  getActiveAddress: function() {
    return __awaiter(this, void 0, void 0, function() {
      var jwk_1, addr, e_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            rsa.forEach(function(value, key, map) {
              if (value.kty == "RSA") {
                jwk_1 = value;
              }
            });
            return [4, ownerToAddress(jwk_1.n)];
          case 1:
            addr = _a.sent();
            return [2, addr];
          case 2:
            e_1 = _a.sent();
            throw new Error(e_1);
          case 3:
            return [2];
        }
      });
    });
  },
  getActivePublicKey: function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  },
  getAllAddresses: function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  },
  getWalletNames: function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  },
  addToken: function(id2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  },
  sign: function(transaction, options) {
    return __awaiter(this, void 0, void 0, function() {
      var methodName, confirmed, address, jwk, tx, dataToSign, rawSignature, id2;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            methodName = "arweaveWalletAPI.sign";
            return [4, getConfig().confirm(methodName, transaction)];
          case 1:
            confirmed = _a.sent();
            if (!confirmed)
              return [2, false];
            return [
              4,
              arweaveWalletAPI.getActiveAddress()
            ];
          case 2:
            address = _a.sent();
            rsa.forEach(function(value, key, map) {
              if (value.kty == "RSA" && (value === null || value === void 0 ? void 0 : value.kid) == address) {
                jwk = value;
              }
            });
            tx = new Transaction(transaction);
            tx.setOwner(jwk.n);
            return [4, tx.getSignatureData()];
          case 3:
            dataToSign = _a.sent();
            return [4, subtleSign(jwk, dataToSign, options)];
          case 4:
            rawSignature = _a.sent();
            return [4, crypto.subtle.digest("SHA-256", rawSignature)];
          case 5:
            id2 = _a.sent();
            tx.setSignature({
              id: bufferTob64Url(id2),
              owner: jwk.n,
              signature: bufferTob64Url(rawSignature)
            });
            return [2, tx];
        }
      });
    });
  },
  getPermissions: function() {
    return __awaiter(this, void 0, void 0, function() {
      var permissions;
      return __generator(this, function(_a) {
        permissions = storedPermissions;
        return [2, permissions];
      });
    });
  },
  getArweaveConfig: function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  },
  encrypt: function(data, options) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  },
  decrypt: function(data, options) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  },
  signature: function(data, algorithm) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  },
  noop: function() {
    return true;
  }
};
var DEFAULT_PROXCRYPTOR_NAME = "DEFAULT_PROXCRYPTOR_NAME";
var pre = /* @__PURE__ */ new Map();
var rsa = /* @__PURE__ */ new Map();
var keys = /* @__PURE__ */ new Map();
var DEFAULT_NAME = "Master Key";
var DEFAULT_RSA_NAME = "Arweave_1";
var wallet;
loadWallet();
function browser() {
  return ![typeof document].includes("undefined");
}
function loadWallet() {
  return __awaiter(this, void 0, void 0, function() {
    var resolved;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!browser())
            return [2];
          return [4, dist.getWallet()];
        case 1:
          resolved = _a.sent();
          wallet = resolved;
          return [2];
      }
    });
  });
}
function assertWallet() {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (!!wallet)
            return [3, 2];
          return [4, wallet];
        case 1:
          _a.sent();
          _a.label = 2;
        case 2:
          return [2];
      }
    });
  });
}
var config$1 = {};
var setConfig$1 = function(key, value) {
  config$1[key] = value;
};
var getConfig$1 = function() {
  return config$1;
};
var generateMnemonic = function() {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, assertWallet()];
        case 1:
          _a.sent();
          return [2, wallet.generate_mnemonic()];
      }
    });
  });
};
var generateRsaJwk = function() {
  var jwk = generateJWK();
  rsa.set(DEFAULT_RSA_NAME, jwk);
  return jwk;
};
var loadSecrets = function(_a) {
  var mnemonic = _a.mnemonic, rsajwk = _a.rsajwk;
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          rsa.set(DEFAULT_RSA_NAME, rsajwk);
          return [
            4,
            loadMnemonicInProxcryptor(mnemonic)
          ];
        case 1:
          _b.sent();
          return [2];
      }
    });
  });
};
var loadMnemonicInProxcryptor = function(mnemonic, pre_name) {
  if (pre_name === void 0) {
    pre_name = DEFAULT_NAME;
  }
  return __awaiter(this, void 0, void 0, function() {
    var proxcryptor2;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, assertWallet()];
        case 1:
          _a.sent();
          proxcryptor2 = wallet.mnemonic_to_proxcryptor(mnemonic);
          pre.set(pre_name, proxcryptor2);
          return [2, pre_name];
      }
    });
  });
};
var getLoadedKeys = function() {
  var results = [];
  pre.forEach(function(proxcryptor2, pre_name) {
    results.push({
      name: pre_name,
      publicKey: proxcryptor2.public_key(),
      publicKeyJWK: proxcryptor2.public_key_jwk(),
      publicKeyBase58: proxcryptor2.public_key_base58()
    });
  });
  rsa.forEach(function(keyDetails, nickname) {
    results.push({
      name: nickname,
      publicKey: keyDetails.n,
      publicKeyJWK: {
        kty: "RSA",
        kid: keyDetails.kid,
        e: "AQAB",
        n: keyDetails.n
      },
      publicKeyBase58: null
    });
  });
  return results;
};
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DEFAULT_PROXCRYPTOR_NAME,
  pre,
  rsa,
  keys,
  DEFAULT_NAME,
  DEFAULT_RSA_NAME,
  get wallet() {
    return wallet;
  },
  assertWallet,
  setConfig: setConfig$1,
  getConfig: getConfig$1,
  generateMnemonic,
  generateRsaJwk,
  loadSecrets,
  loadMnemonicInProxcryptor,
  getLoadedKeys
});
new TextDecoder();
var proxcryptor = {
  selfEncrypt: function(data, tag, pre_name) {
    if (pre_name === void 0) {
      pre_name = DEFAULT_NAME;
    }
    if (!(pre && pre_name && pre.get(pre_name)))
      return new Error("No proxy encryptor available for this name.");
    var encrypted_message = pre.get(pre_name).self_encrypt(data, tag);
    return encrypted_message;
  },
  selfDecrypt: function(encryptedMessage, pre_name) {
    if (pre_name === void 0) {
      pre_name = DEFAULT_NAME;
    }
    return __awaiter(void 0, void 0, void 0, function() {
      var methodName, args, config2, confirmed, decrypted_message;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            methodName = "proxcryptor.selfDecrypt";
            args = { tag: new Uint8Array(encryptedMessage.tag) };
            config2 = getConfig();
            return [4, config2.confirm(methodName, args)];
          case 1:
            confirmed = _a.sent();
            if (!confirmed)
              return [2, false];
            {
              decrypted_message = pre.get(pre_name).self_decrypt(encryptedMessage);
              return [2, decrypted_message];
            }
        }
      });
    });
  },
  generateReKey: function(targetPublicKey, tag, pre_name) {
    if (pre_name === void 0) {
      pre_name = DEFAULT_NAME;
    }
    if (!(pre && pre_name && pre.get(pre_name)))
      return new Error("No proxy encryptor available for this name.");
    var re_key = pre.get(pre_name).generate_re_key(targetPublicKey, tag);
    return re_key;
  },
  reEncrypt: function(targetPublicKey, encrypted_message, re_key) {
    if (!wallet)
      return new Error("No wallet encryptor available");
    var re_encrypted_message = wallet.re_encrypt(targetPublicKey, encrypted_message, re_key);
    return re_encrypted_message;
  },
  reDecrypt: function(re_encrypted_message, pre_name) {
    if (pre_name === void 0) {
      pre_name = DEFAULT_NAME;
    }
    if (!(pre && pre_name && pre.get(pre_name)))
      return new Error("No proxy encryptor available for this name.");
    var decrypted = pre.get(pre_name).re_decrypt(re_encrypted_message);
    return new Uint8Array(decrypted);
  },
  getPublicKey: function(pre_name) {
    if (pre_name === void 0) {
      pre_name = DEFAULT_NAME;
    }
    if (!pre || !pre_name || !pre.get(pre_name))
      return new Error("No proxy encryptor available for name ".concat(pre_name, "."));
    var publicKey = pre.get(pre_name).public_key();
    if (publicKey.length == 32)
      return publicKey;
    return false;
  }
};
var wasmWallet;
var ed25519 = {
  setWasmWallet: function(w, publicKeyGetter) {
    wasmWallet = w;
  },
  generateKeypair: function() {
    if (!assertReady())
      return new Error("Wallet not connected or initialized. Run connect() and await initialize() first.");
    var keypair = wasmWallet.generate_ed25519_keypair();
    var publicKey = keypair.public();
    var secretKey = keypair.secret();
    return { publicKey, secretKey };
  },
  sign: function(data, dataLayout) {
    if (dataLayout === void 0) {
      dataLayout = {};
    }
    return __awaiter(void 0, void 0, void 0, function() {
      var pre_name, methodName, confirmed, signature;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, assertWallet()];
          case 1:
            _a.sent();
            pre_name = DEFAULT_NAME;
            if (!pre || !pre_name || !pre.get(pre_name))
              return [2, new Error("No signer available.")];
            methodName = "ed25519.sign";
            return [4, getConfig().confirm(methodName, {
              data,
              dataLayout
            })];
          case 2:
            confirmed = _a.sent();
            if (!confirmed)
              return [2, false];
            signature = pre.get(pre_name).sign(new Uint8Array(data));
            return [2, signature];
        }
      });
    });
  },
  verify: function(public_key, message, signature, opts) {
    var verified = wallet.verify(new Uint8Array(public_key), new Uint8Array(message), new Uint8Array(signature));
    return verified;
  },
  didProvider: function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2];
      });
    });
  }
};
var STAY_CONNECTED = "STAY_CONNECTED";
new TextDecoder();
var connected = false;
var config = {};
var setConfig = function(key, value) {
  config[key] = value;
};
var getConfig = function() {
  return config;
};
var handlers = {
  setConfig,
  getConfig,
  config,
  ed25519,
  arweaveWalletAPI,
  proxcryptor,
  connect: function(origin) {
    return __awaiter(void 0, void 0, void 0, function() {
      var config2, confirmed;
      return __generator(this, function(_a) {
        config2 = getConfig();
        if (!typeof config2.confirm === "function")
          return [2, new Error("User must provide a confirm function to the handler using setConfig(confirmFn) ")];
        try {
          confirmed = sessionStorage.getItem(STAY_CONNECTED) == "true" || config2.confirm("connect", { origin });
          if (!confirmed)
            return [2, new Error("User disallowed connection from origin ".concat(origin))];
          connected = true;
        } catch (error) {
        }
        return [2];
      });
    });
  },
  stayConnected: function() {
    window.sessionStorage.setItem(STAY_CONNECTED, "true");
  },
  getPublicKey: function(pre_name) {
    if (pre_name === void 0) {
      pre_name = DEFAULT_NAME;
    }
    return proxcryptor.getPublicKey(pre_name);
  }
};
const CONSTANTS = {
  OPENED_SIGNAL: "OPENED",
  KEYS_SYNC: "KEYS_SYNC",
  WINDOW_SYNC: "WINDOW_SYNC",
  SAVED_KEYS: "__SAVED_KEY",
  CLOSING: "CLOSING"
};
var Connection = function() {
  function Connection2() {
  }
  Connection2.prototype.init = function(optHandlers) {
    return __awaiter(this, void 0, void 0, function() {
      var connection, parent2;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            connection = connectToParent({
              methods: __assign(__assign({}, handlers), optHandlers)
            });
            return [4, connection.promise];
          case 1:
            parent2 = _a.sent();
            return [2, parent2];
        }
      });
    });
  };
  return Connection2;
}();
export { CONSTANTS, Connection, handlers, index as internals };
//# sourceMappingURL=index-2d18a6e1.js.map