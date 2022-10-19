import React from 'react'

describe('Game Context', () => {
  React.createContext = jest.fn()
  let GameContext
 
  it('Creates the GameContext @create-game-context', () => {
    try {
      GameContext = require('../../refactor/GameContext')
    } catch(error) {
      expect(false,  'Did you copy over the src directory into a new directory refactor?').toBe(true)
    }

    expect(React.createContext, 'Did you call React.createContext?').toHaveBeenCalled()
  })

  it('Sets default context values @set-default-context', () => {
    try {
      GameContext = require('../../refactor/GameContext')
    } catch(error) {
      expect(false,  'Did you copy over the src directory into a new directory refactor?').toBe(true)
    }
    
    expect(React.createContext, 'Did you set the correct default values?').toHaveBeenCalledWith({
      numTiles: 36,
      playing: false,
      handleNumTileChange: expect.any(Function),
      startPlaying: expect.any(Function)
    })
  })
})
