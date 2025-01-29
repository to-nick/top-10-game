import { createContext, useState } from 'react';

export const CategoryContext = createContext();

export default function CategoryProvider({ children }){

    const [category, setCategory] = useState('entertainment');
    console.log('Category State:', category);
    
    return(
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}