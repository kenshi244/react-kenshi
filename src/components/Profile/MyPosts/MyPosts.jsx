import React from "react";
import style from "./styles/MyPosts.module.css";
import WritePost from "./WritePost/WritePost"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={style.MyPosts}>
      <h3 className={style.h3}>Мои посты</h3>
      <WritePost placeholderText="Ваш текст..."></WritePost>
      <div>
        <Post
          postText="По своей сути рыбатекст является 
                    альтернативой традиционному lorem ipsum, который 
                    вызывает у некторых людей недоумение при попытках
                    прочитать рыбу текст. В отличии от lorem ipsum, 
                    текст рыба на русском языке наполнит любой макет
                    непонятным смыслом и придаст неповторимый колорит 
                    советских времен."
        ></Post>
        <Post
          postText="Повседневная практика показывает, 
                        что дальнейшее развитие различных 
                        форм деятельности позволяет оценить 
                        значение системы обучения кадров, 
                        соответствует насущным потребностям.
                        Не следует, однако забывать, что 
                        постоянный количественный рост и 
                        сфера нашей активности способствует 
                        подготовки и реализации форм развития."
        ></Post>
        <Post postText="Это мой пост."></Post>
        <Post postText="Hello world!"></Post>
        <Post postText="Hello world!"></Post>
        <Post postText="Hello world!"></Post>
      </div>
    </div>
  );
};

export default MyPosts;
