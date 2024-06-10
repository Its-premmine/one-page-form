import React from "react";





const App = () =>{
    return(
        
        <div className=" bg-red-500 flex justify-center items-center align-center h-dvh max-w-full" >
            <form action="" className="bg-gray-300 w-96 h-96 rounded-lg" >
                <p className="ml-5">Write Your First Name </p>
                <input type="text" placeholder="First Name" className="w-full h-8 rounded-lg" />
                <br />
                <p className="ml-5">Write Your Last Name</p>
                <input type="text" placeholder="Last Name" className="w-full h-8 rounded-lg"  />
                <br />
                <p className="ml-5">Write Your Email</p>
                <input type="email" placeholder="Write Your Email" className="w-full h-8 rounded-lg" />
                <br />
                <p className="ml-5">Create Your Password</p>
                <input type="password" placeholder="Password"  className="w-full h-8 rounded-lg"/>
                <br />
                <p className="ml-5">Write Your Date of Birth </p>
                <input type="DOB" placeholder="DD/MM/YYYY" className="w-full h-8 rounded-lg"/>
                <br />
                <p className="ml-5">Write YourAge</p>
                <input type="number" placeholder="Age" className="w-full h-8 rounded-lg"/>
                <br />
                <input  type="submit" value="Submit" className="border-2 border-rose-600 bg-green-400 hover:bg-green-700 rounded-lg p-2 ml-40"/>

                </form>

        </div>
        




    )

}


export default App