import { Readable } from "node:stream";

export interface File {
  fieldname: string;
  originalName: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  stream?: Readable;
  buffer?: Buffer;
}
