//api.giphy.com/v1/gifs/search
//api_key: string(required)	YOUR_API_KEY
//q
//0KUOk8vkta4aWvY4Ji2DbLENJ9ZCLl0U

import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {
console.log({ category })
    const { images, isLoading } = useFetchGifs( category );

    console.log({ isLoading });
    


  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Loading...</h2> )
        }
        
    
        <div className="card-grid">
            {
                images.map(( image ) =>(
                    <GifItem
                        key={ image.id }
                        { ...image }
                    />
                ))
            }
        </div>
    </>

  )
}


