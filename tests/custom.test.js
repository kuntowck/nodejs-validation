/* eslint-disable no-undef */
import Joi from "joi";

describe("Joi", () => {
  it("should can create custom validation", () => {
    const schema = Joi.object({
      username: Joi.string().required().min(3).max(100).email(),
      password: Joi.string()
        .required()
        .min(6)
        .max(100)
        .custom((value, helpers) => {
          if (value.startsWith("kunto")) {
            return helpers.error("password.wrong");
          }

          return value;
        })
        .messages({
          "password.wrong": "password can't start with 'kunto'",
        }),
      confirmPassowrd: Joi.string().required().min(6).max(100),
    })
      .custom((value, helpers) => {
        if (value.password !== value.confirmPassowrd) {
          return helpers.error("register.password.different");
        }

        return value;
      })
      .messages({
        "register.password.different":
          "Password and confirm password is different",
      });

    const request = {
      username: "kunto@gmail.com",
      password: "rahasia",
      confirmPassowrd: "rahasia",
    };

    const result = schema.validate(request, { abortEarly: false });

    console.log(result.value);
  });
});
