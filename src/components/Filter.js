/* import React from 'react';






export default class Filter extends React.Component {
  state = {
    minFilter: 10,
    maxFilter: 5000,
    nomeFilter: 'Serviço',
  };

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  };

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  };

  onChangeNomeFilter = (event) => {
    this.setState({nomeFilter: event.target.value})
  };


  render() {
    return (
      <FilterContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nomeFilter={this.state.nomeFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNomeFilter={this.onChangeNomeFilter}                  
        />
      </FilterContainer>
    );
  }
}


*/
