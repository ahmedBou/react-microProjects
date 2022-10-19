import React from 'react'
import useHover from '../../src/hooks'

describe('Building a custom hook', () => {

  const setHovered = jest.fn()
  const mockRef = {
    current: {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    }
  }

  React.useRef = jest.fn()
  React.useRef.mockReturnValue(mockRef)
  React.useState = jest.fn()
  React.useState.mockReturnValue(['hovered', setHovered])
  React.useEffect = jest.fn()


  it('useHover @create-use-hover', () => {
    expect(typeof useHover, 'Did you remember to export useHover?').toBe('function')
  })

  it('calls useRef @create-a-ref', () => {
    try {
      useHover()
    } catch(error) {}

    expect(React.useRef, 'Did you call useRef?').toHaveBeenCalled()
  })

  it('calls useState @use-state-hook', () => {
    try {
      useHover()
    } catch(error) {}

    expect(React.useState, 'Did you call useState?').toHaveBeenCalledWith(false)
  })

  it('returns the ref and hovered state @return-ref', () => {
    let ref
    let hovered
    try {
     [ref, hovered] = useHover()
    } catch(error) {}

    expect(ref, 'Did you return the ref?').toEqual(mockRef)
    expect(hovered, 'Did you return the hovered value?').toEqual('hovered')
  })

  it('calls useEffect @call-use-effect', () => {
    try {
    useHover()
    } catch(error) {}

    expect(React.useEffect, 'Did you call useEffect()?').toHaveBeenCalledWith(expect.any(Function))
  })

  it('returns an anonymous fn @return-anon', () => {
    let ref
    let _
    let anon
    let anotherAnone
    let name

    try {
      [ref, _] = useHover()
      anon = React.useEffect.mock.calls[0][0]
      anotherAnon = anon()
      name = anotherAnon.name
    } catch(error) {}


    expect(typeof anotherAnon, 'Did you return an anonymous function?').toBe('function')
    expect(anotherAnon.name, 'Did you return an anonymous function?').toBe('')
  })

  it('registers a mouseenter event listener @on-mouse-enter', () => {

    expect(mockRef.current.addEventListener, 'Did you add the right event listener?').toHaveBeenCalledWith('mouseenter', expect.any(Function))
  })

  it('registers a mouseleave event listener @on-mouse-leave', () => {

    expect(mockRef.current.addEventListener,  'Did you add the right event listener?').toHaveBeenCalledWith('mouseleave', expect.any(Function))
  })

  it('creates a callback for mouseenter @enter-callback', () => {
    let enter
    let name

    try {
      enter = mockRef.current.addEventListener.mock.calls[0][1]
      name = enter.name
      enter()
    } catch(error) {}

    expect(mockRef.current.addEventListener, 'Did you pass the right event?').toHaveBeenCalledWith('mouseenter', expect.any(Function))
    expect(name, 'Did you name the enter function correctly?').toBe('enter')
    // call to enter was here
    expect(setHovered, 'Did you pass the enter callback to addEventListener?').toHaveBeenCalledWith(true)
  })

  it('creates a callback for mouseleave @leave-callback', () => {
    let leave
    let name

    try {
      leave = mockRef.current.addEventListener.mock.calls[1][1]
      name = leave.name
      leave()
    } catch(error) {}

    expect(mockRef.current.addEventListener, 'Did you pass the right event?').toHaveBeenCalledWith('mouseleave', expect.any(Function))
    expect(name, 'Did you name the leave function correctly?').toBe('leave')
    expect(setHovered,  'Did you pass the leave callback to addEventListener?').toHaveBeenCalledWith(false)
  })

  it('removes the mouseenter event listener @remove-mouseenter', () => {
    let anonCallback
    let anotherAnon
    let enter
    let name

    try {
      anonCallback = React.useEffect.mock.calls[0][0]
      anotherAnon = anonCallback()
      anotherAnon()
      enter = mockRef.current.removeEventListener.mock.calls[0][1]
      name = enter.name
    } catch(error) {}

    expect(mockRef.current.removeEventListener, 'Did you remove the mouseenter event listener?').toHaveBeenCalledWith('mouseenter', expect.any(Function))
    expect(enter.name, 'Did you pass the enter callback to removeEventListener?').toBe('enter')
  })

  it('removes the mouseleave event listener @remove-mouseleave', () => {
    let anonCallback
    let anotherAnon
    let leave
    let name

    try {
      anonCallback = React.useEffect.mock.calls[0][0]
      anotherAnon = anonCallback()
      anotherAnon()
      leave = mockRef.current.removeEventListener.mock.calls[1][1]
      name = leave.name
    } catch(error) {}

    expect(mockRef.current.removeEventListener,  'Did you remove the mouseleave event listener?').toHaveBeenCalledWith('mouseleave', expect.any(Function))
    expect(leave.name,  'Did you pass the leave callback to removeEventListener?').toBe('leave')
  })
})
