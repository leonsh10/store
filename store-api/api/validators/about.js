import Joi from "joi";

const aboutSchema = {
  validateAboutId: {
    params: Joi.object({
      aboutId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
  },
  validateId: {
    params: Joi.object({
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
  },
  post: {
    body: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      userId: Joi.string(),
    }),
  },
  put: {
    body: Joi.object({
      _id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      userId: Joi.string(),
    }),
  },
};

export default aboutSchema;
