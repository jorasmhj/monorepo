import Joi from "joi";

export default Joi.object({
  businessName: Joi.string().required(),
});
