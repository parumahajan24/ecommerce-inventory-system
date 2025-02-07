export const successResponse = (data, statusCode = 200) => ({
    statusCode,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  });
  
  export const errorResponse = (error, statusCode = 500) => ({
    statusCode,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({ error: error.message || 'Internal Server Error'})
  });