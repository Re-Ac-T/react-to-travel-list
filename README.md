# Todo list
## ๐ react-to-travel-list
- ๐ฌ Trip plan project
- ๐ `Todo List`

<br>

## ๐ฉ๐ปโ๐ป Contributor
- heegu0311
- merorii

<br>

## โ ๊ตฌํํ  ๊ธฐ๋ฅ ๋ชฉ๋ก
- [x] ์ปดํฌ๋ํธ ๊ตฌ์กฐ์ง๊ธฐ 
- **World Map Page**
- [x] ์ง๋ ํ๋ฉด ๊ตฌ์ฑํ๊ธฐ (ํด๋ฆญ์ ํตํด ๊ฐ๊ณ ์ถ์ ๊ตญ๊ฐ ํ๋ฉด์ ํ์)
- [x] ์ง๋ ๋๋ฅ ๋ฒํผ hover effect ๋ง๋ค๊ธฐ
- [x] To-travel ๋ฆฌ์คํธ ๋ง๋ค๊ธฐ
- [ ] ๊ตญ๊ฐ ๊ฒ์ ๊ธฐ๋ฅ

- **Detail Page**
- [ ] ๋๋ฅ๋ณ ์ฌํํ๊ณ ์ถ์ ๊ตญ๊ฐ ๋ณด์ฌ์ฃผ๊ธฐ (World Map ์์ ์ ํํ ๊ตญ๊ฐ)
- [ ] ๊ตญ๊ฐ๋ณ Todo ๋ฆฌ์คํธ ๊ตฌํํ๊ธฐ

<br>
<hr>
<br>

## ๐ ์๊ตฌ์ฌํญ
- ์ ๋ Master branch ์ ๋ฐ๋ก push ํ์ง ์์ต๋๋ค!(base setting์ ์ ์ธ)
- ๊ฐ์์ branch๋ก pushํ main(master) branch์ Pull request ๋ก ํ์ ๋ฐ review๋ฅผ ์งํํ ๋ค์ mergeํฉ๋๋ค.
- commit message๋ convention์ ๋ง๊ฒ ์์ฑํฉ๋๋ค.

### โ BASE ์๊ตฌ์ฌํญ
- ํ์ผ๋ช: ํ์ผ๋ช์๋ PascalCase(๋๋ฌธ์๋ก ์์)๋ฅผ ์ฌ์ฉํฉ๋๋ค. *์), ReservationCard.js*
- ์ฐธ์กฐ๋ช: React ์ปดํฌ๋ํธ์ ์ฐธ์กฐ ์ด๋ฆ์๋ PascalCase๋ฅผ ์ฐ๊ณ  ๊ทธ ์ธ์คํด์ค์ ์ด๋ฆ์๋ camelCase(์๋ฌธ์๋ก ์์)๋ฅผ ์ฌ์ฉํฉ๋๋ค.
- ์ฃผ์์ ์ฐ๋ ๊ฒ์ ๊ด์ฐฎ์ง๋ง ์งง์ ํ์ค์ง๋ฆฌ ์ฃผ์์ ๋ค๋ ๊ฒ์ ํ์ง ๋ง๊ธฐ (์ต๋ํ ๋ณ์๋ method naming์ ๋ค ์๋ฏธ๊ฐ ๋ค์ด๊ฐ์ ์๋๋ก ํ๋ค.)
- ์ถ๊ฐ ์ฐธ์กฐ์ฌํญ : https://firejune.com/1795/Airbnb%EC%9D%98+React%252FJSX+%EC%8A%A4%ED%83%80%EC%9D%BC+%EA%B0%80%EC%9D%B4%EB%93%9Cใ

### โ ํ๋ก๊ทธ๋๋ฐ ์๊ตฌ์ฌํญ
- ๋ชจ๋  styled ๋ณ์๋ ํด๋น ์ปดํฌ๋ํธ ํ์ผ์ ์ ์ํ๋ ๊ฒ์ ๊ถ์ฅํ๋ค.
- ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ ๊ฐ์ css๋ฅผ ๊ณต์ ํ  ๋ `export` ๋๋ `src/components/layouts`
- DOM ํธ๋ฆฌ๊ฐ ๊น์ด์ง์๋ก ๋ ๋๋ง ์๋๊ฐ ๋๋ ค์ง๊ธฐ ๋๋ฌธ์, ์ธ๋ถ CSS ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ์๋ ์ปดํฌ๋ํธ๋ Wrapper ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  ๊ฐ๋ฅํ๋ฉด ํด๋น ์ปดํฌ๋ํธ๋ฅผ ์์ํด ์คํ์ผ์ ์ ์ฉํ๋ ๊ฒ์ ๊ถ์ฅํ๋ค.
```javascript
import styled from 'styled-components'
import { ThirdPartyStyledComponent } from 'third-party-css-library'
const StyledComponent = styled(ThirdPartyStyledComponent)
    margin: 1rem;
    ...
```

### React-structure Reference
- https://velog.io/@_junukim/%EB%82%98%EB%A7%8C%EC%9D%98-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0-3tk5rs8r52

### World Map API
- https://www.react-simple-maps.io/