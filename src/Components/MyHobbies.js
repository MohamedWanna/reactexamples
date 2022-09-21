import React, { Component } from "react";

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>Person</th>
                <th>Hobby</th>
            </tr>
        </thead>
    )
}
const TableBody = () =>{return(
    <tbody>
        <tr>
            <td>Ahmed</td>
            <td>Football</td>
        </tr>
        <tr>
            <td>Nidal</td>
            <td>Swimming</td>
        </tr>
    </tbody>
)
}

class Table3  extends Component{
    render(){
        return(
            <div>
                <h1>Group's hobbies:{this.props.members}</h1>
                <table>
                    <TableHeader/>
                    <TableBody/>
                </table>
                {this.props.children}
            </div>
            
        )
    }

}
export default Table3
