import { secondary } from "../../../../color";

interface IProps {
  width?: number;
  height?: number;
}

export default (props: IProps) => {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 492.6 492.6"
      fill={secondary}
    >
      <path
        d="M246.25,0c-52.4,0-95,42.6-95,95v2.3h-62.8c-5.1,0-9.4,3.9-9.9,9L49.95,429c0,0.3,0,0.6,0,0.9
			c0,34.6,31.9,62.7,71.2,62.7h250.3c39.3,0,71.2-28.1,71.2-62.7c0-0.3,0-0.6,0-0.9l-28.7-322.7c-0.5-5.1-4.7-9-9.9-9h-62.8V95
			C341.25,42.6,298.65,0,246.25,0z M171.05,95c0-41.5,33.7-75.2,75.2-75.2s75.2,33.7,75.2,75.2v2.3h-150.4L171.05,95L171.05,95z
			 M394.95,117.1l27.8,313.2c-0.3,23.5-23.2,42.5-51.4,42.5h-250.2c-28.2,0-51.1-19-51.4-42.5l27.8-313.2h53.7v45.8
			c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-45.8h150.4v45.8c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-45.8L394.95,117.1L394.95,117.1
			z"
      />
      <path
        d="M299.35,256.6l-74.7,74.7l-31.5-31.5c-3.9-3.9-10.1-3.9-14,0s-3.9,10.1,0,14l38.5,38.5
			c1.9,1.9,4.5,2.9,7,2.9s5.1-1,7-2.9l81.7-81.7c3.9-3.9,3.9-10.1,0-14C309.45,252.8,303.25,252.8,299.35,256.6z"
      />
    </svg>
  );
};