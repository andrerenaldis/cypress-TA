/// <reference types="cypress" />

describe('My first test', () => {
    beforeEach('Open application', () => {
        cy.visit('https://demo.midtrans.com/')
        cy.reload()
    })
    // Input Data
    it('Checkout With Costumer Detail', () => {
        cy.get('.btn.buy').click()
        // Input Name
        cy.get('input[value="Budi"]').clear()
        cy.get('input[value="Budi"]').type('Andre Renaldy')
        // Input Email
        cy.get('input[value="budi@utomo.com"]').clear()
        cy.get('input[value="budi@utomo.com"]').type('andresihombing15@gmail.com')
        // Input Phone Number
        cy.get('input[value="081808466410"]').clear()
        cy.get('input[value="081808466410"]').type('085715631797')
        // Input City
        cy.get('input[value="Jakarta"]').clear()
        cy.get('input[value="Jakarta"]').type('Bekasi')
        // Input Address
        cy.get('textarea').clear()
        cy.get('textarea').type('Mekarsari, Tambun Selatan')
        // Input Postal Code
        cy.get('input[value="10220"]').clear()
        cy.get('input[value="10220"]').type('17510')
        // Checkout
        cy.get('.cart-checkout').click()
        cy.wait(500)

    })

    it('Test QRIS Payment Method', {defaultCommandTimeout: 20000},() => {
        cy.wait(1000)
        cy.get('[class="btn buy"]').click()

        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('[class="cart-checkout"]').click()

        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            
            // Qris
            let stripe = cy.wrap($body)
            stripe.find('[class="logo-border-payment-list"]').eq(15).click()
           

            // Click button "Back to merchant"
            stripe = cy.wrap($body)
            stripe.find('[class="btn full primary"]').click()

    })
        
})

    it('Test Alfamart Payment Method', {defaultCommandTimeout: 20000},() => {
        cy.wait(1000)
        cy.get('[class="btn buy"]').click()

        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('[class="cart-checkout"]').click()

        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            
            // Alfamart
            let stripe = cy.wrap($body)
            stripe.find('[alt="Alfamart"]').click()


                // Detail
                    stripe = cy.wrap($body)
                    stripe.find('[class="pay-instruction-text"]').click()
                    cy.wait(2000)

                   // stripe = cy.wrap($body)
                  //  stripe.find('[class="expiry-countdown-timer"]').click()
                   // cy.wait(2000)

                   // stripe = cy.wrap($body)
                   // stripe.find('[class="order-summary-header"]').should('contain.text', 'Customer details')
                   // cy.wait(2000)

                 // Click button "Back to merchant"

                  // cy.get('[class="modal-iframe"]').then($element=> {
                   // const $body = $element.contents().find('body')
                   // cy.wait(10000)
                  //  stripe = cy.wrap($body)
                  //  stripe.find('[class="cstore-button"]').eq(1).click()
                  //  cy.wait(2000)

                    stripe = cy.wrap($body)
                    stripe.find('[class="btn full primary"]').click()
                  
               // })          
       })
        
    })




    it('Test Shopee Payment Method', {defaultCommandTimeout: 20000},() => {
        cy.wait(1000)
        cy.get('[class="btn buy"]').click()

        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('[class="cart-checkout"]').click()

        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            
            // Shopee
            let stripe = cy.wrap($body)
            stripe.find('[alt="ShopeePay"]').click()

            // Click button "Back to merchant"
            stripe = cy.wrap($body)
            stripe.find('[class="btn full primary"]').click()
        })
        
    })

    it('Test Permata Payment Method', {defaultCommandTimeout: 20000},() => {
        cy.wait(1000)
        cy.get('[class="btn buy"]').click()

        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('[class="cart-checkout"]').click()

        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)

            // Permata
            stripe.find('[alt="Permata"]').click()
            stripe = cy.wrap($body)
            stripe.find('[class="bank-list-layout"]').then(paymentList => {
                cy.get(paymentList).find('[class="bank-list"]').eq(3).then(permata => {
                    cy.get(permata).click()
                    cy.wait(2000)

                    // Click button "Back to merchant"
                    stripe = cy.wrap($body)
                    stripe.find('[class="btn full primary"]').click()
                })
            })
        })  
    })

    it('Test BRImo Payment Method', {defaultCommandTimeout: 20000},() => {
        cy.wait(1000)
        cy.get('[class="btn buy"]').click()

        cy.get('[class="cart-content buying"]').should('be.visible')
        cy.get('[class="cart-checkout"]').click()

        cy.get('[id="snap-midtrans"]').then($element=> {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)

            // BRI
            stripe.find('[alt="BRI"]').click()
            stripe = cy.wrap($body)
            stripe.find('[class="bank-list-layout"]').then(paymentList => {
                cy.get(paymentList).find('[class="bank-list"]').eq(4).then(bri => {
                    cy.get(bri).click()
                    cy.wait(2000)

                    // Instruction
                    stripe = cy.wrap($body)
                    stripe.find('[class="pay-instruction-text"]').click()
                    cy.wait(2000)

                    // Select ATM option
                    stripe = cy.wrap($body)
                    stripe.find('[class="content pay-instruction opened"]').then(instructionList => {
                        cy.get(instructionList).find('[class="collapsible instruction"]').eq(2).then(atm => {
                            cy.get(atm).find('[class="float-right"]').click()
                            cy.wait(2000)

                            // Click button "Back to merchant"
                            stripe = cy.wrap($body)
                            stripe.find('[class="btn full primary"]').click()
                        })
                    })
                })
            })
        })  
    })
})
