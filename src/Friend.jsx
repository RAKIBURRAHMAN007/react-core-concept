export default function Friend({friend}){
    const box ={
        border:'2px dotted red',
        margin:'15px',
        padding:'15px'
    }
    return(
        <div style={box}>
            <h4>name:{friend.name}</h4>
            <h4>email:{friend.email}</h4>

        </div>
    )
}