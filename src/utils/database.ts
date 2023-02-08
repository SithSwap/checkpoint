import pluralize from 'pluralize';

export const getTableName = (name: string) => {
  if (name === '_metadata') return '_metadatas';

  return pluralize(name);
};

export const checkPluralS = (name: string) => {
  if (name[name.length - 1] === 's') {
    return name;
  }
  return name + 's';
};
