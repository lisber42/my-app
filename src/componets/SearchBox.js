import React from 'react';

const SearchBox = (props) => {
    return(
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action=""onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Buscar Filme" type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchBox;