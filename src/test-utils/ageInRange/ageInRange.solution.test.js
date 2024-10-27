import ageInRange from "./index";
import mockDate from "mockdate";

describe("check is child's age is in range", () => {
  beforeAll(() => {
    mockDate.set("2022-10-27");
  });

  it("should return false if child's DOB is too old for activity", () => {
    const childDateOfBirth = "2019-10-27";
    const ageMonthsStart = 12;
    const ageMonthsEnd = 24;

    const output = ageInRange(childDateOfBirth, ageMonthsStart, ageMonthsEnd);

    expect(output).toEqual(false);
  });

  it("should return false if child's DOB is too young for activity", () => {
    const childDateOfBirth = "2022-09-27";
    const ageMonthsStart = 12;
    const ageMonthsEnd = 24;

    const output = ageInRange(childDateOfBirth, ageMonthsStart, ageMonthsEnd);

    expect(output).toEqual(false);
  });

  it("should return true if child's DOB is in range of the activity", () => {
    const childDateOfBirth = "2021-05-27";
    const ageMonthsStart = 12;
    const ageMonthsEnd = 24;

    const output = ageInRange(childDateOfBirth, ageMonthsStart, ageMonthsEnd);

    expect(output).toEqual(true);
  });

  it("should return true if child's DOB equals the lower boundary of the activity", () => {
    const childDateOfBirth = "2021-10-27";
    const ageMonthsStart = 12;
    const ageMonthsEnd = 24;

    const output = ageInRange(childDateOfBirth, ageMonthsStart, ageMonthsEnd);

    expect(output).toEqual(true);
  });

  it("should return true if child's DOB equals the upper boundary of the activity", () => {
    const childDateOfBirth = "2020-10-27";
    const ageMonthsStart = 12;
    const ageMonthsEnd = 24;

    const output = ageInRange(childDateOfBirth, ageMonthsStart, ageMonthsEnd);

    expect(output).toEqual(true);
  });

  it("should return true if ageMonthsStart is 0 and child's DOB is in range of upper and lower boundary", () => {
    const childDateOfBirth = "2022-02-01";
    const ageMonthsStart = 0;
    const ageMonthsEnd = 60;

    const output = ageInRange(childDateOfBirth, ageMonthsStart, ageMonthsEnd);

    expect(output).toEqual(true);
  });
});
