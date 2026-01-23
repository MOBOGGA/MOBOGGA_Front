# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Mobogga (모보까) is a React-based web application for managing university festival/club performances, reservations, and recruiting. It includes features for students to browse and reserve tickets for shows, and for club managers to manage their events and reservations.

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (runs on localhost:3000)
npm start

# Build for production
npm build

# Run tests
npm test
```

### Testing
- Uses React Testing Library with Jest
- Test files use `.test.js` or `.spec.js` extensions
- Run tests with `npm test`

## Architecture

### State Management
This codebase is in the middle of migrating from localStorage-based auth to a centralized Zustand store:
- **Zustand store** (`src/stores/authStore.js`): Primary auth state management using sessionStorage
- **Recoil** (`src/atom/atom.js`): Legacy session state (minimal usage)
- **useAuth hook** (`src/hooks/useAuth.js`): Backward-compatible wrapper around Zustand store

**IMPORTANT: Authentication Migration**
- DO NOT use `localStorage.getItem("jwt")` for authentication
- ALWAYS use `useAuth()` hook or `useAuthStore()` for auth operations
- Token is stored in sessionStorage and managed automatically
- See `MIGRATION_GUIDE.md` for migration patterns from localStorage to useAuth

### API Architecture
- **Base API client** (`src/utils/apiClient.js`): Singleton axios instance with automatic JWT token injection
- Automatically adds `Authorization: Bearer <token>` to all requests
- Handles 401/403 errors with automatic logout
- Base URL configured via `REACT_APP_API_URL` environment variable

### Routing Structure
Main routes defined in `src/App.js`:
- `/` - Landing page
- `/main` - Main page with show listings
- `/show/:showId` - Show detail page
- `/entertain/:id` - Entertainment detail page
- `/clubs`, `/clubs/:id` - Club listings and detail
- `/recruiting`, `/recruiting/:recruitingId` - Recruiting pages
- `/mypage` - Student mypage
- `/manager/*` - Manager pages (requires ROLE_CLUB authority)
- `/login`, `/logout` - Authentication pages
- Various create/edit pages for shows, recruiting, entertainment

### Component Structure
- **Pages** (`src/pages/`): Top-level route components
- **Components** (`src/components/`): Reusable UI components
- **Manager components** (`src/components/Manager/`): Manager-specific components
- **Mobile components** (`src/components/Mobile/`): Mobile-specific layouts
- **Modals** (`src/components/modal/`): Reusable modal components

### Context Providers
- **ServerStatusProvider** (`src/contexts/ServerStatusContext.js`): Monitors server health and displays connection issues
- Wraps the entire app to handle network errors gracefully

### Authentication Flow
1. User logs in via Google OAuth (`/login`)
2. Callback received at `/login/oauth2/code/google`
3. Token stored in sessionStorage via Zustand
4. Token automatically attached to all API requests via apiClient
5. User info fetched from `/api/auth/me`
6. Auth state available via `useAuth()` or `useAuthStore()`

### Authorization Roles
- `ROLE_CLUB`: Club manager (can create/edit shows, manage reservations)
- `ROLE_ADMIN`: Admin user
- Check roles using `isManager()` or `isAdmin()` from useAuth/useAuthStore

## Code Conventions

### Git Workflow (from README.md)
**Issue titles format**: `[타입] - 설명`
Example: `[Style] - 텍스트 스타일 추가`

**Commit message format**: `타입 : 짧은 내용(한글로)`
Example: `feat : 로그인 기능 구현`

**Commit types**:
- `feat`: 새로운 기능 추가, 구현
- `edit`: 단순 오타 수정
- `style`: UI작업, 스타일 관련 파일 추가 및 수정
- `add`: asset 파일(이미지, 아이콘 등) 추가
- `chore`: 파일, 경로를 옮기거나 이름 변경
- `delete`: 덤프 파일 삭제
- `merge`: 브랜치 병합
- `fix`: 버그 픽스
- `docs`: 문서 작업
- `refactor`: 코드 리팩토링
- `model`: 데이터베이스(모델) 작업
- `init`: 프로젝트 생성
- `test`: 테스트 케이스 생성
- `build`: 재빌드
- `version`: 버전 업

**Pull Request title format**: `이름_타입/#이슈번호 → 풀 시킬 브랜치`
Example: `Hani_Style/#1 -> dev`

**IMPORTANT**: When creating commits, always include co-author line:
```
Co-Authored-By: Warp <agent@warp.dev>
```

### Code Style
- React functional components with hooks
- CSS Modules for styling (`.module.css` files)
- Mobile-first responsive design (breakpoint at 768px/600px)
- Korean language used in UI text and comments

### API Calls
Always use the centralized apiClient:
```javascript
import apiClient from "../utils/apiClient";

// GET request
const response = await apiClient.get("/api/endpoint");

// POST request
const response = await apiClient.post("/api/endpoint", data);
```

Do NOT use raw axios or fetch for API calls - use the apiClient singleton which handles authentication automatically.

### Error Handling Patterns
```javascript
try {
  const response = await apiClient.get("/endpoint");
  // handle success
} catch (error) {
  // Network errors
  if (error.code === "ECONNABORTED" || 
      error.name === "TypeError" || 
      error.message?.includes("fetch")) {
    // Show server connection error modal
  } else {
    // Show general error message
  }
}
```

## Environment Variables
Required in `.env` file:
- `REACT_APP_GOOGLE_AUTH_CLIENT_ID`: Google OAuth client ID
- `REACT_APP_GOOGLE_AUTH_REDIRECT_URI`: OAuth redirect URI
- `REACT_APP_API_URL`: Backend API base URL
- `REACT_APP_DB_URL`: Database API path prefix

## Utilities

### CSV Export (`src/utils/csvExport.js`)
Functions for exporting reservation data to CSV with Korean character support (BOM encoding).

### Seat Utils (`src/utils/seatUtils.js`)
Utilities for managing seat reservations and layouts.

### Security Config (`src/utils/security.js`)
Security configuration including token refresh intervals and session timeout settings.

## Key Features to Understand

### Responsive Design
- Components check screen width and render different layouts for mobile vs desktop
- Common pattern: `window.innerWidth <= 768` or `window.innerWidth <= 600`
- Mobile-specific components in `src/components/Mobile/`

### Server Health Monitoring
- ServerStatusContext monitors all API calls for network failures
- Automatically shows ServerDownModal when server is unreachable
- Includes retry mechanism for connection recovery

### Hot Analytics
- Hotjar tracking integrated in `public/index.html` for user behavior analytics

### Service Worker
- Service worker registered for PWA capabilities (`sw.js`)
