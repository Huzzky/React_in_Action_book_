# Порядок обновления методов:
1. `shouldComponentUpdate()`
2. `componentWillUpdate()`
3. `componentDidUpdate()`

## `componentWillReceiveProps(), componentWillMount(), componentWillUpdate()`  - Устарели и не нужно использовать их в новом коде
### cWU -> [Новое вместо него](https://ru.reactjs.org/docs/react-component.html#unsafe_componentwillupdate)


## `componentDidCatch()`
### Служит для поиска "неконтролируемых"(тех, которые не контролируется фреймворком или синтаксисом языка) ошибок


# Сводка методов:
| Метод | Начальный | Будет | Было |
| ----- | --------- | ----- | ---- |
| Монтирование | [defualtProps](https://ru.reactjs.org/docs/react-component.html#defaultprops) | componentWillMount | [componentDidMount](https://ru.reactjs.org/docs/react-component.html#componentdidmount) |
| Обновление | [shouldComponentUpdate](https://ru.reactjs.org/docs/react-component.html#shouldcomponentupdate) | componentWillReceiveProps | [componentDidUpdate](https://ru.reactjs.org/docs/react-component.html#componentdidupdate) |
| Ошибки | componentDidCatch |
