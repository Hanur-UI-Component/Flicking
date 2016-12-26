import Calculator from '../src/calculator'

describe('Calculator', function() {
  describe('add()', function(){
    it('1 + 2 = 3', function(){
      const calculator = new Calculator()

      expect(calculator.add(1, 2)).toBe(3)
    })
  })
})