import { getGifs } from "../../src/Helpers/getGifs"

describe('Test: getGifs Helper', () => { 
    test('Debe de retornar un array de Gif', async() => { 

        const gifs = await getGifs('Panda');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })

     })
 })