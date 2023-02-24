import { REACT_APP_API_KEY } from './constants';

export const requestBody = (modelName, calledMethod, methodProperties) => ({
  apiKey: REACT_APP_API_KEY,
  modelName,
  calledMethod,
  methodProperties,
});