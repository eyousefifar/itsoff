import { Primary } from "../../../../color";

interface IProps {
  fill?: string;
}
export default (props: IProps) => (
  <svg fill={props.fill || Primary} viewBox="0 0 424 424" width={15}>
    <path d="M35,89C15,89,0,74,0,54s15-36,35-36h353c20,0,36,16,36,36s-16,35-36,35H35z" />
    <path d="M388,176c20,0,36,16,36,36s-16,35-36,35H35c-20,0-35-15-35-35s15-36,35-36H388z" />
    <path d="M388,335c20,0,36,15,36,35s-16,36-36,36H35c-20,0-35-16-35-36s15-35,35-35H388z" />
  </svg>
);
