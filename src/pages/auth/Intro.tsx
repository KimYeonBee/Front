import { Button, ButtonLayout } from "@core/ui/button";
import OrDivider from "@core/ui/OrDivider";
import * as s from "./Intro_styled";
import { useNavigate } from "react-router-dom";
import { postDemoLogin } from "@apis/auth/demoLogin";

const Intro = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  const handleDemoLogin = async () => {
    const ok = await postDemoLogin();
    if (ok) navigate("/");
    else alert("데모 로그인 실패");
  };

  return (
    <s.IntroWrapper>
      <s.IntroTitleContainer>
        <p>당신의 하루가 더 활짝 피어나도록</p>
        <img src="/img/auth/logo.png" />
      </s.IntroTitleContainer>
      <s.IntroBtnContainer>
        <Button tone="blue" radius="5px" typo="body3" onClick={handleLogin}>
          기존 계정으로 로그인
        </Button>
        <OrDivider>또는</OrDivider>
        <ButtonLayout type="stack" gap={12}>
          <Button
            tone="blue"
            variant="outline"
            radius="5px"
            typo="body3"
            onClick={handleDemoLogin}
          >
            데모 계정으로 시작
          </Button>
          <Button
            tone="gray"
            variant="solid"
            radius="5px"
            typo="body3"
            onClick={handleSignup}
          >
            회원가입
          </Button>
        </ButtonLayout>
      </s.IntroBtnContainer>
    </s.IntroWrapper>
  );
};

export default Intro;
