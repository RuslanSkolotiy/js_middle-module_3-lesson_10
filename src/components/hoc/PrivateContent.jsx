import { useAuth } from "../../context";

export default function PrivateContent({ children }) {
    const { isAuth } = useAuth();
    if (!isAuth) return null;
    return children;
}
