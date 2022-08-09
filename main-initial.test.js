const { transformObjectToArrayOfObjects, transformDataArrayToObject } = require('./main-initial')

// -------- Initial data for transforming Object to Array of objects ------------------------

const data1 = {
  uk: { id: 1, text: 'Привіт!' },
  en: { id: 2, text: 'Hello!' },
  fr: { id: 3, text: 'Salut!' }
};

const data2 = {
  uk: { id: 1, text: 'Привіт!' },
  en: null,
  fr: undefined,
}

const data3 = {
  uk: { id: 1, text: 'Привіт!' },
  ru: { id: 4, text: 'Привет!' },
  en: { id: 2, text: 'Hello!' },
  jp: { id: 5, text: 'こんにちは!' },
  fr: { id: 3, text: 'Salut!' },
}
const sortOrder = ['en', 'uk', 'fr']

const result1 = JSON.stringify(transformObjectToArrayOfObjects(data1, sortOrder))
const result2 = transformObjectToArrayOfObjects(data2, sortOrder)
const result3 = transformObjectToArrayOfObjects(data3, sortOrder)

// -------- Initial data for transforming Array of objects to Object ---------------------

const result4 = [{ lang: 'en', id: 2, text: 'Hello!' }];
const requiredLanguages = ['uk', 'en', 'fr']

const data4 = transformDataArrayToObject(result4, requiredLanguages)

// ---------------- Tests -------------------------------------------

describe('Validate data transformation', () => {

  test('Transform Object To Array Of Objects', () => {
    expect(JSON.stringify(transformObjectToArrayOfObjects(data1, sortOrder))).toBe(result1)
  })

  test('Transform Object with null & undefined languages to Array of objects ', () => {
    expect(transformObjectToArrayOfObjects(data2, sortOrder)).toStrictEqual(result2)
  })

  test('Transform Object with additional not used languages to Array of objects ', () => {
    expect(transformObjectToArrayOfObjects(data3, sortOrder)).toStrictEqual(result3)
  })

  test('Transform Array of objects to Object ', () => {
    expect(transformDataArrayToObject(result4, requiredLanguages)).toStrictEqual(data4)
  })



})