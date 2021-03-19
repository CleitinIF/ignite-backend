export abstract class Repository<T> {
  public abstract create(...props: any): Promise<T>;
  public abstract getAll(...props: any): Promise<T[]>;
  public abstract getByName(name: string): Promise<T | undefined>;
}
