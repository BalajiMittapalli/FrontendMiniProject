import Five from './Five'
import Six from './Six'
function Two(){
    return(
        <div>
            <h5 className="bg-danger">Parent of five and Six</h5>
            <Five/>
            <Six/>
        </div>
    )
}
export default Two;