import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders Call Summary header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Call Summary/i);
  expect(headerElement).toBeInTheDocument();
});
