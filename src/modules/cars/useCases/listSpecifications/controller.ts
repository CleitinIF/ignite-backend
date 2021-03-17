import { HttpHelper } from "../../../../shared/presentation/helpers";
import {
  Controller,
  HttpResponse,
} from "../../../../shared/presentation/protocols";
import { ListSpecificationsService } from "./service";

export class ListSpecificationsController implements Controller {
  constructor(private listSpecificationsService: ListSpecificationsService) {}
  async handle(): Promise<HttpResponse> {
    const specifications = await this.listSpecificationsService.execute();
    return HttpHelper.ok(specifications);
  }
}
