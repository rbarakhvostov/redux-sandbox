import { mockRandom, resetMockRandom } from 'jest-mock-random';
import reducer from '../reducer';
import { inc, dec, rnd} from '../actions';

describe('Reducer', () => {
  it ('Reducer works correctly with inc()', () => {
    const state = 0;

    expect(reducer(state, inc())).toBe(1);
  });

  it ('Reducer works correctly with dec()', () => {
    const state = 2;

    expect(reducer(state, dec())).toBe(1);
  });

  it ('Reducer works correctly with rnd()', () => {
    const state = 2;
    mockRandom(0.36);

    expect(reducer(state, rnd())).toBe(5);
    
    resetMockRandom();
  });

  it ('Reducer works correctly with default', () => {
    const state = undefined;

    expect(reducer(state, {type: 'DOES_NOT_EXIST'})).toBe(0);

  });
});
