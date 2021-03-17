import {
  Controller,
  HttpResponse,
} from "../../../../shared/presentation/protocols";
import { HttpHelper } from "../../../../shared/presentation/helpers";
import { CreateCategoryService } from "./service";

export class CreateCategoryController implements Controller {
  constructor(private createCategoryService: CreateCategoryService) {}
  async handle(request: CategoryController.Request): Promise<HttpResponse> {
    const category = await this.createCategoryService.execute(request);
    return HttpHelper.created(category);
  }
}

export namespace CategoryController {
  export type Request = {
    description: string;
    name: string;
    id?: string;
  };
}
