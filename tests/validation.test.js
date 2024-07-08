/* eslint-disable no-undef */
import Joi from "joi";

describe("joi", () => {
  it("should can create schema", () => {
    const schema = Joi.string().min(3).max(100).required();

    const result = schema.validate("kunto");
    if (result.error) {
      console.info(result.error);
    }
  });

  it("should can validate data type schema", () => {
    const userNameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().min(1000).max(10000).required();

    const result1 = userNameSchema.validate("kuntowck@gmail.com");
    console.log(result1);

    const result2 = isAdminSchema.validate(false);
    console.log(result2);

    const result3 = priceSchema.validate(1200);
    console.log(result3);
  });
});
