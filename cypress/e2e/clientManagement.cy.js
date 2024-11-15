describe('Gerenciamento de Clientes', () => {
    beforeEach(() => {
      // Navega para a aplicação antes de cada teste
      cy.visit('http://localhost:5173');
    });

    it('Devo Digitar o meu nome?', () => {
        //Digita nome
        cy.get('input[placeholder="Digite seu nome"]').type('Cliente Teste');
        cy.type({enter})
    })
  
    it('Deve adicionar um novo cliente', () => {
      cy.contains('Adicionar Cliente').click();
  
      // Preenche o formulário da modal
      cy.get('input[placeholder="Nome"]').type('Cliente Teste');
      cy.get('input[placeholder="Salário"]').type('5000');
      cy.get('input[placeholder="Empresa"]').type('Empresa X');
      cy.contains('Confirmar').click();
  
      // Verifica se o cliente foi adicionado
      cy.contains('Cliente Teste').should('exist');
    });
  
    it('Deve editar um cliente existente', () => {
      // Simula clicar no botão de edição do cliente
      cy.contains('Cliente Teste').parent().find('button').contains('edit').click();
  
      // Edita o cliente
      cy.get('input[placeholder="Nome"]').clear().type('Cliente Editado');
      cy.contains('Confirmar').click();
  
      // Verifica se as alterações foram salvas
      cy.contains('Cliente Editado').should('exist');
      cy.contains('Cliente Teste').should('not.exist');
    });
  
    it('Deve excluir um cliente', () => {
      cy.contains('Cliente Editado').parent().find('button').contains('delete').click();
      cy.contains('Confirmar').click();
  
      // Verifica se o cliente foi removido
      cy.contains('Cliente Editado').should('not.exist');
    });
  
    it('Deve selecionar clientes e exibir na tela de clientes selecionados', () => {
      cy.contains('Cliente Teste').parent().find('button').contains('+').click();
      cy.contains('Ver Clientes Selecionados').click();
  
      // Verifica se o cliente aparece na tela de clientes selecionados
      cy.url().should('include', '/selected-clients');
      cy.contains('Cliente Teste').should('exist');
    });
  
    it('Deve remover todos os clientes selecionados', () => {
      cy.contains('Remover Todos da Seleção').click();
  
      // Verifica se todos os clientes foram removidos da seleção
      cy.contains('Cliente Teste').should('not.exist');
    });
  });
  