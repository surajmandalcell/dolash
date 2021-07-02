import { isStringOrNumber } from '../isStringOrNumber';

describe('Test required cases for isStringOrNumber', () => {
  test('Valid `number` is `number`', () => {
    expect(isStringOrNumber(123)).toBe(123);
  })
  
  test('`String` with valid `number` is `number`', () => {
    expect(isStringOrNumber('123')).toBe(123);
  })
  
  test('`String` with blanks & `numbers` is `string`', () => {
    expect(isStringOrNumber('123 25')).toBe('123 25');
  })
  
  test('`String` with blanks is `string`', () => {
    expect(isStringOrNumber('123 25')).toBe('123 25');
  })
  
  test('Empty `string` returns empty `string`', () => {
    expect(isStringOrNumber('')).toBe('');
  })
  
  test('`String` with only blanks returns same `string`', () => {
    expect(isStringOrNumber('  ')).toBe('  ');
  })
})