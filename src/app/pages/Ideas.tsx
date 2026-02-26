import { useState, useRef, useCallback, useEffect } from 'react';
import { Plus, Send, Settings as SettingsIcon, ThumbsUp, ThumbsDown, Menu, X, File, ChevronDown, ChevronUp, Trash2, Share2, Users, MessageSquare, Clock, CheckCircle, Circle, Loader2, ArrowRight, Link as LinkIcon, Upload, Globe, Search, FolderOpen, Tag, FileText, XCircle, Sparkles, BarChart3, Target, TrendingUp, Layers, Compass, PenTool, Play, Eye, EyeOff, GripVertical, MoreHorizontal, MoreVertical, ExternalLink, Lightbulb, Zap, Pencil, Check, ToggleLeft, ToggleRight, PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen } from 'lucide-react';

interface Idea {
  id: string;
  title: string;
  content?: string;
  isMine: boolean;
  createdAt: Date;
  lastModified: Date;
  stage: number; // 0-6
  sources: string[];
  collaborators?: string[];
  comments?: Comment[];
}

interface Source {
  id: string;
  title: string;
  selected: boolean;
  summary?: string;
  keywords?: string[];
  link?: string;
  usedInIdeas?: string[];
  category?: string;
}

interface UploadedItem {
  id: string;
  type: 'file' | 'url';
  name: string;
  size?: string;
  selected: boolean;
}

interface PromptSource {
  id: string;
  content: string;
  selected: boolean;
  isEditing?: boolean;
}

interface Comment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  time: string;
  replies?: Comment[];
}

type ViewMode = 'list' | 'create';

interface AnalysisSection {
  id: string;
  title: string;
  content: string;
  color?: string;
}

interface AnalysisMethod {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  isPreselected: boolean;
  isActive: boolean;
  isAnalyzing: boolean;
  isCustom: boolean;
  sections: AnalysisSection[];
}

interface ProposalOption {
  id: string;
  title: string;
  description: string;
  selected: boolean;
  expanded: boolean;
}

const defaultMethods: AnalysisMethod[] = [
  {
    id: 'swot',
    name: 'SWOT 분석',
    shortName: 'SWOT',
    description: '강점, 약점, 기회, 위협 요인을 체계적으로 분석',
    icon: '⚡',
    isPreselected: true,
    isActive: true,
    isAnalyzing: false,
    isCustom: false,
    sections: [
      { id: 's', title: '강점 (Strengths)', content: '• AI 코딩 자동화 기술의 높은 성숙도\n• 기존 개발 인프라와의 높은 호환성\n• 드론 하드웨어 비용의 지속적 하락 추세', color: 'blue' },
      { id: 'w', title: '약점 (Weaknesses)', content: '• 초기 시스템 구축에 높은 투자 비용 필요\n• 드론 운용 관련 규제 및 인증 절차 복잡\n• 전문 인력 확보의 어려움', color: 'red' },
      { id: 'o', title: '기��� (Opportunities)', content: '• 노후 인프라 점검 시장의 급격한 성장\n• 정부의 스마트시티 정책 확대\n• ESG 경영 트렌드에 따른 안전관리 수요 증가', color: 'green' },
      { id: 't', title: '위협 (Threats)', content: '• 대기업의 시장 진입 가능성\n• 드론 비행 규제 강화 리스크\n• 기술 표준화 미비로 인한 시장 파편화', color: 'orange' },
    ],
  },
  {
    id: 'market',
    name: '시장성 분석',
    shortName: '시장성',
    description: '시장 규모, 경쟁 환경, 성장 트렌드 분석',
    icon: '📊',
    isPreselected: true,
    isActive: true,
    isAnalyzing: false,
    isCustom: false,
    sections: [
      { id: 'tam', title: '시장 규모 (TAM/SAM/SOM)', content: '• TAM: 글로벌 드론 서비스 시장 $45B (2027)\n• SAM: 국내 시설물 점검 드론 시장 ₩8,500억\n• SOM: 초기 타겟 공공 인프라 점검 ₩850억', color: 'blue' },
      { id: 'comp', title: '경쟁 환경', content: '• 직접 경쟁: 드론맵, 에어로센스 등 5개사\n• 간접 경쟁: 전통 점검 업체 약 200개사\n• 차별점: AI 리포트 자동화 + 예측 정비', color: 'purple' },
      { id: 'trend', title: '성장 트렌드', content: '• 연평균 성장률(CAGR) 24.7% 예상\n• 디지털 트윈 연계 시장 급성장\n• 자율비행 기술 발전���로 운영 효율화', color: 'green' },
    ],
  },
  {
    id: 'value',
    name: '가치 제안 캔버스',
    shortName: '가치제안',
    description: '고객 문제와 솔루션의 적합성 분석',
    icon: '🎯',
    isPreselected: true,
    isActive: true,
    isAnalyzing: false,
    isCustom: false,
    sections: [
      { id: 'jobs', title: '고객의 해결 과제', content: '• 대규모 시설물의 주기적 안전 점검 수행\n• 점검 결과의 체계적 문서화 및 보고\n• 위험 요소 사전 감지 및 예방 정비 계획 수립', color: 'blue' },
      { id: 'pains', title: '고객 고충 (Pains)', content: '• 인력 기반 점검의 높은 비용과 긴 소요 시간\n• 위험 지역 접근 시 안전 사고 리스크\n• 수작업 보고서 작성의 비효율성과 오류', color: 'red' },
      { id: 'gains', title: '고객 이득 (Gains)', content: '• 점검 비용 60% 절감, 시간 80% 단축\n• AI 기반 이상 징후 자동 탐지로 정확도 향상\n• 실시간 대시보드를 통한 자산 현황 모니터링', color: 'green' },
      { id: 'solution', title: '솔루션 제안', content: '• 자율 비행 드론 + AI 영상 분석 플랫폼\n• 자동 리포트 생성 및 이력 관리 시스템\n• 예측 정비 스케줄링 엔진', color: 'purple' },
    ],
  },
];

const availableMethods: { id: string; name: string; shortName: string; description: string; icon: string; isPreselected: boolean; isCustom: boolean }[] = [
  { id: 'porter', name: "Porter's 5 Forces", shortName: '5 Forces', description: '산업 내 5가지 경쟁 요인을 분석하여 수익성과 매력도 평가', icon: '🏢', isPreselected: false, isCustom: false },
  { id: 'pestel', name: 'PESTEL 분석', shortName: 'PESTEL', description: '정치/경제/사회/기술/환경/법률 거시환경 분석', icon: '🌍', isPreselected: false, isCustom: false },
  { id: 'bmc', name: '비즈니스 모델 캔버스', shortName: 'BMC', description: '9개 핵심 블록으로 비즈니스 모델 설계 및 검증', icon: '📋', isPreselected: false, isCustom: false },
  { id: 'blueocean', name: '블루오션 전략', shortName: '블루오션', description: '경쟁 없는 새로운 시장 공간 창출 전략 도출', icon: '🌊', isPreselected: false, isCustom: false },
  { id: 'lean', name: '린 캔버스', shortName: 'Lean', description: '스타트업 관점의 핵심 가설 검증 프레임워크', icon: '🚀', isPreselected: false, isCustom: false },
  { id: 'scenario', name: '시나리오 분석', shortName: '시나리오', description: '미래의 다양한 가능성을 시나리오별로 분석', icon: '🔮', isPreselected: false, isCustom: false },
];

interface ApprovedTeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  avatarColor: string;
}

const approvedTeamMembers: ApprovedTeamMember[] = [
  { id: 'tm1', name: '이영희', email: 'younghee@company.com', role: '선임 연구원', department: '전략기획팀', avatarColor: 'bg-rose-500' },
  { id: 'tm2', name: '박민수', email: 'minsoo@company.com', role: '매니저', department: '사업개발팀', avatarColor: 'bg-amber-500' },
  { id: 'tm3', name: '최수진', email: 'soojin@company.com', role: '책임 연구원', department: 'R&D센터', avatarColor: 'bg-emerald-500' },
  { id: 'tm4', name: '한지호', email: 'jiho@company.com', role: '수석 엔지니어', department: '기술연구소', avatarColor: 'bg-violet-500' },
  { id: 'tm5', name: '윤서연', email: 'seoyeon@company.com', role: '팀장', department: '마케팅팀', avatarColor: 'bg-cyan-500' },
  { id: 'tm6', name: '정태현', email: 'taehyun@company.com', role: '데이터 분석가', department: 'AI Lab', avatarColor: 'bg-orange-500' },
];

export function Ideas() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [currentIdeaId, setCurrentIdeaId] = useState<string | null>(null);
  const [ideaStage, setIdeaStage] = useState(0);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [selectedInvitees, setSelectedInvitees] = useState<string[]>([]);
  const [inviteeSearchQuery, setInviteeSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState('GPT-5.1 Thinking');
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  
  // Proposal options state
  const [proposalOptions, setProposalOptions] = useState<ProposalOption[]>([
    {
      id: 'proposal1',
      title: '드론 기반 송전선·변전설비 점검 자동화 플랫폼',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas elit felis, non ultrices elit vulputate consectetur. Phasellus nibh lorem, auctor vitae porttitor a, eleifend a arcu.',
      selected: true,
      expanded: false,
    },
    {
      id: 'proposal2',
      title: '드론 기반 댐·수자원 시설 안전점검 및 변위/균열 비교 리포트',
      description: 'Nam ullamcorper varius convallis. Pellentesque facilisis lorem quis diam volutpat ornare. Duis mattis massa finibus, tempor est eu, commodo velit.',
      selected: false,
      expanded: false,
    },
    {
      id: 'proposal3',
      title: '드론 기반 대형 건설 현장 주간·월간 진도/토량 자동 리포트',
      description: 'Nam ullamcorper varius convallis. Pellentesque facilisis lorem quis diam volutpat ornare. Duis mattis massa finibus, tempor est eu, commodo velit.',
      selected: false,
      expanded: false,
    },
  ]);
  
  // Panel resize states
  const LEFT_DEFAULT = 340;
  const LEFT_MIN = 280;
  const LEFT_MAX = 600;
  const RIGHT_DEFAULT = 340;
  const RIGHT_MIN = 260;
  const RIGHT_MAX = 500;
  
  const [leftWidth, setLeftWidth] = useState(LEFT_DEFAULT);
  const [rightWidth, setRightWidth] = useState(RIGHT_DEFAULT);
  const [leftWidthBeforeCollapse, setLeftWidthBeforeCollapse] = useState(LEFT_DEFAULT);
  const [rightWidthBeforeCollapse, setRightWidthBeforeCollapse] = useState(RIGHT_DEFAULT);
  
  const isResizingLeft = useRef(false);
  const isResizingRight = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);
  
  const handleLeftResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isResizingLeft.current = true;
    startX.current = e.clientX;
    startWidth.current = leftWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [leftWidth]);
  
  const handleRightResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isResizingRight.current = true;
    startX.current = e.clientX;
    startWidth.current = rightWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [rightWidth]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizingLeft.current) {
        const delta = e.clientX - startX.current;
        const newWidth = Math.min(LEFT_MAX, Math.max(LEFT_MIN, startWidth.current + delta));
        setLeftWidth(newWidth);
      }
      if (isResizingRight.current) {
        const delta = startX.current - e.clientX;
        const newWidth = Math.min(RIGHT_MAX, Math.max(RIGHT_MIN, startWidth.current + delta));
        setRightWidth(newWidth);
      }
    };
    const handleMouseUp = () => {
      if (isResizingLeft.current) {
        isResizingLeft.current = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
      if (isResizingRight.current) {
        isResizingRight.current = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  const toggleLeftPanel = useCallback(() => {
    if (leftSidebarOpen) {
      setLeftWidthBeforeCollapse(leftWidth);
      setLeftSidebarOpen(false);
    } else {
      setLeftWidth(leftWidthBeforeCollapse);
      setLeftSidebarOpen(true);
    }
  }, [leftSidebarOpen, leftWidth, leftWidthBeforeCollapse]);
  
  const toggleRightPanel = useCallback(() => {
    if (rightSidebarOpen) {
      setRightWidthBeforeCollapse(rightWidth);
      setRightSidebarOpen(false);
    } else {
      setRightWidth(rightWidthBeforeCollapse);
      setRightSidebarOpen(true);
    }
  }, [rightSidebarOpen, rightWidth, rightWidthBeforeCollapse]);

  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [chatInput, setChatInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaContent, setIdeaContent] = useState('');

  // New source input states
  const [sourceInputTab, setSourceInputTab] = useState<'upload' | 'existing'>('upload');
  const [uploadedItems, setUploadedItems] = useState<UploadedItem[]>([]);
  const [urlInput, setUrlInput] = useState('');
  const [promptInput, setPromptInput] = useState('');
  const [sourceSearchQuery, setSourceSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [isDragOver, setIsDragOver] = useState(false);
  const [promptSources, setPromptSources] = useState<PromptSource[]>([]);
  const [editingPromptId, setEditingPromptId] = useState<string | null>(null);
  const [editingPromptContent, setEditingPromptContent] = useState('');

  // Analysis methods states
  const [analysisMethods, setAnalysisMethods] = useState<AnalysisMethod[]>(defaultMethods);
  const [activeMethodId, setActiveMethodId] = useState<string | null>(null);
  const [showAddMethodDropdown, setShowAddMethodDropdown] = useState(false);
  const [showCustomMethodModal, setShowCustomMethodModal] = useState(false);
  const [customMethodName, setCustomMethodName] = useState('');
  const [customMethodDesc, setCustomMethodDesc] = useState('');
  const [customMethodSections, setCustomMethodSections] = useState<string[]>(['']);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [showAddSourcePanel, setShowAddSourcePanel] = useState(false);
  const [previewSourceId, setPreviewSourceId] = useState<string | null>('3');
  const [openSourceMenuId, setOpenSourceMenuId] = useState<string | null>(null);

  const sourceCategories = ['전체', 'AI & 자동화', '웹 & 기술', '개발 도구', '비즈니스 & 투자'];

  const getTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    const diffMonths = Math.floor(diffMs / 2592000000);

    if (diffMins < 60) return `${diffMins}분 전`;
    if (diffHours < 24) return `${diffHours}시간 전`;
    if (diffDays < 30) return `${diffDays}일 전`;
    return `${diffMonths}개월 전`;
  };

  const [myIdeas, setMyIdeas] = useState<Idea[]>([
    { 
      id: '1', 
      title: '로봇 기반 원격 근무 시스템', 
      isMine: true, 
      createdAt: new Date(), 
      lastModified: new Date(Date.now() - 3600000), // 1시간 전
      stage: 6,
      sources: ['1', '2'],
      collaborators: ['김정원', '이영희'],
      comments: [
        { id: 'c1', author: '이영희', content: '이 아이디어 정말 좋네요!', time: '2시간 전' }
      ]
    },
    { 
      id: '2', 
      title: '통합 모빌리티&로봇 등록/관리 사업', 
      isMine: true, 
      createdAt: new Date(), 
      lastModified: new Date(Date.now() - 259200000), // 3일 전
      stage: 4,
      sources: ['3', '4'],
      collaborators: ['김정원']
    },
    { 
      id: '3', 
      title: 'AI-Ready Data&컨설팅 기반 사업화', 
      isMine: true, 
      createdAt: new Date(), 
      lastModified: new Date(Date.now() - 2592000000), // 1개월 전
      stage: 2,
      sources: ['5'],
      collaborators: ['김정원', '박민수']
    },
  ]);

  const [teamIdeas] = useState<Idea[]>([
    { id: '4', title: '로봇 기반 원격 근무 시스템', isMine: false, createdAt: new Date(), lastModified: new Date(Date.now() - 7200000), stage: 5, sources: ['1', '2'], collaborators: ['박민수', '최수진'] },
    { id: '5', title: '통합 모빌리티&로봇 등록/관리 사업', isMine: false, createdAt: new Date(), lastModified: new Date(Date.now() - 172800000), stage: 6, sources: ['2', '3'], collaborators: ['이영희'] },
    { id: '6', title: 'AI-Ready Data&컨설팅 기반 사업화', isMine: false, createdAt: new Date(), lastModified: new Date(Date.now() - 604800000), stage: 3, sources: ['4'], collaborators: ['박민수'] },
  ]);

  const [sources, setSources] = useState<Source[]>([
    { id: '1', title: '2026년에 주목해야 할 AI 코딩의 주요 토픽과 트렌드', selected: false, usedInIdeas: ['1', '4'], category: 'AI & 자동화' },
    { id: '2', title: 'AI 에이전트 코딩 80% 시대, 개발자의 진짜 문제는 \'이해 부채', selected: false, usedInIdeas: ['1', '4', '5'], category: 'AI & 자동화' },
    { id: '3', title: 'Vercel이 AI 에이전트를 위해 웹페이지 용량을 500KB → 2KB로 줄인 방법', selected: true, 
      summary: 'AI 에이전트가 웹페이지를 효율적으로 처리할 수 있도록 용량을 대폭 줄인 기술적 접근법을 소개합니다.',
      keywords: ['AI', 'optimization', 'web', 'efficiency'],
      link: 'https://www.youtube.com/watch?v=-ZFH4oJzCdU',
      usedInIdeas: ['2', '5'],
      category: '웹 & 기술'
    },
    { id: '4', title: 'AI 코딩은 하나의 프레임워크입니다 – 라이브러리처럼 활용하세요.', selected: false, usedInIdeas: ['2', '6'], category: 'AI & 자동화' },
    { id: '5', title: 'Claude Code 완전 가이드: 해커톤 우승자의 70가지 파워 팁', selected: false, usedInIdeas: ['3'], category: '개발 도구' },
    { id: '6', title: 'Gemini Voyager - Google Gemini를 위한 올인원 확장 기능 모음', selected: false, category: '개발 도구' },
    { id: '7', title: '구글, 개발자 지식 API와 MCP 서버 공개', selected: false, category: '웹 & 기술' },
    { id: '8', title: 'Moltbook Ventures – 에이전트 기반 비즈니스 투자', selected: false, category: '비즈니스 & 투자' },
    { id: '9', title: '에이전트 스킬(Agent Skills)', selected: false, category: 'AI & 자동화' },
    { id: '10', title: 'AI가 본 적 없는 .NET UI 프레임워크로 IDE를 만들 때', selected: false, category: '개발 도구' },
  ]);

  const models = ['GPT-5.1 Thinking', 'GPT-4o', 'Claude 3.5 Sonnet', 'Gemini Pro'];
  
  const stageLabels = [
    '소스 선택',
    'AI 분석',
    '아이디어 초안',
    '상세 작성',
    '검토',
    '협업',
    '완료'
  ];

  const stageColors: Record<number, { bg: string; text: string; dot: string; border: string }> = {
    0: { bg: 'bg-neutral-100 dark:bg-neutral-800', text: 'text-neutral-600 dark:text-neutral-400', dot: 'bg-neutral-400', border: 'border-neutral-300 dark:border-neutral-600' },
    1: { bg: 'bg-blue-50 dark:bg-blue-950/40', text: 'text-blue-700 dark:text-blue-300', dot: 'bg-blue-500', border: 'border-blue-200 dark:border-blue-800' },
    2: { bg: 'bg-indigo-50 dark:bg-indigo-950/40', text: 'text-indigo-700 dark:text-indigo-300', dot: 'bg-indigo-500', border: 'border-indigo-200 dark:border-indigo-800' },
    3: { bg: 'bg-purple-50 dark:bg-purple-950/40', text: 'text-purple-700 dark:text-purple-300', dot: 'bg-purple-500', border: 'border-purple-200 dark:border-purple-800' },
    4: { bg: 'bg-amber-50 dark:bg-amber-950/40', text: 'text-amber-700 dark:text-amber-300', dot: 'bg-amber-500', border: 'border-amber-200 dark:border-amber-800' },
    5: { bg: 'bg-teal-50 dark:bg-teal-950/40', text: 'text-teal-700 dark:text-teal-300', dot: 'bg-teal-500', border: 'border-teal-200 dark:border-teal-800' },
    6: { bg: 'bg-green-50 dark:bg-green-950/40', text: 'text-green-700 dark:text-green-300', dot: 'bg-green-500', border: 'border-green-200 dark:border-green-800' },
  };

  const handleCreateNew = () => {
    setViewMode('create');
    setCurrentIdeaId(null);
    setIdeaStage(0);
    setIdeaTitle('');
    setIdeaContent('');
    setChatMessages([]);
    setSources(sources.map(s => ({ ...s, selected: false })));
    setUploadedItems([]);
    setPromptSources([]);
    setPromptInput('');
  };

  const handleToggleSource = (id: string) => {
    setSources(sources.map(s => s.id === id ? { ...s, selected: !s.selected } : s));
  };

  const handleToggleUploadedItem = (id: string) => {
    setUploadedItems(uploadedItems.map(item => item.id === id ? { ...item, selected: !item.selected } : item));
  };

  const handleDeleteUploadedItem = (id: string) => {
    setUploadedItems(uploadedItems.filter(item => item.id !== id));
  };

  const handleToggleAllUploaded = () => {
    const allSelected = uploadedItems.every(item => item.selected);
    setUploadedItems(uploadedItems.map(item => ({ ...item, selected: !allSelected })));
  };

  const handleToggleAllExistingSources = () => {
    const selectedSources = sources.filter(s => s.selected);
    const allSelected = selectedSources.length === sources.length;
    setSources(sources.map(s => ({ ...s, selected: !allSelected })));
  };

  const handleAddPromptSource = () => {
    if (!promptInput.trim()) return;
    const newPrompt: PromptSource = {
      id: `prompt_${Date.now()}`,
      content: promptInput.trim(),
      selected: true,
    };
    setPromptSources([...promptSources, newPrompt]);
    setPromptInput('');
  };

  const handleTogglePromptSource = (id: string) => {
    setPromptSources(promptSources.map(p => p.id === id ? { ...p, selected: !p.selected } : p));
  };

  const handleDeletePromptSource = (id: string) => {
    setPromptSources(promptSources.filter(p => p.id !== id));
  };

  const handleStartEditPrompt = (id: string, content: string) => {
    setEditingPromptId(id);
    setEditingPromptContent(content);
  };

  const handleSaveEditPrompt = (id: string) => {
    if (!editingPromptContent.trim()) return;
    setPromptSources(promptSources.map(p => p.id === id ? { ...p, content: editingPromptContent.trim() } : p));
    setEditingPromptId(null);
    setEditingPromptContent('');
  };

  const handleToggleAllPromptSources = () => {
    const allSelected = promptSources.every(p => p.selected);
    setPromptSources(promptSources.map(p => ({ ...p, selected: !allSelected })));
  };

  const handleDeleteIdea = (id: string) => {
    setMyIdeas(myIdeas.filter(i => i.id !== id));
    setShowDeleteModal(false);
  };

  const handleStartAnalysis = () => {
    const selectedSources = sources.filter(s => s.selected);
    const selectedUploads = uploadedItems.filter(u => u.selected);
    const selectedPrompts = promptSources.filter(p => p.selected);
    if (selectedSources.length === 0 && selectedUploads.length === 0 && selectedPrompts.length === 0 && !promptInput.trim()) {
      alert('소스를 선택하거나 파일/URL을 업로드해주세요.');
      return;
    }
    // If there's unsaved prompt input, auto-add it as a prompt source
    if (promptInput.trim() && promptSources.length === 0) {
      handleAddPromptSource();
    }
    
    setIdeaStage(1);
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setIdeaStage(2);
      setIdeaTitle('드론 기반 시설물 점검 및 리포트 자동화');
      setIdeaContent('선택하신 소스를 분석한 결과, AI와 자동화 기술을 활용한 시설물 점검 사업이 유망해 보입니다...');
      setChatMessages([
        {
          role: 'assistant',
          content: '선택하신 소스를 분석했습니다. AI 코딩과 자동화 트렌드를 바탕으로 "드론 기반 시설물 점검 및 리포트 자동화" 아이디어를 제안드립니다.'
        }
      ]);
    }, 3000);
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages([...chatMessages, { role: 'user', content: chatInput }]);
    setChatInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: '좋은 질문입니다. 이 부분에 대해 추가 분석을 진행하겠습니다...'
      }]);
    }, 1000);
  };

  const handleNextStage = () => {
    if (ideaStage < 6) {
      setIdeaStage(ideaStage + 1);
    }
  };

  const handleSaveIdea = () => {
    const allSourceIds = [
      ...sources.filter(s => s.selected).map(s => s.id),
      ...uploadedItems.filter(u => u.selected).map(u => u.id),
      ...promptSources.filter(p => p.selected).map(p => p.id),
    ];
    const newIdea: Idea = {
      id: Date.now().toString(),
      title: ideaTitle,
      content: ideaContent,
      isMine: true,
      createdAt: new Date(),
      stage: ideaStage,
      sources: allSourceIds,
      collaborators: ['김정원']
    };
    
    setMyIdeas([newIdea, ...myIdeas]);
    setViewMode('list');
  };

  const handleShareIdea = (emails: string[]) => {
    // Simulate sharing
    console.log('Sharing with:', emails);
    setShowShareModal(false);
  };

  const handleToggleProposalOption = (id: string) => {
    setProposalOptions(proposalOptions.map(opt => 
      opt.id === id ? { ...opt, selected: !opt.selected } : opt
    ));
  };

  const handleToggleProposalExpanded = (id: string) => {
    setProposalOptions(proposalOptions.map(opt => 
      opt.id === id ? { ...opt, expanded: !opt.expanded } : opt
    ));
  };

  const handleConfirmProposal = () => {
    const selectedProposals = proposalOptions.filter(opt => opt.selected);
    if (selectedProposals.length === 0) {
      alert('사업 제안을 하나 이상 선택해주세요.');
      return;
    }
    
    // Simulate proposal submission
    console.log('Selected proposals:', selectedProposals);
    alert(`${selectedProposals.length}개의 사업 제안을 팀에 공유했습니다!`);
    setShowProposalModal(false);
    
    // Reset selections
    setProposalOptions(proposalOptions.map(opt => ({ ...opt, selected: false, expanded: false })));
  };

  const handleAddMethod = (methodId: string) => {
    const method = availableMethods.find(m => m.id === methodId);
    if (!method) return;
    
    const newMethod: AnalysisMethod = {
      ...method,
      isActive: true,
      isAnalyzing: true,
      sections: [],
    };
    setAnalysisMethods([...analysisMethods, newMethod]);
    setShowAddMethodDropdown(false);
    setActiveMethodId(methodId);

    // Simulate analysis
    setTimeout(() => {
      setAnalysisMethods(prev => prev.map(m => {
        if (m.id !== methodId) return m;
        const genSections: Record<string, AnalysisSection[]> = {
          porter: [
            { id: 'rivalry', title: '기존 경쟁자 간 경쟁', content: '• 드론 점검 시장 내 경쟁 강도 중간\n• 기술 차별화를 통한 경쟁 우위 확보 가능\n• 가격 경쟁보다 서비스 품질 중심 경쟁', color: 'blue' },
            { id: 'newentry', title: '신규 진입자 위협', content: '• 기술 장벽이 높아 진입 장벽 존재\n• 대기업의 자체 솔루션 개발 가능성\n• 인증/규제가 자연적 진입 장벽 역할', color: 'orange' },
            { id: 'substitutes', title: '대체재 위협', content: '• 인력 기반 점검(기존 방식)이 주요 대체재\n• IoT 센서 기반 상시 모니터링 시스템\n• 위성 영상 분석 기술의 발전', color: 'red' },
            { id: 'buyers', title: '구매자 교섭력', content: '• 공공기관 대형 발주 시 교섭력 높음\n• 중소 건설사는 상대적으로 교섭력 낮음\n• 장기 계약 유도를 통한 교섭력 관리', color: 'green' },
            { id: 'suppliers', title: '공급자 교섭력', content: '• 드론 하드웨어 공급업체 다수 존재\n• AI/클라우드 인프라 의존도 관리 필요\n• 핵심 기술 내재화로 의존도 최소화', color: 'purple' },
          ],
          pestel: [
            { id: 'political', title: '정치적 요인 (Political)', content: '• 국가 인프라 안전관리 정책 강화\n• 드론 산업 육성 정책 및 규제 샌드박스\n• 공공조달 우선구매 제도 활용 가능', color: 'blue' },
            { id: 'economic', title: '경제적 요인 (Economic)', content: '• 인프라 유지보수 예산 지속 증가\n• 인건비 상승으로 자동화 수요 확대\n• 글로벌 경기 불확실성에 따른 투자 신중론', color: 'green' },
            { id: 'social', title: '사회적 요인 (Social)', content: '• 안전에 대한 사회적 관심 증대\n• 고령화로 인한 점검 인력 부족\n• 기술 수용도 향상', color: 'purple' },
            { id: 'tech', title: '기술적 요인 (Technological)', content: '• AI/ML 기술의 급격한 발전\n• 5G 통신으로 실시간 데이터 전송 가능\n• 배터리 기술 발전으로 비행시간 증가', color: 'orange' },
            { id: 'env', title: '환경적 요인 (Environmental)', content: '• ESG 경영 확산\n• 탄소 중립 목표에 따른 효율적 점검 수요\n• 소음/배출 규제 고려 필요', color: 'green' },
            { id: 'legal', title: '법률적 요인 (Legal)', content: '• 드론 비행 관련 항공법 규제\n• 개인정보보호법(촬영 관련)\n• 시설물 안전관리 특별법 강화', color: 'red' },
          ],
          bmc: [
            { id: 'partners', title: '핵심 파트너', content: '• 드론 제조업체\n• 클라우드 서비스 제공자 (AWS/GCP)\n• 공공기관 및 건설사', color: 'blue' },
            { id: 'activities', title: '핵심 활동', content: '• AI 영상분석 알고리즘 개발\n• 드론 자율비행 시스템 운영\n• 자동 리포트 생성 플랫폼 유지보수', color: 'purple' },
            { id: 'resources', title: '핵심 자원', content: '• AI/ML 엔지니어링 팀\n• 점검 데이터셋 및 학습 모델\n• 드론 하드웨어 플릿', color: 'green' },
            { id: 'revenue', title: '수익원', content: '• SaaS 구독형 점검 서비스\n• 점검 건별 과금\n• 데이터 분석 리포트 프리미엄', color: 'orange' },
          ],
          blueocean: [
            { id: 'eliminate', title: '제거 (Eliminate)', content: '• 현장 방문 기반 수동 점검 절차\n• 종이 기반 보고서 작성\n• 다수 점검 인력 상시 고용', color: 'red' },
            { id: 'reduce', title: '감소 (Reduce)', content: '• 점검 소요 시간 및 비용\n• 인적 오류 및 안전 사고 리스크\n• 데이터 분석 대기 시간', color: 'orange' },
            { id: 'raise', title: '증가 (Raise)', content: '• 점검 정확도 및 커버리지\n• 데이터 기반 의사결정 품질\n• 예측 정비 가능성', color: 'blue' },
            { id: 'create', title: '창조 (Create)', content: '• AI 기반 자동 이상 탐지\n• 실시간 디지털 트윈 연동\n• 점검 이력 기반 자산 수명 예측', color: 'green' },
          ],
          lean: [
            { id: 'problem', title: '문제', content: '• 노후 인프라 점검의 비효율성\n• 위험 지역 인력 접근의 안전 문제\n• 점검 결과 문서화의 수작업 부담', color: 'red' },
            { id: 'solution_l', title: '솔루션', content: '• AI + 드론 기반 자동화 점검 플랫폼\n• 자율비행 + 실시간 분석\n• 원클릭 리포트 생성', color: 'blue' },
            { id: 'metrics', title: '핵심 지표', content: '• 점검 건수/월\n• 이상 탐지 정확도\n• 고객 유지율(NRR)', color: 'green' },
            { id: 'advantage', title: '경쟁 우위', content: '• AI 분석 정확도 95%+\n• 통합 리포트 자동화\n• 축적된 점검 데이터', color: 'purple' },
          ],
          scenario: [
            { id: 'best', title: '최선 시나리오', content: '• 정부 규제 완화 + 대규모 공공 발주\n• 3년 내 시장 점유율 30% 달성\n• 해외 시장 진출 성공', color: 'green' },
            { id: 'base', title: '기본 시나리오', content: '• 안정적 시장 성장 + 점진적 고객 확보\n• 5년 내 BEP 달성\n• 국내 시장 중심 성장', color: 'blue' },
            { id: 'worst', title: '최악 시나리오', content: '• 규제 강화 + 대기업 진입\n• 기술 차별화 실패\n• 피봇 또는 시장 전환 필요', color: 'red' },
          ],
        };
        return { ...m, isAnalyzing: false, sections: genSections[methodId] || [] };
      }));
    }, 2500);
  };

  const handleRemoveMethod = (methodId: string) => {
    setAnalysisMethods(analysisMethods.filter(m => m.id !== methodId));
    if (activeMethodId === methodId) setActiveMethodId(null);
  };

  const handleCreateCustomMethod = () => {
    if (!customMethodName.trim()) return;
    const validSections = customMethodSections.filter(s => s.trim());
    if (validSections.length === 0) return;
    
    const newMethod: AnalysisMethod = {
      id: `custom_${Date.now()}`,
      name: customMethodName,
      shortName: customMethodName.length > 6 ? customMethodName.slice(0, 6) + '..' : customMethodName,
      description: customMethodDesc || '사용자 정의 분석 방법론',
      icon: '✨',
      isPreselected: false,
      isActive: true,
      isAnalyzing: true,
      isCustom: true,
      sections: [],
    };
    
    setAnalysisMethods([...analysisMethods, newMethod]);
    setActiveMethodId(newMethod.id);
    setShowCustomMethodModal(false);
    setCustomMethodName('');
    setCustomMethodDesc('');
    setCustomMethodSections(['']);

    // Simulate AI generating analysis for custom sections
    setTimeout(() => {
      setAnalysisMethods(prev => prev.map(m => {
        if (m.id !== newMethod.id) return m;
        const colors = ['blue', 'green', 'purple', 'orange', 'red'];
        return {
          ...m,
          isAnalyzing: false,
          sections: validSections.map((title, i) => ({
            id: `cs_${i}`,
            title,
            content: `• ${customMethodName}의 "${title}" 관점에서 분석한 결과입니다.\n• 드론 기반 시설물 점검 사업에 대한 ${title} 측면의 주요 발견사항을 포함합니다.\n• 심층 분석을 위해 AI 어시스턴트에게 추가 질문해보세요.`,
            color: colors[i % colors.length],
          })),
        };
      }));
    }, 2500);
  };

  const toggleSectionCollapse = (sectionKey: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev);
      if (next.has(sectionKey)) next.delete(sectionKey);
      else next.add(sectionKey);
      return next;
    });
  };

  const handleUpdateSectionContent = (methodId: string, sectionId: string, newContent: string) => {
    setAnalysisMethods(prev => prev.map(m => {
      if (m.id !== methodId) return m;
      return { ...m, sections: m.sections.map(s => s.id === sectionId ? { ...s, content: newContent } : s) };
    }));
  };

  const sectionColorMap: Record<string, { bg: string; border: string; dot: string }> = {
    blue: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-800', dot: 'bg-blue-500' },
    red: { bg: 'bg-red-50 dark:bg-red-950/30', border: 'border-red-200 dark:border-red-800', dot: 'bg-red-500' },
    green: { bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-800', dot: 'bg-green-500' },
    orange: { bg: 'bg-orange-50 dark:bg-orange-950/30', border: 'border-orange-200 dark:border-orange-800', dot: 'bg-orange-500' },
    purple: { bg: 'bg-purple-50 dark:bg-purple-950/30', border: 'border-purple-200 dark:border-purple-800', dot: 'bg-purple-500' },
  };

  const selectedSource = sources.find(s => s.selected);
  const selectedSourcesCount = sources.filter(s => s.selected).length;
  const selectedUploadedCount = uploadedItems.filter(u => u.selected).length;
  const selectedPromptCount = promptSources.filter(p => p.selected).length;
  const totalSelectedCount = selectedSourcesCount + selectedUploadedCount + selectedPromptCount;

  const getStageIcon = (stage: number) => {
    if (stage < ideaStage) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (stage === ideaStage) return <Circle className="w-4 h-4 text-blue-500 fill-blue-500" />;
    return <Circle className="w-4 h-4 text-neutral-400" />;
  };

  return (
    <div className="flex h-full bg-neutral-50 dark:bg-neutral-950">
      {viewMode === 'list' ? (
        // List View - Figma-inspired layout
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1400px] mx-auto px-8 py-6">
            {/* Two-column: 내 아이디어 / 팀 아이디어 */}
            <div className="flex gap-8 mb-0">
              {/* 내 아이디어 Column */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-neutral-300 dark:border-neutral-700">
                  <h2 className="text-base font-bold">내 아이디어</h2>
                  <button
                    onClick={handleCreateNew}
                    className="px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    새 아이디어
                  </button>
                </div>
                <div className="space-y-2">

                  {myIdeas.map((idea) => {
                    const sc = stageColors[idea.stage] || stageColors[0];
                    return (
                      <div
                        key={idea.id}
                        className="group relative bg-white dark:bg-neutral-900 flex items-center gap-3 h-[42px] px-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 cursor-pointer transition-colors"
                        onClick={() => {
                          setCurrentIdeaId(idea.id);
                          setIdeaStage(idea.stage);
                          setIdeaTitle(idea.title);
                          setViewMode('create');
                        }}
                      >
                        {/* Stage progress dots */}
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          {[...Array(7)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i <= idea.stage ? sc.dot : 'bg-neutral-200 dark:bg-neutral-700'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Title */}
                        <p className="text-sm flex-1 truncate">{idea.title}</p>

                        {/* Stage Badge */}
                        <span className={`flex-shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] border ${sc.bg} ${sc.text} ${sc.border}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                          {stageLabels[idea.stage]}
                          <span className="opacity-60">{idea.stage + 1}/7</span>
                        </span>

                        {/* Meta icons */}
                        <div className="flex items-center gap-1.5 text-neutral-400 dark:text-neutral-500 flex-shrink-0">
                          <span className="flex items-center gap-0.5 text-[10px]">
                            <Clock className="w-3 h-3" />
                            {getTimeAgo(idea.lastModified)}
                          </span>
                        </div>

                        {/* Delete on hover */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDeleteModal(true);
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-opacity"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-red-400" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 팀 아이디어 Column */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-neutral-300 dark:border-neutral-700">
                  <h2 className="text-base font-bold">팀 아이디어</h2>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">{teamIdeas.length}개</span>
                </div>
                <div className="space-y-2">
                  {teamIdeas.map((idea) => {
                    const sc = stageColors[idea.stage] || stageColors[0];
                    return (
                      <div
                        key={idea.id}
                        className="bg-white dark:bg-neutral-900 flex items-center gap-3 h-[42px] px-4 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 cursor-pointer transition-colors"
                        onClick={() => {
                          setCurrentIdeaId(idea.id);
                          setIdeaStage(idea.stage);
                          setIdeaTitle(idea.title);
                          setViewMode('create');
                        }}
                      >
                        {/* Stage progress dots */}
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          {[...Array(7)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i <= idea.stage ? sc.dot : 'bg-neutral-200 dark:bg-neutral-700'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Title */}
                        <p className="text-sm flex-1 truncate">{idea.title}</p>

                        {/* Stage Badge */}
                        <span className={`flex-shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] border ${sc.bg} ${sc.text} ${sc.border}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                          {stageLabels[idea.stage]}
                          <span className="opacity-60">{idea.stage + 1}/7</span>
                        </span>

                        {/* Last Modified Time */}
                        <span className="flex items-center gap-0.5 text-neutral-400 dark:text-neutral-500 text-[10px] flex-shrink-0">
                          <Clock className="w-3 h-3" />
                          {getTimeAgo(idea.lastModified)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-300 dark:border-neutral-700 my-8" />

            {/* 아이디어 시작하기 Section */}
            <section>
              <h2 className="text-base font-bold mb-4">아이디어 시작하기</h2>
              <div className="flex gap-8">
                {/* 최근 수집 소스 */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-neutral-800 dark:text-neutral-200 mb-3">최근 수집 소스</p>
                  <div className="max-h-[400px] overflow-y-auto space-y-1.5 pr-1">
                    {sources.map((source) => {
                      const isPreview = previewSourceId === source.id;
                      const isUsed = source.usedInIdeas && source.usedInIdeas.length > 0;
                      return (
                        <button
                          key={source.id}
                          onClick={() => setPreviewSourceId(source.id)}
                          className={`w-full flex items-center h-[34px] px-4 py-1.5 rounded-lg text-left text-xs transition-all ${
                            isPreview
                              ? 'bg-white dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-600 text-black dark:text-white'
                              : isUsed
                                ? 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-black dark:text-white hover:border-neutral-300 dark:hover:border-neutral-700'
                                : 'bg-neutral-100/50 dark:bg-neutral-800/30 border border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60'
                          }`}
                        >
                          <span className="truncate flex-1">{source.title}</span>
                          {isUsed && (
                            <span className="flex-shrink-0 ml-2 text-[9px] text-neutral-400 dark:text-neutral-500">
                              {source.usedInIdeas?.length}개 아이디어
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 요약/정리 Panel */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-neutral-800 dark:text-neutral-200 mb-3">요약/정리</p>
                  {(() => {
                    const previewSource = sources.find(s => s.id === previewSourceId);
                    if (!previewSource) {
                      return (
                        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 text-center">
                          <p className="text-sm text-neutral-400 dark:text-neutral-500">왼쪽에서 소스를 선택하면 요약 내용이 표시됩니다.</p>
                        </div>
                      );
                    }
                    return (
                      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
                        {/* Summary content */}
                        <div className="p-5 space-y-5 max-h-[330px] overflow-y-auto">
                          {/* 핵심 요약 */}
                          <div>
                            <div className="inline-flex items-center px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-[10px] text-neutral-600 dark:text-neutral-400 mb-3">
                              핵심 요약
                            </div>
                            <div className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-2">
                              {previewSource.summary ? (
                                <p>{previewSource.summary}</p>
                              ) : (
                                <>
                                  <p>{previewSource.title}에 대한 핵심 내용을 요약합니다.</p>
                                  <p className="font-semibold mt-2">주요 포인트</p>
                                  <ul className="list-disc ml-4 space-y-1 text-neutral-600 dark:text-neutral-400">
                                    <li>해당 분야의 최신 동향과 기술적 접근법 분석</li>
                                    <li>실무 적용 가능한 핵심 인사이트 도출</li>
                                    <li>시장 영향력 및 비즈니스 가치 평가</li>
                                    <li>향후 발전 방향 및 기회 요소 정리</li>
                                  </ul>
                                </>
                              )}
                            </div>
                          </div>

                          {/* 키워드 */}
                          <div>
                            <div className="inline-flex items-center px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-[10px] text-neutral-600 dark:text-neutral-400 mb-3">
                              키워드
                            </div>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400">
                              {previewSource.keywords
                                ? previewSource.keywords.join(', ')
                                : previewSource.category || '분석 중...'}
                            </p>
                          </div>

                          {/* 원본 링크 */}
                          <div>
                            <div className="inline-flex items-center px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-[10px] text-neutral-600 dark:text-neutral-400 mb-3">
                              원본 링크
                            </div>
                            <a
                              href={previewSource.link || '#'}
                              className="text-xs text-blue-600 dark:text-blue-400 hover:underline break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {previewSource.link || '링크 정보 없음'}
                            </a>
                          </div>
                        </div>

                        {/* Bottom actions */}
                        <div className="flex items-center justify-between px-5 py-3 border-t border-neutral-200 dark:border-neutral-800">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors">
                              <ThumbsUp className="w-4 h-4 text-neutral-400" />
                            </button>
                            <button className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors">
                              <ThumbsDown className="w-4 h-4 text-neutral-400" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="h-[28px] px-4 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded text-[10px] text-neutral-700 dark:text-neutral-300 transition-colors">
                              소스 수집 관리
                            </button>
                            <button
                              onClick={handleCreateNew}
                              className="h-[28px] px-4 bg-neutral-800 dark:bg-white hover:bg-neutral-700 dark:hover:bg-neutral-200 text-white dark:text-black rounded text-[10px] transition-colors"
                            >
                              아이디어 생성
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        // Create/Edit View
        <>
          {/* Left Sidebar - Sources */}
          <aside
            className="relative flex flex-col bg-white dark:bg-neutral-900 overflow-hidden"
            style={{ width: leftSidebarOpen ? leftWidth : 0, minWidth: leftSidebarOpen ? LEFT_MIN : 0, transition: leftSidebarOpen ? 'none' : 'width 0.3s ease, min-width 0.3s ease' }}
          >
            {/* Left panel collapse button (inside) */}
            {leftSidebarOpen && (
              <button
                onClick={toggleLeftPanel}
                className="absolute top-3 right-3 z-10 p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                title="왼쪽 패널 접기"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            )}
            {/* Panel Role Header */}
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">소스 & 진행 관리</h3>
                  <p className="text-[10px] text-neutral-400 dark:text-neutral-500">분석할 자료를 추가하고 단계를 확인하세요</p>
                </div>
              </div>
              {/* Stage-specific guide banner */}
              {ideaStage === 0 && (
                <div className="mb-3 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-lg">
                  <p className="text-[10px] text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                    <Lightbulb className="w-3 h-3 flex-shrink-0" />
                    파일, URL, 프롬프트를 추가한 뒤 하단의 "AI 분석 시작" 버튼을 눌러주세요
                  </p>
                </div>
              )}
              {ideaStage >= 2 && ideaStage < 6 && (
                <div className="mb-3 px-3 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-lg">
                  <p className="text-[10px] text-green-700 dark:text-green-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 flex-shrink-0" />
                    소스 분석 완료! 중앙 패널에서 결과를 확인하고, AI 채팅으로 개선하세요
                  </p>
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {ideaStage === 0 && (
                <>
                  <h2 className="text-base font-bold mb-2">소스 선택</h2>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
                    파일, URL, 프롬프트를 입력하거나 기존 소스에서 선택하세요.
                  </p>

                  {/* Tab Switcher */}
                  <div className="flex mb-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-0.5">
                    <button
                      onClick={() => setSourceInputTab('upload')}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs transition-colors ${
                        sourceInputTab === 'upload'
                          ? 'bg-white dark:bg-neutral-700 shadow-sm font-medium'
                          : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                      }`}
                    >
                      <Upload className="w-3.5 h-3.5" />
                      새 소스 추가
                    </button>
                    <button
                      onClick={() => setSourceInputTab('existing')}
                      className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs transition-colors ${
                        sourceInputTab === 'existing'
                          ? 'bg-white dark:bg-neutral-700 shadow-sm font-medium'
                          : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                      }`}
                    >
                      <FolderOpen className="w-3.5 h-3.5" />
                      기존 소스
                      <span className="text-[10px] bg-neutral-200 dark:bg-neutral-600 px-1.5 py-0.5 rounded-full">
                        {sources.length}
                      </span>
                    </button>
                  </div>

                  {/* Tab Content: Upload */}
                  {sourceInputTab === 'upload' && (
                    <div className="space-y-4">
                      {/* File Upload Area */}
                      <div>
                        <label className="text-xs font-medium mb-2 block text-neutral-700 dark:text-neutral-300">파일 업로드</label>
                        <div
                          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                            isDragOver
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500'
                          }`}
                          onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                          onDragLeave={() => setIsDragOver(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setIsDragOver(false);
                            const files = Array.from(e.dataTransfer.files);
                            const newItems: UploadedItem[] = files.map(f => ({
                              id: Date.now().toString() + Math.random(),
                              type: 'file',
                              name: f.name,
                              size: `${(f.size / 1024).toFixed(1)}KB`,
                              selected: true
                            }));
                            setUploadedItems([...uploadedItems, ...newItems]);
                          }}
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.multiple = true;
                            input.accept = '.pdf,.docx,.doc,.txt,.csv,.xlsx,.pptx,.md';
                            input.onchange = (e) => {
                              const files = Array.from((e.target as HTMLInputElement).files || []);
                              const newItems: UploadedItem[] = files.map(f => ({
                                id: Date.now().toString() + Math.random(),
                                type: 'file',
                                name: f.name,
                                size: `${(f.size / 1024).toFixed(1)}KB`,
                                selected: true
                              }));
                              setUploadedItems([...uploadedItems, ...newItems]);
                            };
                            input.click();
                          }}
                        >
                          <Upload className="w-8 h-8 mx-auto mb-2 text-neutral-400" />
                          <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                            파일을 드래그 & 드롭하거나 클릭하세요
                          </p>
                          <p className="text-[10px] text-neutral-400 dark:text-neutral-500">
                            PDF, DOCX, TXT, CSV, XLSX, PPTX, MD
                          </p>
                        </div>
                      </div>

                      {/* URL Input */}
                      <div>
                        <label className="text-xs font-medium mb-2 block text-neutral-700 dark:text-neutral-300">URL 입력</label>
                        <div className="flex gap-2">
                          <div className="flex-1 flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2">
                            <Globe className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                            <input
                              type="url"
                              value={urlInput}
                              onChange={(e) => setUrlInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' && urlInput.trim()) {
                                  setUploadedItems([...uploadedItems, {
                                    id: Date.now().toString(),
                                    type: 'url',
                                    name: urlInput.trim(),
                                    selected: true
                                  }]);
                                  setUrlInput('');
                                }
                              }}
                              placeholder="https://example.com/article"
                              className="flex-1 text-xs bg-transparent focus:outline-none dark:text-white"
                            />
                          </div>
                          <button
                            onClick={() => {
                              if (urlInput.trim()) {
                                setUploadedItems([...uploadedItems, {
                                  id: Date.now().toString(),
                                  type: 'url',
                                  name: urlInput.trim(),
                                  selected: true
                                }]);
                                setUrlInput('');
                              }
                            }}
                            className="px-3 py-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg text-xs transition-colors"
                          >
                            추가
                          </button>
                        </div>
                      </div>

                      {/* Uploaded Items List */}
                      {uploadedItems.length > 0 && (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                              추가된 소스 ({selectedUploadedCount}/{uploadedItems.length})
                            </label>
                            <button
                              onClick={handleToggleAllUploaded}
                              className="text-[10px] text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                              {uploadedItems.every(u => u.selected) ? '전체 해제' : '전체 선택'}
                            </button>
                          </div>
                          <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                            {uploadedItems.map((item) => (
                              <div
                                key={item.id}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg group cursor-pointer transition-all ${
                                  item.selected
                                    ? 'bg-blue-50 dark:bg-blue-900/15 border border-blue-200 dark:border-blue-800/50'
                                    : 'bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700'
                                }`}
                                onClick={() => handleToggleUploadedItem(item.id)}
                              >
                                <div className={`w-3.5 h-3.5 rounded border-[1.5px] flex items-center justify-center flex-shrink-0 transition-colors ${
                                  item.selected
                                    ? 'bg-blue-500 border-blue-500'
                                    : 'border-neutral-300 dark:border-neutral-600'
                                }`}>
                                  {item.selected && <Check className="w-2.5 h-2.5 text-white" />}
                                </div>
                                {item.type === 'file' ? (
                                  <FileText className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                                ) : (
                                  <Globe className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                                )}
                                <span className={`flex-1 text-xs truncate transition-colors ${
                                  item.selected ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-400'
                                }`}>{item.name}</span>
                                {item.size && (
                                  <span className="text-[10px] text-neutral-400 flex-shrink-0">{item.size}</span>
                                )}
                                <button
                                  onClick={(e) => { e.stopPropagation(); handleDeleteUploadedItem(item.id); }}
                                  className="opacity-0 group-hover:opacity-100 p-0.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-opacity"
                                >
                                  <Trash2 className="w-3.5 h-3.5 text-red-400" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Prompt Input */}
                      <div>
                        <label className="text-xs font-medium mb-2 block text-neutral-700 dark:text-neutral-300">프롬프트 / 컨텍스트</label>
                        <textarea
                          value={promptInput}
                          onChange={(e) => setPromptInput(e.target.value)}
                          placeholder="분석 방향이나 관심 분야를 자유롭게 입력하세요. 예: 'AI 기반 B2B SaaS 사업 기회를 중심으로 분석해줘'"
                          className="w-full min-h-[80px] p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 bg-white dark:bg-neutral-800 text-xs resize-none dark:text-white"
                        />
                        {promptInput.trim() && (
                          <button
                            onClick={handleAddPromptSource}
                            className="mt-2 flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 rounded-lg text-xs transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                            소스로 추가
                          </button>
                        )}
                      </div>

                      {/* Saved Prompt Sources List */}
                      {promptSources.length > 0 && (
                        <div>
                          <label className="text-xs font-medium mb-2 block text-neutral-700 dark:text-neutral-300">
                            저장된 프롬프트 ({promptSources.length})
                          </label>
                          <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                            {promptSources.map((ps) => (
                              <div
                                key={ps.id}
                                className={`flex items-start gap-2 px-3 py-2 rounded-lg group transition-all ${
                                  ps.selected
                                    ? 'bg-purple-50 dark:bg-purple-900/20 border border-purple-400 dark:border-purple-700'
                                    : 'bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700'
                                }`}
                              >
                                <button
                                  onClick={() => handleTogglePromptSource(ps.id)}
                                  className="flex-shrink-0 mt-0.5"
                                >
                                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                                    ps.selected
                                      ? 'bg-purple-500 border-purple-500'
                                      : 'border-neutral-300 dark:border-neutral-600'
                                  }`}>
                                    {ps.selected && <Check className="w-2.5 h-2.5 text-white" />}
                                  </div>
                                </button>
                                <span className="flex-1 text-xs truncate text-neutral-700 dark:text-neutral-300">{ps.content}</span>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                  <button
                                    onClick={() => handleStartEditPrompt(ps.id, ps.content)}
                                    className="p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded"
                                  >
                                    <Pencil className="w-3 h-3 text-neutral-400" />
                                  </button>
                                  <button
                                    onClick={() => handleDeletePromptSource(ps.id)}
                                    className="p-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded"
                                  >
                                    <XCircle className="w-3 h-3 text-neutral-400" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tab Content: Existing Sources */}
                  {sourceInputTab === 'existing' && (
                    <div className="space-y-3">
                      {/* Search Bar */}
                      <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2">
                        <Search className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                        <input
                          type="text"
                          value={sourceSearchQuery}
                          onChange={(e) => setSourceSearchQuery(e.target.value)}
                          placeholder="소스 검색..."
                          className="flex-1 text-xs bg-transparent focus:outline-none dark:text-white"
                        />
                        {sourceSearchQuery && (
                          <button onClick={() => setSourceSearchQuery('')} className="p-0.5">
                            <X className="w-3 h-3 text-neutral-400" />
                          </button>
                        )}
                      </div>

                      {/* Category Filter */}
                      <div className="flex gap-1.5 flex-wrap">
                        {sourceCategories.map((cat) => {
                          const count = cat === '전체' 
                            ? sources.length 
                            : sources.filter(s => s.category === cat).length;
                          return (
                            <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] transition-colors ${
                                selectedCategory === cat
                                  ? 'bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black'
                                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                              }`}
                            >
                              <Tag className="w-2.5 h-2.5" />
                              {cat}
                              <span className="opacity-60">({count})</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Grouped Sources */}
                      <div className="space-y-4">
                        {(() => {
                          const filteredSources = sources.filter(s => {
                            const matchesSearch = !sourceSearchQuery || 
                              s.title.toLowerCase().includes(sourceSearchQuery.toLowerCase()) ||
                              (s.keywords && s.keywords.some(k => k.toLowerCase().includes(sourceSearchQuery.toLowerCase())));
                            const matchesCategory = selectedCategory === '전체' || s.category === selectedCategory;
                            return matchesSearch && matchesCategory;
                          });

                          if (filteredSources.length === 0) {
                            return (
                              <div className="text-center py-6 text-neutral-400 dark:text-neutral-500">
                                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                <p className="text-xs">검색 결과가 없습니다</p>
                              </div>
                            );
                          }

                          // Group by category
                          const grouped = filteredSources.reduce<Record<string, Source[]>>((acc, s) => {
                            const cat = s.category || '미분류';
                            if (!acc[cat]) acc[cat] = [];
                            acc[cat].push(s);
                            return acc;
                          }, {});

                          return Object.entries(grouped).map(([category, categorySources]) => (
                            <div key={category}>
                              <div className="flex items-center gap-2 mb-2">
                                <Tag className="w-3 h-3 text-neutral-400" />
                                <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                                  {category}
                                </span>
                                <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
                                <span className="text-[10px] text-neutral-400">
                                  {categorySources.length}
                                </span>
                              </div>
                              <div className="space-y-1.5">
                                {categorySources.map((source) => (
                                  <button
                                    key={source.id}
                                    onClick={() => handleToggleSource(source.id)}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all ${
                                      source.selected
                                        ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-400 dark:border-blue-700 ring-1 ring-blue-400/30'
                                        : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-750 hover:border-neutral-300 dark:hover:border-neutral-600'
                                    }`}
                                  >
                                    <div className="flex items-start gap-2.5">
                                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                                        source.selected
                                          ? 'bg-blue-500 border-blue-500'
                                          : 'border-neutral-300 dark:border-neutral-600'
                                      }`}>
                                        {source.selected && (
                                          <CheckCircle className="w-3 h-3 text-white" />
                                        )}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <span className="block truncate">{source.title}</span>
                                        {source.usedInIdeas && source.usedInIdeas.length > 0 && (
                                          <span className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5 block">
                                            {source.usedInIdeas.length}개 아이디어에 사용됨
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ));
                        })()}
                      </div>
                    </div>
                  )}

                  {/* Summary Bar & Start Button */}
                  {(selectedSourcesCount > 0 || selectedUploadedCount > 0 || selectedPromptCount > 0 || promptInput.trim()) && (
                    <div className="mt-5 space-y-3">
                      {/* Summary */}
                      <div className="flex flex-wrap gap-2 text-[10px]">
                        {selectedUploadedCount > 0 && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded">
                            <FileText className="w-3 h-3" />
                            파일/URL {selectedUploadedCount}개
                          </span>
                        )}
                        {selectedSourcesCount > 0 && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded">
                            <FolderOpen className="w-3 h-3" />
                            기존 소스 {selectedSourcesCount}개
                          </span>
                        )}
                        {selectedPromptCount > 0 && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded">
                            <MessageSquare className="w-3 h-3" />
                            프롬프트 {selectedPromptCount}개
                          </span>
                        )}
                        {promptInput.trim() && selectedPromptCount === 0 && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded">
                            <MessageSquare className="w-3 h-3" />
                            미저장 프롬프트
                          </span>
                        )}
                      </div>

                      <button
                        onClick={handleStartAnalysis}
                        className="w-full bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-lg text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center justify-center gap-2 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {totalSelectedCount}개 소스로 AI 분석 시작
                      </button>
                    </div>
                  )}
                </>
              )}

              {ideaStage >= 1 && (
                <div className="space-y-4">

                  {/* Collapsible Add Source Panel */}
                  {showAddSourcePanel && (
                    <div className="mb-4 bg-white dark:bg-neutral-900 border border-blue-200 dark:border-blue-800/50 rounded-lg overflow-hidden">
                      <div className="px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-blue-50 dark:bg-blue-900/15">
                        <span className="text-[10px] font-medium text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                          <Plus className="w-3 h-3" />
                          분석에 사용할 소스를 추가하세요
                        </span>
                      </div>

                      <div className="p-3">
                        {/* Mini Tab Switcher */}
                        <div className="flex mb-3 bg-neutral-100 dark:bg-neutral-800 rounded-md p-0.5">
                          <button
                            onClick={() => setSourceInputTab('upload')}
                            className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-[10px] transition-colors ${
                              sourceInputTab === 'upload'
                                ? 'bg-white dark:bg-neutral-700 shadow-sm font-medium'
                                : 'text-neutral-500 dark:text-neutral-400'
                            }`}
                          >
                            <Upload className="w-3 h-3" />
                            파일/URL
                          </button>
                          <button
                            onClick={() => setSourceInputTab('existing')}
                            className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-[10px] transition-colors ${
                              sourceInputTab === 'existing'
                                ? 'bg-white dark:bg-neutral-700 shadow-sm font-medium'
                                : 'text-neutral-500 dark:text-neutral-400'
                            }`}
                          >
                            <FolderOpen className="w-3 h-3" />
                            기존 소스
                            <span className="text-[9px] bg-neutral-200 dark:bg-neutral-600 px-1 py-0.5 rounded-full">{sources.filter(s => !s.selected).length}</span>
                          </button>
                        </div>

                        {sourceInputTab === 'upload' && (
                          <div className="space-y-3">
                            {/* Compact File Upload */}
                            <div
                              className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${
                                isDragOver
                                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                  : 'border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500'
                              }`}
                              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                              onDragLeave={() => setIsDragOver(false)}
                              onDrop={(e) => {
                                e.preventDefault();
                                setIsDragOver(false);
                                const files = Array.from(e.dataTransfer.files);
                                const newItems: UploadedItem[] = files.map(f => ({
                                  id: Date.now().toString() + Math.random(),
                                  type: 'file',
                                  name: f.name,
                                  size: `${(f.size / 1024).toFixed(1)}KB`,
                                  selected: true
                                }));
                                setUploadedItems([...uploadedItems, ...newItems]);
                              }}
                              onClick={() => {
                                const input = document.createElement('input');
                                input.type = 'file';
                                input.multiple = true;
                                input.accept = '.pdf,.docx,.doc,.txt,.csv,.xlsx,.pptx,.md';
                                input.onchange = (e) => {
                                  const files = Array.from((e.target as HTMLInputElement).files || []);
                                  const newItems: UploadedItem[] = files.map(f => ({
                                    id: Date.now().toString() + Math.random(),
                                    type: 'file',
                                    name: f.name,
                                    size: `${(f.size / 1024).toFixed(1)}KB`,
                                    selected: true
                                  }));
                                  setUploadedItems([...uploadedItems, ...newItems]);
                                };
                                input.click();
                              }}
                            >
                              <Upload className="w-5 h-5 mx-auto mb-1.5 text-neutral-400" />
                              <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                                파일을 드래그하거나 클릭 · PDF, DOCX, TXT, CSV 등
                              </p>
                            </div>

                            {/* URL Input */}
                            <div className="flex gap-1.5">
                              <div className="flex-1 flex items-center gap-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-2.5 py-1.5">
                                <Globe className="w-3 h-3 text-neutral-400 flex-shrink-0" />
                                <input
                                  type="url"
                                  value={urlInput}
                                  onChange={(e) => setUrlInput(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && urlInput.trim()) {
                                      setUploadedItems([...uploadedItems, {
                                        id: Date.now().toString(),
                                        type: 'url',
                                        name: urlInput.trim(),
                                        selected: true
                                      }]);
                                      setUrlInput('');
                                    }
                                  }}
                                  placeholder="URL을 입력하고 Enter"
                                  className="flex-1 text-[11px] bg-transparent focus:outline-none dark:text-white"
                                />
                              </div>
                              <button
                                onClick={() => {
                                  if (urlInput.trim()) {
                                    setUploadedItems([...uploadedItems, {
                                      id: Date.now().toString(),
                                      type: 'url',
                                      name: urlInput.trim(),
                                      selected: true
                                    }]);
                                    setUrlInput('');
                                  }
                                }}
                                className="px-2.5 py-1.5 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg text-[10px] transition-colors"
                              >
                                추가
                              </button>
                            </div>

                            {/* Compact Prompt Input */}
                            <div>
                              <textarea
                                value={promptInput}
                                onChange={(e) => setPromptInput(e.target.value)}
                                placeholder="프롬프트 / 컨텍스트를 자유롭게 입력하세요"
                                className="w-full min-h-[50px] p-2.5 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 bg-white dark:bg-neutral-800 text-[11px] resize-none dark:text-white"
                              />
                              {promptInput.trim() && (
                                <button
                                  onClick={handleAddPromptSource}
                                  className="mt-1.5 flex items-center gap-1 px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 rounded-lg text-[10px] transition-colors"
                                >
                                  <Plus className="w-2.5 h-2.5" />
                                  소스로 추가
                                </button>
                              )}
                            </div>
                          </div>
                        )}

                        {sourceInputTab === 'existing' && (
                          <div className="space-y-2">
                            {/* Quick search */}
                            <div className="flex items-center gap-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-2.5 py-1.5">
                              <Search className="w-3 h-3 text-neutral-400 flex-shrink-0" />
                              <input
                                type="text"
                                value={sourceSearchQuery}
                                onChange={(e) => setSourceSearchQuery(e.target.value)}
                                placeholder="소스 검색..."
                                className="flex-1 text-[11px] bg-transparent focus:outline-none dark:text-white"
                              />
                              {sourceSearchQuery && (
                                <button onClick={() => setSourceSearchQuery('')} className="p-0.5">
                                  <X className="w-2.5 h-2.5 text-neutral-400" />
                                </button>
                              )}
                            </div>

                            {/* Unselected sources list */}
                            <div className="max-h-[200px] overflow-y-auto space-y-1">
                              {(() => {
                                const unselectedSources = sources.filter(s => {
                                  if (s.selected) return false;
                                  const matchesSearch = !sourceSearchQuery ||
                                    s.title.toLowerCase().includes(sourceSearchQuery.toLowerCase()) ||
                                    (s.keywords && s.keywords.some(k => k.toLowerCase().includes(sourceSearchQuery.toLowerCase())));
                                  return matchesSearch;
                                });

                                if (unselectedSources.length === 0) {
                                  return (
                                    <div className="text-center py-4 text-neutral-400 dark:text-neutral-500">
                                      <p className="text-[10px]">{sourceSearchQuery ? '검색 결과가 없습니다' : '모든 소스가 선택되었습니다'}</p>
                                    </div>
                                  );
                                }

                                return unselectedSources.map((source) => (
                                  <button
                                    key={source.id}
                                    onClick={() => handleToggleSource(source.id)}
                                    className="w-full text-left flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-750 hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
                                  >
                                    <div className="w-3.5 h-3.5 rounded border-[1.5px] border-neutral-300 dark:border-neutral-600 flex items-center justify-center flex-shrink-0 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors">
                                      <Plus className="w-2 h-2 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                                    </div>
                                    <span className="flex-1 truncate text-neutral-700 dark:text-neutral-300">{source.title}</span>
                                    {source.category && (
                                      <span className="text-[9px] px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-400 rounded flex-shrink-0">
                                        {source.category}
                                      </span>
                                    )}
                                  </button>
                                ));
                              })()}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg mb-4 overflow-hidden">
                    {/* Total count header */}
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                      <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
                        전체 {totalSelectedCount}/{uploadedItems.length + sources.filter(s => s.selected || s.usedInIdeas?.length).length + promptSources.length}개 선택됨
                      </span>
                    </div>

                    <div className="p-3 space-y-3 max-h-[420px] overflow-y-auto">
                      {/* Uploaded items with checkboxes */}
                      {uploadedItems.length > 0 && (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                              <Upload className="w-3 h-3" />
                              업로드된 소스 ({selectedUploadedCount}/{uploadedItems.length})
                            </span>
                            <button
                              onClick={handleToggleAllUploaded}
                              className="text-[10px] text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                              {uploadedItems.every(u => u.selected) ? '전체 해제' : '전체 선택'}
                            </button>
                          </div>
                          <div className="space-y-1">
                            {uploadedItems.map((item) => (
                              <div
                                key={item.id}
                                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg group transition-all cursor-pointer ${
                                  item.selected
                                    ? 'bg-blue-50 dark:bg-blue-900/15 border border-blue-200 dark:border-blue-800/50'
                                    : 'bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700'
                                }`}
                                onClick={() => handleToggleUploadedItem(item.id)}
                              >
                                <div className={`w-3.5 h-3.5 rounded border-[1.5px] flex items-center justify-center flex-shrink-0 transition-colors ${
                                  item.selected
                                    ? 'bg-blue-500 border-blue-500'
                                    : 'border-neutral-300 dark:border-neutral-600'
                                }`}>
                                  {item.selected && <Check className="w-2.5 h-2.5 text-white" />}
                                </div>
                                {item.type === 'file' ? (
                                  <FileText className="w-3 h-3 text-blue-500 flex-shrink-0" />
                                ) : (
                                  <Globe className="w-3 h-3 text-green-500 flex-shrink-0" />
                                )}
                                <span className={`flex-1 text-[11px] truncate transition-colors ${
                                  item.selected ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-400'
                                }`}>
                                  {item.name.length > 35 ? item.name.slice(0, 35) + '...' : item.name}
                                </span>
                                {item.size && (
                                  <span className="text-[9px] text-neutral-400 flex-shrink-0">{item.size}</span>
                                )}
                                
                                {/* More menu */}
                                <div className="relative opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenSourceMenuId(openSourceMenuId === item.id ? null : item.id);
                                    }}
                                    className="p-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                                  >
                                    <MoreVertical className="w-3.5 h-3.5 text-neutral-400" />
                                  </button>
                                  
                                  {openSourceMenuId === item.id && (
                                    <>
                                      <div className="fixed inset-0 z-10" onClick={() => setOpenSourceMenuId(null)} />
                                      <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg py-1 z-20">
                                        {item.type === 'url' && (
                                          <a
                                            href={item.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-1.5 text-[10px] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                                            onClick={() => setOpenSourceMenuId(null)}
                                          >
                                            <ExternalLink className="w-3 h-3" />
                                            링크 이동
                                          </a>
                                        )}
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteUploadedItem(item.id);
                                            setOpenSourceMenuId(null);
                                          }}
                                          className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                        >
                                          <Trash2 className="w-3 h-3" />
                                          삭제
                                        </button>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Existing sources with checkboxes */}
                      {sources.filter(s => s.selected).length > 0 && (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                              <FolderOpen className="w-3 h-3" />
                              기존 소스 ({selectedSourcesCount})
                            </span>
                            <button
                              onClick={() => {
                                const selectedIds = sources.filter(s => s.selected).map(s => s.id);
                                setSources(sources.map(s => selectedIds.includes(s.id) ? { ...s, selected: false } : s));
                              }}
                              className="text-[10px] text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                              전체 해제
                            </button>
                          </div>
                          <div className="space-y-1">
                            {sources.filter(s => s.selected).map((src) => (
                              <div
                                key={src.id}
                                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg group transition-all cursor-pointer bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800/50"
                                onClick={() => handleToggleSource(src.id)}
                              >
                                <div className="w-3.5 h-3.5 rounded border-[1.5px] flex items-center justify-center flex-shrink-0 transition-colors bg-green-500 border-green-500">
                                  <Check className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span className="flex-1 text-[11px] truncate text-neutral-800 dark:text-neutral-200">
                                  {src.title.length > 40 ? src.title.slice(0, 40) + '...' : src.title}
                                </span>
                                {src.category && (
                                  <span className="text-[9px] px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 rounded flex-shrink-0">
                                    {src.category}
                                  </span>
                                )}
                                
                                {/* More menu */}
                                <div className="relative opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenSourceMenuId(openSourceMenuId === src.id ? null : src.id);
                                    }}
                                    className="p-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                                  >
                                    <MoreVertical className="w-3.5 h-3.5 text-neutral-400" />
                                  </button>
                                  
                                  {openSourceMenuId === src.id && (
                                    <>
                                      <div className="fixed inset-0 z-10" onClick={() => setOpenSourceMenuId(null)} />
                                      <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg py-1 z-20">
                                        {src.link && (
                                          <a
                                            href={src.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-1.5 text-[10px] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                                            onClick={() => setOpenSourceMenuId(null)}
                                          >
                                            <ExternalLink className="w-3 h-3" />
                                            링크 이동
                                          </a>
                                        )}
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggleSource(src.id);
                                            setOpenSourceMenuId(null);
                                          }}
                                          className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                        >
                                          <Trash2 className="w-3 h-3" />
                                          삭제
                                        </button>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Prompt sources with checkboxes */}
                      {promptSources.length > 0 && (
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                              <MessageSquare className="w-3 h-3" />
                              프롬프트 소스 ({selectedPromptCount}/{promptSources.length})
                            </span>
                            <button
                              onClick={handleToggleAllPromptSources}
                              className="text-[10px] text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                            >
                              {promptSources.every(p => p.selected) ? '전체 해제' : '전체 선택'}
                            </button>
                          </div>
                          <div className="space-y-1">
                            {promptSources.map((ps) => (
                              <div
                                key={ps.id}
                                className={`rounded-lg group transition-all border ${
                                  ps.selected
                                    ? 'bg-purple-50 dark:bg-purple-900/15 border-purple-200 dark:border-purple-800/50'
                                    : 'bg-neutral-50 dark:bg-neutral-800/50 border-transparent hover:border-neutral-200 dark:hover:border-neutral-700'
                                }`}
                              >
                                {editingPromptId === ps.id ? (
                                  <div className="px-2.5 py-2">
                                    <textarea
                                      value={editingPromptContent}
                                      onChange={(e) => setEditingPromptContent(e.target.value)}
                                      className="w-full min-h-[60px] p-2 border border-purple-300 dark:border-purple-700 rounded bg-white dark:bg-neutral-800 text-[11px] resize-none focus:outline-none focus:border-purple-400 dark:focus:border-purple-600 dark:text-white"
                                      autoFocus
                                    />
                                    <div className="flex justify-end gap-1.5 mt-1.5">
                                      <button
                                        onClick={() => { setEditingPromptId(null); setEditingPromptContent(''); }}
                                        className="px-2 py-1 text-[10px] text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 rounded transition-colors"
                                      >
                                        취소
                                      </button>
                                      <button
                                        onClick={() => handleSaveEditPrompt(ps.id)}
                                        className="px-2 py-1 text-[10px] bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors flex items-center gap-1"
                                      >
                                        <Check className="w-2.5 h-2.5" />
                                        저장
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className="flex items-start gap-2.5 px-2.5 py-2 cursor-pointer"
                                    onClick={() => handleTogglePromptSource(ps.id)}
                                  >
                                    <div className={`w-3.5 h-3.5 rounded border-[1.5px] flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                                      ps.selected
                                        ? 'bg-purple-500 border-purple-500'
                                        : 'border-neutral-300 dark:border-neutral-600'
                                    }`}>
                                      {ps.selected && <Check className="w-2.5 h-2.5 text-white" />}
                                    </div>
                                    <Sparkles className="w-3 h-3 text-purple-400 flex-shrink-0 mt-0.5" />
                                    <p className={`flex-1 text-[11px] line-clamp-2 transition-colors ${
                                      ps.selected ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-400'
                                    }`}>
                                      {ps.content}
                                    </p>
                                    
                                    {/* More menu */}
                                    <div className="relative opacity-0 group-hover:opacity-100 transition-opacity">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setOpenSourceMenuId(openSourceMenuId === ps.id ? null : ps.id);
                                        }}
                                        className="p-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                                      >
                                        <MoreVertical className="w-3.5 h-3.5 text-neutral-400" />
                                      </button>
                                      
                                      {openSourceMenuId === ps.id && (
                                        <>
                                          <div className="fixed inset-0 z-10" onClick={() => setOpenSourceMenuId(null)} />
                                          <div className="absolute right-0 top-full mt-1 w-36 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg py-1 z-20">
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleStartEditPrompt(ps.id, ps.content);
                                                setOpenSourceMenuId(null);
                                              }}
                                              className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                                            >
                                              <Pencil className="w-3 h-3" />
                                              수정
                                            </button>
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeletePromptSource(ps.id);
                                                setOpenSourceMenuId(null);
                                              }}
                                              className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                            >
                                              <Trash2 className="w-3 h-3" />
                                              삭제
                                            </button>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Empty state */}
                      {uploadedItems.length === 0 && sources.filter(s => s.selected).length === 0 && promptSources.length === 0 && (
                        <div className="text-center py-6 text-neutral-400 dark:text-neutral-500">
                          <FolderOpen className="w-6 h-6 mx-auto mb-2 opacity-50" />
                          <p className="text-[11px]">선택된 소스가 없습니다</p>
                        </div>
                      )}
                    </div>

                    {/* Source detail - shown when a source has summary */}
                    {selectedSource?.summary && (
                      <div className="border-t border-neutral-200 dark:border-neutral-800 px-4 py-3">
                        <div className="text-xs space-y-2.5 text-neutral-700 dark:text-neutral-300">
                          <p className="text-[11px]">{selectedSource.summary}</p>

                          {selectedSource.keywords && (
                            <div>
                              <span className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded text-[9px] inline-block mb-1.5">키워드</span>
                              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{selectedSource.keywords.join(', ')}</p>
                            </div>
                          )}

                          {selectedSource.link && (
                            <div>
                              <span className="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded text-[9px] inline-block mb-1.5">원본 링크</span>
                              <a href={selectedSource.link} className="text-blue-600 dark:text-blue-400 hover:underline block break-all text-[10px]">
                                {selectedSource.link}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Left Resize Handle */}
          {leftSidebarOpen && (
            <div
              onMouseDown={handleLeftResizeStart}
              className="w-[3px] hover:w-[5px] cursor-col-resize bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-400 dark:hover:bg-blue-500 transition-all duration-150 flex-shrink-0 relative group"
              title="드래그하여 넓이 조정"
            >
              <div className="absolute inset-y-0 -left-1 -right-1" />
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical className="w-3 h-3 text-blue-500 dark:text-blue-400" />
              </div>
            </div>
          )}

          {/* Collapsed Left Panel Opener */}
          {!leftSidebarOpen && (
            <div className="flex flex-col items-center py-3 px-1 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 gap-3">
              <button
                onClick={toggleLeftPanel}
                className="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                title="소스 패널 열기"
              >
                <PanelLeftOpen className="w-4 h-4" />
              </button>
              <span className="text-[9px] text-neutral-400 dark:text-neutral-500 [writing-mode:vertical-lr] tracking-widest">소스</span>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 flex flex-col bg-neutral-50 dark:bg-neutral-950 min-w-0">
            {/* Top Bar */}
            <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={ideaTitle}
                  onChange={(e) => setIdeaTitle(e.target.value)}
                  placeholder="아이디어 제목을 입력하세요"
                  className="text-base font-medium bg-transparent border-none focus:outline-none flex-1"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('list')}
                  className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex items-center gap-2 px-3 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded text-sm"
                >
                  <Share2 className="w-4 h-4" />
                  공유
                </button>
                {ideaStage >= 4 && (
                  <button
                    onClick={() => setShowProposalModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600 text-white rounded text-sm transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    사업 제안하기
                  </button>
                )}
                {ideaStage >= 2 && (
                  <button
                    onClick={handleSaveIdea}
                    className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200"
                  >
                    저장
                  </button>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8">
              {ideaStage === 0 && (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="max-w-lg w-full">
                    {/* Onboarding Hero */}
                    <div className="text-center mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-xl font-semibold mb-2">AI 기반 아이디어 분석</h2>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        소스를 추가하면 AI가 다양한 관점으로 분석하고 인사이트를 도출합니다
                      </p>
                    </div>

                    {/* 3-Step Guide Cards */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      <div className={`relative p-4 rounded-xl border transition-all ${totalSelectedCount > 0 ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700' : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800'}`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-2.5 text-xs font-semibold ${totalSelectedCount > 0 ? 'bg-blue-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'}`}>1</div>
                        <h4 className="text-xs font-semibold mb-1">소스 추가</h4>
                        <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          왼쪽 패널에서 파일, URL, 프롬프트를 추가하세요
                        </p>
                        {totalSelectedCount > 0 && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          </div>
                        )}
                      </div>
                      <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <div className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center mb-2.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">2</div>
                        <h4 className="text-xs font-semibold mb-1">AI 분석</h4>
                        <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          SWOT, 시장성, 가치제안 등 다각도 분석 수행
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <div className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center mb-2.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">3</div>
                        <h4 className="text-xs font-semibold mb-1">채팅으로 개선</h4>
                        <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          오른쪽 AI 채팅으로 분석을 심화·수정하세요
                        </p>
                      </div>
                    </div>

                    {/* Selected Sources Summary */}
                    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4">
                      <h4 className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-3">현재 선택된 소스</h4>
                    <div className="flex gap-2 justify-center flex-wrap">
                      {selectedUploadedCount > 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-xs">
                          <FileText className="w-3.5 h-3.5" />
                          {selectedUploadedCount}개 파일/URL
                        </div>
                      )}
                      {selectedSourcesCount > 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-xs">
                          <FolderOpen className="w-3.5 h-3.5" />
                          {selectedSourcesCount}개 기존 소스
                        </div>
                      )}
                      {selectedPromptCount > 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg text-xs">
                          <MessageSquare className="w-3.5 h-3.5" />
                          프롬프트 {selectedPromptCount}개
                        </div>
                      )}
                      {promptInput.trim() && selectedPromptCount === 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg text-xs">
                          <MessageSquare className="w-3.5 h-3.5" />
                          미저장 프롬프트
                        </div>
                      )}
                      {totalSelectedCount === 0 && !promptInput.trim() && (
                        <div className="flex flex-col items-center gap-2 py-2 w-full">
                          <div className="flex items-center gap-1.5 text-neutral-400 dark:text-neutral-500">
                            <PanelLeftOpen className="w-4 h-4" />
                            <span className="text-xs">왼쪽 패널에서 소스를 추가해주세요</span>
                          </div>
                        </div>
                      )}
                    </div>
                    </div>
                  </div>
                </div>
              )}

              {ideaStage === 1 && isAnalyzing && (
                <div className="flex flex-col items-center justify-center h-full">
                  <Loader2 className="w-16 h-16 text-blue-500 animate-spin mb-4" />
                  <h2 className="text-xl font-semibold mb-2">AI가 소스를 분석하고 있습니다</h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    선택하신 소스를 바탕으로 아이디어를 생성하고 있습니다...
                  </p>
                  <div className="flex gap-2 flex-wrap justify-center max-w-md">
                    {analysisMethods.filter(m => m.isPreselected).map(m => (
                      <span key={m.id} className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs">
                        <span>{m.icon}</span>
                        {m.shortName}
                        <Loader2 className="w-3 h-3 animate-spin text-blue-500" />
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {ideaStage >= 2 && (
                <div className="max-w-5xl mx-auto">
                  {/* Panel Role Guide */}
                  <div className="flex items-center gap-3 mb-4 px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">AI 분석 결과</h3>
                        <p className="text-[10px] text-neutral-400 dark:text-neutral-500">소스 기반 자동 분석 · 직접 편집 가능 · AI 채팅으로 개선</p>
                      </div>
                    </div>
                  </div>

                  {/* Idea Summary Card */}
                  <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 mb-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-blue-500" />
                          <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider">AI 생성 요약</span>
                          <span className="text-[9px] px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800/50">{totalSelectedCount}개 소스 기반</span>
                        </div>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{ideaContent}</p>
                      </div>
                      {ideaStage < 6 && (
                        <button
                          onClick={handleNextStage}
                          className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 ml-4 flex-shrink-0"
                        >
                          다음 단계
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Pencil className="w-3 h-3 text-neutral-400" />
                        <span className="text-[10px] text-neutral-400">직접 수정하거나, 오른쪽 AI 어시스턴트에게 개선을 요청하세요</span>
                      </div>
                      <textarea
                        value={ideaContent}
                        onChange={(e) => setIdeaContent(e.target.value)}
                        className="w-full min-h-[60px] p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400/40 focus:border-blue-400 bg-neutral-50 dark:bg-neutral-800 text-xs resize-none transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                        placeholder="AI가 생성한 요약을 검토하고 자유롭게 수정할 수 있습니다. 더 깊은 분석이나 관점 변경은 오른쪽 AI 채팅에서 요청해보세요."
                      />
                    </div>
                  </div>

                  {/* Analysis Methods Navigation */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-neutral-500" />
                        분석 방법론
                        <span className="text-[10px] text-neutral-400 font-normal">
                          {analysisMethods.length}개 적용됨
                        </span>
                      </h3>
                      <div className="relative">
                        <button
                          onClick={() => setShowAddMethodDropdown(!showAddMethodDropdown)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          방법론 추가
                        </button>

                        {/* Add Method Dropdown */}
                        {showAddMethodDropdown && (
                          <div className="absolute right-0 top-full mt-2 w-[340px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl z-20 overflow-hidden">
                            <div className="p-3 border-b border-neutral-100 dark:border-neutral-800">
                              <h4 className="text-xs font-semibold mb-1">분석 방법론 추가</h4>
                              <p className="text-[10px] text-neutral-500 dark:text-neutral-400">추가 방법론을 선택하면 AI가 즉시 분석을 시작합니다.</p>
                            </div>
                            <div className="max-h-[280px] overflow-y-auto">
                              {availableMethods
                                .filter(am => !analysisMethods.some(m => m.id === am.id))
                                .map(method => (
                                  <button
                                    key={method.id}
                                    onClick={() => handleAddMethod(method.id)}
                                    className="w-full text-left px-3 py-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-start gap-3 border-b border-neutral-50 dark:border-neutral-800 last:border-0"
                                  >
                                    <span className="text-base mt-0.5">{method.icon}</span>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs font-medium">{method.name}</p>
                                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">{method.description}</p>
                                    </div>
                                    <Play className="w-3.5 h-3.5 text-neutral-400 mt-1 flex-shrink-0" />
                                  </button>
                                ))}
                              {availableMethods.filter(am => !analysisMethods.some(m => m.id === am.id)).length === 0 && (
                                <div className="px-3 py-4 text-center text-[10px] text-neutral-400">
                                  모든 기본 방법론이 추가되었습니다
                                </div>
                              )}
                            </div>
                            <div className="p-2 border-t border-neutral-100 dark:border-neutral-800">
                              <button
                                onClick={() => { setShowAddMethodDropdown(false); setShowCustomMethodModal(true); }}
                                className="w-full flex items-center gap-2 px-3 py-2 text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              >
                                <PenTool className="w-3.5 h-3.5" />
                                나만의 관점/방법론 만들기
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Method Pills */}
                    <div className="flex gap-2 flex-wrap">
                      {analysisMethods.map(method => (
                        <button
                          key={method.id}
                          onClick={() => setActiveMethodId(activeMethodId === method.id ? null : method.id)}
                          className={`group flex items-center gap-1.5 pl-2.5 pr-1.5 py-1.5 rounded-lg text-xs transition-all border ${
                            activeMethodId === method.id
                              ? 'bg-neutral-900 dark:bg-white text-white dark:text-black border-transparent'
                              : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
                          }`}
                        >
                          <span>{method.icon}</span>
                          <span className="font-medium">{method.shortName}</span>
                          {method.isAnalyzing && (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          )}
                          {method.isCustom && (
                            <span className={`text-[8px] px-1 py-0.5 rounded ${
                              activeMethodId === method.id
                                ? 'bg-white/20 dark:bg-black/20'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            }`}>커스텀</span>
                          )}
                          {!method.isPreselected && (
                            <button
                              onClick={(e) => { e.stopPropagation(); handleRemoveMethod(method.id); }}
                              className={`p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                                activeMethodId === method.id
                                  ? 'hover:bg-white/20 dark:hover:bg-black/20'
                                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'
                              }`}
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Analysis Content - Show All or Focused */}
                  {activeMethodId ? (
                    // Single focused method view
                    (() => {
                      const method = analysisMethods.find(m => m.id === activeMethodId);
                      if (!method) return null;
                      return (
                        <div className="mb-5">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{method.icon}</span>
                              <div>
                                <h3 className="text-sm font-semibold">{method.name}</h3>
                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">{method.description}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => setActiveMethodId(null)}
                              className="text-[10px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 flex items-center gap-1"
                            >
                              <Eye className="w-3 h-3" />
                              전체 보기
                            </button>
                          </div>

                          {method.isAnalyzing ? (
                            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 flex flex-col items-center justify-center">
                              <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-3" />
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">AI가 {method.name}을(를) 수행하고 있습니다...</p>
                            </div>
                          ) : (
                            <div className={`grid gap-3 ${method.sections.length <= 2 ? 'grid-cols-1' : method.sections.length <= 4 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                              {method.sections.map(section => {
                                const colors = sectionColorMap[section.color || 'blue'];
                                const sectionKey = `${method.id}_${section.id}`;
                                const isCollapsed = collapsedSections.has(sectionKey);
                                const isEditing = editingSection === sectionKey;
                                return (
                                  <div
                                    key={section.id}
                                    className={`${colors.bg} border ${colors.border} rounded-lg overflow-hidden`}
                                  >
                                    <div
                                      className="flex items-center justify-between px-4 py-3 cursor-pointer"
                                      onClick={() => toggleSectionCollapse(sectionKey)}
                                    >
                                      <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                                        <h4 className="text-xs font-semibold">{section.title}</h4>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <button
                                          onClick={(e) => { e.stopPropagation(); setEditingSection(isEditing ? null : sectionKey); }}
                                          className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5"
                                        >
                                          <PenTool className="w-3 h-3 text-neutral-400" />
                                        </button>
                                        {isCollapsed ? <ChevronDown className="w-3.5 h-3.5 text-neutral-400" /> : <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />}
                                      </div>
                                    </div>
                                    {!isCollapsed && (
                                      <div className="px-4 pb-3">
                                        {isEditing ? (
                                          <textarea
                                            value={section.content}
                                            onChange={(e) => handleUpdateSectionContent(method.id, section.id, e.target.value)}
                                            className="w-full min-h-[80px] p-2 bg-white/50 dark:bg-black/20 border border-neutral-200 dark:border-neutral-700 rounded text-xs focus:outline-none focus:border-neutral-400 resize-none"
                                            autoFocus
                                          />
                                        ) : (
                                          <p className="text-xs text-neutral-700 dark:text-neutral-300 whitespace-pre-line leading-relaxed">
                                            {section.content}
                                          </p>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })()
                  ) : (
                    // Overview - show all methods
                    <div className="space-y-5">
                      {analysisMethods.map(method => (
                        <div key={method.id} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
                          <div
                            className="flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                            onClick={() => setActiveMethodId(method.id)}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="text-base">{method.icon}</span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-sm font-semibold">{method.name}</h3>
                                  {method.isCustom && (
                                    <span className="text-[8px] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">커스텀</span>
                                  )}
                                  {method.isPreselected && (
                                    <span className="text-[8px] px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded">기본</span>
                                  )}
                                </div>
                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">{method.description}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {method.isAnalyzing ? (
                                <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                              ) : (
                                <span className="text-[10px] text-neutral-400">{method.sections.length}개 섹션</span>
                              )}
                              <ArrowRight className="w-4 h-4 text-neutral-400" />
                            </div>
                          </div>

                          {/* Preview - first 2 sections */}
                          {!method.isAnalyzing && method.sections.length > 0 && (
                            <div className="px-5 pb-4 grid grid-cols-2 gap-2">
                              {method.sections.slice(0, 4).map(section => {
                                const colors = sectionColorMap[section.color || 'blue'];
                                return (
                                  <div key={section.id} className={`${colors.bg} border ${colors.border} rounded-md px-3 py-2`}>
                                    <div className="flex items-center gap-1.5 mb-1">
                                      <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                                      <span className="text-[10px] font-medium">{section.title}</span>
                                    </div>
                                    <p className="text-[10px] text-neutral-600 dark:text-neutral-400 line-clamp-2 whitespace-pre-line">
                                      {section.content.split('\n')[0]}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Collaborators */}
                  {ideaStage >= 4 && (
                    <div className="mt-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
                      <h3 className="text-sm font-semibold mb-3">협업자</h3>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                          김
                        </div>
                        <button className="w-8 h-8 rounded-full border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center hover:border-neutral-400">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Completion */}
                  {ideaStage === 6 && (
                    <div className="mt-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold mb-2">아이디어가 완성되었습니다!</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        이제 사업 제안서로 발전시키거나 팀과 공유할 수 있습니다.
                      </p>
                      <div className="flex gap-3 justify-center">
                        <button 
                          onClick={() => setShowProposalModal(true)}
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          사업제안으로 발전시키기
                        </button>
                        <button
                          onClick={() => setShowShareModal(true)}
                          className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded hover:bg-neutral-50 dark:hover:bg-neutral-700"
                        >
                          팀과 공유하기
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </main>

          {/* Right Resize Handle */}
          {rightSidebarOpen && (
            <div
              onMouseDown={handleRightResizeStart}
              className="w-[3px] hover:w-[5px] cursor-col-resize bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-400 dark:hover:bg-blue-500 transition-all duration-150 flex-shrink-0 relative group"
              title="드래그하여 넓이 조정"
            >
              <div className="absolute inset-y-0 -left-1 -right-1" />
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical className="w-3 h-3 text-blue-500 dark:text-blue-400" />
              </div>
            </div>
          )}

          {/* Collapsed Right Panel Opener */}
          {!rightSidebarOpen && (
            <div className="flex flex-col items-center py-3 px-1 bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 gap-3">
              <button
                onClick={toggleRightPanel}
                className="p-1.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                title="AI 어시스턴트 열기"
              >
                <PanelRightOpen className="w-4 h-4" />
              </button>
              <span className="text-[9px] text-neutral-400 dark:text-neutral-500 [writing-mode:vertical-lr] tracking-widest">AI</span>
            </div>
          )}

          {/* Right Sidebar - Chat */}
          <aside
            className="relative flex flex-col bg-white dark:bg-neutral-900 overflow-hidden"
            style={{ width: rightSidebarOpen ? rightWidth : 0, minWidth: rightSidebarOpen ? RIGHT_MIN : 0, transition: rightSidebarOpen ? 'none' : 'width 0.3s ease, min-width 0.3s ease' }}
          >
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">AI 어시스턴트</h2>
                </div>
                <button
                  onClick={toggleRightPanel}
                  className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                  title="AI 어시스턴트 접기"
                >
                  <PanelRightClose className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 ml-8">분석 결과 개선 · 추가 관점 요청 · 질문</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.length === 0 ? (
                <div className="flex flex-col items-center px-3 pt-6">
                  {/* Empty state role guide */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>
                  <h4 className="text-xs font-semibold mb-1 text-neutral-700 dark:text-neutral-300">무엇이든 물어보세요</h4>
                  <p className="text-[10px] text-neutral-400 dark:text-neutral-500 text-center leading-relaxed mb-5">
                    중앙 패널의 분석 내용을 개선하거나,<br />새로운 관점의 분석을 요청할 수 있습니다
                  </p>

                  {/* Quick action chips */}
                  <div className="w-full space-y-1.5">
                    <p className="text-[9px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">빠른 시작</p>
                    {[
                      { text: 'SWOT 분석을 더 구체적으로 개선해줘', icon: '⚡' },
                      { text: '시장 규모를 수치로 추정해줘', icon: '📊' },
                      { text: '주요 경쟁사 3곳을 비교 분석해줘', icon: '🏢' },
                      { text: '이 아이디어의 리스크 요인을 정리해줘', icon: '⚠️' },
                      { text: '사업화 로드맵을 제안해줘', icon: '🗺️' },
                    ].map((chip) => (
                      <button
                        key={chip.text}
                        onClick={() => {
                          setChatInput(chip.text);
                        }}
                        className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-750 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 rounded-lg transition-all group"
                      >
                        <span className="text-xs">{chip.icon}</span>
                        <span className="text-[11px] text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">{chip.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`${
                      msg.role === 'user'
                        ? 'bg-blue-50 dark:bg-blue-900/20 ml-8'
                        : 'bg-neutral-100 dark:bg-neutral-800 mr-8'
                    } rounded-lg p-3`}
                  >
                    <p className="text-xs leading-relaxed">{msg.content}</p>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 p-4">
              <div className="bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="분석 개선 요청, 추가 관점, 질문을 입력하세요..."
                  className="w-full text-xs mb-3 p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400/40 focus:border-purple-400 dark:bg-neutral-900 dark:text-white transition-colors"
                />
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <button
                      onClick={() => setShowModelDropdown(!showModelDropdown)}
                      className="w-full flex items-center justify-between gap-1 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded px-3 py-2 text-xs"
                    >
                      <span>{selectedModel}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    
                    {showModelDropdown && (
                      <div className="absolute bottom-full left-0 mb-2 w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden z-10">
                        {models.map((model) => (
                          <button
                            key={model}
                            onClick={() => {
                              setSelectedModel(model);
                              setShowModelDropdown(false);
                            }}
                            className="w-full text-left px-3 py-2 text-xs hover:bg-neutral-100 dark:hover:bg-neutral-700"
                          >
                            {model}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded">
                    <SettingsIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-neutral-800 dark:bg-white text-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-200 rounded"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowShareModal(false)}>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 w-[500px] max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4">아이디어 공유</h3>
            
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">팀원 초대</label>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">승인된 팀원 중에서 초대할 멤버를 선택하세요.</p>

              {/* Selected invitees chips */}
              {selectedInvitees.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {selectedInvitees.map((id) => {
                    const member = approvedTeamMembers.find(m => m.id === id);
                    if (!member) return null;
                    return (
                      <span
                        key={id}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 rounded-full text-xs"
                      >
                        <span className={`w-4 h-4 rounded-full ${member.avatarColor} flex items-center justify-center text-white text-[8px] flex-shrink-0`}>
                          {member.name.charAt(0)}
                        </span>
                        {member.name}
                        <button
                          onClick={() => setSelectedInvitees(selectedInvitees.filter(i => i !== id))}
                          className="ml-0.5 p-0.5 hover:bg-blue-100 dark:hover:bg-blue-800/30 rounded-full transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}

              {/* Search input */}
              <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 mb-2">
                <Search className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                <input
                  type="text"
                  value={inviteeSearchQuery}
                  onChange={(e) => setInviteeSearchQuery(e.target.value)}
                  placeholder="이름 또는 부서로 검색..."
                  className="flex-1 text-sm bg-transparent focus:outline-none dark:text-white"
                />
                {inviteeSearchQuery && (
                  <button onClick={() => setInviteeSearchQuery('')} className="p-0.5">
                    <X className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                )}
              </div>

              {/* Team member list */}
              <div className="max-h-[200px] overflow-y-auto space-y-1 border border-neutral-200 dark:border-neutral-700 rounded-lg p-1.5">
                {(() => {
                  const filtered = approvedTeamMembers.filter(m => {
                    const q = inviteeSearchQuery.toLowerCase();
                    return !q || m.name.toLowerCase().includes(q) || m.department.toLowerCase().includes(q) || m.role.toLowerCase().includes(q);
                  });

                  if (filtered.length === 0) {
                    return (
                      <div className="text-center py-4 text-neutral-400 dark:text-neutral-500">
                        <p className="text-xs">검색 결과가 없습니다</p>
                      </div>
                    );
                  }

                  return filtered.map((member) => {
                    const isSelected = selectedInvitees.includes(member.id);
                    return (
                      <button
                        key={member.id}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedInvitees(selectedInvitees.filter(i => i !== member.id));
                          } else {
                            setSelectedInvitees([...selectedInvitees, member.id]);
                          }
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50'
                            : 'hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-transparent'
                        }`}
                      >
                        <div className={`w-3.5 h-3.5 rounded border-[1.5px] flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-blue-500 border-blue-500'
                            : 'border-neutral-300 dark:border-neutral-600'
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                        <div className={`w-8 h-8 rounded-full ${member.avatarColor} flex items-center justify-center text-white text-xs flex-shrink-0`}>
                          {member.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate">{member.name}</p>
                          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">{member.role} · {member.department}</p>
                        </div>
                        {isSelected && (
                          <span className="text-[10px] text-blue-600 dark:text-blue-400 flex-shrink-0">선택됨</span>
                        )}
                      </button>
                    );
                  });
                })()}
              </div>

              {selectedInvitees.length > 0 && (
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-2">
                  {selectedInvitees.length}명 선택됨
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">권한 설정</label>
              <select className="w-full p-3 border border-neutral-200 dark:border-neutral-700 rounded focus:outline-none bg-white dark:bg-neutral-800 text-sm">
                <option>편집 가능</option>
                <option>읽기 전용</option>
                <option>댓글만</option>
              </select>
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium mb-2">현재 협업자</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      김
                    </div>
                    <div>
                      <p className="text-sm">김정원</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">소유자</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowShareModal(false)}
                className="flex-1 px-4 py-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded"
              >
                취소
              </button>
              <button
                onClick={() => handleShareIdea([])}
                className="flex-1 px-4 py-2 bg-neutral-800 dark:bg-white text-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-200 rounded"
              >
                초대 보내기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowDeleteModal(false)}>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 w-[400px]" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-2">아이디어 삭제</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              정말로 이 아이디어를 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded"
              >
                취소
              </button>
              <button
                onClick={() => handleDeleteIdea('1')}
                className="flex-1 px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Method Modal */}
      {showCustomMethodModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCustomMethodModal(false)}>
          <div className="bg-white dark:bg-neutral-900 rounded-lg w-[520px] max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2 mb-1">
                <PenTool className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-bold">나만의 관점 만들기</h3>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                고유한 분석 프레임워크를 정의하면 AI가 해당 관점으로 분석을 수행합니다.
              </p>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="text-xs font-medium mb-2 block">방법론/관점 이름 *</label>
                <input
                  type="text"
                  value={customMethodName}
                  onChange={(e) => setCustomMethodName(e.target.value)}
                  placeholder="예: 기술 실현 가능성 평가, 윤리적 영향 분석..."
                  className="w-full p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-400 dark:bg-neutral-800 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-medium mb-2 block">설명 (선택)</label>
                <input
                  type="text"
                  value={customMethodDesc}
                  onChange={(e) => setCustomMethodDesc(e.target.value)}
                  placeholder="이 방법론이 어떤 관점에서 분석하는지 간단히 설명하세요"
                  className="w-full p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-400 dark:bg-neutral-800 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-medium mb-2 block">분석 섹션 *</label>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-3">
                  AI가 각 섹션별로 분석 결과를 생성합니다. 최소 1개 이상 입력하세요.
                </p>
                <div className="space-y-2">
                  {customMethodSections.map((section, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-[10px] text-neutral-400 w-4 text-center">{index + 1}</span>
                        <input
                          type="text"
                          value={section}
                          onChange={(e) => {
                            const updated = [...customMethodSections];
                            updated[index] = e.target.value;
                            setCustomMethodSections(updated);
                          }}
                          placeholder={`섹션 ${index + 1}: 예) 기술적 난이도, 투입 리소스...`}
                          className="flex-1 p-2.5 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-neutral-400 dark:bg-neutral-800 dark:text-white text-xs"
                        />
                      </div>
                      {customMethodSections.length > 1 && (
                        <button
                          onClick={() => setCustomMethodSections(customMethodSections.filter((_, i) => i !== index))}
                          className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setCustomMethodSections([...customMethodSections, ''])}
                    className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 border border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    섹션 추가
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium mb-2 block text-neutral-500 dark:text-neutral-400">빠른 템플릿</label>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { name: '기술 실현 가능성', sections: ['핵심 기술 요구사항', '기술 성숙도(TRL)', '개발 일정 추정', '기술 리스크'] },
                    { name: '고객 여정 분석', sections: ['인지 단계', '고려 단계', '결정 단계', '사용 단계', '충성 단계'] },
                    { name: '리스크 매트릭스', sections: ['높은 확률/높은 영향', '높은 확률/낮은 영향', '낮은 확률/높은 영향', '대응 전략'] },
                  ].map(template => (
                    <button
                      key={template.name}
                      onClick={() => {
                        setCustomMethodName(template.name);
                        setCustomMethodSections(template.sections);
                      }}
                      className="px-2.5 py-1.5 text-[10px] bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                    >
                      {template.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
              <button
                onClick={() => { setShowCustomMethodModal(false); setCustomMethodName(''); setCustomMethodDesc(''); setCustomMethodSections(['']); }}
                className="flex-1 px-4 py-2.5 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded-lg text-sm"
              >
                취소
              </button>
              <button
                onClick={handleCreateCustomMethod}
                disabled={!customMethodName.trim() || customMethodSections.filter(s => s.trim()).length === 0}
                className="flex-1 px-4 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-lg text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                AI 분석 시작
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Proposal Modal */}
      {showProposalModal && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50" onClick={() => setShowProposalModal(false)}>
          <div className="bg-white dark:bg-neutral-900 rounded-2xl w-[644px] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 p-6 flex items-start justify-between z-10">
              <div>
                <h2 className="text-xl font-bold mb-1.5">{ideaTitle || '드론 기반 시설물 점검 및 리포트 자동화'}</h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">사업 계획서로 생성할 아이디어를 선택해주세요.</p>
              </div>
              <button
                onClick={() => setShowProposalModal(false)}
                className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Proposal Options */}
            <div className="p-6 space-y-3">
              {proposalOptions.map((option) => (
                <div
                  key={option.id}
                  className={`rounded-lg border transition-colors ${
                    option.selected
                      ? 'bg-white dark:bg-neutral-800 border-neutral-800 dark:border-neutral-200'
                      : 'bg-neutral-100/50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800'
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      {/* Checkbox */}
                      <div
                        onClick={() => handleToggleProposalOption(option.id)}
                        className="cursor-pointer flex-shrink-0"
                      >
                        <div className={`w-4 h-4 mt-0.5 rounded border-2 flex items-center justify-center transition-colors ${
                          option.selected
                            ? 'bg-neutral-800 dark:bg-white border-neutral-800 dark:border-white'
                            : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900'
                        }`}>
                          {option.selected && (
                            <Check className="w-3 h-3 text-white dark:text-black" />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div 
                        className="flex-1 min-w-0 cursor-pointer"
                        onClick={() => handleToggleProposalOption(option.id)}
                      >
                        <h3 className="text-sm font-medium mb-1 pr-6">{option.title}</h3>
                        {option.expanded && (
                          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {option.description}
                          </p>
                        )}
                      </div>

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleProposalExpanded(option.id);
                        }}
                        className="flex-shrink-0 p-1 -mr-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors"
                      >
                        {option.expanded ? (
                          <ChevronUp className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 p-6">
              <button
                onClick={handleConfirmProposal}
                className="w-full h-[38px] bg-neutral-800 dark:bg-white text-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-200 rounded-md font-medium text-sm transition-colors"
              >
                선택 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}