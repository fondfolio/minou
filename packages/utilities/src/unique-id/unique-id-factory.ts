type IdGenerator = () => string;
type IdGeneratorFactory = (prefix: string) => IdGenerator;

export class UniqueIdFactory {
  private readonly idGeneratorFactory: IdGeneratorFactory;

  private idGenerators: Record<string, IdGenerator> = {};

  constructor(idGeneratorFactory: IdGeneratorFactory) {
    this.idGeneratorFactory = idGeneratorFactory;
  }

  nextId(prefix: string) {
    this.idGenerators[prefix] = this.idGeneratorFactory(prefix);

    return this.idGenerators[prefix]();
  }
}

export function globalIdGeneratorFactory(prefix = '') {
  let index = 1;
  return () => `Polaris${prefix}${index++}`;
}
