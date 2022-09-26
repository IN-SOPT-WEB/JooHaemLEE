import { useRef } from 'react';
import './App.css';
import patNotice1 from './assets/1.png';
import patNotice2 from './assets/2.png';

const ids = [
  'yoojs1205',
  'leeseooo',
  'seojisoosoo',
  'talkingOrange',
  'borimong',
  'NaveOWO',
  'namjunkim12',
  'iamphj3',
  'Seong-Gyeong',
  'Brokyeom',
  'seoyeun0106',
  'Happhee',
  'hayounSong',
  'ilmerry',
  'R1mmm',
  'Dangpy',
  'wooyoung0830',
  'seobbang',
  'Dev-jwJeong',
  'choichoijin',
  'myeongheonhong',
  'hyunwookchung',
  'henization',
];

const provideHeaders = (token: string) => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Token ${token}`,
  };
};

function App() {
  const patRef = useRef<HTMLInputElement | null>(null);

  const followWebPart = async () => {
    await Promise.all(
      ids.map((id) => {
        if (!patRef || !patRef.current) return;

        return fetch(`https://api.github.com/user/following/${id}`, {
          method: 'PUT',
          body: null,
          headers: provideHeaders(patRef.current.value),
        });
      }),
    );

    alert('팔로우 완료!');
  };

  return (
    <main>
      <article>
        <h2>PAT란, Personal Access Token.</h2>
        <p>
          깃허브에서 SETTING - Developer Setting - Personal Access Token에 들어가 Token을
          발급받아요.
        </p>
        <p>권한은 user (Update ALL user data)에만 체크해주시면 됩니다.</p>
        <img src={patNotice1} alt="pat-img1" />
        <img src={patNotice2} alt="pat-img2" />
      </article>
      <a href="https://github.com/settings/tokens" target="_blank">
        PAT 발급받으러가기
      </a>
      <input ref={patRef} type="text" placeholder="PAT를 입력해주세요!" />
      <button type="button" onClick={followWebPart}>
        버튼 하나로 웹파트 팔로우하기 ? 정말 ?
      </button>
    </main>
  );
}

export default App;
