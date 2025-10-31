import { Outlet } from "react-router-dom";

import styled from "styled-components";

const DefaultLayout = () => {
  return (
    <OutletWrapper>
      <Outlet />
    </OutletWrapper>
  );
};

export default DefaultLayout;

const OutletWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: auto;
  flex: 1;
`;
