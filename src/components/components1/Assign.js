
import image from './images/greenary.jpg'

function Assign(){
    let a=100;
    let name='sharan'
    let array=[1,2,3,4,5,6]
    return(
        <div>
            <h2 className="bg-dark text-center tetx-light p-2">Assignment-1</h2>
            <h4>Placing dynamic content</h4>
            <h5 className="ms-5">a is {a}</h5>
            <h5 className="ms-5">name = {name}</h5>
            <div>
                <h5>Array Iteration</h5>
                {
                array.map(ele=> <h5 className="ms-5">{ele}</h5>)
                }

            </div>
            <img src={image}style={{width:"600px"}} className='me-4'/>
            <img src="https://th.bing.com/th/id/OIP.3dvBDiSfTQtZZiaIsCK4GQHaEK?rs=1&pid=ImgDetMain"
            style={{width:"600px"}}/>
        </div>
    );
}
export default Assign