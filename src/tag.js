// @flow
import type {Entity, TXHash, Key} from "./types";
const bcoin = require("bcoin");

const pubKeyArray = [0x04,            // constant 0x04 prefix
  0x54, 0x72, 0x75, 0x73, 0x74, 0x20, 0x69, 0x73,
  0x20, 0x52, 0x69, 0x73, 0x6b, 0x00, 0x00, 0x00,    // 32 bytes with the x coordinate
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,    // containing ASCII "Trust is Risk"
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
                                                     // secp256k1 curve: y^2 = x^3 + 7
  0x05, 0x5d, 0x5f, 0x28, 0x5e, 0xd7, 0x9d, 0x0c,
  0x6f, 0x61, 0xc3, 0x0e, 0xfc, 0x9d, 0x21, 0x91,
  0x65, 0x82, 0x80, 0x59, 0xa6, 0x01, 0x25, 0x0c,    // 32 bytes with the y coordinate
  0x8e, 0xce, 0x18, 0x00, 0x14, 0xde, 0x48, 0x1a];

const tag : {pubKey : Key, address : Entity} = {
  pubKey: Buffer.from(pubKeyArray),

  address: bcoin.primitives.KeyRing.fromPublic(
    Buffer.from(pubKeyArray)).getAddress("base58").toString()
};

module.exports = tag;
