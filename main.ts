interface DataField {
  id: number
  text: string
}

type Lang = string

type Data = Record<Lang, DataField>

interface ResultItem {
  lang: string
  id: number
  text: string
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

// Your code

// console.log('Result:');
// console.log(JSON.stringify(myResult, undefined, '  '));
