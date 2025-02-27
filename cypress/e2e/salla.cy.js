describe('Sauce Demo - Advanced Cart Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('[data-test="login-button"]').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.url().should('include', '/inventory')
    cy.wait(2000) // انتظار 2 ثانية
  })

  it('should add multiple products to the cart and verify total price', () => {
    const productIndices = [0, 2, 4]
    let total = 0

    productIndices.forEach((index) => {
      cy.get('.inventory_item').eq(index).find('button').click()
      cy.wait(2000) // انتظار 2 ثانية
      cy.get('.inventory_item')
        .eq(index)
        .find('.inventory_item_price')
        .invoke('text')
        .then((priceText) => {
          const price = parseFloat(priceText.replace('$', ''))
          total += price
        })
      cy.wait(2000) // انتظار 2 ثانية
    })

    cy.get('.shopping_cart_badge').should('contain', productIndices.length)
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.shopping_cart_link').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('[data-test="checkout"]').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('[data-test="firstName"]').type('John')
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('[data-test="lastName"]').type('Doe')
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('[data-test="postalCode"]').type('12345')
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('[data-test="continue"]').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.summary_subtotal_label')
      .should('be.visible')
      .invoke('text')
      .then((subtotalText) => {
        const displayedTotal = parseFloat(subtotalText.replace('Item total: $', ''))
        expect(displayedTotal).to.eq(total)
      })
    cy.wait(2000) // انتظار 2 ثانية
  })

  it('should remove a product from the cart', () => {
    cy.get('.inventory_item').eq(1).find('button').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.inventory_item').eq(3).find('button').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.shopping_cart_link').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.cart_item').first().find('.cart_button').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.cart_item').should('have.length', 1)
    cy.wait(2000) // انتظار 2 ثانية
  })

  it('should persist cart items after page reload', () => {
    cy.get('.inventory_item').eq(0).find('button').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.reload()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.shopping_cart_link').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.cart_item').should('have.length', 1)
    cy.wait(2000) // انتظار 2 ثانية
  })

  it('should handle an empty cart correctly', () => {
    cy.get('.inventory_item').eq(5).find('button').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.shopping_cart_link').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.cart_button').click()
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.cart_item').should('not.exist')
    cy.wait(2000) // انتظار 2 ثانية
    cy.get('.shopping_cart_badge').should('not.exist')
    cy.wait(2000) // انتظار 2 ثانية
  })
})