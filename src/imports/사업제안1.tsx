import svgPaths from "./svg-zg90tlgsub";

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
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[16px] text-black">사업 제안</p>
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

function Group16() {
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

function Frame28() {
  return (
    <div className="bg-white content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <div aria-hidden="true" className="absolute border border-[#73726c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">제안 현황</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">신규 제안</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">형상화</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">검증</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">완료/종료</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[71px] top-[103px]">
      <Frame28 />
      <Frame26 />
      <Frame27 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[112px] not-italic text-black top-[778px] w-[260px] whitespace-pre-wrap">
      <div className="leading-[24px] relative shrink-0 text-[18px] w-full">
        <p className="mb-0">{`사내 문서 기반 의사결정 이유 `}</p>
        <p>생성기</p>
      </div>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`과거 보고서·회의록을 기반으로 “왜 이 결정을 `}</p>
        <p className="mb-0">
          {`했는지”를 자연어로 재구성하고, 의사결정 전체 `}
          <br aria-hidden="true" />
          흐름을 시각적으로 정리하는 서비스
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[330px] px-[6px] py-[3px] rounded-[20px] top-[930px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">3시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline() {
  return (
    <div className="absolute left-[285px] size-[18px] top-[929px]" data-name="solar:chat-round-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3722)" id="solar:chat-round-outline">
          <path clipRule="evenodd" d={svgPaths.p3fa3d900} fill="var(--fill-0, #757575)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3722">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[285px] top-[929px]">
      <SolarChatRoundOutline />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[306px] not-italic text-[#757575] text-[10px] top-[929px]">1</p>
    </div>
  );
}

function SolarRocketLinear() {
  return (
    <div className="absolute left-[239px] size-[18px] top-[929px]" data-name="solar:rocket-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3714)" id="solar:rocket-linear">
          <path d={svgPaths.p38aa2d80} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3714">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[239px] top-[929px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[260px] not-italic text-[#757575] text-[10px] top-[929px]">0</p>
      <SolarRocketLinear />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Group">
            <path d={svgPaths.p20d78900} id="Vector" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p13891480} id="Vector_2" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.pa00aa00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarUserCircleLinear() {
  return (
    <div className="absolute left-[112px] overflow-clip size-[24px] top-[926px]" data-name="solar:user-circle-linear">
      <Group4 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[112px] top-[926px]">
      <SolarUserCircleLinear />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[139px] not-italic text-[10px] text-black top-[932px]">홍길동</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[92px] top-[760px]">
      <div className="absolute bg-white h-[205px] left-[92px] rounded-[12px] top-[760px] w-[300px]" />
      <Frame37 />
      <Frame32 />
      <Group18 />
      <Group17 />
      <Group19 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[432px] not-italic text-black top-[778px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">시스템 설명서 자동 생성 AI</p>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`코드, DB, 운영로그 등을 기반으로 레거시 시스템에 대한 사용자, 관리자 매뉴얼을 자동으로 생성하는 `}</p>
        <p>솔루션</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[650px] px-[6px] py-[3px] rounded-[20px] top-[930px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">5시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline1() {
  return (
    <div className="absolute left-[605px] size-[18px] top-[929px]" data-name="solar:chat-round-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3722)" id="solar:chat-round-outline">
          <path clipRule="evenodd" d={svgPaths.p3fa3d900} fill="var(--fill-0, #757575)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3722">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[605px] top-[929px]">
      <SolarChatRoundOutline1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[626px] not-italic text-[#757575] text-[10px] top-[929px]">0</p>
    </div>
  );
}

function SolarRocketLinear1() {
  return (
    <div className="absolute left-[559px] size-[18px] top-[929px]" data-name="solar:rocket-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3714)" id="solar:rocket-linear">
          <path d={svgPaths.p38aa2d80} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3714">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[559px] top-[929px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[580px] not-italic text-[#757575] text-[10px] top-[929px]">0</p>
      <SolarRocketLinear1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Group">
            <path d={svgPaths.p20d78900} id="Vector" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p13891480} id="Vector_2" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.pa00aa00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarUserCircleLinear1() {
  return (
    <div className="absolute left-[432px] overflow-clip size-[24px] top-[926px]" data-name="solar:user-circle-linear">
      <Group5 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[432px] top-[926px]">
      <SolarUserCircleLinear1 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[459px] not-italic text-[10px] text-black top-[932px]">임꺽정</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[412px] top-[760px]">
      <div className="absolute bg-white h-[205px] left-[412px] rounded-[12px] top-[760px] w-[300px]" />
      <Frame38 />
      <Frame33 />
      <Group20 />
      <Group21 />
      <Group22 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[752px] not-italic text-black top-[778px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">라이브 커머스 멘트 실시간 생성 AI</p>
      <p className="leading-[18px] relative shrink-0 text-[12px] w-full">라이브 시청자의 연령대/선호도와 코멘트 및 반응을 실시간으로 분석해 쇼호스트에게 멘트를 제안하는 AI 서비스</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[970px] px-[6px] py-[3px] rounded-[20px] top-[930px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">1일 전</p>
    </div>
  );
}

function SolarChatRoundOutline2() {
  return (
    <div className="absolute left-[925px] size-[18px] top-[929px]" data-name="solar:chat-round-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3722)" id="solar:chat-round-outline">
          <path clipRule="evenodd" d={svgPaths.p3fa3d900} fill="var(--fill-0, #757575)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3722">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[925px] top-[929px]">
      <SolarChatRoundOutline2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[946px] not-italic text-[#757575] text-[10px] top-[929px]">12</p>
    </div>
  );
}

function SolarRocketLinear2() {
  return (
    <div className="absolute left-[879px] size-[18px] top-[929px]" data-name="solar:rocket-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3714)" id="solar:rocket-linear">
          <path d={svgPaths.p38aa2d80} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3714">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[879px] top-[929px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[900px] not-italic text-[#757575] text-[10px] top-[929px]">4</p>
      <SolarRocketLinear2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Group">
            <path d={svgPaths.p20d78900} id="Vector" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p13891480} id="Vector_2" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.pa00aa00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarUserCircleLinear2() {
  return (
    <div className="absolute left-[752px] overflow-clip size-[24px] top-[926px]" data-name="solar:user-circle-linear">
      <Group6 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[752px] top-[926px]">
      <SolarUserCircleLinear2 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[779px] not-italic text-[10px] text-black top-[932px]">홍길동</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[732px] top-[760px]">
      <div className="absolute bg-white h-[205px] left-[732px] rounded-[12px] top-[760px] w-[300px]" />
      <Frame39 />
      <Frame34 />
      <Group23 />
      <Group27 />
      <Group28 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[112px] not-italic text-black top-[1055px] w-[260px] whitespace-pre-wrap">
      <div className="leading-[24px] relative shrink-0 text-[18px] w-full">
        <p className="mb-0">{`사내 문서 기반 의사결정 이유 `}</p>
        <p>생성기</p>
      </div>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`과거 보고서·회의록을 기반으로 “왜 이 결정을 `}</p>
        <p className="mb-0">
          {`했는지”를 자연어로 재구성하고, 의사결정 전체 `}
          <br aria-hidden="true" />
          흐름을 시각적으로 정리하는 서비스
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[330px] px-[6px] py-[3px] rounded-[20px] top-[1207px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">3시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline3() {
  return (
    <div className="absolute left-[285px] size-[18px] top-[1206px]" data-name="solar:chat-round-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3722)" id="solar:chat-round-outline">
          <path clipRule="evenodd" d={svgPaths.p3fa3d900} fill="var(--fill-0, #757575)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3722">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[285px] top-[1206px]">
      <SolarChatRoundOutline3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[306px] not-italic text-[#757575] text-[10px] top-[1206px]">1</p>
    </div>
  );
}

function SolarRocketLinear3() {
  return (
    <div className="absolute left-[239px] size-[18px] top-[1206px]" data-name="solar:rocket-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3714)" id="solar:rocket-linear">
          <path d={svgPaths.p38aa2d80} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3714">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[239px] top-[1206px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[260px] not-italic text-[#757575] text-[10px] top-[1206px]">0</p>
      <SolarRocketLinear3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Group">
            <path d={svgPaths.p20d78900} id="Vector" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p13891480} id="Vector_2" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.pa00aa00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarUserCircleLinear3() {
  return (
    <div className="absolute left-[112px] overflow-clip size-[24px] top-[1203px]" data-name="solar:user-circle-linear">
      <Group7 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[112px] top-[1203px]">
      <SolarUserCircleLinear3 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[139px] not-italic text-[10px] text-black top-[1209px]">홍길동</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[92px] top-[1037px]">
      <div className="absolute bg-white h-[205px] left-[92px] rounded-[12px] top-[1037px] w-[300px]" />
      <Frame40 />
      <Frame35 />
      <Group30 />
      <Group31 />
      <Group32 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[432px] not-italic text-black top-[1055px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">시스템 설명서 자동 생성 AI</p>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`코드, DB, 운영로그 등을 기반으로 레거시 시스템에 대한 사용자, 관리자 매뉴얼을 자동으로 생성하는 `}</p>
        <p>솔루션</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[650px] px-[6px] py-[3px] rounded-[20px] top-[1207px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">5시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline4() {
  return (
    <div className="absolute left-[605px] size-[18px] top-[1206px]" data-name="solar:chat-round-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3722)" id="solar:chat-round-outline">
          <path clipRule="evenodd" d={svgPaths.p3fa3d900} fill="var(--fill-0, #757575)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3722">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[605px] top-[1206px]">
      <SolarChatRoundOutline4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[626px] not-italic text-[#757575] text-[10px] top-[1206px]">0</p>
    </div>
  );
}

function SolarRocketLinear4() {
  return (
    <div className="absolute left-[559px] size-[18px] top-[1206px]" data-name="solar:rocket-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3714)" id="solar:rocket-linear">
          <path d={svgPaths.p38aa2d80} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3714">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[559px] top-[1206px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[580px] not-italic text-[#757575] text-[10px] top-[1206px]">0</p>
      <SolarRocketLinear4 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Group">
            <path d={svgPaths.p20d78900} id="Vector" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p13891480} id="Vector_2" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.pa00aa00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarUserCircleLinear4() {
  return (
    <div className="absolute left-[432px] overflow-clip size-[24px] top-[1203px]" data-name="solar:user-circle-linear">
      <Group8 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[432px] top-[1203px]">
      <SolarUserCircleLinear4 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[459px] not-italic text-[10px] text-black top-[1209px]">임꺽정</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[412px] top-[1037px]">
      <div className="absolute bg-white h-[205px] left-[412px] rounded-[12px] top-[1037px] w-[300px]" />
      <Frame41 />
      <Frame36 />
      <Group34 />
      <Group35 />
      <Group36 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[752px] not-italic text-black top-[1055px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">라이브 커머스 멘트 실시간 생성 AI</p>
      <p className="leading-[18px] relative shrink-0 text-[12px] w-full">라이브 시청자의 연령대/선호도와 코멘트 및 반응을 실시간으로 분석해 쇼호스트에게 멘트를 제안하는 AI 서비스</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[970px] px-[6px] py-[3px] rounded-[20px] top-[1207px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">1일 전</p>
    </div>
  );
}

function SolarChatRoundOutline5() {
  return (
    <div className="absolute left-[925px] size-[18px] top-[1206px]" data-name="solar:chat-round-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3722)" id="solar:chat-round-outline">
          <path clipRule="evenodd" d={svgPaths.p3fa3d900} fill="var(--fill-0, #757575)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3722">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[925px] top-[1206px]">
      <SolarChatRoundOutline5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[946px] not-italic text-[#757575] text-[10px] top-[1206px]">12</p>
    </div>
  );
}

function SolarRocketLinear5() {
  return (
    <div className="absolute left-[879px] size-[18px] top-[1206px]" data-name="solar:rocket-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3714)" id="solar:rocket-linear">
          <path d={svgPaths.p38aa2d80} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3714">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-[879px] top-[1206px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[900px] not-italic text-[#757575] text-[10px] top-[1206px]">4</p>
      <SolarRocketLinear5 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Group">
            <path d={svgPaths.p20d78900} id="Vector" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p13891480} id="Vector_2" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.pa00aa00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarUserCircleLinear5() {
  return (
    <div className="absolute left-[752px] overflow-clip size-[24px] top-[1203px]" data-name="solar:user-circle-linear">
      <Group9 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-[752px] top-[1203px]">
      <SolarUserCircleLinear5 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[779px] not-italic text-[10px] text-black top-[1209px]">홍길동</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents left-[732px] top-[1037px]">
      <div className="absolute bg-white h-[205px] left-[732px] rounded-[12px] top-[1037px] w-[300px]" />
      <Frame42 />
      <Frame43 />
      <Group39 />
      <Group40 />
      <Group41 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[1072px] not-italic text-black top-[778px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">
        신용 심사 결과 설명 생성 AI
        <br aria-hidden="true" />
        (Explainable AI)
      </p>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">내 대출신청이 왜 승인/거절되었는지 설명하고, 거절</p>
        <p>사유로 예상되는 항목의 보완 방법을 제안하는 AI</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[1290px] px-[6px] py-[3px] rounded-[20px] top-[930px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">2일 전</p>
    </div>
  );
}

function SolarChatRoundOutline6() {
  return (
    <div className="absolute left-[1245px] size-[18px] top-[929px]" data-name="solar:chat-round-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3722)" id="solar:chat-round-outline">
          <path clipRule="evenodd" d={svgPaths.p3fa3d900} fill="var(--fill-0, #757575)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3722">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents left-[1245px] top-[929px]">
      <SolarChatRoundOutline6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1266px] not-italic text-[#757575] text-[10px] top-[929px]">35</p>
    </div>
  );
}

function SolarRocketLinear6() {
  return (
    <div className="absolute left-[1199px] size-[18px] top-[929px]" data-name="solar:rocket-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_25_3714)" id="solar:rocket-linear">
          <path d={svgPaths.p38aa2d80} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_25_3714">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[1199px] top-[929px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1220px] not-italic text-[#757575] text-[10px] top-[929px]">2</p>
      <SolarRocketLinear6 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <g id="Group">
            <path d={svgPaths.p20d78900} id="Vector" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p13891480} id="Vector_2" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.pa00aa00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarUserCircleLinear6() {
  return (
    <div className="absolute left-[1072px] overflow-clip size-[24px] top-[926px]" data-name="solar:user-circle-linear">
      <Group10 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents left-[1072px] top-[926px]">
      <SolarUserCircleLinear6 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1099px] not-italic text-[10px] text-black top-[932px]">임꺽정</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents left-[1052px] top-[760px]">
      <div className="absolute bg-white h-[205px] left-[1052px] rounded-[12px] top-[760px] w-[300px]" />
      <Frame44 />
      <Frame45 />
      <Group43 />
      <Group44 />
      <Group45 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents left-[86px] top-[692px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[86px] not-italic text-[16px] text-black top-[726px]">Physical AI</p>
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[692px]">분아별 사업 제안</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[86px] not-italic text-[16px] text-black top-[1003px]">헬스케어</p>
      <Group24 />
      <Group25 />
      <Group26 />
      <Group29 />
      <Group33 />
      <Group38 />
      <Group42 />
    </div>
  );
}

function SolarAltArrowRightOutline() {
  return (
    <div className="absolute left-[302px] size-[24px] top-[218px]" data-name="solar:alt-arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:alt-arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p2e103500} fill="var(--fill-0, #272727)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p19404f00} id="Vector" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
            <path d={svgPaths.p19057c00} id="Vector_2" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarFolderFavouriteBookmarkLinear() {
  return (
    <div className="absolute left-[98px] overflow-clip size-[24px] top-[218px]" data-name="solar:folder-favourite-bookmark-linear">
      <Group11 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[87px] top-[208px]">
      <div className="absolute bg-white h-[43px] left-[87px] rounded-[12px] top-[208px] w-[245px]" />
      <SolarAltArrowRightOutline />
      <SolarFolderFavouriteBookmarkLinear />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] left-[130px] not-italic text-[#272727] text-[14px] top-[221px]">사업 제안</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[298px] not-italic text-[#757575] text-[12px] text-right top-[222px]">8건</p>
    </div>
  );
}

function SolarAltArrowRightOutline1() {
  return (
    <div className="absolute left-[557px] size-[24px] top-[218px]" data-name="solar:alt-arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:alt-arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p2e103500} fill="var(--fill-0, #272727)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p19404f00} id="Vector" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
            <path d={svgPaths.p19057c00} id="Vector_2" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarFolderFavouriteBookmarkLinear1() {
  return (
    <div className="absolute left-[353px] overflow-clip size-[24px] top-[218px]" data-name="solar:folder-favourite-bookmark-linear">
      <Group12 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[342px] top-[208px]">
      <div className="absolute bg-white h-[43px] left-[342px] rounded-[12px] top-[208px] w-[245px]" />
      <SolarAltArrowRightOutline1 />
      <SolarFolderFavouriteBookmarkLinear1 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] left-[385px] not-italic text-[#272727] text-[14px] top-[221px]">형상화</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[553px] not-italic text-[#757575] text-[12px] text-right top-[222px]">2건</p>
    </div>
  );
}

function SolarAltArrowRightOutline2() {
  return (
    <div className="absolute left-[812px] size-[24px] top-[218px]" data-name="solar:alt-arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:alt-arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p2e103500} fill="var(--fill-0, #272727)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p19404f00} id="Vector" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
            <path d={svgPaths.p19057c00} id="Vector_2" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarFolderFavouriteBookmarkLinear2() {
  return (
    <div className="absolute left-[608px] overflow-clip size-[24px] top-[218px]" data-name="solar:folder-favourite-bookmark-linear">
      <Group13 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents left-[597px] top-[208px]">
      <div className="absolute bg-white h-[43px] left-[597px] rounded-[12px] top-[208px] w-[245px]" />
      <SolarAltArrowRightOutline2 />
      <SolarFolderFavouriteBookmarkLinear2 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] left-[640px] not-italic text-[#272727] text-[14px] top-[221px]">검증</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[808px] not-italic text-[#757575] text-[12px] text-right top-[222px]">0건</p>
    </div>
  );
}

function SolarAltArrowRightOutline3() {
  return (
    <div className="absolute left-[1067px] size-[24px] top-[218px]" data-name="solar:alt-arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:alt-arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p2e103500} fill="var(--fill-0, #272727)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p19404f00} id="Vector" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
            <path d={svgPaths.p19057c00} id="Vector_2" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarFolderFavouriteBookmarkLinear3() {
  return (
    <div className="absolute left-[863px] overflow-clip size-[24px] top-[218px]" data-name="solar:folder-favourite-bookmark-linear">
      <Group14 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents left-[852px] top-[208px]">
      <div className="absolute bg-white h-[43px] left-[852px] rounded-[12px] top-[208px] w-[245px]" />
      <SolarAltArrowRightOutline3 />
      <SolarFolderFavouriteBookmarkLinear3 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] left-[895px] not-italic text-[#272727] text-[14px] top-[221px]">완료(제품화/GTM)</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1063px] not-italic text-[#757575] text-[12px] text-right top-[222px]">1건</p>
    </div>
  );
}

function SolarAltArrowRightOutline4() {
  return (
    <div className="absolute left-[1322px] size-[24px] top-[218px]" data-name="solar:alt-arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:alt-arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p2e103500} fill="var(--fill-0, #272727)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
          <g id="Group">
            <path d={svgPaths.p19404f00} id="Vector" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
            <path d={svgPaths.p19057c00} id="Vector_2" stroke="var(--stroke-0, #272727)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarFolderFavouriteBookmarkLinear4() {
  return (
    <div className="absolute left-[1118px] overflow-clip size-[24px] top-[218px]" data-name="solar:folder-favourite-bookmark-linear">
      <Group15 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents left-[1107px] top-[208px]">
      <div className="absolute bg-white h-[43px] left-[1107px] rounded-[12px] top-[208px] w-[245px]" />
      <SolarAltArrowRightOutline4 />
      <SolarFolderFavouriteBookmarkLinear4 />
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] left-[1150px] not-italic text-[#272727] text-[14px] top-[221px]">종료(Hold/Drop)</p>
      <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1318px] not-italic text-[#757575] text-[12px] text-right top-[222px]">35건</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">사내 문서 기반 의사결정 이유 생성기</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">RFP 자동 대응 생성 플랫폼</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">레거시 시스템 설명서 자동 생성 에이전트</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">현장 작업 표준서 자동 생성 에이전트</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">고장 원인 및 가설 생성 AI</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">라이브 커머스 멘트 실시간 생성 AI</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">신용 심사 결과 설명 생성 AI</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">시각적 데이터 해석 및 스토리 생성기</p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[92px] top-[261px] w-[234px]">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">사내 문서 기반 의사결정 이유 생성기</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">RFP 자동 대응 생성 플랫폼</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">레거시 시스템 설명서 자동 생성 에이전트</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">현장 작업 표준서 자동 생성 에이전트</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">고장 원인 및 가설 생성 AI</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">라이브 커머스 멘트 실시간 생성 AI</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">신용 심사 결과 설명 생성 AI</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">시각적 데이터 해석 및 스토리 생성기</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">비즈니스 프로세스 최적화 보고서 생성기</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">고객 피드백 분석 및 인사이트 제공 AI</p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[1113px] top-[261px] w-[234px]">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">부모용 자녀 성장 리포트 생성 AI</p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black">사내 프롬프트 자산화 플랫폼</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[348px] top-[261px] w-[234px]">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(211,211,211,0.4)] h-[34px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[6px] relative size-full">
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">사내 퇴직연금 AI 시스템</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[858px] top-[261px] w-[234px]">
      <Frame25 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents left-[76px] top-[197px]">
      <div className="-translate-x-1/2 absolute bg-[rgba(217,217,217,0.15)] border border-[rgba(217,217,217,0.5)] border-solid h-[460px] left-[calc(50%-0.5px)] rounded-[20px] top-[197px] w-[1287px]" />
      <Group46 />
      <Group48 />
      <Group49 />
      <Group50 />
      <Group51 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function SolarAltArrowRightOutline5() {
  return (
    <div className="absolute left-[1344px] size-[36px] top-[845px]" data-name="solar:alt-arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="solar:alt-arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p9791d80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents left-[1146px] top-[749px]">
      <div className="absolute bg-gradient-to-r from-[rgba(245,245,245,0)] h-[228px] left-[1146px] to-[#f5f5f5] top-[749px] w-[223px]" />
      <SolarAltArrowRightOutline5 />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="사업제안-1">
      <p className="-translate-x-1/2 absolute font-['Inter:Extra_Bold_Italic',sans-serif] font-extrabold italic leading-[22px] left-[129px] text-[24px] text-black text-center top-[31px]">Discovery-X</p>
      <Group16 />
      <Component />
      <div className="absolute h-0 left-0 top-[78px] w-[1440px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <path d="M0 0.5H1440" id="Vector 2" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#272727] h-[2px] left-[500px] top-[76px] w-[110px]" />
      <Frame31 />
      <Group37 />
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[163px]">파이프라인</p>
      <Group47 />
      <Group52 />
    </div>
  );
}