
  describe('Add New Employee', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
    });
  
    it('should add a new employee', () => {
      cy.get('a[href*="pim/viewPimModule"]').click();  
      cy.wait(2000) 
      cy.get('button.oxd-button').contains('Add').click();  
      cy.wait(2000) 
      cy.get('input[name="firstName"]').type('Ahmed');
      cy.wait(2000) 
      cy.get('input[name="lastName"]').type('Almutairi');
      
      cy.get('button[type="submit"]').click();
  
      // التحقق من أن الموظف تمت إضافته
      cy.get('.oxd-toast-content').should('contain', 'Successfully Saved');
      cy.wait(2000);
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click(); 
      cy.wait(2000);
      cy.get('.oxd-calendar-selector-year-selected > .oxd-icon').click();
      cy.wait(2000);
      cy.get('.oxd-calendar-dropdown > :nth-child(5)').click();
      cy.get(':nth-child(25) > .oxd-calendar-date').click();
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
      cy.wait(2000);
      cy.get(':nth-child(6) > .oxd-calendar-date').click();
      cy.wait(2000);
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
      cy.wait(2000);
      cy.get('.oxd-select-dropdown > :nth-child(4)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Testing');
      cy.get('.orangehrm-custom-fields > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click();
      cy.get('.employee-image').click();
      cy.get('.oxd-file-div > .oxd-icon-button').click()
    });


  });
  