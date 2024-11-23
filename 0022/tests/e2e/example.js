describe('My First Test', function () {
  before((browser) => {
    browser.init();
  });

  it('visits the app root url', function () {
    browser.assert.textContains('.green', 'You did it!');
  });

  //Se agregan los dos siguientes test.
  it('verifica si existe un h2 con la frase "Aprendiendo nightwatch"', function () {
    browser.expect.element('h2').text.to.equal('Aprendiendo nightwatch');
  });

  it('verifica que el logo esté presente', function (browser) {
    browser.expect.element('img.logo').to.be.visible
  })


  after((browser) => browser.end());
});
