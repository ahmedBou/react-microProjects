import React from 'react'
import { shallow } from 'enzyme'

const MockConsumer = () => (<div id="MockConsumer" />)
const MockProvider = () => (<div id="MockProvider" />)


describe('App', () => {

  let App
  let GameContext
  let wrapper
  
  it('instantiates context provider @instantiate-context-provider', () => {

    try {
      GameContext = require('../../refactor/GameContext')
      GameContext.default = {
        Consumer: MockConsumer, 
        Provider: MockProvider
      }

      App = require('../../refactor/components/App').default
      wrapper = shallow(<App />)
    } catch(error) {
      expect(false,  'Did you copy over the src directory into a new directory refactor?').toBe(true)
    }


    const contextProvider = wrapper.find(MockProvider) 

    expect(contextProvider.exists(), 'Did you instantiate the GameContext.Provider?').toBeTruthy()
    expect(contextProvider.props().value, 'Did you pass the state object to the provider as value?').toEqual({
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    })
    expect(contextProvider.children(), 'Did you wrap the OptionsPanel and the Board?').toHaveLength(2)
  })
})
