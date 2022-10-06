import React,{useState} from 'react';
import SearchBar from './SearchBar';
import ProductTable from "./ProductTable";

const FilterableProductTable = ({products}) => {

    const [filterText, setFilterText] = useState('fruit');
    const [inStockOnly, setInStockOnly] = useState(false);



    return (
        <>
            <SearchBar filterText={filterText}
                       inStockOnly={inStockOnly}
                       onFilterTextChange={setFilterText}
                       onInStockOnlyChange={setInStockOnly}
            />

            <ProductTable products={products} filterText={filterText}
                          inStockOnly={inStockOnly} />

        </>
    )
}

export default FilterableProductTable;