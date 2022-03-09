import anxios from "axios";

anxios.get('https://api.spacexdata.com/v4/crew ')
.then((response) => { 
    console.log(response);
})
.catch((err) =>{
    console.log(err);
});


const ComponentTwo = () => {

    return(
        <div  className ="Headings">
            <h1>Component Two
            </h1>
        </div>
    );


}
export default ComponentTwo