import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import JobDetails from "../pages/recruiter/JobDetails";

test("moving candidate stage updates UI", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <JobDetails />
      </BrowserRouter>
    </Provider>
  );

  const selects = screen.getAllByRole("combobox");
  fireEvent.change(selects[0], {
    target: { value: "Shortlisted" },
  });

  expect(selects[0].value).toBe("Shortlisted");
});