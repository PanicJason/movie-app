import React, { FC, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';

const App : FC = () => {

  const [queryClient] = useState(
    ()=>
      new QueryClient ({
        defaultOptions :{
          queries :{
            refetchOnWindowFocus : false,
            retry :0
          },
        },
      })
  );

  return (
    <RecoilRoot>
      <QueryClientProvider client = {queryClient}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
