import { shallow, mount, render } from 'enzyme'
import Conditions from '../lib/Conditions'
import React from 'react'
import dataResponse from './stub'
import scrubData from '../lib/scrubData'

describe('Conditions', () => {

  it('should render the current Conditions to the dom', () => {
    const cleanData = scrubData(dataResponse).conditions;
    const wrapper = shallow(<Conditions conditions = {cleanData} />);

    expect(typeof(wrapper)).toEqual('object');
  })

  it('should render specific conditions', () => {
    const cleanData = scrubData(dataResponse).conditions;
    const wrapper = shallow(<Conditions conditions = {cleanData} />);
    const found1 = wrapper.find('.condition-status');


    expect(found1.is('.condition-status')).toEqual(true);
    expect(found1.text()).toEqual('Overcast');
  });

  it('should render other specific conditions', () => {
    const cleanData = scrubData(dataResponse).conditions;
    const wrapper = shallow(<Conditions conditions = {cleanData} />);
    const found1 = wrapper.find('.condition-location');

    console.log(wrapper.debug());

    expect(found1.text()).toEqual('San Francisco, CA');
  });

  it('should render even more specific conditions', () => {
    const cleanData = scrubData(dataResponse).conditions
    const wrapper = shallow(<Conditions conditions = {cleanData} />)
    const found1 = wrapper.find('.condition-temp-f')

    expect(found1.text()).toEqual('56.3°')
  })
})
