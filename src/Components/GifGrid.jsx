//api.giphy.com/v1/gifs/search
//api_key: string(required)	YOUR_API_KEY
//q
//0KUOk8vkta4aWvY4Ji2DbLENJ9ZCLl0U

import {PropTypes} from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );    

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Loading...</h2> )
        }
        
    
        <div className="card-grid">
            {
                images && images.map(( image ) =>(
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}


