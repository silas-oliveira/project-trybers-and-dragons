import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static counter = 0;
  type: EnergyType;
  constructor(name: string) {
    super(name);
    this.type = 'stamina';
    Ranger.counter += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this.type;
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }
}

export default Ranger;
