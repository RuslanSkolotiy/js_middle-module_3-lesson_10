import PrivateContent from "./hoc/PrivateContent";
import GuestContent from "./hoc/GuestContent";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs } from "@mantine/core";
import {
    IconLogin,
    IconLogout,
    IconHome,
    IconFaceId,
    IconLocation,
    IconHistory,
} from "@tabler/icons-react";
import { useAuth } from "../context";

export default function () {
    const location = useLocation();
    const navigate = useNavigate();
    const { signout } = useAuth();
    const handleClick = () => {
        signout(() => {
            console.log("signout callback");
        });
    };

    const HandleTabChange = (value) => {
        switch (value) {
            case "/logout":
                signout(() => {
                    console.log("signout callback");
                });
                break;
            default:
                navigate(value);
        }
    };

    return (
        <Tabs defaultValue={location.pathname} onTabChange={HandleTabChange}>
            <Tabs.List>
                <Tabs.Tab value="/" icon={<IconHome size="0.8rem" />}>
                    Главная
                </Tabs.Tab>
                <Tabs.Tab
                    value="/characters"
                    icon={<IconFaceId size="0.8rem" />}
                >
                    Герои
                </Tabs.Tab>
                <Tabs.Tab
                    value="/location"
                    icon={<IconLocation size="0.8rem" />}
                >
                    Локации
                </Tabs.Tab>
                <Tabs.Tab value="/episode" icon={<IconHistory size="0.8rem" />}>
                    Эпизоды
                </Tabs.Tab>
                <GuestContent>
                    <Tabs.Tab value="/login" icon={<IconLogin size="0.8rem" />}>
                        Вход
                    </Tabs.Tab>
                </GuestContent>
                <PrivateContent>
                    <Tabs.Tab
                        value="/logout"
                        icon={<IconLogout size="0.8rem" />}
                    >
                        Выход
                    </Tabs.Tab>
                </PrivateContent>
            </Tabs.List>
        </Tabs>
    );
}
