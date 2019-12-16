import { inc, dec, rnd} from './actions';
import { mockRandom, resetMockRandom } from 'jest-mock-random';

describe('Actions', () => {
  it ('INC works right', () => {

    expect(inc()).toEqual({type: 'INC'});
  });

  it ('DEC works right', () => {

    expect(dec()).toEqual({type: 'DEC'});
  });

  it ('RND works right', () => {
    mockRandom(0.12);
    expect(rnd()).toEqual({
      type: 'RND',
      payload: Math.floor(Math.random() * 10),
    });

    resetMockRandom();
  });
});
