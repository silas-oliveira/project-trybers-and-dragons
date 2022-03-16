import Race from './Race';

class Orc extends Race {
  static counter = 0;
  maxLife: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 74;
    Orc.counter += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static createdRacesInstances(): void | number {
    return Orc.counter;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}

export default Orc;
