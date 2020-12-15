import React,{useEffect} from "react"


export const HomeView =()=>{
 
useEffect (() => {

alert("Component is being rendered")

return () => {
    alert("Component is being removed")
}
})
    

    


return(


    <div>
        <h1>This is Home View Page!</h1>
    </div>
)

}