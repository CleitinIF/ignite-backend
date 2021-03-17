export class UnauthorizedError extends Error {
  public details: any;

  constructor(details: any) {
    super("Unauthorized");
    this.name = "UnauthorizedError";
    this.details = details;
  }
}
