
function User2(props){
    return (
        <div className="text-center">
            <button className="btn btn-success" onClick={()=>{props.setcounter(props.counter+1)}}>
        Increment
      </button>
      <button className="btn btn-danger ms-4" onClick={()=>{props.setcounter(props.counter-1)}}>
        Decrement
      </button>
      <h1 className="text-info">Child</h1>
    </div>
    )
}

export default User2;
