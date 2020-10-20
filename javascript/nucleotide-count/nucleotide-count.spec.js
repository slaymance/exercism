import { parse } from './nucleotide-count';

describe('count all nucleotides in a strand', () => {
  test('empty strand', () => {
    expect(parse('')).toEqual('0 0 0 0');
  });

  test('can count one nucleotide in single-character input', () => {
    expect(parse('G')).toEqual('0 0 1 0');
  });

  test('strand with repeated nucleotide', () => {
    expect(parse('GGGGGGG')).toEqual('0 0 7 0');
  });

  test('strand with multiple nucleotides', () => {
    expect(parse('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC')).toEqual('20 12 17 21');
  });

  test('strand with invalid nucleotides', () => {
    expect(() => parse('AGXXACT')).toThrow(new Error('Invalid nucleotide in strand'));
  });
});
