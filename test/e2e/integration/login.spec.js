describe('靓万家商城登录测试用例集', function () {
  beforeEach(() => {
    cy.visit('/index')
  })
  it('普通用户登录测试', function () {

    //得到登录节点并且点击
    cy.contains('登录').click()
    //从中获取用户名输入栏的DOM对象
    cy.get('#pane-first > .loginmain > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
      .type('18205990013');
    //从中获取用户名密码输入栏DOM对象
    cy.get('#pane-first > .loginmain > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
      .type('123456');
    //点击登录按钮
    cy.get('#pane-first > .loginmain > .el-form > .el-button')
      .click();
    cy.wait(1000);
    //设置断言来验证登录成功
    cy.url().should('contains', 'ucenter/index1');
  })
  beforeEach(() => {
    cy.visit('/index')
  })
  it('设计师用户登录测试', function () {
    cy.contains('登录').click();
    //选择tab2的输入框
    cy.get('#tab-second').click();
    //从中获取用户名输入栏的DOM对象
    cy.get('#pane-second > .loginmain > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
      .type('18602221752');
    //从中获取密码输入栏的DOM方法
    cy.get('#pane-second > .loginmain > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').
      type('12346');
    //点击登录按钮
    cy.get('#pane-second > .loginmain > .el-form > .el-button')
      .click();
    cy.wait(100);
    cy.get('.el-message__content').contains('您输入的账号不存在！');

  })


})
