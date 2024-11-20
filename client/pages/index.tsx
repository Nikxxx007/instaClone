import React from 'react';
import {Login} from "@/components/Login";
import {Register} from "@/components/Register";
import {Profile} from "@/components/Profile";
import {Post} from "@/components/Post";

const Home: React.FC = () => {
  return (
    <div>
      <Login />
      {/*<Register />*/}
      {/*<Profile*/}
      {/*  username="john_doe"*/}
      {/*  email="john@example.com"*/}
      {/*  profilePicture="https://via.placeholder.com/150"*/}
      {/*  bio="This is a sample bio."*/}
      {/*/>*/}
      {/*<Post*/}
      {/*  username="john_doe"*/}
      {/*  profilePicture="https://via.placeholder.com/150"*/}
      {/*  imageUrl="https://via.placeholder.com/300"*/}
      {/*  caption="This is a sample post."*/}
      {/*  likes={10}*/}
      {/*/>*/}
    </div>
  );
};

export default Home;
