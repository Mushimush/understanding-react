import React from "react";
import { useState } from "react";
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";

function FilterProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <>
            <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly} />
            < ProductTable
            products={products}
            filterText={filterText} 
            inStockOnly={inStockOnly}/>
        </>

    );

};

export default FilterProductTable;