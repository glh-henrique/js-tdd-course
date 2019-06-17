/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { expect } from 'chai';
import {
  div, sum, sub, mult,
} from '../src/main';

describe('Calc', () => {
  describe('Smoke Tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.instanceOf(Function);
    });
    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.instanceOf(Function);
    });
    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.instanceOf(Function);
    });
    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a.instanceOf(Function);
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });
  describe('Sub', () => {
    it('should return 4 when `Sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `Sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `Mult(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 2 when `Mult(4,2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `Não é possivel divisão por zero` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possivel divisão por zero!');
    });
  });
});
