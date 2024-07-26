import crypto from "crypto";

function hmac_rawurlsafe_base64_string(distinct_id, secret) {
  const hash = crypto
    .createHmac("sha256", secret)
    .update(distinct_id)
    .digest("base64url");
  return hash.trimEnd("=");
}

console.log(hmac_rawurlsafe_base64_string("todo-react","yuKicXFP_jNGlJKBYl9XCPn1b7GfVCrCPLYLzk5R3bI"))
