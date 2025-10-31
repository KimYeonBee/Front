// src/pages/auth/Signup.tsx
import { useState } from "react";
import { Button } from "@core/ui/button";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@components/auth/authLayout";
import InputContainer from "@components/auth/inputContainer";
import { postSignup } from "@apis/auth/signup";
import { relationLabel, type RelationCode } from "@constants/relation";
import RelationSelectModal from "@components/auth/RelationSelectModal";

export default function Signup() {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState<RelationCode | "">("");
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async () => {
    setError(null);

    const res = await postSignup({
      name,
      relation,
      phone: phone.replace(/[^0-9]/g, ""),
      password: pw,
      passwordCheck: pwCheck,
    });

    if (!res?.isSuccess) {
      return setError(res?.message || "회원가입에 실패했습니다.");
    }

    navigate("/login");
  };

  return (
    <AuthLayout
      title="상세정보 입력"
      footer={
        <Button tone="blue" radius="pill" size="lg" onClick={onSubmit}>
          다음
        </Button>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <InputContainer
          label="이름"
          value={name}
          onChange={setName}
          placeholder="홍길동"
          autoComplete="name"
          helperText=" "
        />
        <InputContainer
          label="돌봄 대상자와의 관계"
          value={relationLabel(relation || undefined)}
          onChange={() => {}}
          placeholder="클릭하여 선택하기"
          helperText=" "
          clickable
          onClickInput={() => setOpen(true)}
        />

        <RelationSelectModal
          open={open}
          value={relation || undefined}
          onClose={() => setOpen(false)}
          onSelect={(code) => {
            setRelation(code);
            setOpen(false);
          }}
        />
        <InputContainer
          label="휴대폰 번호"
          value={phone}
          onChange={(v) => setPhone(v.replace(/[^0-9]/g, ""))}
          placeholder="01012345678"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          helperText=" "
        />
        <InputContainer
          label="비밀번호"
          value={pw}
          onChange={setPw}
          placeholder="영문, 숫자, 특수문자 조합 6자 이상"
          type="password"
          autoComplete="new-password"
          showToggleForPassword
          errorText={error ?? undefined}
        />
        <InputContainer
          label="비밀번호 확인"
          value={pwCheck}
          onChange={setPwCheck}
          placeholder="비밀번호를 다시 입력하세요"
          type="password"
          autoComplete="new-password"
          showToggleForPassword
        />
      </div>
    </AuthLayout>
  );
}
