export default async (req: any, res: any) => {
  console.log('[API] Request:', req.url, req.method);
  try {
    // Dynamically import the server on each request to ensure fresh module
    // @ts-ignore - server.js is generated at build time
    const { default: server } = await import('../dist/server/server.js');
    console.log('[API] Server imported');
    
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || req.headers['x-forwarded-host'] || 'localhost';
    const pathname = req.url || req.path || '/';
    const url = new URL(pathname, `${protocol}://${host}`);
    
    if (!server?.fetch) {
      console.error('[API] Server fetch not found');
      res.statusCode = 500;
      res.end('Server error');
      return;
    }

    const response = await server.fetch(url.toString(), {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    });

    console.log('[API] Response status:', response.status);
    response.headers.forEach((value: string, key: string) => {
      res.setHeader(key, value);
    });
    
    res.end(await response.text());
  } catch (error) {
    console.error('[API] Error:', error instanceof Error ? error.message : String(error), error instanceof Error ? error.stack : '');
    res.statusCode = 500;
    res.end('Error: ' + String(error));
  }
};

