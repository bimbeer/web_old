import {
  findByText,
  fireEvent,
  getByText,
  queryByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Login from "./Login";
import App from "../../App";

describe("#Login", () => {
  it("buttons", () => {
    render(
      <App>
        <Login />
      </App>
    );
    expect(screen.getByText("Zaloguj się")).toBeInTheDocument();
    expect(screen.getByText("POBIERZ z Google Play")).toBeInTheDocument();
    expect(screen.getByText("POBIERZ na komputer")).toBeInTheDocument();
  });

  it("modal open", () => {
    render(
      <App>
        <Login />
      </App>
    );

    const button = screen.getByText("Zaloguj się");
    fireEvent.click(button);
    expect(screen.getByText("Adres email")).toBeInTheDocument();
    expect(screen.getByText("Hasło")).toBeInTheDocument();
  });

  it("modal close", async () => {
    render(
      <App>
        <Login />
      </App>
    );

    const button = screen.getByText("Zaloguj się");
    await fireEvent.click(button);
    expect(screen.getByText("Adres email")).toBeInTheDocument();
    expect(screen.getByText("Hasło")).toBeInTheDocument();

    const closeButton = screen.getByLabelText("modal-close");
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(closeButton).not.toBeInTheDocument();
    });
  });
});
