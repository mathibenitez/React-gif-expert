export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0KUOk8vkta4aWvY4Ji2DbLENJ9ZCLl0U&q=${ category }&limit=10`;
    const ret = await fetch( url )
    const { data } = await ret.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);

    return gifs
}