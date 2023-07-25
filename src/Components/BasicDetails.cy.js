import React from 'react'
import BasicDetails from './BasicDetails'

describe('<BasicDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BasicDetails />)
  })
})