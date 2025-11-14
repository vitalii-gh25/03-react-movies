// import { Audio } from "react-loader-spinner";

// export function Example() {
//   return (
//     <Audio
//       height={80}
//       width={80}
//       radius={9}
//       color="green"
//       ariaLabel="audio-loading"
//       wrapperStyle={{}}
//       wrapperClass=""
//     />
//   );
// }

import styles from "./Loader.module.css";

export default function Loader() {
  return <p className={styles.text}>Loading movies, please wait...</p>;
}
