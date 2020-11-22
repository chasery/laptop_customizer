import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SummaryTotal from "./SummaryTotal";

describe("SummaryTotal component", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<SummaryTotal />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
