import { Button, ButtonLayout } from "@core/ui/button";

const Btn = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: 24,
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Button tone="blue">기본 블루</Button>
      <Button tone="gray">기본 블루</Button>
      <Button tone="blue" variant="subtle">
        서브톤
      </Button>
      <Button tone="blue" variant="outline">
        회색 아웃라인
      </Button>

      <Button tone="blue" radius="20px">
        radius 20px
      </Button>
      <Button tone="blue" radius="pill" typo="heading3">
        알약 버튼
      </Button>
      <Button tone="gray" radius="pill" disabled>
        신청 완료
      </Button>

      <Button
        tone="blue"
        variant="solid"
        typo="body1"
        size="lg"
        radius="lg"
        leftIcon={
          <img src="/img/btn/camera.png" alt="카메라" width={18} height={18} />
        }
      >
        요양등급 등록하러 가기
      </Button>

      {/* === 2행 (세로로 2개) === */}
      <ButtonLayout type="stack" gap={12}>
        <Button tone="gray" variant="outline" fullWidth>
          전화하기
        </Button>
        <Button tone="blue" variant="solid" fullWidth>
          상담 신청
        </Button>
      </ButtonLayout>

      {/* === 2열 (가로로 2개) === */}
      <ButtonLayout type="row" gap={12}>
        <Button tone="gray" variant="outline">
          취소
        </Button>
        <Button tone="blue" variant="solid">
          확인
        </Button>
      </ButtonLayout>

      {/* 커스텀: 2열 비대칭 분배가 필요하면 각각 style로 flex 지정 가능 */}
      <ButtonLayout type="row" gap={12}>
        <Button tone="gray" variant="outline" style={{ flex: 1 }}>
          뒤로
        </Button>
      </ButtonLayout>
    </div>
  );
};

export default Btn;
