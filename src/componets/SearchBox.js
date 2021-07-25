import React from 'react';

const SearchBox = () => {
    return(
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="">
                        <div classname="input-field">
                            <input placeholder="Buscar Filme" type="text"/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchBox;