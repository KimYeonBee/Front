import { postResponse } from "@core/api/instance";
import type { LoginResponse } from "./login";
import { setTokens } from "./auth";

export async function postDemoLogin() {
  try {
    const id = import.meta.env.VITE_DEMO_ID;
    const password = import.meta.env.VITE_DEMO_PASSWORD;

    if (!id || !password)
      throw new Error("데모 계정 정보가 설정되어 있지 않습니다.");

    const res = await postResponse<
      { id: string; password: string },
      LoginResponse
    >("/api/users/signin", { id, password });

    if (!res) throw new Error("서버 응답이 없습니다.");

    setTokens({ access: res.token, refresh: "" });
    localStorage.setItem("user_type", "demo");

    return true;
  } catch (err) {
    console.error("데모 로그인 오류:", err);
    return false;
  }
}
