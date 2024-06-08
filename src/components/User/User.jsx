import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <div className="text-center py-10 font-bold text-2xl bg-gray-600 text-white max-w-7xl mx-auto">
      User:{id}
    </div>
  );
};

export default User;
