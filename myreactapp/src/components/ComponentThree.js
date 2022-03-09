import anxios from "axios";

anxios.get('https://api.spacexdata.com/v4/crew ')
.then((response) => { 
    console.log(response);
})
.catch((err) =>{
    console.log(err);
});


const ComponentThree = () => {

    return(
        <>
        <div  className ="Headings">
            <h1>Component Three</h1>
        </div>
        </>
    );


}
export default ComponentThree