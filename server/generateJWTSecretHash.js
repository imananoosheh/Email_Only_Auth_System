/**
 * TO GENERATE SECRET CODE FOR JWT
 **/
function generateJWTSecret() {
    crypto.subtle
        .generateKey(
            {
                name: "HMAC",
                hash: { name: "SHA-256" },
            },
            true,
            ["sign", "verify"]
        )
        .then((key) => {
            crypto.subtle.exportKey("jwk", key).then((exported) => {
                console.log(exported.k);
            });
        });
}