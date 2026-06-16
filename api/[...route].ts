export default async (req: any, res: any) => {
  try {
    // Dynamically import the server on each request to ensure fresh module
    // @ts-ignore - server.js is generated at build time
    const { default: server } = await import('../dist/server/server.js');
    
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || req.headers['x-forwarded-host'] || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`);
    
    if (!server?.fetch) {
      console.error('Server fetch method not found');
      res.statusCode = 500;
      res.end('Server error');
      return;
    }

    const response = await server.fetch(url.toString(), {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
    });

    res.statusCode = response.status;
    response.headers.forEach((value: string, key: string) => {
      res.setHeader(key, value);
    });
    
    res.end(await response.text());
  } catch (error) {
    console.error('API error:', error);
    res.statusCode = 500;
    res.end('Error');
  }
};

