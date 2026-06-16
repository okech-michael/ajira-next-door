import serverModule from '../dist/server/server.js';

const server = serverModule.default || serverModule;

export default async (req: any, res: any) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || req.headers['x-forwarded-host'] || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`);
    
    if (!server || !server.fetch) {
      console.error('Server module invalid:', { server, hasDefault: !!serverModule.default });
      res.statusCode = 500;
      res.end('Server initialization failed');
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
    
    const body = await response.text();
    res.end(body);
  } catch (error) {
    console.error('Vercel API route error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};

