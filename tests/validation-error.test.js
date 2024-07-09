/* eslint-disable no-undef */
import Joi from "joi";

describe("Joi", () => {
  it("should return validation error", () => {
    const schema = Joi.string().email().min(3).required();

    const result = schema.validate("ow", { abortEarly: false });
    console.log(result.value);

    if (result.error) {
      result.error.details.map((detail) => {
        console.log(`${detail.value} = ${detail.message}`);
      });
    }
  });
});
