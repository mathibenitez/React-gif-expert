import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

jest.mock('../../src/Hooks/useFetchGifs');


describe('Test: GifGrid component', () => { 

    const gifs = [
        {
            id: 'ABC',
            title: 'Mob Psycho',
            url: 'http://localhost/mob.jpg',
        },
        {
            id: '123',
            title: 'Monster',
            url: 'http://localhost/grimmer.jpg',
        },
    ]

    const category = 'Panda';

    test('Debe mostrar isLoading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/>);
        // screen.debug();
        expect( screen.getByText('Loading...'));
        expect( screen.getByText( category ));

     })

     test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category }/>);
        screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);
     })
 })