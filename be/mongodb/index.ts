/**
 * Mongoose helper @do-lash
 * Suraj Mandal
 * surajmandal.in
 */

interface IObj {
  [key: string]: any;
}

/**
 * From {key: value} to {parentKey.$.key: value}
 * @param arrayKey: string
 * @param editObj: {key: value,...}
 */
const prepareArrObjForEdit = (arrayKey: string, editObj: IObj) => {
  const resultObj: IObj = {};
  const excludedKeys = new Set(["_id", "createdAt", "updatedAt"]);
  for (const key of Object.keys(editObj)) {
    if (!excludedKeys.has(key)) {
      resultObj[`${arrayKey}.$.${key}`] = editObj[key];
    }
  }
  return resultObj;
};

export { prepareArrObjForEdit };
