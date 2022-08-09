import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
    children: JSX.Element;
};

const PrivateRouter = (props: Props) => {
    const user = useSelector((state: any) => state.auth.user);
    if (user && user.id === 1) {
        return props.children;
    }
    return <Navigate to="/signin" />;
};

export default PrivateRouter;
