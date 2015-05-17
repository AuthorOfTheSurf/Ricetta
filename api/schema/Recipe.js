var Joi = require('joi');

var ONE_DAY_IN_MINUTES = 1440;
var AT_LEAST_2_TAGS = Joi.array().items(Joi.string()).min(2);

var schema = Joi.object().keys({

  uuid: Joi.string().guid().required(),
  author: Joi.string().regex(/[a-zA-Z0-9]{4,30}/).required(),
  image: Joi.string().uri(),
  url: Joi.string().uri().required(),
  title: Joi.string().min(4).max(256).required(),
  notes: Joi.string().min(0).max(2048),
  // No ingredients for now
  // ingredients: ...,
  cookTimeMinutes: Joi.number().min(0).max(ONE_DAY_IN_MINUTES),
  prepTimeMinutes: Joi.number().min(0).max(ONE_DAY_IN_MINUTES),
  // No steps for now
  // steps: ...,
  tags: AT_LEAST_2_TAGS,
  isPrivate: Joi.boolean(),
  created: Joi.date().iso().required(),
  lastModified: Joi.date().iso().min(Joi.ref('created')).required() 

})

var Recipe = function(obj) {
  return {
    uuid:            obj.uuid || undefined,
    author:          obj.author || undefined,
    image:           obj.image || "",
    url:             obj.url || undefined,
    title:           obj.title || undefined,
    notes:           obj.notes || "",
    cookTimeMinutes: obj.cookTimeMinutes || 0,
    prepTimeMinutes: obj.prepTimeMinutes || 0,
    tags:            obj.tags || [],
    isPrivate:       obj.isPrivate || false,
    created:         obj.created || undefined,
    lastModified:    obj.lastModified || undefined
  }
}

module.exports.validateNew = function(obj, callback) {
  var recipe = new Recipe(obj);
  Joi.validate(recipe, schema, callback);
}
