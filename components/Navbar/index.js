import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <SytledList>
      <li>
        <Link href={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href={"/bookmark"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href={"/profilepage"}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z" />
          </svg>
        </Link>
      </li>
    </SytledList>
  );
}

const SytledList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  padding: 0;
  margin: 0;
  background-color: red;
`;