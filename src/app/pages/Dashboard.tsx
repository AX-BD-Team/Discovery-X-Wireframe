import { ThumbsUp, ThumbsDown } from 'lucide-react';

export function Dashboard() {
  const recentSources = [
    '2026년에 주목해야 할 AI 코딩의 주요 토픽과 트렌드',
    'AI 에이전트가 서로 고용하는 작업 마켓플레이스 Pinchw...',
    'Vercel의 AI 아이덴트로 위한 델파이가 생용을 500개 구...',
    'AI 과잉을 벗어나 프레임워크로드니다 – 라이언스라마...',
    'Creative Code 웹진 지인도: 최대한 주육하지 70기지 박...',
    'Gemini Voyager – Google Gemini를 위한 물리설 향한...',
    '구글, 재향군 지역 APRS MCP 사례 공개',
    'Mollbook Ventures – 에이전트 기반 비즈니스 투자',
    '아이펀즈 스켈(Agent Skillz)',
    'AI가 본 직접도 – NFT 탄 토링라프트로 되는 만 박'
  ];

  const ideas = [
    '드론 기반 시설물 검진 및 리포트 자동화',
    '토큰 기반 근무 AI시스템',
    '로봇 워크플로우 플랫폼/리코 사업',
    '국정 감사 에이전트',
    'AI-Ready Data&컨설팅 기반 사업화',
    'APT(로제) 배달 로봇 사업',
    '스마트 글래스/VR 지원 경의 사업',
    '건물 청소 Physical AI 사업',
    'AX Offering Studio',
    'AI Commerce OS'
  ];

  const proposals = [
    { title: '신년 문서 기업 의츠를 이전 성공기', status: 'Okay' },
    { title: 'RFP 사용 대응 성장 봉류성', status: '' },
    { title: '레가시 시스템 생애차 지용 성장 에이전트', status: '' },
    { title: '전영 식구 료도년 지용 성장 이야기트', status: '' },
    { title: '고향 투연 박 가격 성장 AI', status: '' },
    { title: '비아넷 지어드는 먼눔 실션감 성장 AI', status: '' },
    { title: '산엽 심사 결과 권의 성장 AI', status: '' },
    { title: '시경적 아이어 햄수 박 도느티 성장기', status: '' }
  ];

  const industryData = [
    { name: '아이디어', time: '1.5일', percentage: 100 },
    { name: '사업 제안', time: '3일', percentage: 60 },
    { name: '검샵자', time: '3.6일', percentage: 80 },
    { name: '검증', time: '5일', percentage: 100 }
  ];

  const sourceDistribution = [
    { label: '커워크/AI시스', percentage: '18%' },
    { label: 'Physical AI', percentage: '17%' },
    { label: '웹스케치', percentage: '9%' },
    { label: '금을', percentage: '7%' },
    { label: '금융', percentage: '7%' },
    { label: 'SI/개발', percentage: '3%' },
    { label: '기타', percentage: '39%' }
  ];

  const collectionStats = [
    { label: '수집 소스', value: '243개' },
    { label: 'Web', value: '107건' },
    { label: 'Youtube', value: '23건' },
    { label: '미분류 상태', value: '2건' }
  ];

  return (
    <div className="flex flex-col h-full bg-neutral-50 dark:bg-neutral-950">
      {/* Top Section - 2 Column Layout */}
      <div className="flex h-[500px] border-b border-neutral-200 dark:border-neutral-800">
        {/* Left Sidebar - Recent Sources */}
        <aside className="w-96 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex-shrink-0">
            <h2 className="text-sm font-semibold">최근 수집 소스</h2>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto px-6 py-4">
            <div className="space-y-2">
              {recentSources.map((source, idx) => (
                <div
                  key={idx}
                  className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed hover:text-black dark:hover:text-white cursor-pointer py-1"
                >
                  {source}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Center Content - Summary */}
        <main className="flex-1 bg-white dark:bg-neutral-900 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex-shrink-0">
            <h2 className="text-base font-semibold">요약/정리</h2>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="max-w-4xl">
              {/* Summary Card */}
              <div className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-3">독립 찬성</h3>
                <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p>
                    Donec a odio orci. Donec tincidunt tempus facilisis. Mauris nisi ex, sollicitudin in ex in, fermentum porttitor nibh. Nullam iaculis sed dui vitae condimentum.
                  </p>
                  
                  <div>
                    <p className="font-semibold mb-2">Phasellus</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Tristique velit et lacus vehicula gravida</li>
                      <li>Nam faucibus turpis quis porttitor consequat. Donec consectetur feugiat vulputate.</li>
                      <li>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                      <li>Praesent sollicitudin eu sapien ac efficitur. Duis dictum id et erat malesuada eleifend.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-xs text-neutral-500 dark:text-neutral-400 mb-1">키워드</p>
                    <p>fermentum, porttitor, nibh, Nullam, iaculis, sed</p>
                  </div>

                  <div>
                    <p className="font-semibold text-xs text-neutral-500 dark:text-neutral-400 mb-1">원본 링크</p>
                    <a href="https://www.youtube.com/watch?Yv=ZR466JnC5tU" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">
                      https://www.youtube.com/watch?Yv=ZR466JnC5tU
                    </a>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button className="px-3 py-1 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded text-xs hover:bg-neutral-50 dark:hover:bg-neutral-600">
                      소스 추후 확대
                    </button>
                    <button className="px-4 py-1 bg-black dark:bg-white text-white dark:text-black rounded text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200">
                      레파리 삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Peer Briefing Section */}
      <div className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="px-6 py-6">
          <h2 className="text-base font-semibold mb-4">피어브리핑</h2>
          
          {/* Tabs */}
          <div className="flex gap-4 border-b border-neutral-200 dark:border-neutral-800 mb-4">
            <button className="pb-2 border-b-2 border-black dark:border-white font-medium text-sm">
              아이디어 <span className="text-neutral-500 dark:text-neutral-400">(23)</span>
            </button>
            <button className="pb-2 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm">
              사업 제안 <span className="text-neutral-400 dark:text-neutral-500">(8)</span>
            </button>
            <button className="pb-2 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm">
              컴샵자 <span className="text-neutral-400 dark:text-neutral-500">(0)</span>
            </button>
            <button className="pb-2 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm">
              검증 ox / 동료 <span className="text-neutral-400 dark:text-neutral-500">(0)</span>
            </button>
          </div>

          {/* Ideas Grid - with horizontal scroll */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-6 min-w-max">
              <div className="w-64">
                {ideas.slice(0, 10).map((idea, idx) => (
                  <div key={idx} className="text-xs py-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white cursor-pointer">
                    {idea}
                  </div>
                ))}
              </div>
              <div className="w-64">
                {proposals.map((proposal, idx) => (
                  <div key={idx} className="text-xs py-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white cursor-pointer flex items-center gap-2">
                    <span>{proposal.title}</span>
                    {proposal.status && (
                      <span className="text-[10px] text-neutral-500 dark:text-neutral-400">{proposal.status}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - with scroll */}
      <div className="bg-white dark:bg-neutral-900 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-base font-semibold mb-6">통계</h2>
          
          <div className="grid grid-cols-4 gap-6">
            {/* Monthly Activity Chart */}
            <div>
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">월별 활동 현황</h3>
              <div className="flex items-end h-48 gap-2">
                {['25.09', '25.10', '25.11', '25.12', '26.01', '26.02'].map((month, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-t" style={{ height: `${20 + idx * 15}%` }}></div>
                    <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-2">{month}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">온 2주</span>
                <button className="text-xs text-neutral-500 dark:text-neutral-400">— 출근/벌써</button>
              </div>
            </div>

            {/* Average Time by Stage */}
            <div>
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">단계별 평균 체류 시간</h3>
              <div className="space-y-3">
                {industryData.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-neutral-700 dark:text-neutral-300">{item.name}</span>
                      <span className="text-xs font-medium">{item.time}</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div
                        className="bg-neutral-600 dark:bg-neutral-400 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Distribution */}
            <div>
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">산업 분포</h3>
              <div className="space-y-2">
                {sourceDistribution.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600 dark:text-neutral-400">{item.label}</span>
                    <span className="font-medium">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collection Status */}
            <div>
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">수집 현황</h3>
              {/* Donut Chart Placeholder */}
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 rounded-full border-[30px] border-neutral-300 dark:border-neutral-700"></div>
                <div className="absolute inset-0 rounded-full border-[30px] border-neutral-600 dark:border-neutral-400" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%)' }}></div>
              </div>
              <div className="space-y-2">
                {collectionStats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                    <div className="text-lg font-semibold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}