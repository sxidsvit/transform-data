# Задание

Есть входящие данные - структура `data`.
Это "условные данные", которые полученны с REST API.

Необходимо перевести структуру данных обьекта `data`
в структру массива `expectedResult`!

> Важно! Поля `id` и `text` - динамические, они могут постоянно менять свои значения, поэтому не стоит ориентироваться на эти поля при выполнении условий задачи!

## Условия задачи

### 1. Порядок элементов

Порядок результута должен соотвествовать ожидаемому:

1. en - Английский
2. uk - Украинский
3. fr - Французкий


---


### 2. Поля языков nullable (*)

Во входящих данных могут отсутствовать поля или они быть null.  
В таком случае элементы должны отфильтровываться и не попадать в результат!

Пример:

```ts
const data2 = {
    uk: { id: 1, text: 'Привіт!' },
    en: null,
    fr: undefined
};

const result2 = [
    { lang: 'uk', id: 1, text: 'Привіт!' }
];
```


---


### 3. Доп. языки (**)

Во входящих данных могут присутствовать другие языки.
В таком случае - необходимо их фильтровать, чтобы они не попали в результат!


Пример:

```ts
const data3 = {
    uk: { id: 1, text: 'Привіт!' },
    ru: { id: 4, text: 'Привет!' },
    en: { id: 2, text: 'Hello!' },
    jp: { id: 5, text: 'こんにちは!' },
    fr: { id: 3, text: 'Salut!' }
};

const result3 = [
    { lang: 'en', id: 2, text: 'Hello!' },
    { lang: 'uk', id: 1, text: 'Привіт!' },
    { lang: 'fr', id: 3, text: 'Salut!' }
];
```


---


### 4. Обратная трансформация (***)

Необходимо добавить функционал обратного перевода из массива
в исходную структуру объекта `data`. 

Также стоит учитывать предыдущие условия, 
например, если в массиве отсутствуют элементы - 
то в объекте эти поля должны быть `null`, НЕ `undefined`

Пример:

```ts
const result4 = [
    { lang: 'en', id: 2, text: 'Hello!' }
];

const data4 = {
    uk: null,
    en: { id: 2, text: 'Hello!' },
    fr: null
};
```


### 5. Покрытие тестами (****)

По каждому из условий задачи - пишем unit-тесты 

