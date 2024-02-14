import "./App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import CV from "./components/cv/CV";

const AppLayout = () => {
    return (
        <div>
            {/* //Ajouter un layout ici (navbar etc.) */}
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
                // Code d'exemple
                // path: '/',
                // element: <div>Home</div>,
                path: "/cv",
                element: <CV />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
