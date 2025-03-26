import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Page to add a category to game list
export default function Category(){
    const [category, setCategory] = useState('');

    const navigate = useNavigate();

    const handleCategory = (selectedCategory) => {
        setCategory(selectedCategory);
    }

    // next page function to carry the category state to the next page with useNavigate
    const nextPage = () => navigate('/players', { state: { category } });

    return(
    <div className='page-container'> 
        <div className='background-container'>
            <h3 className='category-heading'>Select a category:</h3>
            <div className="category-button" onClick={() => handleCategory('Entertainment')}><h2>Entertainment</h2></div>
            <div className="category-button" onClick={() => handleCategory('Geography')}><h2>Geography</h2></div>
            <div className="category-button" onClick={() => handleCategory('Sports')}><h2>Sport</h2></div>
            <div className='selected-category-container'><h2>Selected Category:</h2><h2 className='selected-category'> {category}</h2></div>
        <button className="next-page-button" onClick={() => nextPage()}>Next</button>
        </div>
    </div>
    )
}
