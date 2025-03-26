import { createContext, useState } from 'react';

export const CategoryContext = createContext();

//Used to set context for the category so it is carried through to the gamespace component to fetch a list from a defined category
export default function CategoryProvider({ children }){

    const [category, setCategory] = useState('entertainment');
    console.log('Category State:', category);
    
    return(
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}