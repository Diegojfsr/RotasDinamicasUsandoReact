import React from 'react';
import { useParams } from 'react-router-dom';

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Post ID: {id}</h2>
    </div>
  );
};

export default Post;
