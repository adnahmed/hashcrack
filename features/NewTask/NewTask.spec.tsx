import cases from "jest-in-case";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import { makeStore } from "../../lib/redux/store";
import NewTask from "./NewTask";
describe("<NewTask />", () => {
  it("renders the component", () => {
    const store = makeStore();
    const tree = renderer.create(
      <Provider store={store}>
        <NewTask />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows the input component after selecting hash type and instructions", () => {
  });

  it("shows appropriate UI when selected WPA/WPA2 EAPOL", () => {
  });

  cases(
    "Select other Wireless Network HashTypes",
    (opts) => {
    },
    {
      "WPA/WPA2 PMKID": {
        label: /paste your WPA PMKID/i,
        roleName: /WPA\/WPA2 PMKID/i,
      },
      "WPA/WPA2 HASH": {
        label: /paste your WPA hash/i,
        roleName: /WPA\/WPA2 HASH/i,
      },
    }
  );
});
