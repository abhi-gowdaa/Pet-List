import { useParams } from "react-router-dom"

 
function PetDetails() {
    const {id}=useParams()
  return (
    <div>{id}</div>
  )
}

export default PetDetails