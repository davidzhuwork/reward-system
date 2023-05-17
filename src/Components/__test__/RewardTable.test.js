import { render, screen, act, within } from "@testing-library/react";

import RewardTable from "../RewardTable";

describe("RewardTable Test", () => {
    beforeEach(() => {
        jest.mock("../__mocks__/axios.js");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("The table component should be rendered on the screen.", async () => {
        await act(async () =>
            render(<RewardTable dataUrl="./mockapi" />)
        );

        const tableElement = await screen.findByTestId("table");
        expect(tableElement).toBeInTheDocument();
    });

    it("Should have made requests successfully and have the correct number of rows", async () => {
        await act(async () =>
            render(<RewardTable dataUrl="./mockapi" />)
        );

        const tableElement = await screen.findByTestId("table");
        const rows = await within(tableElement).queryAllByRole("row");
        expect(rows).toHaveLength(4);
    });

    it("The table should have the correct value on each row after calculating.", async () => {
        await act(async () =>
            render(<RewardTable dataUrl="./mockapi" />)
        );

        const tableElement = await screen.findByTestId("table");
        const rows = await within(tableElement).queryAllByRole("row");
        expect(rows[0]).toHaveTextContent("February");
        expect(rows[1]).toHaveTextContent("266");
        expect(rows[2]).toHaveTextContent("178");
        expect(rows[3]).toHaveTextContent("154");
    });
});
