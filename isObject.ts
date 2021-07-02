/**
 * ## Checks if passed value is type of object(not default javascript typeof)
 *
 * Cases handled, checks for null & array seperately(typeof error)
 *
 * @param err any type of data/variable
 *
 * Sign: SurajMandal
 *
 * Website: surajmandal.in
 *
 * ts: true
 */
export function isObject(prop: any): boolean {
  return prop !== null && typeof prop === 'object' && !Array.isArray(prop);
}
