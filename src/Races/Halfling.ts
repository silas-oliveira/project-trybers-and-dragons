import Race from './Race';

class Halfling extends Race {
  static counter = 0;
  maxLife: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 60;
    Halfling.counter += 1;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  static createdRacesInstances(): void | number {
    return Halfling.counter;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}

export default Halfling;
