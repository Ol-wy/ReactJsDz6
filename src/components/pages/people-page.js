import React, { useState } from 'react'
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';

const PeoplePage = () => {
    const [state, setState] = useState({itemId: 1})
    
    const leftElement = <ItemList setItemId={(id) => setState({itemId: id})}/>
    const rightElement = <ItemDetails itemId={state.itemId}/>

  return (
        <Row left={leftElement} right={rightElement}/>
    // <div className="row mb2">
    //     <div className="col-md-6">
    //       <ItemList />
    //     </div>
    //     <div className="col-md-6">
    //       <ItemDetails />
    //     </div>
    //   </div>
  )
}

export default PeoplePage