describe('store-ui-shared: Header component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?path=/story/header--primary&args=title:Game Store')
  );

  it('should render the component', () => {
    cy.get('.MuiTypography-root').should('contain', 'Game Store');
  });
});
