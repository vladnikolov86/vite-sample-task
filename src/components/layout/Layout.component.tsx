import { RouterProvider } from "react-router-dom";
import router from "~/routes/routes";

import * as Styles from './Layout.styles';
import Header from "~/components/common/header/Header";

export default function Layout() {
    return <Styles.Wrapper>
       
        <Styles.Layout>
            <RouterProvider router={router} />
        </Styles.Layout>

    </Styles.Wrapper>
}