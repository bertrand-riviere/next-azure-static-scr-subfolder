import { jwtVerify } from 'jose';
import jwtDecode from 'jwt-decode';
import * as R from 'ramda';

const jwtSecret = process.env.JWT_SECRET;

const toByteArray = (string) => Uint8Array.from(string, (c) => c.charCodeAt(0));

export const getTokenFromAuthorizationHeaderValue = R.compose(
  R.last,
  R.split(' '),
  R.when(R.isNil, R.always('')),
);

export const verifyToken = (token) => jwtVerify(token, toByteArray(jwtSecret));

export const decodeToken = jwtDecode;
