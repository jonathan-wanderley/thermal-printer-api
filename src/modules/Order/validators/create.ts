import { validate, Joi } from "express-validation";

const createValidator = validate({
  body: Joi.object({
    clientName: Joi.string().min(2).required(),
    products: Joi.array().items(Joi.string()).required(),
    payment: Joi.object({
      amountPaid: Joi.number(),
      methods: Joi.array().items(Joi.string()).required(),
    }).required(),
    note: Joi.string(),
  }),
})

export default createValidator;
