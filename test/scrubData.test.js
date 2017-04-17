import { shallow, mount, render } from 'enzyme'
import scrubData  from '../lib/scrubData'
import dataResponse from './stub.js'
import React from 'react'
import { expect } from 'chai'

describe('scrubData: ', () => {

  it('should return an object', () => {
    expect(typeof(scrubData(dataResponse))).to.deep.equal('object')
  })

  it('should return the ten day forecast highs', () => {
    let tenDay = scrubData(dataResponse).tenDayWeather
    tenDay.forEach( (day, index) => {
      expect(day.high).to.deep.equal(dataResponse.forecast.simpleforecast.forecastday[index].high.fahrenheit)
    })
  })

  it('should return the ten day forecast lows', () => {
    let tenDay = scrubData(dataResponse).tenDayWeather
    tenDay.forEach( (day, index) => {
      expect(day.low).to.deep.equal(dataResponse.forecast.simpleforecast.forecastday[index].low.fahrenheit)
    })
  })


  it.skip('should return the day for each ten day', () => {
    let tenDay = scrubData(dataResponse).tenDayWeather
    tenDay.forEach( (day, index) => {
      expect(day.date).to.deep.equal(dataResponse.forecast.simpleforecast.forecastday[index].high.fahrenheit)
    })
  })

  it('should return current conditions', () => {
    let currentConditions = scrubData(dataResponse).conditions

    expect(currentConditions.status).to.deep.equal(dataResponse.current_observation.weather)

  })

  it('should return the hourly forecast', () => {
    let hourly = scrubData(dataResponse).hourly
    hourly.forEach( (hour, index) => {
      expect(hour.condition).to.deep.equal(dataResponse.hourly_forecast[index].condition)
    })
  })

  it('should return only 7 hours of forecast', () => {
    let hourly = scrubData(dataResponse).hourly
    expect(hourly.length).to.deep.equal(7)
  })

  it('should return the days forecast', () => {
    let currentForecast = scrubData(dataResponse).currentForecast

    expect(currentForecast.high).to.deep.equal(dataResponse.forecast.simpleforecast.forecastday[0].high.fahrenheit)
  })
})
