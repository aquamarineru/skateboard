//import { useEffect } from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
/*     const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }, []) */

    return (
        <>
            <h1>Page Not Found</h1>
            <button>
                <Link to="/">Back to Homepage</Link>
            </button>
        </>
    )
    
    
}

export default NotFound
