import React from "react";

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)} />
            <br />
            <input type="checkbox" checked={inStockOnly} id="checkbox"  onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
            <label htmlFor="checkbox"> Only Show products in stock</label>
        </form>
    );
};

export default SearchBar;