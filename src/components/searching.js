// import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
  // @todo: #5.1 — настроить компаратор
  // const compare = createComparison(rules.skipEmptyTargetValues, rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false));
  // const compare = createComparison(['skipEmptyTargetValues'],[rules.searchMultipleFields (searchField, ['date', 'customer', 'seller'], false)]);
  // @todo: #5.2 — применить компаратор
  return (query, state, action) => {
    return state[searchField]
      ? Object.assign({}, query, { search: state[searchField] })
      : query;
  };
}
