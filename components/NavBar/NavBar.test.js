import { render, screen } from "@testing-library/react";
import NavBar from ".";

test("A link labeled Homepage is displayed and shows the Hompage", () => {
  render(<NavBar />);

  const link = screen.getByRole("link", { name: "Homepage" });
  expect(link).toHaveAttribute("href", "/");
});

test("A link labeled ArtPieces is displayed and shows the Art Piece page", () => {
  render(<NavBar />);

  const link = screen.getByRole("link", { name: "Art Pieces" });
  expect(link).toHaveAttribute("href", "/pieces");
});
