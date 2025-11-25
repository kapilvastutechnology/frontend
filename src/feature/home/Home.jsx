import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function App() {

  const [data, setData] = useState()

  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      console.log(response);
      setData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      {data?.categories?.map((category) => (
        <div key={category.idCategory}>
          <h2>{category.strCategory}</h2>
          <img 
            src={category.strCategoryThumb} 
            alt={category.strCategory} 
          />
        </div>
      ))}
    </div>
  )
}