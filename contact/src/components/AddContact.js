import React from "react";
class AddContact extends React.Component{
    state = {
        name: " ",
        email: " ",
    }

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === " " && this.state.email === " "){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
        console.log(this.state)
    }
    render(){
        return(
          <div className="block">
            <h2 className="block m-1 text-md">ADD CONTACT</h2>
            <form onSubmit={this.add}>
                <label className="block m-1">NAME</label>
                <div className="block border-solid border-2 border-gray p-1 m-1 rounded-lg">
                    <input className="outline-none"
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={this.state.name} 
                    onChange={(e)=> this.setState({name: e.target.value})}/>
                </div>
                <label className="block m-1">EMAIL</label>
                <div className="block border-solid border-2 border-gray p-1 m-1 rounded-lg">
                    <input className="outline-none"
                    type="text" 
                    name="email" 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e)=> this.setState({email: e.target.value})}/>
                </div>
                <div className="flex items-center justify-center ">
                    <button className="border-solid border-2 px-4 py-2 m-4 rounded-xl bg-sky-500/100 text-white">Add</button>
                </div>

            </form>
          </div>
        );
    }
}
export default AddContact;