export const get = '/groups';
export const getRecursively = `${get}/getrecursively`;
export const update = `${get}/update`;
export const create = `${get}/create`;
export const byId = id => `${get}/${id}`;
