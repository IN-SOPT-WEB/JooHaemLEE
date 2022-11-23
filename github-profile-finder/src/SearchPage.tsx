import styled from "styled-components";
import { ProfileResult } from "./components/ProfileResult";
import { ProfileSearch } from "./components/ProfileSearch";
import { Route, Routes } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5em;
`;

function SearchPage() {
  return (
    <Container>
      <ProfileSearch />
      <Routes>
        <Route path=":name" element={<ProfileResult />}></Route>
      </Routes>
    </Container>
  );
}

export default SearchPage;
