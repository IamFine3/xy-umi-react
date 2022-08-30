// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useAccount = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [account, setAccount] =useState({
      id: '1234455545',
      name: "account1",
  })
  return {
    name,
    setName,
    account,
    setAccount
  };
};

export default useAccount;


// // 全局共享数据示例
// import { DEFAULT_NAME } from '@/constants';
// import { useState } from 'react';

// const useUser = () => {
//   const [name, setName] = useState<string>(DEFAULT_NAME);
//   return {
    
//     name,
//     setName,
//   };
// };

// export default useUser;

