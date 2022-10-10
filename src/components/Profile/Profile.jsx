import React from "react";
import style from "./styles/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import AnimatedPage from "../../AnimatedPage";

const Profile = () => {
  return (
    <div className="col-10 py-3 px-5">
      <AnimatedPage>
        <h2>Мой профиль</h2>
        <header className="py-3 row">
          <div
            className={`${style.profile_background} col-11 m-0 p-0 mb-4`}
          ></div>

          <div className={`${style.profile_img} col-2`}></div>
          <div className={`${style.profile_description_container} col-6`}>
            <h3 className={style.profile_name_surname}>Ваге Манукян</h3>
            <div className={style.profile_description}>
              <div className={style.profile_description_item}>
                <div className={style.profile_description_title}>
                  Дата рождения
                </div>
                <span className={style.profile_description_detail}>
                  10.09.2004
                </span>
              </div>

              <div className={style.profile_description_item}>
                <div className={style.profile_description_title}>Город</div>
                <span className={style.profile_description_detail}>
                  Санкт-Петербург
                </span>
              </div>

              <div className={style.profile_description_item}>
                <div className={style.profile_description_title}>Обучение</div>
                <span className={style.profile_description_detail}>
                  СПбГУПТД
                </span>
              </div>

              <div className={style.profile_description_item}>
                <div className={style.profile_description_title}>Сайт</div>
                <span className={style.profile_description_detail}>
                  <a href="https://kenshi244.github.io/manukyan-web">
                    https://kenshi244.github.io/manukyan-web
                  </a>
                </span>
              </div>

              <div className={style.profile_description_item}>
                <div className={style.profile_description_title}>О себе</div>
                <span className={style.profile_description_detail}>
                  <p className={style.profile_description_about}>
                    Каждый из нас понимает очевидную вещь: постоянное
                    информационно-пропагандистское обеспечение нашей
                    деятельности обеспечивает широкому кругу (специалистов)
                    участие в формировании поставленных обществом задач. Сложно
                    сказать, почему элементы политического процесса лишь
                    добавляют фракционных разногласий и в равной степени
                    предоставлены сами себе. Ясность нашей позиции очевидна:
                    разбавленное изрядной долей эмпатии, рациональное мышление
                    создаёт предпосылки для своевременного выполнения
                    сверхзадачи.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="col-8 mt-5">
          <MyPosts></MyPosts>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Profile;
