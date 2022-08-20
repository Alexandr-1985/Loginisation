export const authAPI = {
  login(login: string, password: string, rememberMe: boolean = false) {
    // debugger;
    return new Promise((res, rej) => {
      if (login === "alex@example.com" && password === "password") {
        // debugger;
        setTimeout(() => {
          res({ id: 1, login: "alex@example.com" });
        }, 1000);
      } else {
        setTimeout(() => {
          rej(`User ${login} not found`);
        }, 1000);
      }
    });
  },

  logout() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("user out");
      }, 1000);
    });
  },
};
