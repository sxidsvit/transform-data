"use strict";
// ---------
const data1 = {
    uk: { id: 1, text: 'Привіт!' },
    en: { id: 2, text: 'Hello!' },
    fr: { id: 3, text: 'Salut!' }
};

const data2 = {
    uk: { id: 1, text: 'Привіт!' },
    en: null,
    fr: undefined
};

const data3 = {
    uk: { id: 1, text: 'Привіт!' },
    ru: { id: 4, text: 'Привет!' },
    en: { id: 2, text: 'Hello!' },
    jp: { id: 5, text: 'こんにちは!' },
    fr: { id: 3, text: 'Salut!' }
};

//  --------------------------------------------------------------------

const transformObjectToArrayOfObjects = (data, sortOrder) => {
    const sortedData = []

    for (let [key, value] of Object.entries(data)) {

        const currentIndex = sortOrder.indexOf(key)

        if (value && currentIndex >= 0) {
            let currentObject = {}
            currentObject['lang'] = sortOrder[currentIndex];
            currentObject = { ...currentObject, ...value }
            sortedData.push(currentObject);
        }
    }

    console.log('transformObjectToArrayOfObjects - sortedData: ', sortedData);
    return sortedData

}

const sortOrder = ['en', 'uk', 'fr']

const result1 = transformObjectToArrayOfObjects(data1, sortOrder)
const result2 = transformObjectToArrayOfObjects(data2, sortOrder)
const result3 = transformObjectToArrayOfObjects(data3, sortOrder)


console.log(JSON.stringify(result1, undefined, '  '));
// console.log('result2: ', result2);
// console.log('result3: ', result3);

//  --------------------------------------------------------------------

const transformDataArrayToObject = (data, requiredLanguages) => {

    let resultObject = {}
    for (let language of requiredLanguages) {
        resultObject[language] = null
    }

    data.map(item => {
        const { lang, ...rest } = item
        resultObject[lang] = rest
    })

    return resultObject

}

const result4 = [{ lang: 'en', id: 2, text: 'Hello!' }];
const requiredLanguages = ['uk', 'en', 'fr']

const data4 = transformDataArrayToObject(result4, requiredLanguages)

console.log('data4: ', data4);

//  --------------------------------------------------------------------

module.exports = { transformObjectToArrayOfObjects, transformDataArrayToObject }
