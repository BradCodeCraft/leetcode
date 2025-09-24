import { describe, test } from "mocha";
import { expect } from "chai";
import { MapSum } from "../src/677-map-sum-pairs.js";

describe("Map Sum Pairs", () => {
  test("Case 1", () => {
    const mapSum = new MapSum();
    mapSum.insert("apple", 3);

    expect(mapSum.sum("ap")).to.eq(3);

    mapSum.insert("app", 2);

    expect(mapSum.sum("ap")).to.eq(5);
  });

  test("Case 2", () => {
    const mapSum = new MapSum();
    mapSum.insert("apple", 3);

    expect(mapSum.sum("ap")).to.eq(3);

    mapSum.insert("apple", 2);

    expect(mapSum.sum("ap")).to.eq(2);
  });

  test("Failed Cases", () => {
    const mapSumOne = new MapSum();
    mapSumOne.insert("apple", 3);

    expect(mapSumOne.sum("apple")).to.eq(3);

    mapSumOne.insert("app", 2);

    expect(mapSumOne.sum("ap")).to.eq(5);

    const mapSumTwo = new MapSum();
    mapSumTwo.insert("aa", 3);

    expect(mapSumTwo.sum("aa")).to.eq(3);

    mapSumTwo.insert("aa", 2);

    expect(mapSumTwo.sum("a")).to.eq(2);
    expect(mapSumTwo.sum("aa")).to.eq(2);

    mapSumTwo.insert("aaa", 3);

    expect(mapSumTwo.sum("aaa")).to.eq(3);
    expect(mapSumTwo.sum("bbb")).to.eq(0);
    expect(mapSumTwo.sum("ccc")).to.eq(0);

    mapSumTwo.insert("aewfwaefjeoawefjwoeajfowajfoewajfoawefjeowajfowaj", 111);

    expect(mapSumTwo.sum("a")).to.eq(116);
    expect(mapSumTwo.sum("aa")).to.eq(5);
  });
});
