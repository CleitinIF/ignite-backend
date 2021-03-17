export interface Service<Req = any, Res = any> {
  execute: (request: Req) => Promise<Res>;
}
