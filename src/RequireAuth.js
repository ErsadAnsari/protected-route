import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const RequireAuth = ()=>
{
    const{auth}=useAuth();
    const location = useLocation();
    console.log("ansari",auth)

    return(auth?.accessToken?<Outlet/>:<Navigate to="/" state={{from:location}} replace/>);

}
export default RequireAuth;