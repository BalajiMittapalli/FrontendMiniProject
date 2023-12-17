function A3(props){
    return(
        <div>
            <div style={{width : "400px"}} className='card rounded-5 shadow-lg h-100 '>
                <img className='w-50 m-auto mt-3' src={props.Obj.image} alt='Not available'/>
                <div className='card-body text-center'>
                    <p className='lead'>{props.Obj.title}</p>
                    <p className='lead'> {props.Obj.description}</p>
                    <p className='lead text-info display-4'>Price : {props.Obj.price}</p>
                </div>
            </div>
        </div>
    )
}

export default A3;