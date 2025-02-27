
  it('الرابط', () => {
    cy.visit('https://platform.rekaz.dev/');

    // Login
    cy.get('#LoginInput_UserNameOrEmailAddress').should('be.visible').type('esee22222@gmail.com');
    cy.get('#LoginInput_Password').type('Aa123456');
    cy.get('.btn-dark').click();

    cy.wait(1000);

    cy.get(':nth-child(8) > .menu-link').click();
    cy.get('#AbpContentToolbar > .align-items-center > .btn').click();

    cy.wait(1000);

    cy.get('#CouponModel_Code').type('TestRekaz');
    cy.get('.mb-5 > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').should('be.visible').click();
    cy.get('[role="group"] > .select2-results__options > .select2-results__option').should('be.visible').click();
    cy.get('.row > :nth-child(1) > .btn').click();
    cy.get('#discount_fixed > #CouponModel_DiscountValue').clear().type('200');
    
    cy.wait(1000);
    
    cy.get('#CouponModel_TotalUsageForAll').type('20');
    cy.get('#CouponModel_TotalUsagePerCustomer').type('10');
    cy.get('#CouponModel_MinimumCartAmount').type('30');
    cy.wait(1000);
    
   //     التاريخ
    cy.get('#form_date_picker').click();

    cy.wait(500); 

    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > [aria-label="January 26, 2025"]').click();

    cy.get('#to_date_picker').click();
    cy.get('[aria-label="February 16, 2025"]').click();

    cy.get('#btn-submit').click();  
    cy.wait(1000);


    cy.get('.flex-md-row > .px-2').click(); 

    // cy.visit('https://rekaz.dev/cypress');


  })



  




