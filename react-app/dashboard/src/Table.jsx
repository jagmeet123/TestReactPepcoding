import React from "react";
class Table extends React.Component{
    state = {
        allAnimals : [],
    }; 

    componentDidMount(){
        fetch('/animal').then(function(data){
            return data.json();
        }).then((json)=>{
            console.log(json);
            this.setState({allAnimals:json});
        })
    }

    render(){
        return(
            <div class="p-5">
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Animal</th>
                        <th scope="col">City</th>
                        <th scope="col">Breed</th>
                      </tr>
                    </thead>
                    <tbody>
                        {    
                            this.state.allAnimals.map((el)=>{
                                console.log(this.props.reciveData)

                                if(this.props.reciveData!=="" && this.props.reciveData1!==""){
                                    if(el.city===this.props.reciveData && el.animal===this.props.reciveData1){
                                        return ( 
                                            <tr key={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.name}</td>
                                            <td>{el.animal}</td>
                                            <td>{el.city}</td>
                                            <td>{el.breed}</td>
                                            </tr>
                                        )
                                    }
                                }
                                else if(this.props.reciveData==="" && this.props.reciveData1!==""){
                                    if(el.animal===this.props.reciveData1){
                                        return ( 
                                            <tr key={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.name}</td>
                                            <td>{el.animal}</td>
                                            <td>{el.city}</td>
                                            <td>{el.breed}</td>
                                            </tr>
                                        )
                                    }
                                }
                                else{
                                    return ( 
                                        <tr key={el.id}>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td>{el.animal}</td>
                                        <td>{el.city}</td>
                                        <td>{el.breed}</td>
                                        </tr>
                                    )
                                }
                        })
                    }
                 </tbody>
                </table>
            </div>
        );
    }
}

export default Table;