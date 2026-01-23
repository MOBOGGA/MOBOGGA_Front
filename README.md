# 🎭 Mobogga Front-end

> 공연, 엔터테인먼트, 동아리 활동을 한 곳에서 관리하는 통합 플랫폼

## 📌 프로젝트 소개

Mobogga는 대학 및 지역 커뮤니티의 공연, 이벤트, 동아리 모집을 효율적으로 관리하고 홍보할 수 있는 웹 플랫폼입니다.

### 주요 기능

- 🎪 **공연 관리**: 공연 정보 등록, 조회, 좌석 예매 시스템
- 🎉 **엔터테인먼트**: 각종 이벤트 및 행사 관리
- 👥 **동아리 리크루팅**: 동아리 정보 제공 및 신입 모집 관리
- 🎫 **티켓팅 시스템**: 실시간 좌석 선택 및 예매
- 👤 **마이페이지**: 사용자 및 관리자 프로필 관리
- 🔐 **OAuth 인증**: 구글 소셜 로그인 지원

## 🛠 기술 스택

### Core

- React 19.1.0
- React Router DOM 7.5.3
- React Scripts 5.0.1

### 상태 관리

- Recoil 0.7.7
- Zustand 5.0.7

### 스타일링 & UI

- CSS Modules
- React Responsive (반응형 디자인)
- clsx (클래스 조건부 렌더링)

### HTTP 통신

- Axios 1.9.0

## 📁 프로젝트 구조

```
src/
├── api/              # API 통신 모듈
├── assets/           # 이미지, 아이콘 등 정적 파일
├── atom/             # Recoil 전역 상태
├── components/       # 재사용 가능한 컴포넌트
│   ├── ClubDetail/   # 동아리 상세 컴포넌트
│   ├── Dropdown/     # 드롭다운 컴포넌트
│   ├── Manager/      # 관리자 전용 컴포넌트
│   ├── Mobile/       # 모바일 전용 컴포넌트
│   ├── modal/        # 모달 컴포넌트
│   └── Seat/         # 좌석 예매 컴포넌트
├── contexts/         # React Context API
├── hooks/            # 커스텀 훅
├── pages/            # 페이지 컴포넌트
│   ├── Manager/      # 관리자 페이지
│   └── styles/       # 페이지별 스타일
├── stores/           # Zustand 스토어
├── styles/           # 전역 스타일
└── utils/            # 유틸리티 함수
    ├── apiClient.js      # API 클라이언트
    ├── tokenManager.js   # 토큰 관리
    └── security.js       # 보안 관련
```

## 🚀 시작하기

### 필수 요구사항

- Node.js (권장: v16 이상)
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone <repository-url>
cd mobogga_front

# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build

# 테스트 실행
npm test
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 🌐 주요 페이지

| 경로              | 설명                    |
| ----------------- | ----------------------- |
| `/`               | 랜딩 페이지             |
| `/main`           | 메인 페이지 (공연 목록) |
| `/clubs`          | 동아리 목록             |
| `/clubs/:id`      | 동아리 상세 정보        |
| `/recruiting`     | 동아리 모집 공고        |
| `/recruiting/:id` | 모집 상세 정보          |
| `/show/:id`       | 공연 상세 정보          |
| `/entertain/:id`  | 엔터테인먼트 상세 정보  |
| `/mypage`         | 마이페이지              |
| `/manager/*`      | 관리자 페이지           |

## 🔐 인증

프로젝트는 OAuth 2.0 기반의 구글 소셜 로그인을 지원합니다.

- Access Token 및 Refresh Token 관리
- 자동 토큰 갱신
- 보안 토큰 저장

## 📱 반응형 디자인

모바일과 데스크톱 환경을 모두 지원하며, `react-responsive` 라이브러리를 사용하여 768px 기준으로 반응형 UI를 제공합니다.

## 🧪 테스트

```bash
# 테스트 실행
npm test

# 커버리지 확인
npm test -- --coverage
```

## 📝 개발 가이드

### Git Workflow

#### Issue 작성

- 작업할 기능에 대한 issue를 작성합니다.
- issue 제목은 **[타입] - 설명** 형식으로 작성합니다.
  - 예: `[Style] - 텍스트 스타일 추가`

#### Commit 메시지

```bash
타입 : 짧은 내용(한글로)
```

| Type       | Description                            | Example                           |
| ---------- | -------------------------------------- | --------------------------------- |
| `feat`     | 새로운 기능 추가, 구현                 | feat : 로그인 기능 구현           |
| `edit`     | 단순 오타 수정                         | edit : 로그인 캐시 처리 방식 수정 |
| `style`    | UI 작업, 스타일 관련 파일 추가 및 수정 | style : 폰트 등록                 |
| `add`      | asset 파일(이미지, 아이콘 등) 추가     | add : 위젯 이미지 추가            |
| `chore`    | 파일, 경로를 옮기거나 이름 변경        | chore : feet -> feat 이름 변경    |
| `delete`   | 불필요한 파일 삭제                     | delete : Empty.md 파일 삭제       |
| `merge`    | 브랜치 병합(merge)                     | merge : pull request #3           |
| `fix`      | 버그 수정                              | fix : Color 버그 수정             |
| `docs`     | 문서 작업                              | docs : Readme 작성                |
| `refactor` | 코드 리팩토링                          | refactor : 변수명 수정            |
| `model`    | 데이터베이스(모델) 작업                | model : 데이터 모델 생성          |
| `init`     | 프로젝트 생성                          | init : 프로젝트 생성              |
| `test`     | 테스트 케이스 생성                     | test : 테스트 케이스 생성         |
| `build`    | 재빌드                                 | build : 동일버전 재빌드(x.xx)     |
| `version`  | 버전 업                                | version : 버전(2.0.0) 업데이트    |

#### Pull Request

```
이름_타입/#이슈번호 → 대상브랜치
```

예: `Hani_Style/#1 -> dev`

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

This project is private and proprietary.

## 📞 문의
`mobogga.service@gmail.com`
프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.
