import React from 'react';
import ReactDOM from 'react-dom';


class Portal extends React.Component {
    render(){
       return ReactDOM.createPortal(<div className='Modal'> Hello Portal </div>,  document.getElementById('portal'))
    }
 }
 
export default Portal;