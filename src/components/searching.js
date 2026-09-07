import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    // const compare = createComparison(rules.skipEmptyTargetValues, rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false));
    const compare = createComparison(['skipEmptyTargetValues'],[rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false)]);
        // @todo: #5.2 — применить компаратор
    return (data, state, action) => { 
  
    return data.filter(row => {
            console.log(state)
            return compare(row ,state);
        
            })
        }
    
}

  //     const search = state.search;
    //     // console.log(search,'search')
    // if (!search || search.trim() === '') {
    //     return data;
    // }

// const fieldsToCheck = ['date', 'customer', 'seller'];

        //     // Логика поиска: товар подходит, если совпадение найдено ХОТЯ БЫ В ОДНОМ поле.
        //     // Метод .some() вернет true, если условие выполнится хоть один раз.
        // return fieldsToCheck.some(field => {
        //     const valueInRow = row[field];

        //         // Защита: если в товаре нет такого поля или оно пустое, пропускаем
        //     if (valueInRow === undefined || valueInRow === null) {
        //         return false;
        //     }
        //     const strValue = String(valueInRow);
        //     const strSearch = search;
            
               // Теперь используем наш компаратор для сравнения ДВУХ СТРОК compare(значение_из_товара, значение_из_поля_поиска)
            // return compare(strValue, strSearch );
            // return strValue.includes(strSearch)