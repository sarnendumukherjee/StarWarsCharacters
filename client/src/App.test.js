import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders header with app name", () => {
  const { queryByText } = render(<App />);
  const header = queryByText(/Star Wars Characters/);
  expect(header).toBeInTheDocument();
});
