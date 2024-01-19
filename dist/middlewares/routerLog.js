"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = (req, res, next) => {
  const log = `[${req.method}] ${req.originalUrl}`;
  console.log(log);
  return next();
};