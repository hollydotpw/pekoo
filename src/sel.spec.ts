import { expect, describe, it } from 'bun:test';
import sel from './sel';

describe('sel', () => {
  it('should merge two strings with a space', () => {
    expect(sel('alice', 'bob')).toEqual('alice bob');
  });

  it('should filter empty strings', () => {
    expect(sel('alice', '')).toEqual('alice');
  });
});
