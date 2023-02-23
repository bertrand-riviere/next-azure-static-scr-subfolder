// eslint-disable @next/next/no-server-import-in-page
import { NextResponse } from 'next/server';
import * as R from 'ramda';

import cors from './utils/cors';
import {
  getTokenFromAuthorizationHeaderValue,
  verifyToken,
} from './utils/authUtil';

export const middleware = async (req) => {
  if (req.method === 'OPTIONS') {
    return cors(req, new NextResponse(null, { status: 200 }));
  }

  if (!R.startsWith('/api/backend', req.nextUrl.pathname)) {
    // not protected apis; continue
    return cors(req, NextResponse.next());
  }

  // protected apis; check auth
  const token = getTokenFromAuthorizationHeaderValue(
    req.headers.get('Authorization'),
  );

  try {
    await verifyToken(token);
    return cors(req, NextResponse.next());
  } catch (e) {
    return cors(req, new NextResponse('Auth required', { status: 401 }));
  }
};

export const config = {
  matcher: ['/api/:path*'],
};
