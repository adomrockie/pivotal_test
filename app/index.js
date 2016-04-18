require('./stylesheets/custom.css')
import React, {Component} from "react"
import ReactDom from "react-dom"
import {Table, Cols, Row} from "react-bootstrap"


//make server request

//Table 

class TableView extends Component{
	render(){
		return (
				<div>Table view of data</div>
			)
	}
}


//App

class App extends Component{

	render(){
		return <div>ok working </div>
	}
}

ReactDom.render(<App />, document.getElementById('app-container'))

