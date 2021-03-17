import { v4 as uuid } from "uuid";

interface SpecificationConstructor {
  id?: string;
  name: string;
  description: string;
}

export class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ id, name, description }: SpecificationConstructor) {
    this.id = id || uuid();
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}
