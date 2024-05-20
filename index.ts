//---------------------------------------------------------------------------------
//Разминка
// Определите интерфейс для пользователя
interface User {
    id: number;
    name: string;
    // Добавьте свойство email типа string
    email: string;
  }
  
  // Определите интерфейс для активности пользователя
  interface Activity {
    userId: number;
    activity: string;
        // Добавьте свойство timestamp типа Date
    timestamp: Date;
  }
  

  // Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
  async function fetchData<T>(url: string): Promise<T> {
    // Реализуйте получение данных с использованием fetch и возвращение их в формате json
    return fetch(url).then(res => res.json())
  }

  // Используйте Utility Types для создания Partial и Readonly версий User и Activity
  type PartialUser = Partial<User>// Заполните тип
  type ReadonlyActivity = Readonly<Activity>// Заполните тип
  
  //Типизируйте функцию. userId - число
  function getUserActivities<T>(userId: number): Promise<T> {
    return fetchData(`/api/activities/${userId}`);
  }
  // Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
  type ActivitiesReturnType = ReturnType<typeof getUserActivities>
  
  // Используйте extends в условных типах для создания типа Permissions
  type AdminPermissions = { canBanUser: boolean };
  type BasicPermissions = { canEditProfile: boolean };
  // Заполните тип. Должен выявляться на основне некоторого дженерика и опредять, какой из пермишенов выдавать: Admin или Basic.
  type Permissions2<T> = T extends 'admin' ? AdminPermissions : BasicPermissions;
  
  
  ///ЧАСТЬ 2.
  
  // Определите Type Alias для Union типа String или Number
  type StringOrNumber = string | number;// Заполните тип
  
  // Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
  function logMessage(message: StringOrNumber): void {
    // Реализуйте вывод сообщения в консоль
    console.log(message);
  }
  logMessage(564654);
  logMessage('gfdgfd');
  // Реализуйте функцию throwError, которая никогда не возвращает управление (never)
  function throwError(errorMsg: string): never {
    // Бросьте исключение с errorMsg
    throw new Error(errorMsg);
  }
  
  // Реализуйте Type Guard для проверки, является ли значение строкой
  function isString(value: StringOrNumber): value is string {
    // Верните результат проверки типа
    return typeof value === 'string';
  }

  console.log(isString(543543));
  console.log(isString('dfsdfs'));
  // Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
  function assertIsNumber(value: any): asserts value is number {
    if (typeof value !== 'number') throw new Error();
    // Бросьте исключение, если значение не является числом
  }
  // Завершите функцию processValue, используя isString и assertIsNumber
  function processValue(value: StringOrNumber) {
    // Реализуйте логику проверки и обработки значения
    if (isString(value)) {
      console.log(`String value: ${value.toUpperCase()}`);
    } else {
      assertIsNumber(value);
      console.log(`Number value: ${value.toFixed(2)}`);
    }
  }
  //---------------------------------------------------------------------------------
  
  
  
  //---------------------------------------------------------------------------------
  // Задание 2: Расширенное использование Generics
  // Цель: Создать универсальную функцию обработки данных, которая может работать с различными типами данных.
  
  // Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
  interface Response2<T> {
    data: T;
    status: number;
  }
  
  // Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
  function createResponse<T>(data: T, status: number): Response2<T> {
    // Реализуйте создание и возврат объекта Response
    const obj: Response2<T> = {
      data: data,
      status: status
    }

    return obj;
  }
  
  // Используйте функцию createResponse для создания ответа с массивом чисел
  const numbersArray: number[] = [1, 2, 3, 4, 5];
  const numericResponse: Response2<typeof numbersArray> = createResponse<number[]>(numbersArray, 1);// Заполните вызов функции
  console.log(numericResponse);
  // Используйте функцию createResponse для создания ответа с объектом пользователя (User)
  const user: User = {
    id: 1,
    name: 'Roman',
    email: 'roman@mail.ru'
  };
  const userResponse: Response2<User> = createResponse(user, 2);// Заполните вызов функции
  console.log(userResponse);
  //---------------------------------------------------------------------------------
  
    
  //---------------------------------------------------------------------------------
  // Задание 3: Расширенное использование Generics
  // Цель: Разработать несколько функций для обработки и различения типов данных.
  
  // Определите тип данных для описания автомобиля 
  type Car = {
    company: string;
    model: string;
    year: number;
  };
  
  // Определите тип данных для описания велосипеда
  type Bike = {
    company: string;
    type: 'road' | 'mountain';
  };
  
  // Создайте Type Guard для проверки, является ли объект автомобилем
  function isCar(vehicle: any): vehicle is Car  {
    if (vehicle.hasOwnProperty('company') && vehicle.hasOwnProperty('model') && vehicle.hasOwnProperty('year')) return true;
    return false
  }
  
  const car: Car = {
    company: 'gfdgfd',
    model: 'fgdgfddgf',
    year: 2222,
  };

  const bike: Bike = {
    company: 'gfdgfd',
    type: 'road',
  };
  console.log(isCar(car));
  console.log(isCar(bike));
  // Используйте Type Guard в функции, которая печатает информацию о транспорте. Небольшая подсказка о том, какие параметры в себя может принимать isCar дана ниже.
  function printVehicleInfo(vehicle: Car | Bike) {
    if (isCar(vehicle)) {
      console.log(`Car: ${vehicle.company} ${vehicle.model} ${vehicle.year}`);
    } else {
      console.log(`Bike: ${vehicle.company} ${vehicle.type}`);
    }
  }
  //---------------------------------------------------------------------------------
    
  
  
  //---------------------------------------------------------------------------------  
  // Задание 4: Использование Utility Types для работы с интерфейсами
  // Цель: Модифицировать интерфейсы для специфических нужд без изменения оригинальных интерфейсов.
  
  // Определите интерфейс Employee
  interface Employee {
    id: number;
    name: string;
    department: string;
    email: string;
  }
  
  // Используйте Utility Type для создания типа, который делает все свойства Employee опциональными
  type PartialEmployee = Partial<Employee>// Заполните тип
  
  // Используйте Utility Type для создания типа, который делает все свойства Employee доступными только для чтения
  type ReadonlyEmployee = Readonly<Employee>// Заполните тип
  
  // Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
  function printEmployeeInfo(employee: PartialEmployee): void {
    // Реализуйте логику функции, обрабатывая случай отсутствующих свойств
    let result = '';

    for (const key in employee){
      result += `${key}: ${employee[key]}\n`
    }

    console.log(result);
  }

  printEmployeeInfo({
    id: 5,
    department: 'dfddfs',
    email: 'gfdgfdgdf',
  })
  //---------------------------------------------------------------------------------
  
  
  
  
  //---------------------------------------------------------------------------------  
  //Задание 5: Работа с Indexed Access Types и Mapped Types
  //Цель: Создать утилиты для работы с объектами и их ключами.
  
  // Определите интерфейс для пользователя
  interface User2 {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
  // Используйте Indexed Access Types для получения типа поля name из User
  type User2NameType = User2['name'];// Заполните тип
  
  // Создайте Mapped Type, который преобразует все поля интерфейса User в boolean. Можно воспользовать конструкцией Key in keyof 
  type User2FieldsToBoolean = {
    [key in keyof User2]: boolean;
  }
  const defaultUser2: User2 = {
    id: 4,
    name: 'fdsfds',
    email: 'fgdgfddfg',
    age: 44,
  }
  // Реализуйте функцию, которая принимает ключи интерфейса User и возвращает их типы
  function getUser2FieldType(key: keyof User2): string {
    // Верните тип ключа
    return typeof defaultUser2[key];
  }

  // Используйте эту функцию для получения типа поля 'age' и 'name'
  const ageType = getUser2FieldType('age');
  const nameType = getUser2FieldType('name');
  console.log(ageType, nameType);
  //---------------------------------------------------------------------------------
  
  
  
  
  
  
  //---------------------------------------------------------------------------------
  // Задание 6: Расширение и ограничение Generics
  // Цель: Создать универсальные функции с ограничениями типов.
  
  // Создайте базовый интерфейс для сущностей с идентификатором
  interface Identifiable {
    id: number;
  }
  
  // Типизируйте функцию, которая принимает массив объектов с ограничением на Generics, где каждый объект должен соответствовать интерфейсу Identifiable. Не забывайте, что find может вернуть undefined
  function findById<T extends Identifiable>(items: T[], id: number ): T | undefined {
    return items.find(item => item.id === id);
  }
  
  // Используйте эту функцию для поиска пользователя по id в массиве пользователей
  const users3: User2[] = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 }
  ];
  const user3: User2= findById(users3, 1);
  console.log(user3);
  //---------------------------------------------------------------------------------
  
  
  
  
  
  
  //---------------------------------------------------------------------------------
  // Задание 7: Работа с обобщённой функцией поиска в массиве
  // Цель: Создать функцию, которая может искать элементы в массиве по разным критериям, включая составные типы и условия с использованием нескольких параметров в Generics.
  interface User7 {
    id: number;
    name: string;
    age: number;
  }
  
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface Book {
    isbn: string;
    title: string;
    author: string;
  }
  
  // Разберитесь с типизацией функции и поймите как она работает.
  // Как можно улучшить функцию findInArray, чтобы она обрабатывала случаи, когда ключ или значение отсутствуют?
  // Можно ли использовать эту функцию для поиска по нескольким ключам одновременно? Если да, как бы вы это реализовали?
  function findInArray<T, K extends keyof T>(items: T[], key: K, value: T[K]): T | undefined {
    return items.find(item => {
      if (item.hasOwnProperty(key) && item[key] !== undefined)
        return true;
    });
  }
  
  //поиск по нескольким ключам одновременно
  function findInArray2<T, K extends keyof T>(items: T[], keys: K[], value: T[K]): T | undefined {
    return items.find(item => {
      for (const key of keys){
        if (item[key] === value){
          return true;
        }
      }
    })
  }
  // Данные для тестирования функции
  const users7: User7[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
  ];
  
  const products: Product[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 }
  ];
  
  const books: Book[] = [
    { isbn: "12345", title: "The TypeScript Handbook", author: "Someone" },
    { isbn: "67890", title: "Learning TypeScript", author: "Another One" }
  ];
  
  // 1. Найдите пользователя по имени "Alice".
  const foundUser7: User7 = findInArray<User7, 'name'>(users7, 'name', 'Alice');
  console.log(foundUser7);
  const foundUser77: User7 = findInArray2<User7, 'name' | 'age'>(users7, ['name', 'age'], 30);
  console.log(foundUser77);
  // 2. Найдите продукт с ценой 500.
  const foundProduct: Product = findInArray(products, 'price', 500);
  // 3. Найдите книгу по автору "Another One".
  const foundBook: Book = findInArray(books, 'author', 'Another one');
  //---------------------------------------------------------------------------------
  
  
  
  
  
  
  //---------------------------------------------------------------------------------
  // Задание 8: Реализация обобщённой функции для сопоставления и преобразования элементов массива
  // Цель: Создать функцию mapAndFilter, которая будет принимать массив объектов, функцию для их преобразования и функцию для фильтрации результатов. Функция должна использовать два параметра Generic: один для типа элементов входного массива, а другой для типа элементов выходного массива.
  
  // Описание задачи: Функция mapAndFilter должна выполнить следующие функции:
  // Применить функцию преобразования ко всем элементам входного массива.
  // Фильтровать преобразованные элементы с помощью предоставленной функции фильтрации.
  // Возвращать новый массив с результатами, которые прошли фильтрацию.
  interface Person {
    name: string;
    age: number;
  }
  
  interface Adult {
    fullName: string;
    age: number;
  }
  
  // Напишите функцию mapAndFilter здесь. Используйте два параметра Generic: T для типа входных данных и U для типа выходных данных.
  function mapAndFilter<T, U>(items: T[], transform: (item: T) => U, filter: (item: U) => boolean): U[] {
    // Ваш код здесь
    const adults = items.map(person => transform(person));
    return adults.filter(adult => filter(adult));
  }
  
  // Пример данных
  const people: Person[] = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
  ];
  
  // Пример использования функции mapAndFilter
  const adults: Adult[] = mapAndFilter(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18
  );
  
  // Выведите результаты для проверки
  console.log(adults);
  
  
  //Вопросы после реализации:
  // Как изменится функция, если необходимо добавить возможность изменения критерия сортировки?
  function mapAndFilter2<T, U>(items: T[], transform: (item: T) => U, filter: (item: U) => boolean, sorting: (item1: U, item2: U) => number): U[] {
    // Ваш код здесь
    const adults = items.map(person => transform(person));
    const filteredAdults = adults.filter(adult => filter(adult));
    return filteredAdults.sort(sorting);
  }
  
  // Пример данных
  const people2: Person[] = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
  ];
  
  // Пример использования функции mapAndFilter
  const adults2: Adult[] = mapAndFilter2(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18,
    (adult1, adult2) => adult2.age - adult1.age,
  );
  
  // Выведите результаты для проверки
  console.log(adults2);
  // Могут ли типы T и U быть полностью разными или должны иметь общие характеристики? Объясните ваш ответ.
  // T и U могут быть полностью разными, потому что они лишь помогают различать объекты разных типов или интерфейсов на входе, выходе и внутри функции
  
  //---------------------------------------------------------------------------------
  