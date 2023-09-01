import React, { FC, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';

// App 컴포넌트 정의
const App : FC = () => {

  // QueryClient를 생성하고 설정하는 부분
  const [queryClient] = useState(
    ()=>
      new QueryClient ({
        defaultOptions :{
          queries :{
            refetchOnWindowFocus : false,   // 창이 포커스를 잃었을 때 쿼리 자동 재요청 비활성화
            retry :0                        // 쿼리 실패 시 재시도 횟수
          },
        },
      })
  );

  return (
    <RecoilRoot>
      <QueryClientProvider client = {queryClient}>  {/* QueryClientProvider로 QueryClient를 애플리케이션에 제공 */}
        <BrowserRouter>
          <Router/>                                 {/* 라우터 컴포넌트를 사용하여 애플리케이션 라우팅 설정 */}
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
