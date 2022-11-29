import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SignUpForm from "components/SignUpForm";
import { authService } from "machines/authMachine";
import { renderWithRouter } from "utils/testUtils";

describe("SignupForm", () => {
  it("renders correctly", async () => {
    user.setup();
    renderWithRouter(<SignUpForm authService={authService} />);

    const firstNameInput = await screen.findByLabelText(/first name/i);
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = await screen.findByLabelText(/last name/i);
    expect(lastNameInput).toBeInTheDocument();

    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/^password/i);
    expect(passwordInput).toBeInTheDocument();

    const confirmPasswordInput = screen.getByLabelText(/confirm/i);
    expect(confirmPasswordInput).toBeInTheDocument();

    const submitButton = await screen.findByRole("button", { name: /sign up/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    await user.type(firstNameInput, "John");
    await user.clear(firstNameInput);
    await user.click(lastNameInput);
    const errorText = await screen.findByText(/required/i);
    expect(errorText).toBeInTheDocument();

    expect(submitButton).toBeDisabled();
    // await user().type(firstNameInput, "John");
  });
});
