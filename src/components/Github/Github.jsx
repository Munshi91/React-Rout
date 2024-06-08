import { useEffect, useState } from 'react';

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/Munshi91')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="text-center m-4 bg-gray-500 text-white text-3xl max-w-7xl mx-auto p-6">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="git picture" width={200} height={100} />
    </div>
  );
};

export default Github;
