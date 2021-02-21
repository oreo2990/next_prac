import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="heading">Hello Next.js</h1>
      <Content />
      <p>ここにもコンテンツが入ります。</p>
      <style>
        {`
          .heading {
            color: red;
            background: green;
          }
        `}
      </style>
    </div>
  );
}

function Content() {
  return (
    <div>
      <p>ここにコンテンツが入ります。</p>
      <style jsx>{`
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
}