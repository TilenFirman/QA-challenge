/// <reference types="cypress" />

describe('Test TODO Application', () => {
  beforeEach(() => {
    cy.visit('/')
  })

    const todoItem1 =  'Fractional'
    const todoItem2 = 'Art'
    const todoItem3 = 'NFT'
    const todoItem4 = 'Blockchain'

  it('can add new todo items', () => {
    cy.get('#new-todo').type(`${todoItem1}{enter}`).wait(200)
    cy.get('#new-todo').type(`${todoItem2}{enter}`).wait(200)
    cy.get('#new-todo').type(`${todoItem3}{enter}`).wait(200)
    cy.get('#new-todo').type(`${todoItem4}{enter}`).wait(200)

    cy.get('.view label')
      .should('have.length', 4)
      .last()
      .should('have.text', todoItem4)
      
  })

  it('can check off an item as completed', () => {
    cy.contains(todoItem1)
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.contains(todoItem1)
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    it('can filter for uncompleted tasks', () => {
      cy.contains('Active').click()
      cy.get('#todo-list li')
        .not('.hidden')
        .should('have.length', 3)
        .first()
        .find('label')
        .should('have.text', todoItem2)

      cy.get('#todo-list li.hidden')
        .should('have.length', 1)
        .find('label')
        .should('have.text', todoItem1)
    })

    it('can filter for completed tasks', () => {
      cy.contains('Completed').click()

      cy.get('#todo-list li.completed')
        .should('have.length', 1)
        .find('label')
        .should('have.text', todoItem1)

      cy.get('#todo-list li.hidden')
        .should('have.length', 3)
    })

    it('can delete all completed tasks', () => {
      cy.contains('Clear completed').click()

      cy.get('#todo-list li')
        .should('have.length', 3)
        .should('not.have.text', todoItem1)

      cy.contains('Clear completed').should('not.exist')
    })

    it('can select all unselected tasks and complete them', () => {
      cy.contains('Active').click()

      cy.get('#toggle-all').click()
      cy.get('#todo-list li')
      .should('have.length', 3)
      .should('have.class', 'completed')
    })

    it('can show completed and removes them on click', () => {
      cy.contains('Completed').click()
      
      cy.get('.destroy').each(($button) => {
        cy.wrap($button).click({force:true})
      })
    })
  })
})