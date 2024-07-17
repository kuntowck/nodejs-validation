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

  it("should can validate array of object", () => {
    const schema = Joi.array()
      .min(1)
      .items(
        Joi.object({
          street: Joi.string().required().max(200),
          city: Joi.string().required().max(100),
          country: Joi.string().required().max(100),
        })
      );

    const address = [
      {
        street: "Jl.Asmawi H.M",
        city: "Tangerang Selatan",
        country: "Indonesia",
      },
    ];

    const result = schema.validate(address, { abortEarly: false });
    console.log(result.value);
    console.log(result.error);
  });
});
