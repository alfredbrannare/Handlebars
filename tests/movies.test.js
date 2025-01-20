import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from '../server.js';

// test('Home page shows list of movies', () => {

// });

describe('Home Page Movie Display', () => {
  describe('Home page shows list of movies', () => {
    it('returns true when undefined', () => {
      const data = mockChallengeData();
      const filter = new TypeFilter();
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });
  });
});
