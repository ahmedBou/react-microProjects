import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';


function ProductTable({ products, filterText, inStockOnly }) {

    // console.log(products);
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        console.log("product name", product.name.toLowerCase());
        console.log("filter text", filterText.toLowerCase());
        console.log("product.name.toLowerCase().indexOf(\n" +
            "                filterText.toLowerCase()\n" +
            "            ) === -1", product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        console.log("inStockOnly", inStockOnly)
        console.log("product.stocked", product.stocked)
        console.log("inStockOnly && !product.stocked", inStockOnly && !product.stocked)
        if (inStockOnly && !product.stocked) {
            return;
        }
        console.log("product.category", product.category);
        console.log("lastCategory", lastCategory)
        console.log("product.category !== lastCategory", product.category !== lastCategory)
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });
    // console.log(rows);
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}


export default ProductTable;