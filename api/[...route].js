export default async (req, res) => {
  try {
    // Debug: log exactly what Vercel sends
    console.log('[API] method:', req.method);
    console.log('[API] url:', req.url);
    console.log('[API] path:', req.path);
    console.log('[API] query:', req.query);
    console.log('[API] headers.host:', req.headers.host);
    
    // Construct the full URL properly
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || 'localhost';
    
    // req.url includes the full path with query string on Vercel
    let requestUrl = req.url || req.path || '/';
    
    // If it doesn't have protocol/host, add it
    if (!requestUrl.startsWith('http')) {
      requestUrl = `${protocol}://${host}${requestUrl}`;
    }
    
    console.log('[API] final URL:', requestUrl);
    
    // Import server
    const serverModule = await import('../dist/server/server.js');
    const server = serverModule.default || serverModule;
    
    if (!server?.fetch) {
      throw new Error('Server fetch not available');
    }
    
    // Call the server
    const response = await server.fetch(requestUrl, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    });
    
    console.log('[API] response.status:', response.status);
    
    res.statusCode = response.status;
    
    // Copy headers
    if (response.headers) {
      response.headers.forEach((value, key) => {
        res.setHeader(key, value);
      });
    }
    
    res.end(await response.text());
  } catch (error) {
    console.error('[API] Error:', error instanceof Error ? error.message : String(error));
    if (error instanceof Error) {
      console.error('[API] Stack:', error.stack);
    }
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Error: ${error instanceof Error ? error.message : String(error)}`);
  }
};
