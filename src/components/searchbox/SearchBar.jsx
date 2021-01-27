import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        search: ""
    };

    onChange =(e)=> this.setState({ search: e.target.value });

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.search(this.state.search);
        this.setState({search: "" }); //this is to clear the field after it has submitted
      }

    render() { 
        const {libraries} = this.props;
        const libData = [];
        const searchKey = this.state.search.trim().toLowerCase();
        if (searchKey && searchKey.length > 0){
            libData = libraries.filter(i => {
                return i.name.toLowerCase().match(searchKey);
            })
        }
        return ( 
            <div>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.state.search}
                    style={searchStyle}
                    onChange={this.onChange}
                />
                <ul>
                   {
                       libData.map((i, index) => {
                           return <li key={index}> {i.name} </li>
                       })
                   } 
                </ul>
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