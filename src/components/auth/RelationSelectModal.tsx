import styled from "styled-components";
import { RELATION_OPTIONS, type RelationCode } from "@constants/relation";

type Props = {
  open: boolean;
  value?: RelationCode;
  onClose: () => void;
  onSelect: (v: RelationCode) => void;
  title?: string;
};

export default function RelationSelectModal({
  open,
  value,
  onClose,
  onSelect,
  title = "돌봄 대상자와의 관계",
}: Props) {
  if (!open) return null;

  const onKeyDownDim = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <Dim
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onKeyDown={onKeyDownDim}
    >
      <Sheet onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>{title}</h3>
          <button onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </Header>

        <List role="listbox" aria-label={title}>
          {RELATION_OPTIONS.map((opt) => {
            const selected = opt.value === value;
            return (
              <Item
                key={opt.value}
                role="option"
                aria-selected={selected}
                onClick={() => onSelect(opt.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(opt.value);
                  }
                }}
              >
                <span>{opt.label}</span>
                <Radio aria-hidden />
              </Item>
            );
          })}
        </List>
      </Sheet>
    </Dim>
  );
}

/* styles */
const Dim = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 26, 0.4);
  display: flex;
  align-items: flex-end;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const Sheet = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray01};
  border-radius: 20px 20px 0 0;
  padding: 1.3rem 1.3rem calc(16px + env(safe-area-inset-bottom));
  max-width: 393px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.gray07};
    ${({ theme }) => theme.fonts.heading3}
  }
  button {
    font-size: 17px;
    color: ${({ theme }) => theme.colors.gray05};
  }
`;

const List = styled.div`
  display: grid;
  gap: 8px;
`;

const Radio = styled.i`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.gray03};
  display: inline-block;
  position: relative;
  flex: 0 0 22px;

  /* 안쪽 점 */
  &::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: transparent;
  }
`;

const Item = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray03};
  cursor: pointer;

  span {
    ${({ theme }) => theme.fonts.body2}
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue03};
    outline-offset: 2px;
  }
  &[aria-selected="true"] {
    border-color: ${({ theme }) => theme.colors.blue01};
    background: ${({ theme }) => theme.colors.blue03}; /* 연한 파랑 배경 */
  }

  /* 선택 상태에서 라디오도 파랑으로 */
  &[aria-selected="true"] ${/* sc-selector */ Radio} {
    border-color: ${({ theme }) => theme.colors.blue01};
  }
  &[aria-selected="true"] ${/* sc-selector */ Radio}::after {
    background: ${({ theme }) => theme.colors.blue01};
  }
`;
