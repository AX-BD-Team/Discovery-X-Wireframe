import svgPaths from "./svg-f8ee12fa1d";

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
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
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[16px] text-black">아이디어</p>
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
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[16px] text-black">대시보드</p>
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

function Frame6() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[88px] px-[15px] py-[10px] rounded-[8px] top-[213px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">로봇 기반 원격 근무 시스템</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[88px] px-[15px] py-[10px] rounded-[8px] top-[265px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black">{`통합 모빌리티&로봇 등록/관리 사업`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[88px] px-[15px] py-[10px] rounded-[8px] top-[317px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">{`AI-Ready Data&컨설팅 기반 사업화`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex h-[42px] items-center justify-center left-[88px] px-[15px] py-[10px] rounded-[8px] top-[161px] w-[610px]">
      <div aria-hidden="true" className="absolute border border-[#757575] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[14px]">+ 새 아이디어</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[161px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">로봇 기반 원격 근무 시스템</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[213px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black">{`통합 모빌리티&로봇 등록/관리 사업`}</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[265px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">{`AI-Ready Data&컨설팅 기반 사업화`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[317px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">로봇 기반 원격 근무 시스템</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[369px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black">{`통합 모빌리티&로봇 등록/관리 사업`}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[421px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">{`AI-Ready Data&컨설팅 기반 사업화`}</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[473px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">{`AI-Ready Data&컨설팅 기반 사업화`}</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[525px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">로봇 기반 원격 근무 시스템</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[577px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black">{`통합 모빌리티&로봇 등록/관리 사업`}</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42px] items-center left-[741px] px-[15px] py-[10px] rounded-[8px] top-[629px] w-[610px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black">{`AI-Ready Data&컨설팅 기반 사업화`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[781px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">2026년에 주목해야 할 AI 코딩의 주요 토픽과 트렌드</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[820px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">AI 에이전트 코딩 80% 시대, 개발자의 진짜 문제는 ‘이해 부채</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[859px] w-[501px]">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">Vercel이 AI 에이전트를 위해 웹페이지 용량을 500KB → 2KB로 줄인 방법</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[898px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[12px]">AI 코딩은 하나의 프레임워크입니다 – 라이브러리처럼 활용하세요.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[937px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[12px]">{`Claude Code 완전 가이드: 해커톤 우승자의 70가지 파워 팁 [54p PDF] `}</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[976px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[12px]">Gemini Voyager - Google Gemini를 위한 올인원 확장 기능 모음</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[1093px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[12px]">에이전트 스킬(Agent Skills)</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[1132px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#757575] text-[12px]">AI가 본 적 없는 .NET UI 프레임워크로 IDE를 만들 때, 에이전트는 어떻게 API를 파악하는가</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-white content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[1015px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">구글, 개발자 지식 API와 MCP 서버 공개</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.21)] content-stretch flex h-[34px] items-center left-[102px] px-[15px] py-[6px] rounded-[8px] top-[1054px] w-[501px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#757575] text-[12px]">Moltbook Ventures – 에이전트 기반 비즈니스 투자</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[86px] top-[744px]">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[86px] not-italic text-[16px] text-black top-[744px]">최근 수집 소스</p>
      <div className="absolute h-[127px] left-[626px] top-[788px] w-0">
        <div className="absolute inset-[-1.18%_-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 130">
            <path d="M1.5 1.5V128.5" id="Vector 7" stroke="var(--stroke-0, #B1B1B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <Frame8 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <div className="absolute bg-[#f5f5f5] h-[13px] left-[86px] top-[1163px] w-[535px]" />
      <div className="absolute flex h-0 items-center justify-center left-[86px] top-[1163px] w-[553px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
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
      <div className="absolute flex h-0 items-center justify-center left-[86px] top-[776px] w-[553px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
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

function Frame29() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.5)] content-stretch flex items-center justify-center left-[678px] px-[10px] py-[5px] rounded-[8px] top-[799px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#272727] text-[10px]">핵심 요약</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.5)] content-stretch flex items-center justify-center left-[678px] px-[10px] py-[5px] rounded-[8px] top-[993px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#272727] text-[10px]">키워드</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute bg-[rgba(217,217,217,0.5)] content-stretch flex items-center justify-center left-[678px] px-[10px] py-[5px] rounded-[8px] top-[1061px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#272727] text-[10px]">원본 링크</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-[#e2e2e2] content-stretch flex h-[28px] items-center justify-center left-[1049px] px-[43px] py-[12px] rounded-[6px] top-[1123px] w-[135px]" data-name="새 채팅">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#272727] text-[10px] text-center">소스 수집 관리</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-[#272727] content-stretch flex h-[28px] items-center justify-center left-[1194px] px-[43px] py-[12px] rounded-[6px] top-[1123px] w-[135px]" data-name="새 채팅">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[10px] text-center text-white">아이디어 생성</p>
    </div>
  );
}

function SolarLikeLinear() {
  return (
    <div className="absolute left-[680px] size-[24px] top-[1125px]" data-name="solar:like-linear">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:like-linear">
          <path d={svgPaths.p263ce700} fill="var(--fill-0, #73726C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SolarDislikeLinear() {
  return (
    <div className="absolute left-[721px] size-[24px] top-[1125px]" data-name="solar:dislike-linear">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:dislike-linear">
          <path d={svgPaths.p1c5de680} fill="var(--fill-0, #73726C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[665px] top-[757px]">
      <div className="absolute bg-white h-[324px] left-[665px] rounded-[10px] top-[786px] w-[677px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[665px] not-italic text-[16px] text-black top-[757px]">요약/정리</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[682px] not-italic text-[12px] text-black top-[829px] w-[627px] whitespace-pre-wrap">
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
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[682px] not-italic text-[12px] text-black top-[1023px] w-[524px] whitespace-pre-wrap">{` fermentum, porttitor, nibh, Nullam, iaculis, sed`}</p>
      <a className="absolute block font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[682px] not-italic text-[#2563eb] text-[12px] top-[1091px] w-[524px]" href="https://techcrunch.com/2026/01/29/amazon-is-reportedly-in-talks-to-invest-50-billion-in-openai/">
        <p className="cursor-pointer leading-[18px] whitespace-pre-wrap">{`https://www.youtube.com/watch?v=-ZFH4oJzCdU`}</p>
      </a>
      <div className="absolute h-[287px] left-[1329px] top-[798px] w-0">
        <div className="absolute inset-[-0.52%_-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 290">
            <path d="M1.5 1.5V288.5" id="Vector 9" stroke="var(--stroke-0, #B1B1B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Component2 />
      <Component3 />
      <SolarLikeLinear />
      <SolarDislikeLinear />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="아이디어-0">
      <div className="absolute h-0 left-0 top-[78px] w-[1440px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <path d="M0 0.5H1440" id="Vector 2" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Extra_Bold_Italic',sans-serif] font-extrabold italic leading-[22px] left-[129px] text-[24px] text-black text-center top-[31px]">Discovery-X</p>
      <Group4 />
      <Component />
      <div className="absolute bg-[#272727] h-[2px] left-[374px] top-[76px] w-[110px]" />
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[104px]">내 아이디어</p>
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[741px] not-italic text-[16px] text-black top-[104px]">팀 아이디어</p>
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[710px]">아이디어 시작하기</p>
      <Frame6 />
      <Frame7 />
      <Frame9 />
      <Frame13 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-326.5px)] top-[142px] w-[641px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 641 1">
            <line id="Line 10" stroke="var(--stroke-0, #BEBEBE)" x2="641" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+325.5px)] top-[142px] w-[641px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 641 1">
            <line id="Line 10" stroke="var(--stroke-0, #BEBEBE)" x2="641" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-326.5px)] top-[672px] w-[641px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 641 1">
            <line id="Line 10" stroke="var(--stroke-0, #BEBEBE)" x2="641" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+325.5px)] top-[672px] w-[641px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 641 1">
            <line id="Line 10" stroke="var(--stroke-0, #BEBEBE)" x2="641" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[283px] left-[1360px] top-[159px] w-0">
        <div className="absolute inset-[-0.53%_-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 286">
            <path d="M1.5 1.5V284.5" id="Vector 7" stroke="var(--stroke-0, #B1B1B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Group5 />
      <Group6 />
    </div>
  );
}