import { HttpHelper } from "../../../../shared/presentation/helpers";
import {
  Controller,
  HttpResponse,
} from "../../../../shared/presentation/protocols";
import { ListCategoriesService } from "./service";

export class ListCategoriesController implements Controller {
  constructor(private listCategoryService: ListCategoriesService) {}
  async handle(): Promise<HttpResponse> {
    const categories = await this.listCategoryService.execute();
    return HttpHelper.ok(categories);
  }
}
