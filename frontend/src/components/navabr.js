
import { Link } from "react-router-dom";

const navbar =()=>{

    return(
        <header> 
        <div className="container">

        <Link to="/">Workout Buddy</Link>

        </div>
        </header>

    );
}

export default navbar;