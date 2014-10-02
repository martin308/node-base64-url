"use strict";

function toBase64WebSafeString(base64) {
  return base64.replace(/\+/gi, '-').replace(/\//gi, '_').replace(/=/gi, '');
}

module.exports = toBase64WebSafeString;
