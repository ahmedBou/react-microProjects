import React from 'react'

describe('Refactor', () => {
  it('copies the src directory to a new directory called refactor @copy-app', () => {
    let App
    let Board
    let Button
    let OptionsPanel
    let Tile
    let TileSelector

    try {
      App = require('../../refactor/components/App/App.js')
      Board = require('../../refactor/components/Board/Board.js')
      Button = require('../../refactor/components/Button/Button.js')
      OptionsPanel = require('../../refactor/components/OptionsPanel/OptionsPanel.js')
      Tile = require('../../refactor/components/Tile/Tile.js')
      TileSelector = require('../../refactor/components/TileSelector/TileSelector.js')
    } catch(error) {
      expect(false,  'Did you copy over the src directory into a new directory refactor?').toBe(true)
    }

    expect(App, 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(Board, 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(Button, 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(OptionsPanel, 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(Tile, 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
    expect(TileSelector, 'Did you copy over the src directory into a new directory refactor?').toBeTruthy()
  })
})
