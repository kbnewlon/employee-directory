import React from 'react';

function SearchForm(props) {

    return (
        <div className="uk-container form-container">
            <form>
                <div className="row justify-content-center">
                    <label>Search Employee by Name: </label>
                    <input
                        name = "search"
                        value = {props.search}
                        onChange={props.handleInputChange}
                        className="input-box uk-input uk-form-width-medium" type="text"
                        placeholder="Search"
                    />
                </div>

            </form>

        </div>

    )



}

export default SearchForm; 