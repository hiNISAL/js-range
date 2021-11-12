/* eslint-disable */

const expect = require('expect.js');

const jrange = require('../src/index.ts').default;

describe('jrange arguments test', function () {
  describe('no arguments', function () {
    it('range()', function () {
      expect(jrange()).to.empty;
    });
  });

  describe('only given "start" argument', function () {
    it('jrange(1)', function () {
      expect(jrange(1)).eql([0]);
    });

    it('jrange(2)', function () {
      expect(jrange(2)).eql([0, 1]);
    });
  });

  describe('same "start" and "end"', function () {
    it('jrange(1, 1)', function () {
      expect(jrange(1, 1)).empty();
    });

    it('jrange(999, 999)', function () {
      expect(jrange(999, 999)).empty();
    });
  });

  describe('given "start" and "end"', function () {
    it('jrange(0, 5)', function () {
      expect(jrange(0, 5)).eql([0, 1, 2, 3, 4]);
    });

    it('jrange(6, 10)', function () {
      expect(jrange(6, 10)).eql([6, 7, 8, 9]);
    });
  });

  describe('step be zero', function () {
    it('jrange(1, 5, 0)', function () {
      expect(jrange(1, 5, 0)).empty();
    });
  });

  describe('positive step and start larger then end', function () {
    it('jrange(10, 2, 6)', function () {
      expect(jrange(10, 2, 6)).empty();
    });
  });

  describe('minus step and start less then end', function () {
    it('jrange(1, 5, -1)', function () {
      expect(jrange(1, 5, -1)).empty();
    });
  });

  describe('normal case', function () {
    it('jrange(1, 5, 2)', function () {
      expect(jrange(1, 5, 2)).eql([1, 3]);
    });

    it('jrange(5, 1)', function () {
      console.log(jrange(5, 1))
      expect(jrange(5, 1)).empty();
    });
  });
});
