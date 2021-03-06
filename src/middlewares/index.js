const validateFields = require('./validateFields');

const validateEmailExists = require('./email/validateEmailExists');
const validateEmailRepeated = require('./email/validateEmailRepeated');

const validatePasswordExists = require('./password/validatePasswordExists');
const validateOldPassword = require('./password/validateOldPassword');
const encryptPassword = require('./password/encryptPassword');
const encryptNewPassword = require('./password/encryptNewPassword');

const validateToken = require('./jwt/validateToken');
const validateTokenByParams = require('./jwt/validateTokenByParams');

const validateTaskId = require('./task/validateTaskId');
const validateTaskExists = require('./task/validateTaskExists');

const validateUserImage = require('./userImage/validateUserImage');
const validateImageExtension = require('./userImage/validateImageExtension');
const deletePreviousUserImage = require('./userImage/deletePreviousUserImage');

module.exports = {
  validateFields,
  validateEmailExists,
  validateEmailRepeated,
  validatePasswordExists,
  validateOldPassword,
  encryptPassword,
  encryptNewPassword,
  validateToken,
  validateTokenByParams,
  validateTaskId,
  validateTaskExists,
  validateUserImage,
  validateImageExtension,
  deletePreviousUserImage,
};
