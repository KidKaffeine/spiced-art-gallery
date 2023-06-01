import { render, screen } from "@testing-library/react";
import ArtPieces from ".";
import { waitFor } from "@testing-library/react";

test("All items are displayed in list", () => {
  render(<ArtPieces />);

  const list = screen.findAllByRole("list");
  waitFor(() => expect(items.length).toBe(11));
});

test("All images are displayed", () => {
  render(<ArtPieces />);

  const list = screen.findAllByRole("image");
  waitFor(() => expect(items.length).toBe(11));
});

test("All titles are displayed", () => {
  render(<ArtPieces />);

  const list = screen.findAllByRole("header");
  waitFor(() => expect(items.length).toBe(11));
});

test("All artists are displayed", () => {
  render(<ArtPieces />);

  const list = screen.findAllByRole("small");
  waitFor(() => expect(items.length).toBe(11));
});
