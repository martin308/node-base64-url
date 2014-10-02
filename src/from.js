"use strict";

function fromBase64WebSafeString(base64WebSafe) {
    var padding = Array(5 - base64WebSafe.length % 4).join('=');
    base64WebSafe = base64WebSafe.replace(/-/gi, '+').replace(/_/gi, '/').concat(padding);
    return base64WebSafe;
}

module.exports = fromBase64WebSafeString;
