import { useAuth } from "../../context";

export default function GuestContent({ children }) {
    const { isAuth } = useAuth();
    if (isAuth) return null;
    return children;
}
