/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

/**
 * I feel like the tests don't really match what the instructions talked about. Like, the instructions
 * say that size is r x c, but in the implementation size is just c. It also talks about padding rows with
 * trailing spaces which the tests don't ask for. I don't know, I didn't put much thought into this one.
 */
export class Crypto {
  #normalizedText;

  constructor(text) {
    this.#normalizedText = text.toLowerCase().replace(/\W/g, '');
  }

  normalizePlaintext() {
    return this.#normalizedText;
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
  }

  plaintextSegments() {
    return this.normalizePlaintext().match(new RegExp(`.{1,${this.size()}}`, 'g'));
  }

  ciphertext() {
    const segments = this.plaintextSegments();
    return [...Array(this.size()).keys()]
      .flatMap(col => segments.map((_, row, src) => src[row][col]))
      .join('')
  }
}
