import { useRules } from '../context';

export default function RulesPage() {
  const { rulesSummary } = useRules();

  return (
    <div className="page rules-page">
      <header className="page-header">
        <h1>{rulesSummary.title}</h1>
        <p className="page-header__lead">
          Сверху формулы для сражения, снизу таблицы с базовыми значениями для путешествий и простоя.
        </p>
      </header>

      <div className="rules-sections">
        {rulesSummary.sections.map((section) => (
          <section key={section.title} className="panel panel--compact">
            <h2>{section.title}</h2>
            <ul className="rules-list">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
        <section key='доспех' className="panel panel--compact">
          <h2>НАДЕВАНИЕ И СНЯТИЕ ДОСПЕХА</h2>
          <table>
            <thead>
              <td>Вид</td>
              <td>Надевание</td>
              <td>Снятие</td>
            </thead>
            <tbody>
              <tr>
                <td>Лёгкий доспех</td>
                <td>1 минута</td>
                <td>1 минута</td>
              </tr>
              <tr>
                <td>Средний доспех</td>
                <td>5 минут</td>
                <td>1 минута</td>
              </tr>
              <tr>
                <td>Тяжёлый доспех</td>
                <td>10 минут</td>
                <td>5 минут</td>
              </tr>
              <tr>
                <td>Щит</td>
                <td>1 действие</td>
                <td>1 действие</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section key='существование' className="panel panel--compact">
          <h2>ЗАТРАТЫ НА СУЩЕСТВОВАНИЕ</h2>
          <table>
            <thead>
              <td>Существование</td>
              <td>Стоимость/день</td>
            </thead>
            <tbody>
              <tr>
                <td>Никудышное</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Нищенское</td>
                <td>1 см</td>
              </tr>
              <tr>
                <td>Бедное</td>
                <td>2 см</td>
              </tr>
              <tr>
                <td>Скромное</td>
                <td>1 зм</td>
              </tr>
              <tr>
                <td>Комфортное</td>
                <td>2 зм</td>
              </tr>
              <tr>
                <td>Богатое</td>
                <td>4 зм</td>
              </tr>
              <tr>
                <td>Аристократическое</td>
                <td>10 зм минимум</td>
              </tr>
            </tbody>
          </table>
          <h2 style={{marginTop: "2%"}}>ЕДА, НАПИТКИ И ПРОСТОЙ</h2>
          <table>
            <thead>
              <td>Пункт</td>
              <td>Стоимость</td>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>Вино</td>
              </tr>
              <tr>
                <td>Обычное (кружка)</td>
                <td>2 см</td>
              </tr>
              <tr>
                <td>Отличное (бутылка)</td>
                <td>10 зм</td>
              </tr>
              <tr>
                <td>Мясо, кусок</td>
                <td>3 зм</td>
              </tr>
              <tr>
                <td colSpan={2}>Пиво</td>
              </tr>
              <tr>
                <td>Галлон (4 литра)</td>
                <td>2 см</td>
              </tr>
              <tr>
                <td>Кружка</td>
                <td>4 мм</td>
              </tr>
              <tr>
                <td colSpan={2}>Постоялый двор (за день)</td>
              </tr>
              <tr>
                <td>Нищенское</td>
                <td>7 мм</td>
              </tr>
              <tr>
                <td>Бедное</td>
                <td>1 см</td>
              </tr>
              <tr>
                <td>Скромное</td>
                <td>5 см</td>
              </tr>
              <tr>
                <td>Комфортное</td>
                <td>8 см</td>
              </tr>
              <tr>
                <td>Богатое</td>
                <td>2 зм</td>
              </tr>
              <tr>
                <td>Аристократическое</td>
                <td>4 зм</td>
              </tr>
              <tr>
                <td colSpan={2}>Пропитание (за день) </td>
              </tr>
              <tr>
                <td>Нищенское</td>
                <td>3 мм</td>
              </tr>
              <tr>
                <td>Бедное</td>
                <td>6 мм</td>
              </tr>
              <tr>
                <td>Скромное</td>
                <td>3 см</td>
              </tr>
              <tr>
                <td>Комфортное</td>
                <td>5 см</td>
              </tr>
              <tr>
                <td>Богатое</td>
                <td>8 см</td>
              </tr>
              <tr>
                <td>Аристократическое</td>
                <td>2 зм</td>
              </tr>
              <tr>
                <td>Сыр, кусок</td>
                <td>1 см</td>
              </tr>
              <tr>
                <td>Торжественный обед (на 1 едока)</td>
                <td>10 зм</td>
              </tr>
              <tr>
                <td>Хлеб, ломоть</td>
                <td>2 мм</td>
              </tr>
            </tbody>
          </table>
          <h2 style={{marginTop: "2%"}}>УСЛУГИ</h2>
          <table>
            <thead>
              <td>Услуга</td>
              <td>Стоимость</td>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>Наёмник</td>
              </tr>
              <tr>
                <td>Неопытный</td>
                <td>2 см/день</td>
              </tr>
              <tr>
                <td>Опытный</td>
                <td>2 зм/день</td>
              </tr>
              <tr>
                <td colSpan={2}>Перевозка в коляске</td>
              </tr>
              <tr>
                <td>В пределах города</td>
                <td>1 мм</td>
              </tr>
              <tr>
                <td>Между городами</td>
                <td>3 мм/миля</td>
              </tr>
              <tr>
                <td>Посыльный</td>
                <td>2 мм/миля</td>
              </tr>
              <tr>
                <td>Пошлина за дорогу или ворота</td>
                <td>1 мм</td>
              </tr>
              <tr>
                <td>Проезд на корабле</td>
                <td>1 см/миля</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section key='трудность' className="panel panel--compact">
          <h2>ТИПИЧНАЯ СЛОЖНОСТЬ</h2>
          <table>
            <thead>
              <td>Трудность задачи</td>
              <td>Сл (сложность)</td>
            </thead>
            <tbody>
              <tr>
                <td>Очень лёгкая</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Лёгкая</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Средняя</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Сложная</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Очень сложная</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Почти невозможная</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section key='еда' className="panel panel--compact">
          <h2>СЛОЖНОСТЬ ДОБЫЧИ ЕДЫ</h2>
          <table>
            <thead>
              <td>Сложность</td>
              <td>Наличие еды и воды</td>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>Много источников еды и воды</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Ограниченные источники еды и воды</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Очень мало источников еды и воды</td>
              </tr>
            </tbody>
          </table>
          <h2 style={{marginTop: "2%"}}>ТРЕБОВАНИЯ К ЕДЕ И ВОДЕ</h2>
          <table>
            <thead>
              <td>Размер существа</td>
              <td>Еды в день</td>
              <td>Воды в день</td>
            </thead>
            <tbody>
              <tr>
                <td>Крохотное</td>
                <td>1/4 фунта</td>
                <td>1/4 галлона</td>
              </tr>
              <tr>
                <td>Маленькое</td>
                <td>1 фунт</td>
                <td>1 галлон</td>
              </tr>
              <tr>
                <td>Среднее</td>
                <td>1 фунт</td>
                <td>1 галлон</td>
              </tr>
              <tr>
                <td>Большое</td>
                <td>4 фунта</td>
                <td>4 галлона</td>
              </tr>
              <tr>
                <td>Огромное</td>
                <td>16 фунтов</td>
                <td>16 галлона</td>
              </tr>
              <tr>
                <td>Громадное</td>
                <td>64 фунта</td>
                <td>64 галлона</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
