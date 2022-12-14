[Server](http://localhost:4000/)

# 1. 程式啟動方式

-   git clone 檔案
    ```
    git@github.com:weigen393/typescript-graphql-practice.git
    ```
-   建立.env 檔，依據.env.example 的變數進行填入
-   npm install
    ```
    npm install
    ```
-   啟動程式
    ```
    npm start
    ```

# 2. 程式架構

-   主要檔案為 `app.ts`
-   `data` 資料夾內為使用者資料
-   `utils` 資料夾內為使用工具，如 jwt
-   `schema` 資料夾內為定義的 Query 格式和實作

# 3. api 的規格與範例

-   API 規格如下:

    -   login

        ```
        query Query($account: String!, $password: String!) {
          login(account: $account, password: $password) {
            expired
            accessToken
          }
        }

        example input:
        {
          "account": "peter19941116",
          "password": "123456"
        }
        example output:
        {
          "data": {
            "login": {
              "expired": "1d",
              "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoicGV0ZXIxOTk0MTExNiIsIm5hbWUiOiJQZXRlciIsImJpcnRoZGF5IjoiMTk5NC0xMS0xNiIsImlhdCI6MTY2ODM5MDM2OCwiZXhwIjoxNjY4NDc2NzY4fQ.PAXpDwkXRkTe9P6Bk8QnIN0UTNMmG8RybAopgEh7s38"
            }
          }
        }
        ```

    -   me

        ```
        query Query {
          me {
            account
            name
            birthday
          }
        }

        example Headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoicGV0ZXIxOTk0MTExNiIsIm5hbWUiOiJQZXRlciIsImJpcnRoZGF5IjoiMTk5NC0xMS0xNiIsImlhdCI6MTY2ODM4NjQ0NiwiZXhwIjoxNjY4NDcyODQ2fQ.2ghtz1g5-fPCIs4cDJ1MBMNHlZ2z_IFSLmZtNwlaXOI"
        }

        example output:
        {
          "data": {
            "me": {
              "account": "peter19941116",
              "birthday": "1994-11-16",
              "name": "Peter"
            }
          }
        }
        ```

    -   其他範例資料

    ```
    {
          "account": "peter19941116",
          "password": "123456"
    },
    {
          "account": "peter20221116",
          "password": "abcdef"
    },
    {
          "account": "testaccount",
          "password": "555555"
    }
    ```

    -   可由範例資料的帳號密碼先打 login API，獲得 token 後以此 token 做為 Authorization 的 header 打 me API 來獲得使用者資料

# 4. 整個過程的研究心得

Typescript 心得:

-   Typescript 會先編譯過，不用等執行就會跳錯誤
-   Typescript 是強型別，需要先定義好
-   npm 都要裝 typescript 版本的
-   物件要用 interface 先定義
-   function 之間用物件傳值相較於 JS 較不方便，需要再研究

GraphQL 心得:

-   和 RESTful API 差很多，有 schema 可以讓 client 端明確定義要回傳的資料
-   比較像查詢語言，API 路徑相較於 RESTful API 較不明確
-   schema 的設計應該學問蠻深的，還有 error handle 部分需要再研究

整體心得:

趁這個機會學習 TypeScript 和 GraphQL 蠻有趣的，體會到強型別語言的麻煩之處還有 GraphQL 獨特的 API 模式，之後也會再研究和學習。
