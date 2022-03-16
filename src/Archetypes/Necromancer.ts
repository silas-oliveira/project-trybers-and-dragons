import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static counter = 0;
  type: EnergyType;
  constructor(name: string) {
    super(name);
    this.type = 'mana';
    Necromancer.counter += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this.type;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.counter;
  }
}

export default Necromancer;
