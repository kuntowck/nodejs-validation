import Joi from "joi";

/* eslint-disable no-undef */
describe("Joi", () => {
  it("should can validate date schema", () => {
    const schema = Joi.date().min("1-1-2002").max("now").required();

    const result = schema.validate("8/31/2001");
    console.log(result.value); // return type: object Date
    console.log(result.error); // return ype: object ValidationError

    const result2 = schema.validate("6/24/2024");
    console.log(result2);
  });
});
