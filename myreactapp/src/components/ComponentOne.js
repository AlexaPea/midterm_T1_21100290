import anxios from "axios";

anxios.get('https://api.spacexdata.com/v4/crew ')
.then((response) => { 
    console.log(response);
})
.catch((err) =>{
    console.log(err);
});


const ComponentOne = () => {

    return(
        <div  className ="Headings">
            <h1>Component One</h1>
        </div>
    );


}
export default ComponentOne