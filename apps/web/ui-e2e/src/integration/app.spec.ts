import { getGreeting } from '../support/app.po'

describe('ui', () => {
  beforeEach(() => cy.login('my-email@something.com', 'myPassword'))

  it('should display welcome message', () => {
    cy.visit('/')
    getGreeting().contains('Teste')
  })

  it('should display contact message', () => {
    cy.visit('/contact')
    getGreeting().contains('Contato')
  })
})
