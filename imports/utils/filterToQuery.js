export const filterToQuery = (filter) => {
    let query = {};

    if(filter.min && filter.max){
        query = {price: { $gte: +filter.min, $lte: +filter.max }}
    } else if(filter.min){
        query = {price: { $gte: +filter.min }}
    } else if(filter.max){
        query = {price: { $lte: +filter.max }}
    };

    return query;
}