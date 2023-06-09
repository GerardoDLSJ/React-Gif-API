import { useState } from "react"
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";



export const GifExpertApp = () => {
    // const categories = ['One punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = (categorie) => {
    //     // setCategories([...categories, categorie])
    //     setCategories(cat => [...cat,'HunterxHunter '])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} /> 
            <hr/>

            <ol>
                {
                    categories.map(category => (
                    <GifGrid 
                        key = {category} 
                        category={category} />)
                    )
                }
            </ol>
        </>
    )
}