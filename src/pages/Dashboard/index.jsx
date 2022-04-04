import React, { useState, useEffect } from 'react';

import { useFetch } from '../../utils/useFetch';

import { ProductsTable } from "../../components/ProductsTable";
import { SearchInput } from "../../components/SearchInput";
import { itemFilter } from '../../utils/itemFilter';

export function Dashboard() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [suggestionsTerm, setSuggestionsTerm] = useState([]);

    const { 
        isLoading, response, error 
      } = useFetch({ url: 'https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook' });
    
      function filteringProducts(value) {
        const lowerBusca = value.toLowerCase();
    
        const filteredItems = response.products.filter((product) => 
          (product.name).toLowerCase().includes(lowerBusca)
        );
    
        setFilteredProducts(filteredItems);
      }
    
      useEffect(async () => {
            setFilteredProducts(response.products)

            const updatedSuggestions = response.suggestions?.map(suggestion => suggestion)

            setSuggestionsTerm(
                updatedSuggestions?.map(suggestion => suggestion.term)
            );
        },[response]);
    
      if(isLoading) {
        return (
              <h1>Carregando produtos</h1>
          )
      }
    
      if(error) {
        return (
            <ErrorContainer>
                <h1>{error}</h1>
            </ErrorContainer>
        )
      }

    return (
        <>
            <SearchInput 
                inputSuggestions={suggestionsTerm}
                onChangeValue={filteringProducts} 
            />

            <ProductsTable productsList={filteredProducts} />
        </>
    )
}