import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post'

ReactDOM.render(<div>
<Post thumbnail="/lucille.jpg" headline="Yes Michael..." time="10pm" />
<Post thumbnail="/george.jpg" headline="Hide me..." time="5pm" />
<Post thumbnail="/michael.jpg" headline="Tell me about it..." time="10am" />
<Post thumbnail="/tobias.jpg" headline="ANUSTART..." time="9:30am" />
<Post thumbnail="/buster.jpg" headline="Hi, I'm Buster..." time="8am" />
</div>,
document.getElementById('app'))
//always renders to an Id on the index.html page
