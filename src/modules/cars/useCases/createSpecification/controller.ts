import {
  Controller,
  HttpResponse,
} from "../../../../shared/presentation/protocols";
import { HttpHelper } from "../../../../shared/presentation/helpers";
import { CreateSpecificationService } from "./service";

export class CreateSpecificationController implements Controller {
  constructor(private createSpecificationService: CreateSpecificationService) {}
  async handle(
    request: SpecificationController.Request
  ): Promise<HttpResponse> {
    const category = await this.createSpecificationService.execute(request);
    return HttpHelper.created(category);
  }
}

export namespace SpecificationController {
  export type Request = {
    description: string;
    name: string;
    id?: string;
  };
}
