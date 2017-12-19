#!/usr/bin/env node

const IlpPacket = require('ilp-packet')

const encoded = process.argv[process.argv.length - 1]
const decoded = IlpPacket.deserializeIlpPacket(Buffer.from(encoded, 'base64'))
console.log(JSON.stringify(decoded))
