# Todo list
## 🎈 react-to-travel-list
- 🎬 Trip plan project
- 📝 `Todo List`

<br>

## 👩🏻‍💻 Contributor
- heegu0311
- merorii

<br>

## ✔ 구현할 기능 목록
- [ ] 컴포넌트 구조짜기 
- **World Map Page**
- [x] 지도 화면 구성하기 (클릭을 통해 가고싶은 국가 화면에 표시)
- [ ] 지도 대륙 버튼 hover effect 만들기
- [ ] 국가 검색 기능이 있는 To-travel 리스트 만들기
- [ ] 
- [ ] (추가 사항 논의중)
- **Detail Page**
- [ ] 대륙별 여행하고싶은 국가 보여주기 (World Map 에서 선택한 국가)
- [ ] 국가별 Todo 리스트 구현하기
- [ ] 
- [ ] (추가 사항 논의중)

<br>
<hr>
<br>

## 📃 요구사항
- 절대 Master branch 에 바로 push 하지 않습니다!(base setting은 제외)
- 각자의 branch로 push후 main(master) branch에 Pull request 로 협업 및 review를 진행한 뒤에 merge합니다.
- commit message는 convention에 맞게 작성합니다.

### ✔ BASE 요구사항
- 파일명: 파일명에는 PascalCase(대문자로 시작)를 사용합니다. *예), ReservationCard.js*
- 참조명: React 컴포넌트의 참조 이름에는 PascalCase를 쓰고 그 인스턴스의 이름에는 camelCase(소문자로 시작)를 사용합니다.
- 주석은 쓰는 것은 괜찮지만 짧은 한줄짜리 주석을 다는 것은 하지 말기 (최대한 변수나 method naming에 다 의미가 들어갈수 있도록 한다.)
- 추가 참조사항 : https://firejune.com/1795/Airbnb%EC%9D%98+React%252FJSX+%EC%8A%A4%ED%83%80%EC%9D%BC+%EA%B0%80%EC%9D%B4%EB%93%9Cㅍ

### ✔ 프로그래밍 요구사항
- 모든 styled 변수는 해당 컴포넌트 파일에 정의하는 것을 권장한다.
- 다른 컴포넌트랑 같은 css를 공유할 땐 `export` 또는 `src/components/layouts`
- DOM 트리가 깊어질수록 렌더링 속도가 느려지기 때문에, 외부 CSS 라이브러리에 있는 컴포넌트는 Wrapper 컴포넌트를 사용하지 않고 가능하면 해당 컴포넌트를 상속해 스타일을 적용하는 것을 권장한다.
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