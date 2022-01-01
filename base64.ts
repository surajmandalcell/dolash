/**
 * Base64 helper @do-lash
 * Suraj Mandal
 */

/**
 * From base64 to regular string
 * @param str string
 */
base64.from = (str: string) => {
  const buff = Buffer.from(str, 'base64');
  return buff.toString('utf-8');
};

/**
 * From base64 to regular string
 * @param str string
 */
base64.to = (str: string): string => {
  const buff = Buffer.from(str);
  return buff.toString('base64');
};

export function base64() { }