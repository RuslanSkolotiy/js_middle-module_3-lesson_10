import { useState } from "react";
import { useAuth } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";
import { IconAt, IconKey } from "@tabler/icons-react";
import { Input, Button } from "@mantine/core";

const Signin = function () {
    const { signin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log("name", name);
        console.log("value", value);
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signin(state.email, state.password, () => {
            const from = location.state?.from || "/";
            navigate(from);
        });
    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <Input.Wrapper label="Почта" required maw={320} mx="auto">
                <Input
                    icon={<IconAt size="0.8rem" />}
                    placeholder="Ваш email"
                    name="email"
                    type="email"
                />
            </Input.Wrapper>
            <Input.Wrapper label="Пароль" required maw={320} mx="auto">
                <Input
                    icon={<IconKey size="0.8rem" />}
                    placeholder="Ваш пароль"
                    name="password"
                    type="password"
                />
            </Input.Wrapper>

            <div className="login-submit-row">
                <Button type="submit">Войти</Button>
            </div>
        </form>
    );
};

export default Signin;
