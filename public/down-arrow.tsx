function DownArrow({ color }: { color: string }) {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70711 0.792893C8.31658 0.402369 7.68342 0.402369 7.29289 0.792893L4.5 3.58579L1.70711 0.792893C1.31658 0.402369 0.683418 0.402369 0.292894 0.792893C-0.0976312 1.18342 -0.0976313 1.81658 0.292894 2.20711L3.79289 5.70711C4.18342 6.09763 4.81658 6.09763 5.20711 5.70711L8.70711 2.20711C9.09763 1.81658 9.09763 1.18342 8.70711 0.792893Z"
        fill={color}
      />
    </svg>
  );
}

export default DownArrow;
