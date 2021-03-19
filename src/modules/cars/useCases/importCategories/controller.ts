import {
  Controller,
  HttpResponse,
} from "../../../../shared/presentation/protocols";
import { HttpHelper } from "../../../../shared/presentation/helpers";
import { ImportCategoriesService } from "./service";
import { File } from "../../../../shared/main/protocols";

export class ImportCategoriesController implements Controller {
  constructor(private createSpecificationService: ImportCategoriesService) {}
  async handle(
    request: ImportCategoriesController.Request
  ): Promise<HttpResponse> {
    const categories = await this.createSpecificationService.execute(request);
    return HttpHelper.created(categories);
  }
}

export namespace ImportCategoriesController {
  export type Request = {
    file: File;
  };
}
