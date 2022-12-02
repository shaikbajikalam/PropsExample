import React from 'react'

function JSX(){
	return React.createElement(
		"div",
		{id:"one",className:"classone"},
	     React.createElement("h1",null,"Good Afternoon")
		)
}
export default JSX