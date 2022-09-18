export const basicData = (status: number, message: string, success = false) => {
  return { status, message, success };
};
export const authError = () => {
  return Response.json(basicData(401, "Unauthorized"), { status: 401 });
};
export const notFound = () => {
  return Response.json(basicData(404, "Not Found"), { status: 404 });
};
export const internalError = () => {
  return Response.json(basicData(500, "Internal Server Error"), {
    status: 500,
  });
};
export const badRequest = (message = "Bad Request") => {
  return Response.json(basicData(400, message), { status: 400 });
};
export const forbidden = () => {
  return Response.json(basicData(403, "Forbidden"), { status: 403 });
};
