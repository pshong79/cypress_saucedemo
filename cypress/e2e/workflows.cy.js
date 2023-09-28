// When creating this script, an initial issue was that https://www.saucedemo.com would not load
// and error out with the error: "Your page did not fire its load event within 60000ms".
//
// After some digging, on the Cypress.io Github issues page, this solution was implemented:
// https://github.com/cypress-io/cypress/issues/27501#issuecomment-1722403606
// The solution was to delete the "~/Library/Application Support/Cypress/cy/production/browsers/
// chrome-stable/interactive/Default/Service Worker/CacheStorage" directory.

describe('workflows', () => {
  let username = 'standard_user'
  let password = 'secret_sauce'

  beforeEach(() => {
    cy.visit('/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
  })

  afterEach(() => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
  })

  context('cart', () => {
    it('add items', () => {
      // Check initial state
      cy.get('.shopping_cart_badge').should('not.exist')

      // Add item 1
      cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
      cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').should('not.exist')
      cy.get('#remove-sauce-labs-bolt-t-shirt').should('exist')
      cy.get('.shopping_cart_badge').should('contain', '1')

      // Add item 2
      cy.get('#add-to-cart-sauce-labs-onesie').click()
      cy.get('#add-to-cart-sauce-labs-onesie').should('not.exist')
      cy.get('#remove-sauce-labs-onesie').should('exist')
      cy.get('.shopping_cart_badge').should('contain', '2')
    })

    it('remove all items', () => {
      // Set and check initial state
      cy.get('#add-to-cart-sauce-labs-bike-light').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      cy.get('.shopping_cart_badge').should('contain', '2')

      // Remove item 1
      cy.get('#remove-sauce-labs-backpack').click()
      cy.get('#remove-sauce-labs-backpack').should('not.exist')
      cy.get('#add-to-cart-sauce-labs-backpack').should('exist')
      cy.get('.shopping_cart_badge').should('contain', '1')

      // Remove item 2
      cy.get('#remove-sauce-labs-bike-light').click()
      cy.get('#remove-sauce-labs-bike-light').should('not.exist')
      cy.get('#add-to-cart-sauce-labs-bike-light').should('exist')
      cy.get('.shopping_cart_badge').should('not.exist')
    })
  })
})
