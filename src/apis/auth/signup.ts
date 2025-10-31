import { postResponse } from "@core/api/instance";

export type SignupRequest = {
  name: string;
  phone: string;
  relation: string;
  password: string;
  passwordCheck: string;
};

export type SignupResponse = {
  isSuccess: boolean;
  message: string;
};

export async function postSignup(body: SignupRequest) {
  return await postResponse<SignupRequest, SignupResponse>(
    "/api/users/signup",
    body
  );
}
