/**
 * Mongoose helper @do-lash
 * Suraj Mandal
 */

/**
 * From {key: value} to {parentKey.$.key: value}
 * @param arrKey: string
 * @param editObj: {key: value,...}
 */

mongo.prepareArrObjForEdit = (arrayKey: string, editObj: Object) => {
  const newObj: any = {};
  for (const [key, value] of Object.entries(editObj)) {
    if (key !== ('_id' || 'createdAt' || 'updatedAt')) newObj[`${arrayKey}.$.${key}`] = value;
  }
  return newObj;
};

export function mongo() { }
