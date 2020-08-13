import React from 'react';
import {render} from 'react-dom'
// import axios from 'axios'
import FTA from './fetchApi';



// class FTA extends React.Component{

//   componentDidMount(){
//     axios.post('http://127.0.0.1:8000/api/posts/', {
            
//                 "posts": {
//                   "title_post": "Test Admin",
//                   "content_post": "Херня какая-то",
//                   "author_id": 1
//                 }
            
//         })
//   }

//   render() {
//     return(<div>
//       что-то
//     </div>)
//   }
// }

render(
    <FTA />,
  document.getElementById('root')
);

