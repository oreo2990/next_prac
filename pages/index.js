import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.heading}>Hello Next.js</h1>
      <Content type="alert"/>
      <p>ここにもコンテンツが入ります。</p>
      {/* <style>
        {`
          .heading {
            color: red;
            background: green;
          }
        `}
      </style> */}
    </div>
  );
}

function Content({type}) {
  return (
    <div>
      <p>ここにコンテンツが入ります。</p>
      <style global jsx>{`
        p {
          color: ${type == "alert"?"red":"blue"};}
        }
      `}</style>
    </div>
  );
}