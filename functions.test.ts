const {shuffleArray} = require('./utils')

const fruits = ['oranges', 'grapefruits', 'mandarins', 'limes', 'nectarines', 'apricots', 'peaches', 'plums']

describe('shuffleArray should', () => {
    // CODE HERE
  test("check if shuffleArray returns an array",() =>{
    expect(typeof shuffleArray(fruits)).toBe('array')
  })

  test("check if shuffleArray returns the same amount of objects",() =>{
    expect(shuffleArray(fruits).length).toBe(fruits.length)
  })
})
