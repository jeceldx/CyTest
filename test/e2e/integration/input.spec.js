describe('上传图片测试', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100/test');
  });
  // it.only("uploadTest", function () {
  //   const fileName = 'example.json';

  //   cy.fixture(fileName).then(fileContent => {
  //     cy.get('#file').upload(
  //       { fileContent, fileName, mimeType: 'application/json' },
  //       { subjectType: 'input' },
  //     );
  //   });
  // })
  it('1读取fixture', function () {
    cy.fixture("users.json").then($data => {
      cy.log($data.phone)

    })
  })

  // it('successfully uploads a file', () => {
  //   cy.get(':nth-child(4) > .nav-link').click();
  //   cy.fixture('test.png', 'base64').then(fileContent => {
  //     cy.get('[data-cy="input"]').upload(
  //       { fileContent, fileName: 'test.png', mimeType: 'image/png' },
  //       { subjectType: 'input' },
  //     );
  //     cy.get('li').contains('test.png');
  //   });
  // });
  // it('for file upload', () => {
  //   const fileName = 'example.json';
  //   cy.fixture(fileName).then(fileContent => {
  //     cy.get('[data-cy="dropzone"]').upload(
  //       { fileContent, fileName, mimeType: 'application/json' },
  //       { subjectType: 'drag-n-drop' },
  //     );
  //   });
  // })


  // it('成功上传图片', () => {
  //   cy.fixture('test.png', 'base64').then(fileContent => {
  //     cy.get('[data-cy="input"]').upload(
  //       { fileContent, fileName: 'test.png', mimeType: 'image/png' },
  //       { subjectType: 'input' },
  //     );
  //     cy.get('li').contains('test.png');
  //   });
  // });

  //   it('successfully uploads multiple files', () => {
  //     cy.fixture('cy.png', 'base64').then(cyPng => {
  //       const files = [
  //         { fileName: 'cy-1.png', fileContent: cyPng, mimeType: 'image/png' },
  //         { fileName: 'cy-2.png', fileContent: cyPng, mimeType: 'image/png' },
  //       ];

  //       cy.get('[data-cy="input"]').upload(files, { subjectType: 'input' });
  //       cy.get('li').contains('cy-1.png');
  //       cy.get('li').contains('cy-2.png');
  //     });
  //   });
  // });

  // describe('Attach file to an hidden input element', () => {
  //   beforeEach(() => {
  //     cy.visit('/');
  //   });

  //   it('successfully uploads a file', () => {
  //     cy.fixture('cy.png', 'base64').then(fileContent => {
  //       cy.get('[data-cy="hidden-input"]').upload(
  //         { fileContent, fileName: 'cy.png', mimeType: 'image/png' },
  //         { subjectType: 'input' },
  //       );
  //       cy.get('.hidden-uploader + ul li').contains('cy.png');
  //     });
  //   });

  //   it('successfully uploads multiple files', () => {
  //     cy.fixture('cy.png', 'base64').then(cyPng => {
  //       const files = [
  //         { fileName: 'cy-1.png', fileContent: cyPng, mimeType: 'image/png' },
  //         { fileName: 'cy-2.png', fileContent: cyPng, mimeType: 'image/png' },
  //       ];

  //       cy.get('[data-cy="hidden-input"]').upload(files, { subjectType: 'input' });
  //       cy.get('.hidden-uploader + ul li').contains('cy-1.png');
  //       cy.get('.hidden-uploader + ul li').contains('cy-2.png');
  //     });
  //   });
});