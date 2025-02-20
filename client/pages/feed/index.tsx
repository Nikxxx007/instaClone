import { Post } from "@/components/Post";

const FeedPage = () => {
  return (
    <Post
      username="john_doe"
      profilePicture="https://via.placeholder.com/150"
      imageUrl="https://via.placeholder.com/300"
      caption="This is a sample post."
      likes={10}
    />
  );
};

export default FeedPage;
