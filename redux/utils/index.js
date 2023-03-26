// import _ from "lodash";
export const apiTypeCreater = (type) => {
    return {
        FETCH: `${type}_FETCH`,
        SUCCESS: `${type}_SUCCESS`,
        ERROR: `${type}_ERROR`,
        RESET: `${type}_RESET`
    };
  };