import { describe, expect, it } from "vitest"
import ItemView from "~/components/itemView/ItemView.component";

import { render, screen, userEvent } from "~/../test-utils";



describe("Simple working test", () => {

    it("the title is visible", () => {

        render(<ItemView />);
    });


});