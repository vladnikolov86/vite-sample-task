import { createBrowserRouter } from "react-router-dom";
import ItemView from "~/components/itemView/ItemView.component";
import ListView from "~/components/listView/ListView.component";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ListView />,
  },
  {
    path: '/:id',
    element: <ItemView />,
  }
]);

export default router;