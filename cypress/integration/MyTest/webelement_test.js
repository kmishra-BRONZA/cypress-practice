describe('launch my app', () => {

    it('app testing', () => {
        cy.visit('https://www.google.com')
        // cy.contains('Platform')
        // cy.contains('CONTACT SITE').click()
        // cy.url().should('include', '/platform')
    })

    it('testing google site', ()=> {
        cy.visit('https://www.google.com')
        cy.screenshot()
    })
})