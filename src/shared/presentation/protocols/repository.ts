export abstract class Repository<T> {
  public abstract create(...props: any): T;
  public abstract getAll(...props: any): T[];
  public abstract getByName(name: string): T | undefined;
}
