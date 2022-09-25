import React from "react";
class AddContact extends React.Component{
    render(){
        return(
          <div className="block">
            <h2 className="block m-1 text-md">ADD CONTACT</h2>
            <form>
                <label className="block m-1">NAME</label>
                <div className="block border-solid border-2 border-gray p-1 m-1 rounded-lg">
                    <input type="text" name="Name" placeholder="Name"/>
                </div>
                <label className="block m-1">EMAIL</label>
                <div className="block border-solid border-2 border-gray p-1 m-1 rounded-lg">
                    <input type="text" name="email" placeholder="Email"/>
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