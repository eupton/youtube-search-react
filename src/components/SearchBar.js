import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor='txtVideoSearch'>Video Search</label>
                        <input 
                            name="txtVideoSearch"
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
