export type IdTokenError =
  | "INVALID_ISS"
  | "INVALID_AUD"
  | "INVALID_ALG_HEADER"
  | "INVALID_SIGNATURE"
  | "TOKEN_EXPIRED"
  | "TOKEN_NOT_VALID_YET"
  | "NONCE_NOT_MATCHING"
  | "INCORRECT_VOT";