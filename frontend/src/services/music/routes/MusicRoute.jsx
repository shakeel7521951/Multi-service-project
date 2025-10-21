import { Outlet } from "react-router-dom";
import MusicNavbar from "../navbar/MusicNavbar";
import MusicHome from "../pages/MusicHome";


const MusicLayout = () => (
    <>
        <MusicNavbar />
        <Outlet />
    </>
);

export const MusicRoutes = {
    path: "music",
    element: <MusicLayout />,
    children: [
        { index: true, element: <MusicHome /> },

    ],
};
