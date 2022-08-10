var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// ---------
var data = {
    uk: { id: 1, text: 'Привіт!' },
    en: { id: 2, text: 'Hello!' },
    fr: { id: 3, text: 'Salut!' }
};
var expectedResult = [
    { lang: 'en', id: 2, text: 'Hello!' },
    { lang: 'uk', id: 1, text: 'Привіт!' },
    { lang: 'fr', id: 3, text: 'Salut!' },
];
console.log('Expected:');
console.log(JSON.stringify(expectedResult, undefined, '  '));
// ---------
var data1 = {
    uk: { id: 1, text: 'Привіт!' },
    en: { id: 2, text: 'Hello!' },
    fr: { id: 3, text: 'Salut!' }
};
var data2 = {
    uk: { id: 1, text: 'Привіт!' },
    en: null,
    fr: undefined
};
var data3 = {
    uk: { id: 1, text: 'Привіт!' },
    ru: { id: 4, text: 'Привет!' },
    en: { id: 2, text: 'Hello!' },
    jp: { id: 5, text: 'こんにちは!' },
    fr: { id: 3, text: 'Salut!' }
};
//  --------------------------------------------------------------------
var transformObjectToArrayOfObjects = function (data, sortOrder) {
    var sortedData = [];
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var currentIndex = sortOrder.indexOf(key);
        if (value && currentIndex >= 0) {
            var currentObject = {};
            currentObject['lang'] = sortOrder[currentIndex];
            currentObject = __assign(__assign({}, currentObject), value);
            sortedData.push(currentObject);
        }
    }
    return sortedData;
};
var sortOrder = ['en', 'uk', 'fr'];
var result1 = transformObjectToArrayOfObjects(data1, sortOrder);
var result2 = transformObjectToArrayOfObjects(data2, sortOrder);
var result3 = transformObjectToArrayOfObjects(data3, sortOrder);
console.log(JSON.stringify(result1, undefined, '  '));
console.log('result2: ', result2);
console.log('result3: ', result3);
//  --------------------------------------------------------------------
var transformDataArrayToObject = function (data, requiredLanguages) {
    var resultObject = {};
    for (var _i = 0, requiredLanguages_1 = requiredLanguages; _i < requiredLanguages_1.length; _i++) {
        var language = requiredLanguages_1[_i];
        resultObject[language] = null;
    }
    data.map(function (item) {
        var lang = item.lang, rest = __rest(item, ["lang"]);
        resultObject[lang] = rest;
    });
    return resultObject;
};
var result4 = [{ lang: 'en', id: 2, text: 'Hello!' }];
var requiredLanguages = ['uk', 'en', 'fr'];
var data4 = transformDataArrayToObject(result4, requiredLanguages);
console.log('data4: ', data4);
module.exports = { transformObjectToArrayOfObjects: transformObjectToArrayOfObjects, transformDataArrayToObject: transformDataArrayToObject };
