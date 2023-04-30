/**
 * isStringOrNumber helper @do-lash
 * Suraj Mandal
 * surajmandal.in
 */

/**
 * #### Returns `number` if `string` passed is valid `number`,
 * #### else returns `string`
 *
 * @param err any type of data/variable
 */
export function isStringOrNumber(prop: string | number): number | string {
  const _prop = prop.toString();
  if (!isNaN(parseFloat(_prop)) && !isNaN(+prop)) return parseFloat(_prop);
  else return _prop;
}