import { Outlet } from "react-router-dom";
import ReadingNavbar from "../navbar/ReadingNavbar";
import ReadingHome from "../pages/ReadingHome";


const ReadingLayout = () => (
    <>
        <ReadingNavbar />
        <Outlet />
    </>
);

export const ReadingRoutes = {
    path: "reading",
    element: <ReadingLayout />,
    children: [
        { index: true, element: <ReadingHome /> },

    ],
};
