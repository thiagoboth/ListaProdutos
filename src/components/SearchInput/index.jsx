import { useState, useEffect } from 'react';
import { itemFilter } from '../../utils/itemFilter';

import {
    Container
} from './styles'

export function SearchInput({ onChangeValue, inputSuggestions }) {
    const [inputValue, setInputValue] = useState('')
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    function onChange(value) {
        setFilteredSuggestions(
            itemFilter(value, inputSuggestions)
        );

        setInputValue(value);

        onChangeValue(value);
    }

    function onSelectFilteredSuggestion(value) {
        setInputValue(value);
        onChange(value);
    }

    useEffect(() => {
        setFilteredSuggestions(inputSuggestions);
    }, [inputSuggestions])

    return (
        <Container>
            <input 
                type="text" 
                value={inputValue}
                onChange={e => onChange(e.target.value)}
                placeholder="Pesquise aqui"
                autoComplete={'auto'}
                list="suggestions"
            />
            <datalist 
                id="suggestions" 
                onChange={(e) => onSelectFilteredSuggestion(e.target.value)}
            >
                {
                    filteredSuggestions.map((suggestion) => (
                        <option key={suggestion} value={suggestion}>{suggestion}</option>
                    ))
                }
            </datalist>
        </Container>
    )
}