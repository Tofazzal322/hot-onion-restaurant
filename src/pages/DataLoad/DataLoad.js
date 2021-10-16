import React, { useEffect, useState } from 'react';

const DataLoad = () => {
    const [food, setFood] = useState();
console.log(food);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/manik-roy/hot-onion-restaurant/master/src/fakeData/foodData.js')
            .then(res => res.json())
        .then(data=>setFood(data))
    }, [])
    
    return (
        <div>
            
        </div>
    );
};

export default DataLoad;