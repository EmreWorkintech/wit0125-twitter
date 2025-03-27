import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import NavList from "../components/NavList";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "../contexts/UserContext";
import Login from "../pages/Login";
import userEvent from "@testing-library/user-event";

describe("Login", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <Login />
        </UserContextProvider>
      </BrowserRouter>
    );
  });

  it("submit sign up form", async () => {
    const user = userEvent.setup();
    //Arrange

    //Act
    const email = screen.getByPlaceholderText("Email Address");
    await user.type(email, "emre@wit.com");
    const password = screen.getByPlaceholderText("Password");
    await user.type(password, "12345Qwerty**");
    const button = screen.getByRole("button");
    await user.click(button);
  });

  it("gets 1 error message on invalid email", async () => {
    const user = userEvent.setup();
    //Arrange

    //Act
    const email = screen.getByPlaceholderText("Email Address");
    await user.type(email, "emre");
    const errors = screen.getAllByTestId("error");

    //assertion
    expect(errors).toHaveLength(1);
    expect(errors[0]).toHaveTextContent("Geçerli email giriniz!");
  });
});

describe("App", () => {
  it("renders the App component", () => {
    render(<NavList />);
  });
});
