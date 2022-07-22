import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/Components/AddCategory"

describe('Test: AddCategory component', () => { 

    test('Debe de cambiar el valir de la caja de texto.', () => { 

        render( <AddCategory onNewCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: { value: 'Panda' } });

        expect( input.value).toBe('Panda');
        //screen.debug();

     })

     test('Debe llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Rick and Morty';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue}});
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
        //screen.debug();

      })

      test('No debe llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        //screen.debug();
       })
 })