import Joi from "joi";

/* eslint-disable no-undef */
describe("Joi", () => {
  it("should can validate object schema", () => {
    const loginSchema = Joi.object({
      username: Joi.string().email().min(3).max(20).required(),
      password: Joi.string().min(6).max(20).required()
    });

    const request = {
      username: "kuntowck@gmail.com",
      password: "rahasia",
    };

    const result = loginSchema.validate(request, { abortEarly: false });

    console.log(result.value);
  });
});
