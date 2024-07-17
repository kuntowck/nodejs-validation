/* eslint-disable no-undef */
import Joi from "joi";

describe("Joi", () => {
  it("should can validate array", () => {
    const schema = Joi.array()
      .items(Joi.string().required().min(3).max(100))
      .min(1)
      .unique();

    const hobbies = ["eating", "reading", "gaming", "coding"];

    const result = schema.validate(hobbies, { abortEarly: false });

    console.log(result);
  });
});
