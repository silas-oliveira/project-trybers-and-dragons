import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static counter = 0;
  type: EnergyType;
  constructor(name: string) {
    super(name);
    this.type = 'stamina';
    Warrior.counter += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this.type;
  }

  static createdArchetypeInstances(): number {
    return Warrior.counter;
  }
}

export default Warrior;
