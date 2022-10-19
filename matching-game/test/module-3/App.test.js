import React from 'react'

import App from '../../src/components/App'
import { createTiles } from '../../src/misc/utils'

import { shallow } from 'enzyme'

describe('App', () => {
  const wrapper = shallow(<App />)
  const instance = wrapper.instance()

  it('Has a handleTileClicked method @create-handle-tile-clicked', () => {
    expect(typeof instance.handleTileClicked, 'Did you create the handleTileClicked method on App?')
      .toEqual('function')
  })

  it('calls setState @set-the-state', () => {
    const setStateSpy = jest.spyOn(App.prototype, 'setState')
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    instance.setState({tiles: [{id: 1, color: '#'}]})
    const tiles = instance.state.tiles

    let mockCall
    let cleared
    let mockTiles

    try {
      instance.handleTileClicked(tiles[0].id, tiles[0].color)
      mockCall = setStateSpy.mock.calls[1][0]
      cleared = mockCall.toBeCleared
      mockTiles = mockCall.tiles
    } catch(error) {}

    expect(cleared, 'Did you call setState with the correct values?').toBe(null)
    expect(mockTiles, 'Did you call setState with the correct values?').toEqual(expect.any(Array))
  })

  it('sets the selected tile as the previous tile if its null @find-the-selected-tile', () => {
    const setStateSpy = jest.spyOn(App.prototype, 'setState')
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()

    let tiles
    try {
      instance.startGame(10)
      tiles = instance.state.tiles
      instance.handleTileClicked(tiles[5].id, tiles[5].color)
    } catch(error) {}
    

    expect(setStateSpy, 'Did you set the previousTileIndex to the selectedTileIndex?')
      .toHaveBeenCalledWith({ previousTileIndex: 5, tiles, toBeCleared: null})

  })

  it('handles matched tiles @handle-matched-tile', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()

    let tiles
    let selectedTile
    let matchingPreviousTileIndex
    let fifthTileMatched
    let matching

    try {
      instance.startGame(10)
      tiles = instance.state.tiles
      selectedTile = tiles[5]

      matchingPreviousTileIndex = instance.state.tiles.findIndex((tile) => {
        return tile.color === selectedTile.color && tile.key !== selectedTile.key
      })

      instance.setState({previousTileIndex: matchingPreviousTileIndex})
      instance.handleTileClicked(selectedTile.id, selectedTile.color)
      tiles = instance.state.tiles
      fifthTileMatched = tiles[5].matched
      matching = tiles[matchingPreviousTileIndex].matched
    } catch (error) {}

    expect(fifthTileMatched, 'Did you set the matched property of the selected tile to true?').toBe(true)
    expect(matching, 'Did you set the matched property of the previous tile to true?').toBe(true)
    expect(instance.state.previousTileIndex).toBe(null)
  })

  it('handles mismatched tiles @handle-mismatched-tile', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    let tiles
    let toBeCleared

    try {
      instance.startGame(10)
      tiles = instance.state.tiles
      instance.setState({previousTileIndex: 0})
      instance.handleTileClicked(tiles[5].id, tiles[5].color)
      tiles = instance.state.tiles
      toBeCleared = instance.state.toBeCleared
    } catch (eror) {}

    expect(toBeCleared, 'Did you add the previous and selected tiles to toBeCleared?')
      .toEqual([0,5])
    expect(instance.state.previousTileIndex, 'Did you set the previousTileIndex to nulll?').toBe(null)

  })

  it('clears mismatched tiles @clear-mismatched-tiles', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    let tiles
    let toBeCleared
    let zeroethSelected
    let firstSelected

    try {
      instance.startGame(10)

      instance.setState((state) => {
        const tiles = state.tiles
        tiles[0].selected = true
        tiles[1].selected = true

        const toBeCleared = [0, 1]
        return { tiles, toBeCleared, previousTileIndex: null }
      })

      tiles = instance.state.tiles
      instance.handleTileClicked(tiles[3].id, tiles[3].color)

      toBeCleared = instance.state.toBeCleared
      zeroethSelected = tiles[0].selected
      firstSelected = tiles[1].selected
    } catch(error) {}

    expect(toBeCleared, 'Did you set toBeCleared to null?').toBe(null)
    expect(zeroethSelected, 'Did you remember to set the first tile in toBeSelected selected property to false?')
      .toBe(false)
    expect(firstSelected, 'Did you remember to set the second tile in toBeSelected selected property to false?')
      .toBe(false)
  })

  it('sets the clicked tile to selected @selected-tile', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    let tiles
    let thirdSelected

    try {
      instance.startGame(10)

      tiles = instance.state.tiles
      instance.handleTileClicked(tiles[3].id, tiles[3].color)
      thirdSelected = tiles[3].selected
    } catch(error) {}

    expect(thirdSelected, 'Did you set the selected property on the clicked tile?').toBe(true)
  })
    
  it('attaches the handleTileClicked method to the tiles in the array @handle-tile-clicked-array', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance()
    let tiles
    let thirdHandler

    try {
      instance.startGame(10)

      tiles = instance.state.tiles
      thirdHandler = tiles[3].handleTileClicked
    } catch(error) {}

    expect(typeof thirdHandler, 'Did you add the handleTileClicked method to the call to createTiles?').toBe('function')
  })
})
