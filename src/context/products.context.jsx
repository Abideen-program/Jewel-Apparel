import { createContext, useState, useEffect } from 'react'

import { addCollectionsAndDocuments } from '../utilities/firebase/firebase.utilities.js'

export const ProductsContext = createContext({
    product: []
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] =  useState([])

    const value = {products, setProducts}
    return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
}