import { useSelector } from "react-redux";

const NewPost = () => {
  const profile = useSelector((state) => state.result);

  return (
    <>
      {console.log(profile)}
      <div>helloworld</div>
    </>
  );
};

export default NewPost;
