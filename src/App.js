import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import CV from "./components/cv/CV";

const AppLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AppLayout>
                <Outlet />
            </AppLayout>
        ),
        children: [
            {
                path: "/cv",
                element: <CV />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
