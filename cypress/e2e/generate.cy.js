describe('Home Tests', () => {
  const baseUrl = 'http://localhost:5173';
  
  // Test 1: Verify that the logo is displayed on the home page
  it('displays the logo', () => {
    cy.get('img.logo').should('be.visible')
  })
  
  // Test 2: Verify that the tagline is displayed on the home page
  it('displays the tagline', () => {
    cy.get('h3').should('contain', 'Your guided path to programming enlightenment')
  })
  
  // Test 3: Verify that clicking the "Begin Journey" button navigates to the generate page
  it('should navigate to the generate page when Begin Journey is clicked', () => {
    cy.visit(baseUrl);
    cy.contains('Begin Journey').click();
    cy.url().should('include', '/generate');
  });
  
  // Test 4: Verify that the home page displays correctly on mobile devices
  it('should display correctly on mobile', () => {
    cy.viewport('iphone-6');
    cy.visit(baseUrl);
    cy.get('nav').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});