import { expect, describe, it } from 'bun:test';
import slugify from './slugify';

describe('slugify', () => {
  it('should convert special characters', () => {
    expect(slugify('ñññ')).toEqual('nnn');
  });

  it('should allow normal characters', () => {
    expect(slugify('abc')).toEqual('abc');
  });
});
