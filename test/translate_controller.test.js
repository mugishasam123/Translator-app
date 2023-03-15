import { expect } from 'chai'
import { spy } from 'sinon';
import { translateText } from '../src/controllers/translate_controller.js';
import languages from '../src/data/languages.js';

describe('translateText', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        text: 'Hello, world!',
        targetLanguage: 'es',
      },
    };

    res = {
      render: spy(),
    };

  });


  it('should render index page with translation', async () => {
    await translateText(req, res);

    expect(res.render.calledOnce).to.be.true;
    expect(res.render.calledWith('index', {
      languageSymbols: languages,
      translation: '¡Hola, mundo!',
      error: null,
    })).to.exist
  })

  it('should render index page with error if no text is added', async () => {
    req.body.text = ''
    await translateText(req, res);

    expect(res.render.calledOnce).to.be.true;
    expect(res.render.calledWith('index', {
      languageSymbols: languages,
      translation: null,
      error: 'Please input text and select language',
    })).to.be.true
  })
})