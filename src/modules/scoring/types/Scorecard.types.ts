export const variableOptions = [
  'varsta',
  'venit',
  'sector',
  'istorice',
  'kyc',
] as const;

export const typesOptions = ['numeric', 'enum', 'boolean'] as const;

export type Rule = {
  condition: string;
  score: number;
};

export type Variable = {
  id: string;
  name: 'varsta' | 'venit' | 'sector' | 'istorice' | 'kyc';
  type: 'numeric' | 'enum' | 'boolean';
  weight: number;
  active: boolean;
  rules: Rule[];
  booleanV?: 'true' | 'false';
};

export type PropsModal = {
  onClose: () => void;
  onSave: (variable: Variable) => void;
  initialVariable?: Variable | null;
};
