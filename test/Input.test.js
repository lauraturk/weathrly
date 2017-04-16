import { shallow, mount, render } from 'enzyme'
import Input from '../lib/Input'
import React from 'react'
import { expect } from 'chai'
import { Component } from 'react'

describe('Input: ', () => {
  //
  // beforeEach( () => {
  //   const wrapper = shallow(<Input />)
  //   console.log(debug())
  // })

  it('should instantiate with a nav bar', () => {
    const wrapper = shallow(<Input />)
    // console.log(wrapper.debug())
    expect(wrapper.is('nav')).to.equal(true)
  })

  it('should instantiate with a input, submit button, and drop down menu', () => {
    const wrapper = shallow(<Input />)

    expect(wrapper.containsMatchingElement([<input></input>])).to.equal(true)
    expect(wrapper.containsMatchingElement([<button></button>])).to.equal(true)
    expect(wrapper.containsMatchingElement([<select></select>])).to.equal(true)
  })

})
