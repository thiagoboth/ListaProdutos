export function itemFilter(itemFilter, itemArray) {

    const lowerBusca = itemFilter.toLowerCase();

    const filteredItems = itemArray.filter((item) => 
        item.toLowerCase().includes(lowerBusca)
    );

    return filteredItems;
}