const tokenName = 'SEI-Project-4'

// This function takes a request object and returns form data as a JS object
export async function formToObj(request){
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}

export function setToken(token){
  localStorage.setItem(tokenName, token)
}

export function getToken(){
  return localStorage.getItem(tokenName)
}

export function removeToken(){
  localStorage.removeItem(tokenName)
}

// This function will decode the JWT token in our localstorage
// If the token does not exist, will return null
// If the token exists, we will decode, validate expiry date, return the payload.sub
export function activeUser() {
  // Get token from localstorage
  const token = getToken();

  if (!token) return null;

  // If token exists
  try {
    const b64 = token.split('.')[1];
    const payload = JSON.parse(atob(b64));

    const now = Date.now() / 1000;
    const exp = payload.exp;

    if (exp > now) {
      console.log(payload.user_id);
      return payload.user_id;
    } else {
      removeToken();
      return null;
    }
  } catch (error) {
    // Handle decoding error
    console.error('Error decoding token:', error);
    removeToken();
    return null;
  }
}