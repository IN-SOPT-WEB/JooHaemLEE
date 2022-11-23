import { ReactElement } from "react";
import styled from "styled-components";
import { useGithubProfileInfo } from "../utils/hooks";
import { GlassCard } from "./GlassCard";
import { UserProfile } from "./UserProfile";
import { useNavigate, useParams } from "react-router-dom";

export function ProfileResult() {
  const navigate = useNavigate();

  return (
    <GlassCard marginTop="1em">
      <CloseButton onClick={() => navigate("/search")}>X</CloseButton>
      <ProfileResultContent />
    </GlassCard>
  );
}

const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;

  top: 0;
  right: 0;

  text-align: center;
  width: 2em;
  height: 2em;

  background-color: transparent;
  border: none;
  border-radius: 0 14px 0 14px;
  color: inherit;
  font-size: 1.3rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }
`;

function ProfileResultContent(): ReactElement {
  const { name } = useParams() as { name: string };

  const { isLoading, isError, isNotFound, userInfo } =
    useGithubProfileInfo(name);

  if (isLoading) {
    return (
      <LoadingBox>
        <Loader />
      </LoadingBox>
    );
  }

  if (isError) {
    return <ErrorBox>ERROR</ErrorBox>;
  }

  if (isNotFound) {
    return <NotFoundBox>Not Found</NotFoundBox>;
  }

  if (userInfo === null) {
    return <div>NO</div>;
  }

  return <UserProfile userInfo={userInfo} />;
}

const LoadingBox = styled.div`
  margin: 1em 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;

const Loader = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: #f3f3f3;
  margin: 0 auto;

  animation: move 300ms linear 0s infinite alternate none;

  @keyframes move {
    0% {
      transform: translateX(-25px);
    }

    100% {
      transform: translateX(25px);
    }
  }
`;

const ErrorBox = styled.div`
  margin: 1em 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;

const NotFoundBox = styled.div`
  margin: 1em 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;
