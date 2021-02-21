import Link from "next/link";

export default function Home() {
  return (
  <div>
    <h1 className="heading">Hello Next.js</h1>
      <style>
        {`
          .heading {
            color: red;
            background: green;
          }
        `}
      </style>
  </div>

  )
}