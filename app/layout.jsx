import Header from "@/components/header/header";
import "./styles/globals.scss";

export const metadata = {
  title: "넥스트",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

/*
  Next에서의 기능별 컴포넌트 구분
  Page Component 
  --페이지로 출력될 틀 컴포넌트 
  --about/page.jsx, gallery/page.jsx
  --따로 설정을 하지 않으면 기본적으로 Server에서 동작되서 prepage로 사전 렌더링
  Partial Component 
  --페이지 안쪽에서 호출되면서 부분적인 UI나 기능을 담당하는 컴포넌트 
  --componets>header.jsx, componets/popup.jsx 같은 것들
  -- Router
*/

/*
SSR vs CSR
SSR - Server Side Rendering
- 페이지 이동시마다 일일이 서버쪽에 출력할 Html 파일을 요청
- 장점 : 초기 로딩속도 빠름, 검색엔진에 최적화(SEO에 좋음)
- 단점 : 페이지 이동시 마다 서버쪽 요청을 해야되므로 깜빡거리면서 로딩되며 페이지 변경
CSR - Client Side Rendering
- 초기에 빈 Html 파일을 서버쪽에서 가져옴, 이때 화면에 출력될 모든 데이터를 chunk단위로 구성된 자바스크립트 파일을 모두 가져옴
- 장점 : 한번에 모든 페이지 데이터를 미리 다 불러오기 때문에 페이지 변경 요청시마다 서버요청 없이 클라이언트에서 부드럽게 화면 전환
- 단점 : 한번에 모든 데이터를 불러오기 때문에 초기 로딩속도가 SSR방식에 비해서 느림, 검색엔진에 최적화 안되어 있음
*/
