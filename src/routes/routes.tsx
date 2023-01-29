import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "~/components/common/loader/Loader";

const ListView = React.lazy(() => import("~/components/listView/ListView.component"));
const ItemView = React.lazy(() => import("~/components/itemView/ItemView.component"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loader />}>
      <ListView />
    </Suspense>
  },
  {
    path: '/:id',
    element: <Suspense fallback={<Loader />}>
      <ItemView />
    </Suspense>
  }
]);

export default router;