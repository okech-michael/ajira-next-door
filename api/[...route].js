export default async (req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  try {
    let server;
    try {
      // Try to import the server module
      const serverModule = await import('../dist/server/server.js');
      server = serverModule.default || serverModule;
    } catch (importError) {
      console.error('Failed to import server module:', importError.message);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      return res.end(`Failed to load server: ${importError.message}`);
    }

    if (!server || typeof server.fetch !== 'function') {
      console.error('Server fetch not available', { hasServer: !!server, hasFetch: !!server?.fetch });
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Server initialization failed');
    }

    // Build the full URL
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const fullUrl = `${protocol}://${host}${req.url}`;

    console.log('Handling request:', { method: req.method, url: req.url, fullUrl });

    // Call the server's fetch handler
    const response = await server.fetch(fullUrl, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    });

    // Copy response status and headers
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send body
    const text = await response.text();
    res.end(text);
  } catch (error) {
    console.error('Unhandled API error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Error: ${error.message}`);
  }
};

