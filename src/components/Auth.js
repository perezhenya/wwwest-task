export const TOKEN_KEY = 'tokenKey';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => JSON.parse(localStorage.getItem(TOKEN_KEY));

export const login = token => {
    const state =  JSON.stringify(token);
   localStorage.setItem(TOKEN_KEY, state);
}
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};