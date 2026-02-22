import { useState } from 'react';
import { Share, Edit, Save, Plus, MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

type ProposalStage = 'draft' | 'writing' | 'complete';

export function Proposal() {
  const [stage, setStage] = useState<ProposalStage>('draft');
  const [activeTab, setActiveTab] = useState<'toc' | 'comments'>('toc');
  const [showComments, setShowComments] = useState(false);

  const tableOfContents = [
    { 
      title: '사업 개요', 
      items: ['요약', '사업 내용', '가설'],
      completed: stage === 'complete'
    },
    { 
      title: '타겟', 
      items: ['타겟 시장', '타겟 고객'],
      completed: stage === 'complete'
    },
    { 
      title: '가치 제안',
      completed: stage === 'complete' || stage === 'writing'
    },
    { 
      title: '수익 구조',
      completed: false
    },
    { 
      title: '시나리오',
      completed: false
    },
    { 
      title: 'MVP',
      completed: false
    },
    { 
      title: '실행 방안',
      completed: false
    }
  ];

  const comments = [
    {
      author: '김정원',
      time: '2시간 전',
      content: '시장 규모에 대한 데이터가 더 구체적이면 좋겠습니다. 현재는 추상적인 느낌이 있어요.'
    },
    {
      author: '이영희',
      time: '5시간 전',
      content: '가치 제안 부분이 잘 정리되어 있네요. 다만 경쟁사 대비 차별점을 더 명확히 하면 좋을 것 같습니다.'
    }
  ];

  const handleStartWriting = () => {
    setStage('writing');
  };

  const handleComplete = () => {
    setStage('complete');
  };

  const renderLeftSidebar = () => (
    <aside className="w-70 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
      <div className="flex gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('toc')}
          className={`px-3 py-1.5 rounded text-[15px] font-medium ${
            activeTab === 'toc' 
              ? 'bg-white dark:bg-neutral-800 border border-neutral-700 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200' 
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
          }`}
        >
          목차
        </button>
        <button 
          onClick={() => setActiveTab('comments')}
          className={`px-3 py-1.5 rounded text-[15px] relative ${
            activeTab === 'comments' 
              ? 'bg-white dark:bg-neutral-800 border border-neutral-700 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200' 
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
          }`}
        >
          검토 의견
          {comments.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {comments.length}
            </span>
          )}
        </button>
      </div>

      {activeTab === 'toc' ? (
        <div className="space-y-3">
          {tableOfContents.map((section, idx) => (
            <div key={idx}>
              <div className={`text-[10px] py-2 px-2 border rounded cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center justify-between ${
                section.completed ? 'border-neutral-700 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800' : 'border-neutral-200 dark:border-neutral-700'
              }`}>
                <span>{section.title}</span>
                {section.completed && (
                  <span className="text-green-600 dark:text-green-400">✓</span>
                )}
              </div>
              {section.items && (
                <ul className="ml-4 mt-2 space-y-1 text-[10px] text-black dark:text-white list-disc pl-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, idx) => (
            <div key={idx} className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">{comment.author}</span>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400">{comment.time}</span>
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">{comment.content}</p>
            </div>
          ))}
          <button className="w-full px-3 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs hover:bg-neutral-200 dark:hover:bg-neutral-700">
            + 새 의견 추가
          </button>
        </div>
      )}
    </aside>
  );

  const renderDraftStage = () => (
    <main className="flex-1 flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900">
      <div className="text-center max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">사업제안서를 작성해보세요</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
          아이디어를 바탕으로 체계적인 사업제안서를 만들 수 있습니다.
        </p>
        <button
          onClick={handleStartWriting}
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-neutral-800 dark:hover:bg-neutral-200"
        >
          작성 시작하기
        </button>
      </div>
    </main>
  );

  const renderWritingStage = () => (
    <main className="flex-1 overflow-y-auto bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              defaultValue="드론 기반 시설물 점검 및 리포트 자동화"
              className="text-2xl font-semibold flex-1 border-b border-transparent hover:border-neutral-300 dark:hover:border-neutral-600 focus:border-neutral-400 dark:focus:border-neutral-500 focus:outline-none bg-transparent"
            />
            <button className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">
              <Edit className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleComplete}
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              완료하고 저장
            </button>
            <button className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700">
              임시 저장
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">1. 사업 개요</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">요약</label>
                <textarea
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded p-3 text-sm focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 bg-white dark:bg-neutral-800"
                  rows={3}
                  placeholder="사업에 대한 간단한 요약을 작성하세요..."
                  defaultValue="드론과 AI를 활용하여 시설물 점검을 자동화하고 즉시 리포트를 생성하는 통합 솔루션"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">사업 내용</label>
                <textarea
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded p-3 text-sm focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 bg-white dark:bg-neutral-800"
                  rows={5}
                  placeholder="사업의 상세 내용을 작성하세요..."
                  defaultValue="인프라 시설물(송전탑, 교량, 댐 등)의 정기 점검을 드론으로 수행하고, AI가 자동으로 결함을 감지하여 리포트를 생성합니다."
                />
              </div>
            </div>
          </section>

          <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">2. 타겟</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">타겟 시장</label>
                <textarea
                  className="w-full border border-neutral-300 dark:border-neutral-700 rounded p-3 text-sm focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 bg-white dark:bg-neutral-800"
                  rows={3}
                  placeholder="타겟 시장을 정의하세요..."
                  defaultValue="국내 인프라 시설물 점검 시장 (연 2,000억원 규모)"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">타겟 고객</label>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>공공기관: 국토교통부, 한국수자원공사, 한국전력공사</li>
                  <li>대형 건설사: 현대건설, 삼성물산 등</li>
                  <li>시설물 관리 기업</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 bg-neutral-50 dark:bg-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">3. 가치 제안</h2>
              <button className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">
                + 섹션 추가
              </button>
            </div>
            
            <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
              이 섹션은 아직 작성되지 않았습니다. 클릭하여 내용을 추가하세요.
            </p>
          </section>
        </div>
      </div>
    </main>
  );

  const renderCompleteStage = () => (
    <main className="flex-1 overflow-y-auto bg-white dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-4">드론 기반 시설물 점검 및 리포트 자동화</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-neutral-800 flex items-center gap-2">
              <Share className="w-4 h-4" />
              공유하기
            </button>
            <button 
              onClick={() => setStage('writing')}
              className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              수정하기
            </button>
            <button className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700">
              PDF 다운로드
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-neutral-200">1. 사업 개요</h2>
            
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h3 className="font-medium mb-2">요약</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  드론과 AI를 활용하여 시설물 점검을 자동화하고 즉시 리포트를 생성하는 통합 솔루션입니다. 
                  기존 인력 점검 대비 70% 시간 단축, 50% 비용 절감이 가능합니다.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">사업 내용</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  인프라 시설물(송전탑, 교량, 댐 등)의 정기 점검을 드론으로 수행하고, 
                  AI가 자동으로 결함을 감지하여 리포트를 생성합니다. 
                  딥러닝 기반 균열 감지 알고리즘을 통해 미세한 결함도 놓치지 않고 발견할 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">가설</h3>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                  <li>인프라 노후화로 인한 시설물 점검 수요는 지속적으로 증가할 것이다.</li>
                  <li>인력 부족과 안전 문제로 자동화 솔루션에 대한 니즈가 높다.</li>
                  <li>AI 기술 발전으로 정확도가 인력 점검 수준 이상으로 향상 가능하다.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-neutral-200">2. 타겟</h2>
            
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h3 className="font-medium mb-2">타겟 시장</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  국내 인프라 시설물 점검 시장은 연 2,000억원 규모이며, 
                  연평균 25% 성장하고 있습니다. 특히 드론 기반 점검 시장은 2026년 기준 약 500억원으로 추정됩니다.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">타겟 고객</h3>
                <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <p className="font-medium">1차 타겟 (공공기관)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>국토교통부: 도로, 교량 등 사회기반시설 점검</li>
                    <li>한국수자원공사: 댐, 수로 등 수자원 시설 점검</li>
                    <li>한국전력공사: 송전탑, 전력선 점검</li>
                  </ul>
                  
                  <p className="font-medium mt-3">2차 타겟 (민간 기업)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>대형 건설사: 현대건설, 삼성물산, GS건설 등</li>
                    <li>시설물 관리 전문 기업</li>
                    <li>플랜트 운영 기업</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-neutral-200">3. 가치 제안</h2>
            
            <div className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              <div>
                <h3 className="font-medium mb-2">고객 문제</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>고소 작업의 위험성 (추락 사고 위험)</li>
                  <li>인력 부족 및 고령화</li>
                  <li>점검 비용 증가</li>
                  <li>점검 시간이 오래 걸림</li>
                  <li>육안 점검의 한계 (미세 결함 발견 어려움)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">우리의 솔루션</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>드론 자동 비행으로 안전하고 빠른 점검</li>
                  <li>AI 기반 결함 감지로 정확도 향상</li>
                  <li>자동 리포트 생성으로 업무 효율화</li>
                  <li>과거 데이터 축적으로 예측 유지보수 가능</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">핵심 가치</h3>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-neutral-800">70%</p>
                    <p className="text-xs text-neutral-600 mt-1">시간 단축</p>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-neutral-800">50%</p>
                    <p className="text-xs text-neutral-600 mt-1">비용 절감</p>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-neutral-800">95%</p>
                    <p className="text-xs text-neutral-600 mt-1">정확도</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
            <button className="flex items-center gap-2 text-neutral-600 hover:text-black">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">5</span>
            </button>
            <button className="flex items-center gap-2 text-neutral-600 hover:text-black">
              <ThumbsDown className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="ml-auto flex items-center gap-2 text-neutral-600 hover:text-black"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{comments.length}개 의견</span>
            </button>
          </div>

          {showComments && (
            <div className="mt-6 space-y-4 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
              <h3 className="font-semibold text-sm">팀 의견</h3>
              {comments.map((comment, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{comment.author}</span>
                    <span className="text-xs text-neutral-500">{comment.time}</span>
                  </div>
                  <p className="text-sm text-neutral-700">{comment.content}</p>
                </div>
              ))}
              <div className="mt-4">
                <textarea
                  placeholder="의견을 남겨주세요..."
                  className="w-full border border-neutral-300 rounded p-3 text-sm focus:outline-none focus:border-neutral-400"
                  rows={3}
                />
                <button className="mt-2 px-4 py-2 bg-black text-white rounded text-sm hover:bg-neutral-800">
                  의견 작성
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );

  return (
    <div className="flex h-full bg-neutral-50 dark:bg-neutral-950">
      {renderLeftSidebar()}
      {stage === 'draft' && renderDraftStage()}
      {stage === 'writing' && renderWritingStage()}
      {stage === 'complete' && renderCompleteStage()}
    </div>
  );
}