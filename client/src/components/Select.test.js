import React from "react";
import { render } from "@testing-library/react";

import Select from "../components/Select";

describe("Outlined Select component", () => {
  describe("render tests", () => {
    it("should render all necessary parts", () => {
      const testLabel = "testLabel";
      const { getByText, getByTestId } = render(<Select label={testLabel} />);
      expect(getByText(testLabel)).toBeDefined();
      expect(getByTestId(`select-${testLabel}`)).toBeDefined();
    });
    it("should render default option with noOptionMessage when there is no option passed", () => {
      const testNoOptionMessage = "testNoOptionMessage";
      const { getByText } = render(
        <Select noOptionMessage={testNoOptionMessage} />
      );
      expect(getByText(testNoOptionMessage)).toBeDefined();
    });
    it("should render multiple options when options are passed", () => {
      const testOptions = [
        {
          value: "testValue1",
          text: "testText1"
        },
        {
          value: "testValue2",
          text: "testText2"
        },
        {
          value: "testValue3",
          text: "testText3"
        }
      ];
      const { getByText } = render(<Select options={testOptions} />);
      expect(getByText("testText1")).toBeDefined();
      expect(getByText("testText2")).toBeDefined();
      expect(getByText("testText3")).toBeDefined();
    });
  });
});
