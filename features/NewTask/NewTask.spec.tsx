import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import cases from "jest-in-case";
import { Provider } from "react-redux";
import { makeStore } from "../../lib/redux/store";
import NewTask from "./NewTask";
describe("<NewTask />", () => {
  it("renders the component", () => {
    const store = makeStore();
    render(
      <Provider store={store}>
        <NewTask />
      </Provider>
    );
    expect(screen.getByText("Select hash type...")).toBeInTheDocument();
  });

  it("shows the input component after selecting hash type and instructions", async () => {
    const store = makeStore();
    render(
      <Provider store={store}>
        <NewTask />
      </Provider>
    );

    expect(
      screen.queryByLabelText(/paste your hashlist here/i)
    ).not.toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "MD5" })
    );
    expect(
      await screen.findByLabelText(/paste your hashlist here/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByLabelText(
        /Drag here hashlist file or click to browse/i
      )
    ).toBeInTheDocument();

    expect(
      await document.getElementById("hashlist_instructions")
    ).toBeInTheDocument();
  });

  it("shows appropriate UI when selected WPA/WPA2 EAPOL", async () => {
    const store = makeStore();
    render(
      <Provider store={store}>
        <NewTask />
      </Provider>
    );

    await user.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: /WPA\/WPA2 EAPOL/i })
    );

    expect(
      screen.queryByLabelText(/paste your hashlist here/i)
    ).not.toBeInTheDocument();

    expect(
      await screen.findByLabelText(
        /Drag here .hccap, .hccapx, .cap, .pcap with WPA handshake or click to browse/i
      )
    ).toBeInTheDocument();

    expect(await screen.findByLabelText(/ESSID/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/BSSID/i)).toBeInTheDocument();
    expect(
      await document.getElementById("pcap_capture_instructions")
    ).toBeInTheDocument();
  });

  cases(
    "Select other Wireless Network HashTypes",
    async (opts) => {
      const store = makeStore();
      render(
        <Provider store={store}>
          <NewTask />
        </Provider>
      );
      await user.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", { name: opts.roleName })
      );

      expect(
        screen.queryByLabelText(
          /Drag here .hccap, .hccapx, .cap, .pcap with WPA handshake or click to browse/i
        )
      ).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/ESSID/i)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/BSSID/i)).not.toBeInTheDocument();

      expect(await screen.findByLabelText(opts.label)).toBeInTheDocument();
      expect(
        await document.getElementById("pcap_capture_instructions")
      ).toBeInTheDocument();
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
