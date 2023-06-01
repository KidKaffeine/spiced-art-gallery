import { render, screen } from "@testing-library/react";
import Spotlight from ".";

test("The image is displayed", () => {
  render(<Spotlight />);

  const image = screen.getByRole("image");
  expect(image).toBeInTheDocument();
});

test("The artist is displayed", () => {
  render(<Spotlight />);

  const header = screen.getByRole("header");
  expect(header).toBeInTheDocument();
});
