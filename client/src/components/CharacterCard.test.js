import React from "react";
import { shallow } from "enzyme";
import CharacterCard from "./CharacterCard";

describe("CharacterCard", () => {
  it("should render the name of the character", () => {
    const testCharacter = {
      name: "testName"
    };
    const wrapper = shallow(<CharacterCard character={testCharacter} />);
    expect(wrapper.find(".characterName").text()).toEqual(testCharacter.name);
  });
  it("should render homeworld and species when passed", () => {
    const testCharacter = {
      name: "testName",
      homeworld: {
        name: "testHomeWorldName"
      },
      species: {
        name: "testSpeciesName"
      }
    };
    const wrapper = shallow(<CharacterCard character={testCharacter} />);
    console.log(wrapper.html());
    expect(wrapper.find(".homeWorld").text()).toEqual(
      testCharacter.homeworld.name
    );
    expect(wrapper.find(".species").text()).toEqual(testCharacter.species.name);
  });
});
