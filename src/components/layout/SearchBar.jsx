import React, { Component } from 'react';

class SearchBar extends Component {

    render() { 
        return ( 
            <div>
                <input 
                    type="search" 
                    className="search"
                    placeholder={this.props.placeholder}
                    style={searchStyle}
                    onChange={this.props.onChange}
                />
            </div>
            
         );
    }
}



const searchStyle = {
    marginTop: '20px',
    width: '300px',
    height: '35px',
    fontSize: '20px',
    paddingLeft: '10px',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none', 
}

 
export default SearchBar;

