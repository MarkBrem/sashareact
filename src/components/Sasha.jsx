import { useState } from 'react';
import '../index.css';

export const Sasha = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const handleShowItem = (index) => {
    setVisibleItems((prev) => [...prev, index]);
  };

  return (
    <div className="backg">
      <div className="up">
        <p className="wish">
          Моя люба Сашуня! З Днем народження тебе! Бажаю тобі запаморочливих
          пригод, шалених емоцій, море позитиву і океан щастя! Нехай життя
          буде яскравим, як феєрверк, і щоб кожен день принов лише приємні
          сюрпризи. Будь завжди такою ж енергійною та веселою!🎉🎉🎉🥳🥳🥳
        </p>
        <p>
          Ти казала шо більшість забули про той лист ну але я ж обіцяв, а ти
          сама знаєш, що я сказав то буде зроблено. Тому я написав тобі лист
          але неординарно. Зараз на кнопочку і читай.
        </p>
        <span className="ps">
          P.s. не чекай там творів бо я не поет, але писав всьо від душі
        </span>

        <ul>
          {/* Перше знайомство */}
          {!visibleItems.includes(0) && (
            <button className="tytsy" onClick={() => handleShowItem(0)}>
              Тицяй
            </button>
          )}
          {visibleItems.includes(0) && (
            <li className="first">
              <h1 className="title">Перше знайомство</h1>
              <p>
                Якщо бути чесним, то нашу першу зустріч я пам'ятаю дуже мутно. Тебе
                мені показав Роман ще у червні коли ми збиралися в школі, ще перед тим
                як у класі. Тоді я не дуже зауважив подумав "є тай хай собі буде". Ну
                і перший час я був таким більш закритим, але ти з Яриною мене
                розкрили, я відчув себе як в дома і отой мандраж чогось нового
                пройшов. Я зразу зрозумів шо ти добра, чуйна і щедра людина. І я ні
                секунди не пожалів що познайомився з тобою.
              </p>
            </li>
          )}

          {/* Різні прикольчики */}
          {!visibleItems.includes(1) && visibleItems.includes(0) && (
            <button className="tytsy" onClick={() => handleShowItem(1)}>
              Тицяй
            </button>
          )}
          {visibleItems.includes(1) && (
            <li className="second">
              <h1 className="title">Різні прикольчики</h1>
              <ul>
                {!visibleItems.includes(2) && (
                  <button className="tytsy" onClick={() => handleShowItem(2)}>
                    Тицяй
                  </button>
                )}
                {visibleItems.includes(2) && (
                  <li>
                    <p>
                      Значить так тут буде багато бо прікольчіків в нас трохи є
                      (хоч не всі я пам'ятаю, але є шо є), я постараюся розкласти
                      їх по хронології, але не обіцяю. <br />
                      Ну, напевно, першим нашим прікольчиком то були невинні
                      приколи один над одним, але твоя мама так не думала (може і
                      правильно думала). Але нічого ми то пережили, синяки пропали
                      але всьо лишилося в пам'яті (ну і я в одному списку{' '}
                      <span className="meetSpan">поки що</span> друге місце){' '}
                    </p>
                  </li>
                )}

                {!visibleItems.includes(3) && visibleItems.includes(2) && (
                  <button className="tytsy" onClick={() => handleShowItem(3)}>
                    Тицяй
                  </button>
                )}
                {visibleItems.includes(3) && (
                  <li>
                    <p>
                      Друге це напевно поїздка в Калуш ("місто любові" - ну бо
                      багато співпадінь). Звісно мені було дуже приємно шо ви
                      взяли мене в команду, хоч у вас були парочки дві (ну але
                      чекай попробуй такого легіня не взяти). Ну я розумію що весь
                      кайф там робив я, але ту поїздку я не забуду (ну і вчительки
                      я думаю також).
                    </p>
                  </li>
                )}

                {!visibleItems.includes(4) && visibleItems.includes(3) && (
                  <button className="tytsy" onClick={() => handleShowItem(4)}>
                    Тицяй
                  </button>
                )}
                {visibleItems.includes(4) && (
                  <li>
                    <p>
                      Ще один наш прікольчик то звісно екопроект (найкраще що може
                      бути). Ооооо там нам нудно не було. Якщо брати загалом той
                      проект то один суцільний прикол ми ж толком там нічого не
                      робили, але зато які емоції (мммм як згадую просто кайфую).
                    </p>
                  </li>
                )}

                {!visibleItems.includes(5) && visibleItems.includes(4) && (
                  <button className="tytsy" onClick={() => handleShowItem(5)}>
                    Тицяй
                  </button>
                )}
                {visibleItems.includes(5) && (
                  <li>
                    <p>
                      А ну і я не міг пропустити пльотки тож тепер виходить шо ти
                      моя дівчина (пака Анджей)
                    </p>
                  </li>
                )}

                {/* Серйозне побажання */}
                {!visibleItems.includes(6) && visibleItems.includes(5) && (
                  <button className="tytsy" onClick={() => handleShowItem(6)}>
                    Тицяй
                  </button>
                )}
                {visibleItems.includes(6) && (
                  <li>
                    <p>
                      А тепер по серйозному. Бажаю щоб у вас з Андрієм було все
                      прекрасно в житті, щоб не було ніяких сварок. Ну і звісно
                      пам'ятай що у тебе є найкращі друзі які завжди вислухають,
                      підтримають і дадуть пораду. Всьо обняв, підняв, похрустів і
                      поставив на місце.
                    </p>
                  </li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
