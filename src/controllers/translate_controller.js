import { v2 } from '@google-cloud/translate'
import languages from '../data/languages.js'

const Translate = v2.Translate

const translate = new Translate({
  projectId: process.env.PROJECTID,
  key: process.env.TRANSLATE_API_KEY,
})

export const getLanguagesList = (req, res) => {
  res.render('index', {
    languageSymbols: languages,
    translation: 'Translation will be displayed here..',
    error: null,
  })
}

export const translateText = async (req, res) => {
  const { text, targetLanguage } = req.body

  if (!text || !targetLanguage) {
    return res.render('index', {
      languageSymbols: languages,
      translation: null,
      error: 'Please input text and select language',
    })
  }

  try {
    const [translation] = await translate.translate(text, targetLanguage)
    return res.render('index', {
      languageSymbols: languages,
      translation,
      error: null,
    })
  } catch (error) {
    return res.render('index', {
      languageSymbols: languages,
      translation: null,
      error,
    })
  }
}
