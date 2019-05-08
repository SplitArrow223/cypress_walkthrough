describe('Input form', () => {
    const textInput = 'Kick Alex'
    it('Accepts user input', () => {
        cy.visit('/')
        cy.get('[data-cy-input]')
          .type(textInput)
          .should('have.value', textInput)
    });
    it('Submits new todo', () => {
        cy.visit('/')
        cy.get('[data-cy-input]')
          .type(textInput)
          .type('{enter}')
          .should('have.value', '')

        cy.get('[data-cy-input]').type(textInput)
        cy.get('[data-cy-submit]').click()
        cy.get('[data-cy-input]').should('have.value', '')

        cy.get('.todos')
        .should('be.visible')
        .should('have.length', 6)
        .eq(-1)
        .should('contain', textInput);
    })
})