import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){
    const [friends,setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))

    },[])
    
    return(
        <div>
            <h1>Friends:{friends.length}</h1>
            {
                friends.map(friend=><Friend friend={friend}></Friend>)
            }
            
        </div>
        
    )
}