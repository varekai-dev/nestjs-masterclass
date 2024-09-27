import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .default('development'),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USER: Joi.string().default('postgres'),
  DATABASE_PASSWORD: Joi.string().default('postgres'),
  DATABASE_NAME: Joi.string().default('postgres'),
  DATABASE_SYNC: Joi.boolean().default(false),
  DATABASE_AUTO_LOAD_ENTITIES: Joi.boolean().default(true),
  PROFILE_API_KEY: Joi.string().required(),
});
