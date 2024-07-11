import Joi from "joi";

/* eslint-disable no-undef */
describe("Joi", () => {
  it("should can validate object schema", () => {
    const loginSchema = Joi.object({
      username: Joi.string().email().min(3).max(20).required(),
      password: Joi.string().min(6).max(20).required(),
    });

    const request = {
      username: "kuntowck@gmail.com",
      password: "rahasia",
    };

    const result = loginSchema.validate(request, { abortEarly: false });

    console.log(result.value);
  });

  it("should can validate nested object schema", () => {
    const createUserSchema = Joi.object({
      id: Joi.string().max(20).required(),
      password: Joi.string().max(20).required(),
      address: Joi.object({
        street: Joi.string().max(200).required(),
        city: Joi.string().max(100).required(),
        country: Joi.string().max(100).required(),
        zipCode: Joi.string().max(10).required(),
      }).required(),
    });

    const request = {
      id: "kuntowck",
      password: "rahasia",
      address: {},
    };

    const result = createUserSchema.validate(request, { abortEarly: false });

    console.log(result.value);
    if (result.error) {
      result.error.details.map((e) => console.log(`${e.path}: ${e.message}`));
    }
  });
});
