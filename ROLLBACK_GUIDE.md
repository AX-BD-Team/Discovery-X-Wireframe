# 소스 UI 변경 롤백 가이드

## 변경 내역
1. 진행 단계 섹션 삭제 (1070-1086줄)
2. '선택된 소스' 제목과 '소스 추가' 버튼 헤더 삭제 (1505-1518줄)
3. 소스 카드 UI를 간단한 형태로 변경 (예정)

## 롤백 방법

### 방법 1: Git 사용 (권장)
```bash
git checkout src/app/pages/Ideas.tsx
```

### 방법 2: 수동 롤백

#### 변경 1: 진행 단계 섹션 복원
위치: 1070줄 (소스 & 진행 관리 헤더 내부, mb-3 뒤)

추가할 코드:
```tsx
              <h4 className="text-[10px] font-medium mb-2 text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">진행 단계</h4>
              <div className="space-y-2">
                {stageLabels.map((label, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {getStageIcon(index)}
                    <span className={`text-xs ${
                      index === ideaStage 
                        ? 'font-semibold text-black dark:text-white' 
                        : index < ideaStage 
                        ? 'text-neutral-700 dark:text-neutral-300' 
                        : 'text-neutral-400'
                    }`}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
```

#### 변경 2: '선택된 소스' 헤더 복원
위치: 1503줄 (`{ideaStage >= 1 && (` 다음)

변경 전:
```tsx
              {ideaStage >= 1 && (
                <div className="space-y-4">
```

변경 후:
```tsx
              {ideaStage >= 1 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold">선택된 소스</h3>
                    <button
                      onClick={() => setShowAddSourcePanel(!showAddSourcePanel)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${
                        showAddSourcePanel
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-transparent'
                      }`}
                    >
                      <Plus className={`w-3.5 h-3.5 transition-transform ${showAddSourcePanel ? 'rotate-45' : ''}`} />
                      소스 추가
                    </button>
                  </div>
```

## 현재 상태 저장
- 날짜: 2026-02-26
- 수정된 파일: `/src/app/pages/Ideas.tsx`
- Import 추가: `MoreVertical`, `ExternalLink`
- State 추가: `openSourceMenuId`

## 완료된 변경
✅ 진행 단계 섹션 삭제
✅ '선택된 소스' 제목 삭제  
✅ 업로드된 소스 카드에 더보기 메뉴 추가
✅ 기존 소스 카드에 더보기 메뉴 추가
✅ 프롬프트 소스 카드에 더보기 메뉴 추가

## 변경 요약
- 모든 소스 카드가 마우스 오버시 MoreVertical 아이콘을 표시합니다
- 클릭하면 드롭다운 메뉴가 나타나며:
  - URL/링크가 있는 경우: "링크 이동" 옵션 표시
  - 프롬프트 소스: "수정" 옵션 추가
  - 모든 소스: "삭제" 옵션
  
## 테스트 방법
1. 아이디어 생성 모드 진입 (ideaStage >= 1)
2. 소스 추가
3. 소스 카드에 마우스 오버
4. 더보기 아이콘(⋮) 클릭
5. 메뉴에서 옵션 확인 및 실행
