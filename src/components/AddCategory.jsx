import { useState } from "react"




export const AddCategory = ( {onNewCategory} ) => {

    const [ inputValue, setinputValue ] = useState('')

    const onInputCHange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        console.log(inputValue);
        //setCategories( categories => [inputValue, ...categories] )
        onNewCategory( inputValue.trim() )
        setinputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputCHange }
            />
        </form>
    )
}
