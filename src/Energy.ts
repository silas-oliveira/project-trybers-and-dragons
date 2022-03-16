interface Energy {
  amount: number;
  type_: EnergyType;
}

type EnergyType = 'mana' | 'stamina';

export default Energy;

export { EnergyType }; 