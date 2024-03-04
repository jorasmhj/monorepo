import Joi from "joi";

export default Joi.object({
  status: Joi.string().required(),
  severity: Joi.string().required(),
  event: Joi.object({
    type: Joi.string().required(),
  }),

  user: Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
  }),
  log: Joi.object({
    note: Joi.string().required(),
    type: Joi.string().required(),
    module: Joi.string().required(),
  }),
});
