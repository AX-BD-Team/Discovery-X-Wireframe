import { useState } from 'react';
import { Upload, Play, Loader2, Download, Network, GitBranch } from 'lucide-react';

export function Lab() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
    }, 2500);
  };

  const ontologyNodes = [
    { id: 1, label: '드론', type: 'entity', x: 200, y: 150 },
    { id: 2, label: '시설물 점검', type: 'concept', x: 400, y: 150 },
    { id: 3, label: 'AI 분석', type: 'concept', x: 600, y: 150 },
    { id: 4, label: '항공안전법', type: 'regulation', x: 300, y: 300 },
    { id: 5, label: 'UTM 시스템', type: 'technology', x: 500, y: 300 },
    { id: 6, label: '인프라', type: 'domain', x: 400, y: 50 },
  ];

  const ontologyRelations = [
    { from: 1, to: 2, label: '수행' },
    { from: 2, to: 3, label: '활용' },
    { from: 1, to: 4, label: '규제대상' },
    { from: 1, to: 5, label: '관리시스템' },
    { from: 2, to: 6, label: '대상' },
  ];

  const extractedConcepts = [
    { category: '핵심 개념', items: ['드론', '시설물 점검', 'AI 분석', '자동화'] },
    { category: '규제/법', items: ['항공안전법', 'UTM 시스템', '드론 등록', '조종자 자격'] },
    { category: '기술', items: ['딥러닝', '결함 감지', '자동 리포트', '이미지 분석'] },
    { category: '도메인', items: ['인프라', '송전탑', '교량', '댐'] },
    { category: '이해관계자', items: ['국토교통부', '한국수자원공사', '한국전력공사', '건설사'] },
  ];

  return (
    <div className="flex h-full bg-neutral-50 dark:bg-neutral-950">
      {/* Left Panel - Control */}
      <aside className="w-80 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Ontology 분석</h2>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            문서에서 개념과 관계를 추출하여 온톨로지를 구성합니다.
          </p>
        </div>

        <div className="space-y-4">
          {/* File Upload */}
          <div>
            <label className="text-sm font-medium mb-2 block">소스 선택</label>
            <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg p-6 text-center hover:border-neutral-400 dark:hover:border-neutral-600 cursor-pointer">
              <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                파일을 드래그하거나 클릭하여 업로드
              </p>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-500">
                PDF, TXT, DOCX 지원
              </p>
            </div>
          </div>

          {/* Source Selection */}
          <div>
            <label className="text-sm font-medium mb-2 block">또는 기존 소스 선택</label>
            <select 
              className="w-full border border-neutral-300 dark:border-neutral-700 rounded p-2 text-sm bg-white dark:bg-neutral-800"
              onChange={(e) => setSelectedFile(e.target.value)}
              value={selectedFile || ''}
            >
              <option value="">소스를 선택하세요</option>
              <option value="drone-inspection">드론 기반 시설물 점검 및 리포트 자동화</option>
              <option value="ai-agent">AI 에이전트 마켓플레이스</option>
              <option value="physical-ai">Physical AI 로봇 플랫폼</option>
            </select>
          </div>

          {/* Analysis Options */}
          <div>
            <label className="text-sm font-medium mb-2 block">분석 옵션</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs">
                <input type="checkbox" defaultChecked className="rounded" />
                개념 추출
              </label>
              <label className="flex items-center gap-2 text-xs">
                <input type="checkbox" defaultChecked className="rounded" />
                관계 분석
              </label>
              <label className="flex items-center gap-2 text-xs">
                <input type="checkbox" className="rounded" />
                계층 구조 생성
              </label>
              <label className="flex items-center gap-2 text-xs">
                <input type="checkbox" className="rounded" />
                유사 개념 그룹핑
              </label>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleAnalyze}
            disabled={!selectedFile || isAnalyzing}
            className={`w-full py-3 rounded font-medium text-sm flex items-center justify-center gap-2 ${
              !selectedFile || isAnalyzing
                ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-500 cursor-not-allowed'
                : 'bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200'
            }`}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                분석 중...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                분석 시작
              </>
            )}
          </button>

          {hasResult && (
            <button className="w-full py-2 border border-neutral-300 dark:border-neutral-700 rounded text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              결과 다운로드
            </button>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
            💡 <strong>Ontology란?</strong><br />
            도메인 내 개념과 그들 간의 관계를 형식화한 지식 표현 방법입니다. 
            사업 아이디어의 핵심 요소를 구조화하여 이해도를 높일 수 있습니다.
          </p>
        </div>
      </aside>

      {/* Main Content - Visualization */}
      <main className="flex-1 overflow-auto">
        {!hasResult && !isAnalyzing ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Network className="w-16 h-16 text-neutral-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ontology 분석을 시작해보세요</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
              문서나 소스를 선택하고 분석을 시작하면, 개념과 관계가 시각화됩니다.
            </p>
          </div>
        ) : isAnalyzing ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Loader2 className="w-16 h-16 text-neutral-600 dark:text-neutral-400 animate-spin mb-4" />
            <h3 className="text-lg font-semibold mb-2">분석 진행 중</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              문서에서 개념과 관계를 추출하고 있습니다...
            </p>
          </div>
        ) : (
          <div className="p-8">
            {/* Tabs */}
            <div className="flex gap-4 border-b border-neutral-200 dark:border-neutral-800 mb-6">
              <button className="pb-3 border-b-2 border-black dark:border-white font-medium text-sm">
                그래프 뷰
              </button>
              <button className="pb-3 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm">
                개념 목록
              </button>
              <button className="pb-3 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white text-sm">
                관계 매트릭스
              </button>
            </div>

            {/* Graph Visualization */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">개념 관계 그래프</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    확대
                  </button>
                  <button className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    축소
                  </button>
                  <button className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs hover:bg-neutral-200 dark:hover:bg-neutral-700">
                    재배치
                  </button>
                </div>
              </div>

              {/* SVG Graph */}
              <div className="relative bg-neutral-50 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700" style={{ height: '500px' }}>
                <svg className="w-full h-full">
                  {/* Draw connections */}
                  {ontologyRelations.map((rel, idx) => {
                    const fromNode = ontologyNodes.find(n => n.id === rel.from);
                    const toNode = ontologyNodes.find(n => n.id === rel.to);
                    if (!fromNode || !toNode) return null;
                    
                    return (
                      <g key={idx}>
                        <line
                          x1={fromNode.x}
                          y1={fromNode.y}
                          x2={toNode.x}
                          y2={toNode.y}
                          stroke="#d4d4d4"
                          strokeWidth="2"
                        />
                        <text
                          x={(fromNode.x + toNode.x) / 2}
                          y={(fromNode.y + toNode.y) / 2}
                          fontSize="10"
                          fill="#737373"
                          textAnchor="middle"
                        >
                          {rel.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Draw nodes */}
                  {ontologyNodes.map((node) => {
                    const colors = {
                      entity: { bg: '#3b82f6', border: '#2563eb' },
                      concept: { bg: '#10b981', border: '#059669' },
                      regulation: { bg: '#f59e0b', border: '#d97706' },
                      technology: { bg: '#8b5cf6', border: '#7c3aed' },
                      domain: { bg: '#ef4444', border: '#dc2626' },
                    };
                    const color = colors[node.type as keyof typeof colors] || colors.entity;

                    return (
                      <g key={node.id}>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="40"
                          fill={color.bg}
                          stroke={color.border}
                          strokeWidth="2"
                        />
                        <text
                          x={node.x}
                          y={node.y}
                          fontSize="12"
                          fill="white"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontWeight="500"
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 right-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-3">
                  <p className="text-xs font-medium mb-2">범례</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px]">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>개체</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>개념</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span>규제</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span>기술</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>도메인</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extracted Concepts */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-5 h-5" />
                <h3 className="font-semibold">추출된 개념</h3>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {extractedConcepts.map((group, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">{group.category}</h4>
                    <div className="space-y-1">
                      {group.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded px-2 py-1 text-xs hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}