import svgPaths from "./svg-23v8hxs51e";

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 4">
          <path d={svgPaths.p393f9300} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d={svgPaths.p9167420} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[384px] top-[31px]">
      <Frame />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-black">아이디어</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p129d6280} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d="M10.75 13.75V16.75" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarHome2Linear() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="solar:home-2-linear">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[261px] top-[31px]">
      <SolarHome2Linear />
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[16px] text-black">대시보드</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5006 21.5001">
          <g id="Group">
            <path d={svgPaths.p33a5f180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.p27bafe80} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarPenNewSquareLinear() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="solar:pen-new-square-linear">
      <Group1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[503px] top-[31px]">
      <SolarPenNewSquareLinear />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-black">사업 제안</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-3.75%_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
          <g id="Group">
            <path d={svgPaths.p30225f00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.p522e300} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarDatabaseLinear() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="solar:database-linear">
      <Group2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[631px] top-[31px]">
      <SolarDatabaseLinear />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-black">수집 관리</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[261px] top-[31px]">
      <Frame2 />
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p1e264980} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
            <path d={svgPaths.p55e2500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarSunLinear() {
  return (
    <div className="absolute left-[1297px] overflow-clip size-[24px] top-[30px]" data-name="solar:sun-linear">
      <Group3 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents left-[1297px] top-[30px]" data-name="모드/프로필">
      <SolarSunLinear />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1342px] not-italic text-[14px] text-black top-[33px]">김정원</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[135px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">2026년에 주목해야 할 AI 코딩의 주요 토픽과 트렌드</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[174px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">AI 에이전트 코딩 80% 시대, 개발자의 진짜 문제는 ‘이해 부채</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[213px] w-[501px]">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">Vercel이 AI 에이전트를 위해 웹페이지 용량을 500KB → 2KB로 줄인 방법</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[252px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[12px]">AI 코딩은 하나의 프레임워크입니다 – 라이브러리처럼 활용하세요.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[291px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[12px]">{`Claude Code 완전 가이드: 해커톤 우승자의 70가지 파워 팁 [54p PDF] `}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[330px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[12px]">Gemini Voyager - Google Gemini를 위한 올인원 확장 기능 모음</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[447px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[12px]">에이전트 스킬(Agent Skills)</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[486px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[12px]">AI가 본 적 없는 .NET UI 프레임워크로 IDE를 만들 때, 에이전트는 어떻게 API를 파악하는가</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[369px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">구글, 개발자 지식 API와 MCP 서버 공개</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[408px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[12px]">Moltbook Ventures – 에이전트 기반 비즈니스 투자</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[86px] top-[98px]">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[98px]">최근 수집 소스</p>
      <div className="absolute h-[127px] left-[626px] top-[142px] w-0">
        <div className="absolute inset-[-1.18%_-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 130">
            <path d="M1.5 1.5V128.5" id="Vector 7" stroke="var(--stroke-0, #B1B1B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame13 />
      <Frame14 />
      <Frame11 />
      <Frame12 />
      <div className="absolute bg-[#f5f5f5] h-[13px] left-[86px] top-[517px] w-[535px]" />
      <div className="absolute flex h-0 items-center justify-center left-[86px] top-[517px] w-[553px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[553px] relative w-0">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 554">
                <path d="M0.5 0.5V553.5" id="Vector 6" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[86px] top-[130px] w-[553px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[553px] relative w-0">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 554">
                <path d="M0.5 0.5V553.5" id="Vector 6" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.5)] content-stretch flex items-center justify-center left-[678px] px-[10px] py-[5px] rounded-[8px] top-[153px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#272727] text-[10px]">핵심 요약</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.5)] content-stretch flex items-center justify-center left-[678px] px-[10px] py-[5px] rounded-[8px] top-[347px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#272727] text-[10px]">키워드</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.5)] content-stretch flex items-center justify-center left-[678px] px-[10px] py-[5px] rounded-[8px] top-[415px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#272727] text-[10px]">원본 링크</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-[#e2e2e2] content-stretch flex h-[28px] items-center justify-center left-[1049px] px-[43px] py-[12px] rounded-[6px] top-[477px] w-[135px]" data-name="새 채팅">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#272727] text-[10px] text-center">소스 수집 관리</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-[#272727] content-stretch flex h-[28px] items-center justify-center left-[1194px] px-[43px] py-[12px] rounded-[6px] top-[477px] w-[135px]" data-name="새 채팅">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-white">아이디어 생성</p>
    </div>
  );
}

function SolarLikeLinear() {
  return (
    <div className="absolute left-[680px] size-[24px] top-[479px]" data-name="solar:like-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:like-linear">
          <path d={svgPaths.p263ce700} fill="var(--fill-0, #73726C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SolarDislikeLinear() {
  return (
    <div className="absolute left-[721px] size-[24px] top-[479px]" data-name="solar:dislike-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:dislike-linear">
          <path d={svgPaths.p1c5de680} fill="var(--fill-0, #73726C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[665px] top-[111px]">
      <div className="absolute bg-white h-[324px] left-[665px] rounded-[10px] top-[140px] w-[677px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[665px] not-italic text-[16px] text-black top-[111px]">요약/정리</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[682px] not-italic text-[12px] text-black top-[183px] w-[627px] whitespace-pre-wrap">
        <p className="leading-[18px] mb-0">{`Donec a odio urna. Donec tincidunt tempus facilisis. Mauris nibh ex, sollicitudin in ex in, fermentum porttitor nibh. Nullam iaculis sed dui vitae condimentum. `}</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic">Phasellus</span>
          <span className="leading-[18px]">{` `}</span>
        </p>
        <ul className="list-disc">
          <li className="mb-0 ms-[18px]">
            <span className="leading-[18px]">{`Tristique velit et lacus vehicula gravida. `}</span>
          </li>
          <li className="mb-0 ms-[18px]">
            <span className="leading-[18px]">{`Nam finibus turpis quis porttitor consequat. Donec consectetur fringilla vulputate. `}</span>
          </li>
          <li className="mb-0 ms-[18px]">
            <span className="leading-[18px]">{`Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. `}</span>
          </li>
          <li className="ms-[18px]">
            <span className="leading-[18px]">Praesent scelerisque eu augue ac efficitur. Duis dictum dui at erat malesuada eleifend.</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[682px] not-italic text-[12px] text-black top-[377px] w-[524px] whitespace-pre-wrap">{` fermentum, porttitor, nibh, Nullam, iaculis, sed`}</p>
      <a className="absolute block font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[682px] not-italic text-[#2563eb] text-[12px] top-[445px] w-[524px]" href="https://techcrunch.com/2026/01/29/amazon-is-reportedly-in-talks-to-invest-50-billion-in-openai/">
        <p className="cursor-pointer leading-[18px] whitespace-pre-wrap">https://www.youtube.com/watch?v=-ZFH4oJzCdU</p>
      </a>
      <div className="absolute h-[287px] left-[1329px] top-[152px] w-0">
        <div className="absolute inset-[-0.52%_-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 290">
            <path d="M1.5 1.5V288.5" id="Vector 9" stroke="var(--stroke-0, #B1B1B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame35 />
      <Frame36 />
      <Frame37 />
      <Component2 />
      <Component3 />
      <SolarLikeLinear />
      <SolarDislikeLinear />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[649px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">드론 기반 시설물 점검 및 리포트 자동화</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[688px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">로봇 기반 원격 근무 시스템</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[727px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">{`통합 모빌리티&로봇 등록/관리 사업`}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[766px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">국정 감사 AI 에이전트 플랫폼</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[805px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">{`AI-Ready Data&컨설팅 기반 사업화`}</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[844px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">APT(로제) 배달 로봇 사업</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[883px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">스마트 글래스/VR 기반 XR 전시 사업</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[922px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">건물 청소 Physical AI 사업</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[961px] w-[293px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">{`AX Offering Studio `}</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[93px] px-[15px] py-[6px] rounded-[8px] top-[1000px] w-[293px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">AI Commerce OS</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[86px] top-[605px]">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[37px] left-[86px] top-[605px] w-[307px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-[239.5px] not-italic text-[0px] text-black text-center top-[614px]">
        <span className="leading-[20px] text-[14px]">{`아이디어 `}</span>
        <span className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal leading-[20px] text-[10px]">(23)</span>
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex items-center justify-center px-[5px] py-[3px] relative rounded-[8px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#272727] text-[8px]">Delay</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[34px] items-center left-[409px] px-[15px] py-[6px] rounded-[8px] top-[649px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">사내 문서 기반 의사결정 이유 생성기</p>
      <Frame38 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[409px] px-[15px] py-[6px] rounded-[8px] top-[688px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">RFP 자동 대응 생성 플랫폼</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[409px] px-[15px] py-[6px] rounded-[8px] top-[727px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">레거시 시스템 설명서 자동 생성 에이전트</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[409px] px-[15px] py-[6px] rounded-[8px] top-[766px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">현장 작업 표준서 자동 생성 에이전트</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[409px] px-[15px] py-[6px] rounded-[8px] top-[805px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">고장 원인 및 가설 생성 AI</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[409px] px-[15px] py-[6px] rounded-[8px] top-[844px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">라이브 커머스 멘트 실시간 생성 AI</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[409px] px-[15px] py-[6px] rounded-[8px] top-[883px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">신용 심사 결과 설명 생성 AI</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[409px] px-[15px] py-[6px] rounded-[8px] top-[922px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">시각적 데이터 해석 및 스토리 생성기</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[402px] top-[605px]">
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[37px] left-[402px] top-[605px] w-[307px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-[555.5px] not-italic text-[0px] text-black text-center top-[614px]">
        <span className="leading-[20px] text-[14px]">{`사업 제안 `}</span>
        <span className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal leading-[20px] text-[10px]">(8)</span>
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[725px] px-[15px] py-[6px] rounded-[8px] top-[649px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">부모용 자녀 성장 리포트 생성 AI</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[725px] px-[15px] py-[6px] rounded-[8px] top-[688px] w-[293px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">사내 프롬프트 자산화 플랫폼</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[718px] top-[605px]">
      <Frame33 />
      <Frame34 />
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[37px] left-[718px] top-[605px] w-[307px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-[871px] not-italic text-[0px] text-black text-center top-[614px]">
        <span className="leading-[20px] text-[14px]">{`형상화 `}</span>
        <span className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal leading-[20px] text-[10px]">(2)</span>
      </p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[1034px] top-[605px]">
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[37px] left-[1034px] top-[605px] w-[307px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-[1187.5px] not-italic text-[0px] text-black text-center top-[614px]">
        <span className="leading-[20px] text-[14px]">{`검증 `}</span>
        <span className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal leading-[20px] text-[10px]">(0)</span>
      </p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute contents left-[86px] top-[572px]" data-name="파이프라인">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[572px]">파이프라인</p>
      <Group12 />
      <Group13 />
      <Group14 />
      <Group10 />
      <div className="absolute flex h-0 items-center justify-center left-[86px] top-[1054px] w-[307px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[307px] relative w-0">
            <div className="absolute inset-[-0.16%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 308">
                <path d="M0.5 0.5V307.5" id="Vector 8" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[402px] top-[1054px] w-[307px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[307px] relative w-0">
            <div className="absolute inset-[-0.16%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 308">
                <path d="M0.5 0.5V307.5" id="Vector 8" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[718px] top-[1054px] w-[307px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[307px] relative w-0">
            <div className="absolute inset-[-0.16%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 308">
                <path d="M0.5 0.5V307.5" id="Vector 8" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[1034px] top-[1054px] w-[307px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[307px] relative w-0">
            <div className="absolute inset-[-0.16%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 308">
                <path d="M0.5 0.5V307.5" id="Vector 8" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute contents left-[86px] top-[1305px]" data-name="체류 시간">
      <div className="absolute bg-white h-[172px] left-[86px] rounded-[8px] top-[1305px] w-[597px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[104px] not-italic text-[14px] text-black top-[1321px]">단계별 평균 체류 시간</p>
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[15px] left-[168px] rounded-[8px] top-[1358px] w-[432px]" />
      <div className="absolute bg-[#757575] h-[15px] left-[168px] rounded-[8px] top-[1358px] w-[97px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[104px] not-italic text-[#757575] text-[12px] top-[1358px]">아이디어</p>
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[15px] left-[168px] rounded-[8px] top-[1385px] w-[432px]" />
      <div className="absolute bg-[#757575] h-[15px] left-[168px] rounded-[8px] top-[1385px] w-[200px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[104px] not-italic text-[#757575] text-[12px] top-[1385px]">사업 제안</p>
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[15px] left-[168px] rounded-[8px] top-[1412px] w-[432px]" />
      <div className="absolute bg-[#757575] h-[15px] left-[168px] rounded-[8px] top-[1412px] w-[270px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[104px] not-italic text-[#757575] text-[12px] top-[1412px]">형상화</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[656px] not-italic text-[#757575] text-[12px] text-right top-[1358px]">1.5일</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[656px] not-italic text-[#757575] text-[12px] text-right top-[1385px]">3일</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[661px] not-italic text-[#757575] text-[12px] text-right top-[1412px]">3.6일</p>
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[15px] left-[168px] rounded-[8px] top-[1439px] w-[432px]" />
      <div className="absolute bg-[#757575] h-[15px] left-[168px] rounded-[8px] top-[1439px] w-[423px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[104px] not-italic text-[#757575] text-[12px] top-[1439px]">검증</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[661px] not-italic text-[#757575] text-[12px] text-right top-[1439px]">5일</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute contents left-[696px] top-[1136px]" data-name="산업 분포">
      <div className="absolute bg-white h-[303px] left-[696px] rounded-[8px] top-[1136px] w-[475px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[714px] not-italic text-[14px] text-black top-[1152px]">산업 분포</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[735px] not-italic text-[#757575] text-[12px] top-[1189px]">커머스/쇼핑</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[735px] not-italic text-[#757575] text-[12px] top-[1216px]">Physical AI</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[735px] not-italic text-[#757575] text-[12px] top-[1243px]">헬스케어</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[735px] not-italic text-[#757575] text-[12px] top-[1270px]">금융</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[735px] not-italic text-[#757575] text-[12px] top-[1297px]">유통</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[735px] not-italic text-[#757575] text-[12px] top-[1324px]">SI/개발</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[735px] not-italic text-[#757575] text-[12px] top-[1351px]">기타</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[868px] not-italic text-[#757575] text-[12px] text-right top-[1189px]">18%</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[868px] not-italic text-[#757575] text-[12px] text-right top-[1216px]">17%</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[868px] not-italic text-[#757575] text-[12px] text-right top-[1243px]">9%</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[868px] not-italic text-[#757575] text-[12px] text-right top-[1270px]">7%</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[868px] not-italic text-[#757575] text-[12px] text-right top-[1297px]">7%</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[868px] not-italic text-[#757575] text-[12px] text-right top-[1324px]">3%</p>
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[868px] not-italic text-[#757575] text-[12px] text-right top-[1351px]">39%</p>
      <div className="absolute left-[901px] size-[248px] top-[1170px]" data-name="Exclude">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 248">
          <path d={svgPaths.p878b880} fill="var(--fill-0, #D9D9D9)" id="Exclude" />
        </svg>
      </div>
      <div className="absolute bg-[#d9d9d9] left-[718px] size-[9px] top-[1192px]" />
      <div className="absolute bg-[#d9d9d9] left-[718px] size-[9px] top-[1219px]" />
      <div className="absolute bg-[#d9d9d9] left-[718px] size-[9px] top-[1246px]" />
      <div className="absolute bg-[#d9d9d9] left-[718px] size-[9px] top-[1273px]" />
      <div className="absolute bg-[#d9d9d9] left-[718px] size-[9px] top-[1300px]" />
      <div className="absolute bg-[#d9d9d9] left-[718px] size-[9px] top-[1327px]" />
      <div className="absolute bg-[#d9d9d9] left-[718px] size-[9px] top-[1354px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute contents left-[1184px] top-[1136px]" data-name="수집 현황">
      <div className="absolute bg-white h-[176px] left-[1184px] rounded-[8px] top-[1136px] w-[157px]" />
      <p className="-translate-x-full absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] left-[1319px] not-italic text-[12px] text-black text-right top-[1187px]">243개</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1202px] not-italic text-[12px] text-black top-[1187px]">수집 소스</p>
      <p className="-translate-x-full absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] left-[1319px] not-italic text-[12px] text-black text-right top-[1273px]">2건</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1202px] not-italic text-[12px] text-black top-[1273px]">미확인 실패</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[1202px] not-italic text-[#757575] text-[10px] top-[1206px] whitespace-nowrap">
        <p className="mb-0">RSS</p>
        <p className="mb-0">Web</p>
        <p>Youtube</p>
      </div>
      <div className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] left-[1319px] not-italic text-[#757575] text-[10px] text-right top-[1206px] whitespace-nowrap">
        <p className="mb-0">57개</p>
        <p className="mb-0">163개</p>
        <p>23개</p>
      </div>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1202px] not-italic text-[14px] text-black top-[1152px]">수집 현황</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[101px] top-[1256px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[231px] not-italic text-[#757575] text-[12px] top-[1263px]">25.10</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[324px] not-italic text-[#757575] text-[12px] top-[1263px]">25.11</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[415px] not-italic text-[#757575] text-[12px] top-[1263px]">25.12</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[508px] not-italic text-[#757575] text-[12px] top-[1263px]">25.01</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[602px] not-italic text-[#757575] text-[12px] top-[1263px]">25.02</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[135px] not-italic text-[#757575] text-[12px] top-[1263px]">25.09</p>
      <div className="absolute flex h-0 items-center justify-center left-[101px] top-[1256px] w-[566px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[566px] relative w-0">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 567">
                <path d="M0.5 0.5V566.5" id="Vector 6" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[495px] top-[1204px]">
      <div className="absolute bg-[#e6e6e6] h-[52px] left-[495px] top-[1204px] w-[14px]" />
      <div className="absolute bg-[#e6e6e6] h-[18px] left-[516px] top-[1238px] w-[14px]" />
      <div className="absolute bg-[#e6e6e6] h-[7px] left-[537px] top-[1249px] w-[14px]" />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[591px] top-[1192px]">
      <div className="absolute bg-[#e6e6e6] h-[64px] left-[591px] top-[1192px] w-[14px]" />
      <div className="absolute bg-[#e6e6e6] h-[42px] left-[612px] top-[1214px] w-[14px]" />
      <div className="absolute bg-[#e6e6e6] h-[13px] left-[633px] top-[1243px] w-[14px]" />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[217px] top-[1156px]">
      <div className="absolute bg-[#e6e6e6] left-[217px] size-[9px] top-[1158px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[231px] not-italic text-[#757575] text-[10px] top-[1156px]">건수</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[284px] not-italic text-[#757575] text-[10px] top-[1156px]">완료(누적)</p>
      <div className="absolute h-0 left-[265px] top-[1163px] w-[14px]">
        <div className="absolute inset-[-0.5px_-3.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1">
            <path d="M0.5 0.5H14.5" id="Vector 13" stroke="var(--stroke-0, #757575)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute contents left-[86px] top-[1136px]" data-name="활동 현황">
      <div className="absolute bg-white h-[157px] left-[86px] rounded-[8px] top-[1136px] w-[597px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[104px] not-italic text-[14px] text-black top-[1152px]">월별 활동 현황</p>
      <Group5 />
      <Group6 />
      <Group7 />
      <div className="absolute h-[19.5px] left-[429px] top-[1236px] w-[211px]">
        <div className="absolute inset-[-2.56%_-0.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212 20.5001">
            <path d={svgPaths.p31f0a900} id="Vector 12" stroke="var(--stroke-0, #757575)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Group8 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[86px] top-[1096px]">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[1096px]">통계</p>
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="대시보드-1">
      <p className="-translate-x-1/2 absolute font-['Inter:Extra_Bold_Italic',sans-serif] font-extrabold italic leading-[22px] left-[129px] text-[24px] text-black text-center top-[31px]">Discovery-X</p>
      <Group4 />
      <Component />
      <div className="absolute h-0 left-0 top-[78px] w-[1440px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <path d="M0 0.5H1440" id="Vector 2" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#272727] h-[2px] left-[255px] top-[76px] w-[110px]" />
      <Group9 />
      <Group11 />
      <Component4 />
      <Group15 />
    </div>
  );
}