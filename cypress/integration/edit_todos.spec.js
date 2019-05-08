describe('Edit Todos', () => {
    it('Completes a todo', () => {
      cy.visit('/');
      cy.get('.todos')
        .find('i#done')
        .first()
        .click();
      cy.get('.todos')
        .first()
        .find('p')
        .should('have.css', 'text-decoration');
    });
    it('Edits a todo', () => {
      const editText = 'Edited todo';
      cy.visit('/');
      cy.get('.todos')
        .find('i#edit')
        .first()
        .click();
      cy.get('.todos')
        .first()
        .find('input')
        .should('exist')
        .clear()
        .type(editText)
        .type('{enter}');
      cy.get('.todos')
        .first()
        .contains(editText);
    });
    it('Deletes a todo', () => {
      cy.visit('/');
      cy.get('.todos')
        .find('i#delete')
        .first()
        .click();
      cy.get('.todos').should('have.length', 3);
    });
  });