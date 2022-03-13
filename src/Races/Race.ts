abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
    Race.createdRacesInstances();
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
