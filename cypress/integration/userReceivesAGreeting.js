describe ('user receives a greeting message', () => {
    it ('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#quote').click()
    })
    it ('displays a greeting message', () => {
        cy.get('#message').should('contain', 'hello how are you')
    })
}) 