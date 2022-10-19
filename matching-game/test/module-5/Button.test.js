import React from 'react'
import { shallow, mount } from 'enzyme'

const mockHandler = jest.fn()
const MockConsumer = (props) => (
  <div id="MockConsumer">
    {props.children({playing: true, startGame: mockHandler})}
  </div>
)
const MockProvider = () => (<div id="MockProvider" />)


describe('Button', () => {

  let Button
  let GameContext
  let wrapper
  
  it('instantiates context consumer @context-button', () => {
    try {
      GameContext = require('../../refactor/GameContext')
      GameContext.default = {
        Consumer: MockConsumer, 
        Provider: MockProvider
      }
    Button = require('../../refactor/components/Button').default
    wrapper = shallow(<Button />)
    } catch(error) {
      expect(false,  'Did you copy over the src directory into a new directory refactor?').toBe(true)
    }


    const contextConsumer = wrapper.find(MockConsumer) 
    contextConsumer.debug()

    expect(contextConsumer.exists(), 'Did you instantiate the GameContext.Consumer??').toBeTruthy()
    expect(contextConsumer.children(), 'Did you wrap the button in the Consumer?').toHaveLength(1)

    const newWrapper = mount(<Button />)
    
    expect(newWrapper.text(), 'Did you convert the playing prop to use the context argument?').toContain('reset')

    
    newWrapper.find('button').props().onClick()
    expect(mockHandler, 'Did you convert the startGame prop to use the context argument?').toHaveBeenCalled()
  })
})

