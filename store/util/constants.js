export const ROOT_URL = // gotta host this on server 
// export const ROOT_URL = 'http://localhost:9090/api';

export const API_KEY = '?key=berhenti-user';

let BEARER_TOKEN = '';

export function getBearerToken() {
  return BEARER_TOKEN;
}

export function setBearerToken(token) {
  BEARER_TOKEN = token;
}