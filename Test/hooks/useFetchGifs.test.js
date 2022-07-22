import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs"

describe('Pruebas en hook useFetchGif', () => { 

    test('Debe de regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs('Mob Psycho'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     })

     test('Debe de retornar un arreglo de imagenes y el isLoading en falso.', async() => { 

        const { result } = renderHook( () => useFetchGifs('Mob Psycho'));
        
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

     })
 })