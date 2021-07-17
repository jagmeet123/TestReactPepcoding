import React from "react";

class Search extends React.Component{

    state={
        city:"",
        animal:"",
        allAnimal:[]
    }

    componentDidMount(){
        fetch('/UniqueAnimal').then((data)=>{
            return data.json();
        }).then((json)=>{
            this.setState({allAnimal:json})
            console.log(this.state.allAnimal);
        });
    }

    render(){
        return (
            <div class="row">
                
                {/* 1 */}
                <div class="col-1">

                </div>

                <div class="col-3">
                    <div class="input-group mb-3">
                        <input type="text" onChange={(val)=>{
                            this.setState({city:val.target.value})
                        }} class="form-control" placeholder="Area for city" aria-label="Username" aria-describedby="basic-addon1"/> 
                    </div>
                </div>
                
                {/* 2 */}
                <div class="col-4">

                <select class="form-select" aria-label="Default select example" onChange={(val)=>{
                    this.setState({animal:val.target.value})
                }}>
                
                {
                            this.state.allAnimal.map((el)=>{
                                return(
                                    <option value={el}>{el}</option>
                                );
                            })
                }

                </select>      
                </div>

                {/* 3 */}
                <div class="col-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={()=>{
                        this.props.inputChange(this.state.city);
                        this.props.inputChange1(this.state.animal);
                    }}>Submit button</button>
                </div>
            </div>  
        );
    }

}

export default Search;