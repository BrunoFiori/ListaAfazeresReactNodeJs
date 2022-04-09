import { sendRequest, resolveIdentifier, resolveUrl } from './sendRequest';

/**
 * @param {string} endPoint
 * @param {string[]} filterFunctions ['get', 'submit', 'delete']
 */
const FrontRequest = (endPoint, filterFunctions) => {
  const getFilteredFunctions = (filterFunctions) => {
    const functions = {};

    if (filterFunctions.includes('get')) {
      functions.get = get;
    }

    if (filterFunctions.includes('submit')) {
      functions.submit = submit;
    }

    if (filterFunctions.includes('delete')) {
      functions.delete = _delete;
    }

    return functions;
  }

  const get = (id, query) => {
    return sendRequest({
      method: 'GET',
      url: resolveUrl(resolveIdentifier(endPoint, id), query),
    });
  }

  const submit = ({ id, ...payload }) => {
    return sendRequest({
      method: id ? 'PUT' : 'POST',
      url: resolveIdentifier(endPoint, id),
      data: payload,
    });
  }

  const _delete = (id) => {
    return sendRequest({
      method: 'DELETE',
      url: resolveIdentifier(endPoint, id),
    });
  }

  if (!filterFunctions) {
    return {get, submit, delete: _delete};
  }

  return getFilteredFunctions(filterFunctions);
};


export default FrontRequest;
