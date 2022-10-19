import React from 'react'
import { mount, shallow } from 'enzyme'

const mockHandler = jest.fn()
const MockConsumer = (props) => (
  <div id="MockConsumer">{props.children({numTiles: 99, handleNumTileChange: mockHandler})}</div>
)
const MockProvider = () => (<div id="MockProvider" />)


describe('TileSelector', () => {

  let TileSelector
  let GameContext
  let useHover
  let wrapper
  
  it('instantiates context consumer @context-tile-selector', () => {
    try {
      GameContext = require('../../refactor/GameContext')
      GameContext.default = {
        Consumer: MockConsumer, 
        Provider: MockProvider
      }

      useHover = require('../../refactor/hooks')
      useHover.default = jest.fn()
      useHover.default.mockReturnValue([() => 'ref', true])

      TileSelector = require('../../refactor/components/TileSelector').default
      wrapper = shallow(<TileSelector />)
    } catch(error) {
      expect(false,  'Did you copy over the src directory into a new directory refactor?').toBe(true)
    }


    const contextConsumer = wrapper.find(MockConsumer) 

    expect(contextConsumer.exists(), 'Did you instantiate the GameContext.Consumer?').toBeTruthy()
    expect(contextConsumer.children(), 'Did you wrap the right content in the Consumer?').toHaveLength(1)

    const newWrapper = mount(<TileSelector />)

    expect(newWrapper.find('.tileSelectorDropdown').text(), 'Did you remember to use the argument instead of props for numTiles?').toContain('99')
     
    newWrapper.find('.number').at(0).props().onClick()
    expect(mockHandler, 'Did you remember to use the argument instead of props for handleNumTileChange?').toHaveBeenCalledWith(4)

    newWrapper.find('.number').at(1).props().onClick()
    expect(mockHandler, 'Did you remember to use the argument instead of props for handleNumTileChange?').toHaveBeenCalledWith(16)

    newWrapper.find('.number').at(2).props().onClick()
    expect(mockHandler, 'Did you remember to use the argument instead of props for handleNumTileChange?').toHaveBeenCalledWith(36)
  })
})
