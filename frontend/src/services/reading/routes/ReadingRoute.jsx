import { Outlet } from "react-router-dom";
import ReadingNavbar from "../common/navbar/ReadingNavbar";
import ReadingHome from "../pages/ReadingHome";
import ReadingFooter from "../common/footer/ReadingFooter";


const ReadingLayout = () => (
    <>
        <ReadingNavbar />
        <Outlet />
        <ReadingFooter/>
    </>
);

export const ReadingRoutes = {
    path: "reading",
    element: <ReadingLayout />,
    children: [
        { index: true, element: <ReadingHome /> },

    ],
};
