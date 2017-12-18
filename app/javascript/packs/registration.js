// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { login } from 'components/registration/login';

class Registration extends React.Component{
  render(){
    return <login/>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Registration/>,document.getElementById('react-container'));

})
