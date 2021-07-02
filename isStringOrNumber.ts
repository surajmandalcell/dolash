/**
 * #### Returns `number` if `string` passed is valid `number`,
 * #### else returns `string`
 *
 * @param err any type of data/variable
 *
 * Sign: SurajMandal
 *
 * Website: surajmandal.in
 *
 * ts: true
 */
export function isStringOrNumber(prop: string | number): number | string {
  const _prop = prop.toString();
  if (!isNaN(parseFloat(_prop)) && !isNaN(+prop)) return parseFloat(_prop);
  else return _prop;
}