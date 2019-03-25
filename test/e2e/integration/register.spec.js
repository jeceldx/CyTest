describe('靓万家商城注册测试用例集', function () {
  // beforeEach(() => {
  //   cy.visit('/index')
  // })
  beforeEach(() => {
    cy.visit('/index')
    cy.fixture('users.json').as('registerJson');//

  })
  it('普通用户注册测试', function () { //用户注册功能

    cy.log(this.registerJson.phone)
    cy.log(this.registerJson.validCode)
    cy.log(this.registerJson.userPassWord)
    cy.contains('注册').click();
    cy.get('.input-with-select > .el-input__inner').type(this.registerJson.phone);//输入用户的数据
    cy.get('.el-input-group__append > :nth-child(1)').click();
    //模仿用户等待收到验证码的时间
    cy.wait(20000);
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type(this.registerJson.validCode);
    cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type(this.registerJson.userPassWord);
    cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type(this.registerJson.userPassWord);
    cy.get('.login-but').click();
    cy.screenshot()

  })
  // it('用户注册', function () {
  //   cy.log(this.registerJson.name);
  //   cy.log(this.registerJson.country);

  //   cy.contains('注册').click();//模拟用户点击注册用户
  //   //生成随机数字串
  //   var randomCode = function (len, dict) {
  //     for (var i = 0, rs = ''; i < len; i++)
  //       rs += dict.charAt(Math.floor(Math.random() * 100000000) % dict.length);
  //     return rs;
  //   };
  //   // 生成随机手机号码
  //   var randomPhoneNumber = function () {
  //     // 第1位是1 第2,3位是3458 第4-7位是3689 最后四位随机
  //     return [1, randomCode(2, '3458'), '3689', randomCode(4, '0123456789')].join('');
  //   };
  //   cy.get('.input-with-select > .el-input__inner').type(randomPhoneNumber());//输入用户的数据
  //   cy.get('.el-input-group__append > :nth-child(1)').click();
  //   //模仿用户等待收到验证码的时间
  //   cy.wait(20000);
  //   cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type(randomCode(5, '0123456789'));
  //   cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type('abc123');
  //   cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type('abc123');
  //   cy.get('.login-but').click();
  //   cy.screenshot()

  // })

  // it('1读取fixture', function () {
  //   cy.fixture("users.json").then($data => {
  //     cy.log($data.phone)

  //   })
  // })
})








