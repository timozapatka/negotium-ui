export interface UserInterface {
  provider: Keycloak.KeycloakInstance | undefined,
  authenticated: boolean;
  fullname: string | undefined,
  firstName: string | undefined,
  lastName:  string | undefined,
  username: string | undefined,
  email:string | undefined,
  attributes: [] | undefined;
}

function state(): UserInterface {
  return {
    provider: undefined,
    authenticated: false,
    fullname: undefined,
    firstName: undefined,
    lastName: undefined,
    username: undefined,
    email: undefined,
    attributes: undefined
  }
};

export default state;
