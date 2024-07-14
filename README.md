# Next.js proj

## Email: user@user.com
## Password: 123123
Данные о пользователях хранятся в users.json. Понимая, что так делать никогда нельзя, такое решение используется только в рамках тестового задания.

## app: 
Три страницы:
- В корневой папке page.tsx - Главная
- Папка auth - страница авторизации
- Папка dashboard - страница с ограниченным доступом (только для авторизованных пользователей). Чтобы протестировать работу страницы, авторизуйтесь со следующими данными: 
Ограничение доступа к вкладке осуществляется с помощью условного рендеринга AuthStore.isLoggedIn &&

## components:
- /Auth: компонент страницы авторизации, здесь происходит валидация форм Email и Password (Валидацию email'а взял из открытых источников)
- /Dashboard: компонент для приветственной (главной страницы) - не имеет функционала, зато красивый
- /DashContent: компонент для страницы Dashboard, показывается только в том случае, если пользователь авторизован
- /Header: шапка, вызывается в layout.tsx
- /Unauthorized: компонент для страницы Dashboard, показывается в том случае, если пользователь не зарегистрирован

## store:
- /AuthStore.ts: здесь с помощью MobX обеспечивается обновление UI при изменениях в состоянии (авторизации).
- - isLoggedIn - авторизован ли пользователь
- - user - в этом обьекте хранится информация о текущем авторизованном пользователе в localstorage
- - error - обработка ошибок
- - checkAuth - функция, вызывающаяся при загрузке страницы, которая проверяет - есть ли в localstorage информация о пользователе. Если да, то устанавливается isLoggedIn = true и загружается user из localStorage
- - signin(email, password) - функция, обрабатывающая вход, проверяет, есть ли в usersData из users.json такой пользователь. Если пользователь найден, isLoggedIn становится true`, user сохраняется в AuthStore и localStorage, а error становится null
- - signout - всыход из аккаунта, очищает инфу из localstorage
- - /users.json: тот самый плохой и неправильный файл, в котором хранятся данные пользователей.