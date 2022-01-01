/**
 * Basic prettify function
 * 
 * @param input json
 */
prettify.formatObject = (input: any) => {
  return JSON.stringify(input, null, 4);
}

export function prettify() { }