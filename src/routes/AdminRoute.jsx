// we need a main layout
// then after main layout all the pages
import AdminLayout from "../components/layouts/AdminLayout"
import Dashboard from "../pages/admin/Dashboard"
import Profiles from "../pages/admin/Products"
const AdminRoute = [
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "/admin/products",
                element: <Profiles/>
            }
        ]
    }
]

export default AdminRoute