import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifItem";

describe('Test: GifItem component.', () => { 

    const title = 'Mob Psycho';
    const url = 'https://mob-psycho.com/mobpsycho.jpg';

    test('Debe hacer match con el snapshot', () => { 

        const { container } = render( <GifItem title={title} url={url} /> );
        expect( container).toMatchSnapshot(); 
        
     });

     test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 

        render( <GifItem title={title} url={url} /> );
        //screen.debug();
        // expect( screen.getByRole('img').src ).toBe(url);
        const{ src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

      })

      test('Debe de mostrar el titulo de el componente', () => { 

            render( <GifItem title={title} url={url} /> );
            expect( screen.getByText(title) ).toBeTruthy();
       })
 });