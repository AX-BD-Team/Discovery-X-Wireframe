import svgPaths from "./svg-18l1kp1oyq";

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

function Group20() {
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
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">제안 현황</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <div aria-hidden="true" className="absolute border border-[#73726c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">신규 제안</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">형상화</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">검증</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[rgba(217,217,217,0.5)] content-stretch flex h-[27px] items-center justify-center px-[10px] py-[5px] relative rounded-[8px] shrink-0 w-[120px]">
      <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#3d3d3a] text-[14px]">완료/종료</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[71px] top-[103px]">
      <Frame5 />
      <Frame7 />
      <Frame6 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[112px] not-italic text-black top-[215px] w-[260px] whitespace-pre-wrap">
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

function Frame11() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[330px] px-[6px] py-[3px] rounded-[20px] top-[367px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">3시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline() {
  return (
    <div className="absolute left-[285px] size-[18px] top-[366px]" data-name="solar:chat-round-outline">
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

function Group22() {
  return (
    <div className="absolute contents left-[285px] top-[366px]">
      <SolarChatRoundOutline />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[306px] not-italic text-[#757575] text-[10px] top-[366px]">1</p>
    </div>
  );
}

function SolarRocketLinear() {
  return (
    <div className="absolute left-[239px] size-[18px] top-[366px]" data-name="solar:rocket-linear">
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
    <div className="absolute contents left-[239px] top-[366px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[260px] not-italic text-[#757575] text-[10px] top-[366px]">0</p>
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
    <div className="absolute left-[112px] overflow-clip size-[24px] top-[363px]" data-name="solar:user-circle-linear">
      <Group4 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[112px] top-[363px]">
      <SolarUserCircleLinear />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[139px] not-italic text-[10px] text-black top-[369px]">홍길동</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[92px] top-[197px]">
      <div className="absolute bg-white h-[205px] left-[92px] rounded-[12px] top-[197px] w-[300px]" />
      <Frame16 />
      <Frame11 />
      <Group22 />
      <Group21 />
      <Group23 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[432px] not-italic text-black top-[215px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">시스템 설명서 자동 생성 AI</p>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`코드, DB, 운영로그 등을 기반으로 레거시 시스템에 대한 사용자, 관리자 매뉴얼을 자동으로 생성하는 `}</p>
        <p>솔루션</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[650px] px-[6px] py-[3px] rounded-[20px] top-[367px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">5시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline1() {
  return (
    <div className="absolute left-[605px] size-[18px] top-[366px]" data-name="solar:chat-round-outline">
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

function Group26() {
  return (
    <div className="absolute contents left-[605px] top-[366px]">
      <SolarChatRoundOutline1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[626px] not-italic text-[#757575] text-[10px] top-[366px]">0</p>
    </div>
  );
}

function SolarRocketLinear1() {
  return (
    <div className="absolute left-[559px] size-[18px] top-[366px]" data-name="solar:rocket-linear">
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
    <div className="absolute contents left-[559px] top-[366px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[580px] not-italic text-[#757575] text-[10px] top-[366px]">0</p>
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
    <div className="absolute left-[432px] overflow-clip size-[24px] top-[363px]" data-name="solar:user-circle-linear">
      <Group5 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[432px] top-[363px]">
      <SolarUserCircleLinear1 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[459px] not-italic text-[10px] text-black top-[369px]">임꺽정</p>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[412px] top-[197px]">
      <div className="absolute bg-white h-[205px] left-[412px] rounded-[12px] top-[197px] w-[300px]" />
      <Frame17 />
      <Frame12 />
      <Group26 />
      <Group27 />
      <Group28 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[752px] not-italic text-black top-[215px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">라이브 커머스 멘트 실시간 생성 AI</p>
      <p className="leading-[18px] relative shrink-0 text-[12px] w-full">라이브 시청자의 연령대/선호도와 코멘트 및 반응을 실시간으로 분석해 쇼호스트에게 멘트를 제안하는 AI 서비스</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[970px] px-[6px] py-[3px] rounded-[20px] top-[367px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">1일 전</p>
    </div>
  );
}

function SolarChatRoundOutline2() {
  return (
    <div className="absolute left-[925px] size-[18px] top-[366px]" data-name="solar:chat-round-outline">
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
    <div className="absolute contents left-[925px] top-[366px]">
      <SolarChatRoundOutline2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[946px] not-italic text-[#757575] text-[10px] top-[366px]">12</p>
    </div>
  );
}

function SolarRocketLinear2() {
  return (
    <div className="absolute left-[879px] size-[18px] top-[366px]" data-name="solar:rocket-linear">
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
    <div className="absolute contents left-[879px] top-[366px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[900px] not-italic text-[#757575] text-[10px] top-[366px]">4</p>
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
    <div className="absolute left-[752px] overflow-clip size-[24px] top-[363px]" data-name="solar:user-circle-linear">
      <Group6 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[752px] top-[363px]">
      <SolarUserCircleLinear2 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[779px] not-italic text-[10px] text-black top-[369px]">홍길동</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[732px] top-[197px]">
      <div className="absolute bg-white h-[205px] left-[732px] rounded-[12px] top-[197px] w-[300px]" />
      <Frame18 />
      <Frame13 />
      <Group30 />
      <Group31 />
      <Group32 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[1072px] not-italic text-black top-[215px] w-[260px] whitespace-pre-wrap">
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

function Frame14() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[1290px] px-[6px] py-[3px] rounded-[20px] top-[367px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">2일 전</p>
    </div>
  );
}

function SolarChatRoundOutline3() {
  return (
    <div className="absolute left-[1245px] size-[18px] top-[366px]" data-name="solar:chat-round-outline">
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
    <div className="absolute contents left-[1245px] top-[366px]">
      <SolarChatRoundOutline3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1266px] not-italic text-[#757575] text-[10px] top-[366px]">35</p>
    </div>
  );
}

function SolarRocketLinear3() {
  return (
    <div className="absolute left-[1199px] size-[18px] top-[366px]" data-name="solar:rocket-linear">
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
    <div className="absolute contents left-[1199px] top-[366px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1220px] not-italic text-[#757575] text-[10px] top-[366px]">2</p>
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
    <div className="absolute left-[1072px] overflow-clip size-[24px] top-[363px]" data-name="solar:user-circle-linear">
      <Group7 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[1072px] top-[363px]">
      <SolarUserCircleLinear3 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1099px] not-italic text-[10px] text-black top-[369px]">임꺽정</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[1052px] top-[197px]">
      <div className="absolute bg-white h-[205px] left-[1052px] rounded-[12px] top-[197px] w-[300px]" />
      <Frame19 />
      <Frame14 />
      <Group34 />
      <Group35 />
      <Group36 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[112px] not-italic text-black top-[538px] w-[260px] whitespace-pre-wrap">
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

function Frame15() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[330px] px-[6px] py-[3px] rounded-[20px] top-[690px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">3시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline4() {
  return (
    <div className="absolute left-[285px] size-[18px] top-[689px]" data-name="solar:chat-round-outline">
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

function Group38() {
  return (
    <div className="absolute contents left-[285px] top-[689px]">
      <SolarChatRoundOutline4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[306px] not-italic text-[#757575] text-[10px] top-[689px]">1</p>
    </div>
  );
}

function SolarRocketLinear4() {
  return (
    <div className="absolute left-[239px] size-[18px] top-[689px]" data-name="solar:rocket-linear">
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

function Group39() {
  return (
    <div className="absolute contents left-[239px] top-[689px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[260px] not-italic text-[#757575] text-[10px] top-[689px]">0</p>
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
    <div className="absolute left-[112px] overflow-clip size-[24px] top-[686px]" data-name="solar:user-circle-linear">
      <Group8 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-[112px] top-[686px]">
      <SolarUserCircleLinear4 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[139px] not-italic text-[10px] text-black top-[692px]">홍길동</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents left-[92px] top-[520px]">
      <div className="absolute bg-white h-[205px] left-[92px] rounded-[12px] top-[520px] w-[300px]" />
      <Frame20 />
      <Frame15 />
      <Group38 />
      <Group39 />
      <Group40 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[432px] not-italic text-black top-[538px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">시스템 설명서 자동 생성 AI</p>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`코드, DB, 운영로그 등을 기반으로 레거시 시스템에 대한 사용자, 관리자 매뉴얼을 자동으로 생성하는 `}</p>
        <p>솔루션</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[650px] px-[6px] py-[3px] rounded-[20px] top-[690px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">5시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline5() {
  return (
    <div className="absolute left-[605px] size-[18px] top-[689px]" data-name="solar:chat-round-outline">
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

function Group42() {
  return (
    <div className="absolute contents left-[605px] top-[689px]">
      <SolarChatRoundOutline5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[626px] not-italic text-[#757575] text-[10px] top-[689px]">0</p>
    </div>
  );
}

function SolarRocketLinear5() {
  return (
    <div className="absolute left-[559px] size-[18px] top-[689px]" data-name="solar:rocket-linear">
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

function Group43() {
  return (
    <div className="absolute contents left-[559px] top-[689px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[580px] not-italic text-[#757575] text-[10px] top-[689px]">0</p>
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
    <div className="absolute left-[432px] overflow-clip size-[24px] top-[686px]" data-name="solar:user-circle-linear">
      <Group9 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[432px] top-[686px]">
      <SolarUserCircleLinear5 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[459px] not-italic text-[10px] text-black top-[692px]">임꺽정</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-[412px] top-[520px]">
      <div className="absolute bg-white h-[205px] left-[412px] rounded-[12px] top-[520px] w-[300px]" />
      <Frame21 />
      <Frame22 />
      <Group42 />
      <Group43 />
      <Group44 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[752px] not-italic text-black top-[538px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">라이브 커머스 멘트 실시간 생성 AI</p>
      <p className="leading-[18px] relative shrink-0 text-[12px] w-full">라이브 시청자의 연령대/선호도와 코멘트 및 반응을 실시간으로 분석해 쇼호스트에게 멘트를 제안하는 AI 서비스</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[970px] px-[6px] py-[3px] rounded-[20px] top-[690px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">1일 전</p>
    </div>
  );
}

function SolarChatRoundOutline6() {
  return (
    <div className="absolute left-[925px] size-[18px] top-[689px]" data-name="solar:chat-round-outline">
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

function Group46() {
  return (
    <div className="absolute contents left-[925px] top-[689px]">
      <SolarChatRoundOutline6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[946px] not-italic text-[#757575] text-[10px] top-[689px]">12</p>
    </div>
  );
}

function SolarRocketLinear6() {
  return (
    <div className="absolute left-[879px] size-[18px] top-[689px]" data-name="solar:rocket-linear">
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

function Group47() {
  return (
    <div className="absolute contents left-[879px] top-[689px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[900px] not-italic text-[#757575] text-[10px] top-[689px]">4</p>
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
    <div className="absolute left-[752px] overflow-clip size-[24px] top-[686px]" data-name="solar:user-circle-linear">
      <Group10 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[752px] top-[686px]">
      <SolarUserCircleLinear6 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[779px] not-italic text-[10px] text-black top-[692px]">홍길동</p>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents left-[732px] top-[520px]">
      <div className="absolute bg-white h-[205px] left-[732px] rounded-[12px] top-[520px] w-[300px]" />
      <Frame23 />
      <Frame24 />
      <Group46 />
      <Group47 />
      <Group48 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[112px] not-italic text-black top-[758px] w-[260px] whitespace-pre-wrap">
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

function Frame26() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[330px] px-[6px] py-[3px] rounded-[20px] top-[910px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">3시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline7() {
  return (
    <div className="absolute left-[285px] size-[18px] top-[909px]" data-name="solar:chat-round-outline">
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

function Group50() {
  return (
    <div className="absolute contents left-[285px] top-[909px]">
      <SolarChatRoundOutline7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[306px] not-italic text-[#757575] text-[10px] top-[909px]">1</p>
    </div>
  );
}

function SolarRocketLinear7() {
  return (
    <div className="absolute left-[239px] size-[18px] top-[909px]" data-name="solar:rocket-linear">
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

function Group51() {
  return (
    <div className="absolute contents left-[239px] top-[909px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[260px] not-italic text-[#757575] text-[10px] top-[909px]">0</p>
      <SolarRocketLinear7 />
    </div>
  );
}

function Group11() {
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

function SolarUserCircleLinear7() {
  return (
    <div className="absolute left-[112px] overflow-clip size-[24px] top-[906px]" data-name="solar:user-circle-linear">
      <Group11 />
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents left-[112px] top-[906px]">
      <SolarUserCircleLinear7 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[139px] not-italic text-[10px] text-black top-[912px]">홍길동</p>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents left-[92px] top-[740px]">
      <div className="absolute bg-white h-[205px] left-[92px] rounded-[12px] top-[740px] w-[300px]" />
      <Frame25 />
      <Frame26 />
      <Group50 />
      <Group51 />
      <Group52 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[432px] not-italic text-black top-[758px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">시스템 설명서 자동 생성 AI</p>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`코드, DB, 운영로그 등을 기반으로 레거시 시스템에 대한 사용자, 관리자 매뉴얼을 자동으로 생성하는 `}</p>
        <p>솔루션</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[650px] px-[6px] py-[3px] rounded-[20px] top-[910px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">5시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline8() {
  return (
    <div className="absolute left-[605px] size-[18px] top-[909px]" data-name="solar:chat-round-outline">
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

function Group54() {
  return (
    <div className="absolute contents left-[605px] top-[909px]">
      <SolarChatRoundOutline8 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[626px] not-italic text-[#757575] text-[10px] top-[909px]">0</p>
    </div>
  );
}

function SolarRocketLinear8() {
  return (
    <div className="absolute left-[559px] size-[18px] top-[909px]" data-name="solar:rocket-linear">
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

function Group55() {
  return (
    <div className="absolute contents left-[559px] top-[909px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[580px] not-italic text-[#757575] text-[10px] top-[909px]">0</p>
      <SolarRocketLinear8 />
    </div>
  );
}

function Group12() {
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

function SolarUserCircleLinear8() {
  return (
    <div className="absolute left-[432px] overflow-clip size-[24px] top-[906px]" data-name="solar:user-circle-linear">
      <Group12 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents left-[432px] top-[906px]">
      <SolarUserCircleLinear8 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[459px] not-italic text-[10px] text-black top-[912px]">임꺽정</p>
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents left-[412px] top-[740px]">
      <div className="absolute bg-white h-[205px] left-[412px] rounded-[12px] top-[740px] w-[300px]" />
      <Frame27 />
      <Frame28 />
      <Group54 />
      <Group55 />
      <Group56 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[752px] not-italic text-black top-[758px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">라이브 커머스 멘트 실시간 생성 AI</p>
      <p className="leading-[18px] relative shrink-0 text-[12px] w-full">라이브 시청자의 연령대/선호도와 코멘트 및 반응을 실시간으로 분석해 쇼호스트에게 멘트를 제안하는 AI 서비스</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[970px] px-[6px] py-[3px] rounded-[20px] top-[910px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">1일 전</p>
    </div>
  );
}

function SolarChatRoundOutline9() {
  return (
    <div className="absolute left-[925px] size-[18px] top-[909px]" data-name="solar:chat-round-outline">
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

function Group58() {
  return (
    <div className="absolute contents left-[925px] top-[909px]">
      <SolarChatRoundOutline9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[946px] not-italic text-[#757575] text-[10px] top-[909px]">12</p>
    </div>
  );
}

function SolarRocketLinear9() {
  return (
    <div className="absolute left-[879px] size-[18px] top-[909px]" data-name="solar:rocket-linear">
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

function Group59() {
  return (
    <div className="absolute contents left-[879px] top-[909px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[900px] not-italic text-[#757575] text-[10px] top-[909px]">4</p>
      <SolarRocketLinear9 />
    </div>
  );
}

function Group13() {
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

function SolarUserCircleLinear9() {
  return (
    <div className="absolute left-[752px] overflow-clip size-[24px] top-[906px]" data-name="solar:user-circle-linear">
      <Group13 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents left-[752px] top-[906px]">
      <SolarUserCircleLinear9 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[779px] not-italic text-[10px] text-black top-[912px]">홍길동</p>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents left-[732px] top-[740px]">
      <div className="absolute bg-white h-[205px] left-[732px] rounded-[12px] top-[740px] w-[300px]" />
      <Frame29 />
      <Frame30 />
      <Group58 />
      <Group59 />
      <Group60 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[1072px] not-italic text-black top-[538px] w-[260px] whitespace-pre-wrap">
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

function Frame32() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[1290px] px-[6px] py-[3px] rounded-[20px] top-[690px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">2일 전</p>
    </div>
  );
}

function SolarChatRoundOutline10() {
  return (
    <div className="absolute left-[1245px] size-[18px] top-[689px]" data-name="solar:chat-round-outline">
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

function Group62() {
  return (
    <div className="absolute contents left-[1245px] top-[689px]">
      <SolarChatRoundOutline10 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1266px] not-italic text-[#757575] text-[10px] top-[689px]">35</p>
    </div>
  );
}

function SolarRocketLinear10() {
  return (
    <div className="absolute left-[1199px] size-[18px] top-[689px]" data-name="solar:rocket-linear">
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

function Group63() {
  return (
    <div className="absolute contents left-[1199px] top-[689px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1220px] not-italic text-[#757575] text-[10px] top-[689px]">2</p>
      <SolarRocketLinear10 />
    </div>
  );
}

function Group14() {
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

function SolarUserCircleLinear10() {
  return (
    <div className="absolute left-[1072px] overflow-clip size-[24px] top-[686px]" data-name="solar:user-circle-linear">
      <Group14 />
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents left-[1072px] top-[686px]">
      <SolarUserCircleLinear10 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1099px] not-italic text-[10px] text-black top-[692px]">임꺽정</p>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents left-[1052px] top-[520px]">
      <div className="absolute bg-white h-[205px] left-[1052px] rounded-[12px] top-[520px] w-[300px]" />
      <Frame31 />
      <Frame32 />
      <Group62 />
      <Group63 />
      <Group64 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[1072px] not-italic text-black top-[758px] w-[260px] whitespace-pre-wrap">
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

function Frame34() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[1290px] px-[6px] py-[3px] rounded-[20px] top-[910px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">2일 전</p>
    </div>
  );
}

function SolarChatRoundOutline11() {
  return (
    <div className="absolute left-[1245px] size-[18px] top-[909px]" data-name="solar:chat-round-outline">
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

function Group66() {
  return (
    <div className="absolute contents left-[1245px] top-[909px]">
      <SolarChatRoundOutline11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1266px] not-italic text-[#757575] text-[10px] top-[909px]">35</p>
    </div>
  );
}

function SolarRocketLinear11() {
  return (
    <div className="absolute left-[1199px] size-[18px] top-[909px]" data-name="solar:rocket-linear">
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

function Group67() {
  return (
    <div className="absolute contents left-[1199px] top-[909px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1220px] not-italic text-[#757575] text-[10px] top-[909px]">2</p>
      <SolarRocketLinear11 />
    </div>
  );
}

function Group15() {
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

function SolarUserCircleLinear11() {
  return (
    <div className="absolute left-[1072px] overflow-clip size-[24px] top-[906px]" data-name="solar:user-circle-linear">
      <Group15 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents left-[1072px] top-[906px]">
      <SolarUserCircleLinear11 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1099px] not-italic text-[10px] text-black top-[912px]">임꺽정</p>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents left-[1052px] top-[740px]">
      <div className="absolute bg-white h-[205px] left-[1052px] rounded-[12px] top-[740px] w-[300px]" />
      <Frame33 />
      <Frame34 />
      <Group66 />
      <Group67 />
      <Group68 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[112px] not-italic text-black top-[978px] w-[260px] whitespace-pre-wrap">
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

function Frame36() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[330px] px-[6px] py-[3px] rounded-[20px] top-[1130px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">3시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline12() {
  return (
    <div className="absolute left-[285px] size-[18px] top-[1129px]" data-name="solar:chat-round-outline">
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

function Group70() {
  return (
    <div className="absolute contents left-[285px] top-[1129px]">
      <SolarChatRoundOutline12 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[306px] not-italic text-[#757575] text-[10px] top-[1129px]">1</p>
    </div>
  );
}

function SolarRocketLinear12() {
  return (
    <div className="absolute left-[239px] size-[18px] top-[1129px]" data-name="solar:rocket-linear">
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

function Group71() {
  return (
    <div className="absolute contents left-[239px] top-[1129px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[260px] not-italic text-[#757575] text-[10px] top-[1129px]">0</p>
      <SolarRocketLinear12 />
    </div>
  );
}

function Group16() {
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

function SolarUserCircleLinear12() {
  return (
    <div className="absolute left-[112px] overflow-clip size-[24px] top-[1126px]" data-name="solar:user-circle-linear">
      <Group16 />
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents left-[112px] top-[1126px]">
      <SolarUserCircleLinear12 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[139px] not-italic text-[10px] text-black top-[1132px]">홍길동</p>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents left-[92px] top-[960px]">
      <div className="absolute bg-white h-[205px] left-[92px] rounded-[12px] top-[960px] w-[300px]" />
      <Frame35 />
      <Frame36 />
      <Group70 />
      <Group71 />
      <Group72 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[432px] not-italic text-black top-[978px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">시스템 설명서 자동 생성 AI</p>
      <div className="leading-[18px] relative shrink-0 text-[12px] w-full">
        <p className="mb-0">{`코드, DB, 운영로그 등을 기반으로 레거시 시스템에 대한 사용자, 관리자 매뉴얼을 자동으로 생성하는 `}</p>
        <p>솔루션</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[650px] px-[6px] py-[3px] rounded-[20px] top-[1130px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">5시간 전</p>
    </div>
  );
}

function SolarChatRoundOutline13() {
  return (
    <div className="absolute left-[605px] size-[18px] top-[1129px]" data-name="solar:chat-round-outline">
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

function Group74() {
  return (
    <div className="absolute contents left-[605px] top-[1129px]">
      <SolarChatRoundOutline13 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[626px] not-italic text-[#757575] text-[10px] top-[1129px]">0</p>
    </div>
  );
}

function SolarRocketLinear13() {
  return (
    <div className="absolute left-[559px] size-[18px] top-[1129px]" data-name="solar:rocket-linear">
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

function Group75() {
  return (
    <div className="absolute contents left-[559px] top-[1129px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[580px] not-italic text-[#757575] text-[10px] top-[1129px]">0</p>
      <SolarRocketLinear13 />
    </div>
  );
}

function Group17() {
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

function SolarUserCircleLinear13() {
  return (
    <div className="absolute left-[432px] overflow-clip size-[24px] top-[1126px]" data-name="solar:user-circle-linear">
      <Group17 />
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents left-[432px] top-[1126px]">
      <SolarUserCircleLinear13 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[459px] not-italic text-[10px] text-black top-[1132px]">임꺽정</p>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute contents left-[412px] top-[960px]">
      <div className="absolute bg-white h-[205px] left-[412px] rounded-[12px] top-[960px] w-[300px]" />
      <Frame37 />
      <Frame38 />
      <Group74 />
      <Group75 />
      <Group76 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[752px] not-italic text-black top-[978px] w-[260px] whitespace-pre-wrap">
      <p className="leading-[24px] relative shrink-0 text-[18px] w-full">라이브 커머스 멘트 실시간 생성 AI</p>
      <p className="leading-[18px] relative shrink-0 text-[12px] w-full">라이브 시청자의 연령대/선호도와 코멘트 및 반응을 실시간으로 분석해 쇼호스트에게 멘트를 제안하는 AI 서비스</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[970px] px-[6px] py-[3px] rounded-[20px] top-[1130px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">1일 전</p>
    </div>
  );
}

function SolarChatRoundOutline14() {
  return (
    <div className="absolute left-[925px] size-[18px] top-[1129px]" data-name="solar:chat-round-outline">
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

function Group78() {
  return (
    <div className="absolute contents left-[925px] top-[1129px]">
      <SolarChatRoundOutline14 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[946px] not-italic text-[#757575] text-[10px] top-[1129px]">12</p>
    </div>
  );
}

function SolarRocketLinear14() {
  return (
    <div className="absolute left-[879px] size-[18px] top-[1129px]" data-name="solar:rocket-linear">
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

function Group79() {
  return (
    <div className="absolute contents left-[879px] top-[1129px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[900px] not-italic text-[#757575] text-[10px] top-[1129px]">4</p>
      <SolarRocketLinear14 />
    </div>
  );
}

function Group18() {
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

function SolarUserCircleLinear14() {
  return (
    <div className="absolute left-[752px] overflow-clip size-[24px] top-[1126px]" data-name="solar:user-circle-linear">
      <Group18 />
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents left-[752px] top-[1126px]">
      <SolarUserCircleLinear14 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[779px] not-italic text-[10px] text-black top-[1132px]">홍길동</p>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents left-[732px] top-[960px]">
      <div className="absolute bg-white h-[205px] left-[732px] rounded-[12px] top-[960px] w-[300px]" />
      <Frame39 />
      <Frame40 />
      <Group78 />
      <Group79 />
      <Group80 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[10px] items-start left-[1072px] not-italic text-black top-[978px] w-[260px] whitespace-pre-wrap">
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

function Frame42() {
  return (
    <div className="absolute bg-[#3d3d3a] content-stretch flex items-center justify-center left-[1290px] px-[6px] py-[3px] rounded-[20px] top-[1130px]">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-white">2일 전</p>
    </div>
  );
}

function SolarChatRoundOutline15() {
  return (
    <div className="absolute left-[1245px] size-[18px] top-[1129px]" data-name="solar:chat-round-outline">
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

function Group82() {
  return (
    <div className="absolute contents left-[1245px] top-[1129px]">
      <SolarChatRoundOutline15 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1266px] not-italic text-[#757575] text-[10px] top-[1129px]">35</p>
    </div>
  );
}

function SolarRocketLinear15() {
  return (
    <div className="absolute left-[1199px] size-[18px] top-[1129px]" data-name="solar:rocket-linear">
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

function Group83() {
  return (
    <div className="absolute contents left-[1199px] top-[1129px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[1220px] not-italic text-[#757575] text-[10px] top-[1129px]">2</p>
      <SolarRocketLinear15 />
    </div>
  );
}

function Group19() {
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

function SolarUserCircleLinear15() {
  return (
    <div className="absolute left-[1072px] overflow-clip size-[24px] top-[1126px]" data-name="solar:user-circle-linear">
      <Group19 />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute contents left-[1072px] top-[1126px]">
      <SolarUserCircleLinear15 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] left-[1099px] not-italic text-[10px] text-black top-[1132px]">임꺽정</p>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents left-[1052px] top-[960px]">
      <div className="absolute bg-white h-[205px] left-[1052px] rounded-[12px] top-[960px] w-[300px]" />
      <Frame41 />
      <Frame42 />
      <Group82 />
      <Group83 />
      <Group84 />
    </div>
  );
}

function SolarAltArrowRightOutline() {
  return (
    <div className="absolute left-[1344px] size-[36px] top-[282px]" data-name="solar:alt-arrow-right-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="solar:alt-arrow-right-outline">
          <path clipRule="evenodd" d={svgPaths.p9791d80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute contents left-[1146px] top-[186px]">
      <div className="absolute bg-gradient-to-r from-[rgba(245,245,245,0)] h-[228px] left-[1146px] to-[#f5f5f5] top-[186px] w-[223px]" />
      <SolarAltArrowRightOutline />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="사업제안-2">
      <p className="-translate-x-1/2 absolute font-['Inter:Extra_Bold_Italic',sans-serif] font-extrabold italic leading-[22px] left-[129px] text-[24px] text-black text-center top-[31px]">Discovery-X</p>
      <Group20 />
      <Component />
      <div className="absolute h-0 left-0 top-[78px] w-[1440px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <path d="M0 0.5H1440" id="Vector 2" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#272727] h-[2px] left-[500px] top-[76px] w-[110px]" />
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[163px]">지연 중인 제안</p>
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] left-[86px] not-italic text-[16px] text-black top-[486px]">전체</p>
      <Frame10 />
      <Group24 />
      <Group25 />
      <Group29 />
      <Group33 />
      <Group37 />
      <Group41 />
      <Group45 />
      <Group49 />
      <Group53 />
      <Group57 />
      <Group61 />
      <Group65 />
      <Group69 />
      <Group73 />
      <Group77 />
      <Group81 />
      <Group85 />
    </div>
  );
}