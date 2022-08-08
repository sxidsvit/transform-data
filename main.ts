interface DataField {
  id: number
  text: string
}

type Lang = string

type Data = Record<Lang, DataField | null | undefined>

interface ResultItem {
  lang: string
  id?: number
  text?: string
}
// ---------

const data: Data = {
  uk: { id: 1, text: 'Привіт!' },
  en: { id: 2, text: 'Hello!' },
  fr: { id: 3, text: 'Salut!' },
}

const expectedResult: ResultItem[] = [
  { lang: 'en', id: 2, text: 'Hello!' },
  { lang: 'uk', id: 1, text: 'Привіт!' },
  { lang: 'fr', id: 3, text: 'Salut!' },
]

console.log('Expected:')
console.log(JSON.stringify(expectedResult, undefined, '  '))

// ---------
const data1: Data = {
  uk: { id: 1, text: 'Привіт!' },
  en: { id: 2, text: 'Hello!' },
  fr: { id: 3, text: 'Salut!' },
}

const data2: Data = {
  uk: { id: 1, text: 'Привіт!' },
  en: null,
  fr: undefined,
}

const data3: Data = {
  uk: { id: 1, text: 'Привіт!' },
  ru: { id: 4, text: 'Привет!' },
  en: { id: 2, text: 'Hello!' },
  jp: { id: 5, text: 'こんにちは!' },
  fr: { id: 3, text: 'Salut!' },
}

//  --------------------------------------------------------------------

const transformObjectToArrayOfObjects = (data: Data, sortOrder: Lang[]) => {
  const sortedData = []

  for (let [key, value] of Object.entries(data)) {
    const currentIndex = sortOrder.indexOf(key)

    if (value && currentIndex >= 0) {
      let currentObject = {} as ResultItem
      currentObject['lang'] = sortOrder[currentIndex]
      currentObject = { ...currentObject, ...value }
      sortedData.push(currentObject)
    }
  }

  return sortedData
}

const sortOrder = ['en', 'uk', 'fr']

const result1 = transformObjectToArrayOfObjects(data1, sortOrder)
const result2 = transformObjectToArrayOfObjects(data2, sortOrder)
const result3 = transformObjectToArrayOfObjects(data3, sortOrder)

console.log(JSON.stringify(result1, undefined, '  '))
console.log('result2: ', result2)
console.log('result3: ', result3)

//  --------------------------------------------------------------------

const transformDataArrayToObject = (
  data: ResultItem[],
  requiredLanguages: Lang[]
) => {
  let resultObject = {} as Data
  for (let language of requiredLanguages) {
    resultObject[language] = null
  }

  data.map((item) => {
    const { lang, ...rest } = item
    resultObject[lang] = rest as DataField
  })

  return resultObject
}

const result4 = [{ lang: 'en', id: 2, text: 'Hello!' }]
const requiredLanguages = ['uk', 'en', 'fr']

const data4 = transformDataArrayToObject(result4, requiredLanguages)

console.log('data4: ', data4)
