var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        // Реализуйте получение данных с использованием fetch и возвращение их в формате json
        return fetch(url).then(res => res.json());
    });
}
//Типизируйте функцию. userId - число
function getUserActivities(userId) {
    return fetchData(`/api/activities/${userId}`);
}
// Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
function logMessage(message) {
    // Реализуйте вывод сообщения в консоль
    console.log(message);
}
logMessage(564654);
logMessage('gfdgfd');
// Реализуйте функцию throwError, которая никогда не возвращает управление (never)
function throwError(errorMsg) {
    // Бросьте исключение с errorMsg
    throw new Error(errorMsg);
}
// Реализуйте Type Guard для проверки, является ли значение строкой
function isString(value) {
    // Верните результат проверки типа
    return typeof value === 'string';
}
console.log(isString(543543));
console.log(isString('dfsdfs'));
// Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
function assertIsNumber(value) {
    if (typeof value !== 'number')
        throw new Error();
    // Бросьте исключение, если значение не является числом
}
// Завершите функцию processValue, используя isString и assertIsNumber
function processValue(value) {
    // Реализуйте логику проверки и обработки значения
    if (isString(value)) {
        console.log(`String value: ${value.toUpperCase()}`);
    }
    else {
        assertIsNumber(value);
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}
// Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
function createResponse(data, status) {
    // Реализуйте создание и возврат объекта Response
    const obj = {
        data: data,
        status: status
    };
    return obj;
}
// Используйте функцию createResponse для создания ответа с массивом чисел
const numbersArray = [1, 2, 3, 4, 5];
const numericResponse = createResponse(numbersArray, 1); // Заполните вызов функции
console.log(numericResponse);
// Используйте функцию createResponse для создания ответа с объектом пользователя (User)
const user = {
    id: 1,
    name: 'Roman',
    email: 'roman@mail.ru'
};
const userResponse = createResponse(user, 2); // Заполните вызов функции
console.log(userResponse);
// Создайте Type Guard для проверки, является ли объект автомобилем
function isCar(vehicle) {
    if (vehicle.hasOwnProperty('company') && vehicle.hasOwnProperty('model') && vehicle.hasOwnProperty('year'))
        return true;
    return false;
}
const car = {
    company: 'gfdgfd',
    model: 'fgdgfddgf',
    year: 2222,
};
const bike = {
    company: 'gfdgfd',
    type: 'road',
};
console.log(isCar(car));
console.log(isCar(bike));
// Используйте Type Guard в функции, которая печатает информацию о транспорте. Небольшая подсказка о том, какие параметры в себя может принимать isCar дана ниже.
function printVehicleInfo(vehicle) {
    if (isCar(vehicle)) {
        console.log(`Car: ${vehicle.company} ${vehicle.model} ${vehicle.year}`);
    }
    else {
        console.log(`Bike: ${vehicle.company} ${vehicle.type}`);
    }
}
// Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
function printEmployeeInfo(employee) {
    // Реализуйте логику функции, обрабатывая случай отсутствующих свойств
    let result = '';
    for (const key in employee) {
        result += `${key}: ${employee[key]}\n`;
    }
    console.log(result);
}
printEmployeeInfo({
    id: 5,
    department: 'dfddfs',
    email: 'gfdgfdgdf',
});
const defaultUser2 = {
    id: 4,
    name: 'fdsfds',
    email: 'fgdgfddfg',
    age: 44,
};
// Реализуйте функцию, которая принимает ключи интерфейса User и возвращает их типы
function getUser2FieldType(key) {
    // Верните тип ключа
    return typeof defaultUser2[key];
}
// Используйте эту функцию для получения типа поля 'age' и 'name'
const ageType = getUser2FieldType('age');
const nameType = getUser2FieldType('name');
console.log(ageType, nameType);
// Типизируйте функцию, которая принимает массив объектов с ограничением на Generics, где каждый объект должен соответствовать интерфейсу Identifiable. Не забывайте, что find может вернуть undefined
function findById(items, id) {
    return items.find(item => item.id === id);
}
// Используйте эту функцию для поиска пользователя по id в массиве пользователей
const users3 = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 }
];
const user3 = findById(users3, 1);
console.log(user3);
// Разберитесь с типизацией функции и поймите как она работает.
// Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?
// Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?
function findInArray(items, key, value) {
    return items.find(item => {
        if (item.hasOwnProperty(key) && item[key] !== undefined)
            return true;
    });
}
//поиск по нескольким ключам одновременно
function findInArray2(items, keys, value) {
    return items.find(item => {
        for (const key of keys) {
            if (item[key] === value) {
                return true;
            }
        }
    });
}
// Данные для тестирования функции
const users7 = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
];
const books = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
];
// 1. Найдите пользователя по имени "Alice".
const foundUser7 = findInArray(users7, 'name', 'Alice');
console.log(foundUser7);
const foundUser77 = findInArray2(users7, ['name', 'age'], 30);
console.log(foundUser77);
// 2. Найдите продукт с ценой 500.
const foundProduct = findInArray(products, 'price', 500);
// 3. Найдите книгу по автору "Another One".
const foundBook = findInArray(books, 'author', 'Another one');
// Напишите функцию mapAndFilter здесь. Используйте два параметра Generic: T для типа входных данных и U для типа выходных данных.
function mapAndFilter(items, transform, filter) {
    // Ваш код здесь
    const adults = items.map(person => transform(person));
    return adults.filter(adult => filter(adult));
}
// Пример данных
const people = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
];
// Пример использования функции mapAndFilter
const adults = mapAndFilter(people, (person) => ({ fullName: person.name, age: person.age }), (adult) => adult.age >= 18);
// Выведите результаты для проверки
console.log(adults);
//Вопросы после реализации:
// Как изменится функция, если необходимо добавить возможность изменения критерия сортировки?
function mapAndFilter2(items, transform, filter, sorting) {
    // Ваш код здесь
    const adults = items.map(person => transform(person));
    const filteredAdults = adults.filter(adult => filter(adult));
    return filteredAdults.sort(sorting);
}
// Пример данных
const people2 = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
];
// Пример использования функции mapAndFilter
const adults2 = mapAndFilter2(people, (person) => ({ fullName: person.name, age: person.age }), (adult) => adult.age >= 18, (adult1, adult2) => adult2.age - adult1.age);
// Выведите результаты для проверки
console.log(adults2);
// Могут ли типы T и U быть полностью разными или должны иметь общие характеристики? Объясните ваш ответ.
// T и U могут быть полностью разными, потому что они лишь помогают различать объекты разных типов или интерфейсов на входе, выходе и внутри функции
//---------------------------------------------------------------------------------
