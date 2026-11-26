import { deflateSync } from "node:zlib";

import type { IconIndex, Image, IndexEntry } from "../lib/marketplace-icons.ts";

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let crc = n;
  for (let bit = 0; bit < 8; bit++) {
    crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  }
  return crc >>> 0;
});

const crc32 = (data: Buffer) => {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
};

export const chunk = (type: string, data: Buffer = Buffer.alloc(0)) => {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "latin1"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
};

export const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

interface Header {
  bitDepth: number;
  colorType: number;
  compression: number;
  filter: number;
  interlace: number;
}

export const ihdr = (width: number, height: number, header: Partial<Header> = {}) => {
  const { bitDepth = 8, colorType = 6, compression = 0, filter = 0, interlace = 0 } = header;
  const data = Buffer.alloc(13);
  data.writeUInt32BE(width, 0);
  data.writeUInt32BE(height, 4);
  data[8] = bitDepth;
  data[9] = colorType;
  data[10] = compression;
  data[11] = filter;
  data[12] = interlace;
  return chunk("IHDR", data);
};

export const idat = (width = 4, height = 4) =>
  chunk("IDAT", deflateSync(Buffer.alloc((width * 4 + 1) * height)));

export const png = (width = 4, height = 4, header: Partial<Header> = {}) =>
  Buffer.concat([PNG_SIGNATURE, ihdr(width, height, header), idat(width, height), chunk("IEND")]);

export const entry = (images: Image[], overrides: Partial<IndexEntry> = {}): IndexEntry => ({
  repository: "owner/repository",
  ref: "v1",
  images,
  checked: Date.now(),
  ...overrides,
});

export const iconIndex = (overrides: Partial<IconIndex> = {}): IconIndex => ({
  updated: new Date().toISOString(),
  domains: {},
  pending: [],
  ...overrides,
});

export const fakeFetch = (handler: (url: string) => Response | Promise<Response>) =>
  (async (input: string | URL | Request) => handler(String(input))) as typeof fetch;
