import { v4 as uuid } from 'uuid';

interface CategoryConstructor {
  id?: string;
  name: string;
  description: string;
}

export class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ id, name, description }: CategoryConstructor) {
    this.id = id || uuid();
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}