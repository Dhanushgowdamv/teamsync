import "express-session";

declare module "express-session" {
  interface SessionData {
    passport: {
      user: any; // you can replace "any" later with your own user type
    };
  }
}
