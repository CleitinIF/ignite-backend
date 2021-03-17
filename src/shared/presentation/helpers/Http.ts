import { HttpResponse } from "../protocols";
import { UnauthorizedError } from "../errors";

export class HttpHelper {
  public static badRequest(body: any): HttpResponse {
    return {
      statusCode: 400,
      body: body,
    };
  }

  public static forbidden(body: any): HttpResponse {
    return {
      statusCode: 403,
      body: body,
    };
  }

  public static unauthorized(body: any): HttpResponse {
    return {
      statusCode: 401,
      body: new UnauthorizedError(body),
    };
  }

  public static serverError(body: any): HttpResponse {
    return {
      statusCode: 500,
      body: body,
    };
  }

  public static ok(data: any): HttpResponse {
    return {
      statusCode: 200,
      body: data,
    };
  }

  public static created(data: any): HttpResponse {
    return {
      statusCode: 201,
      body: data,
    };
  }

  public static noContent(): HttpResponse {
    return {
      statusCode: 204,
      body: null,
    };
  }
}
