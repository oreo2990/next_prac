import Link from "next/link";

export default function index({ posts }) {
    return (
      <div>
        <h1>POST一覧</h1>
        <ul>
            {posts.map((post) => {
                return(
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>) ; 
            })}
        </ul>
      </div>
    );
  }


// 1．サーバーサイドレンダリングで外部のデータを取得(getServerSidePropsを使用)
// export async function getServerSideProps() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const posts = await res.json();
//     // console.log(posts);
//     return { props: { posts } };
//   }  

// 2．静的ジェネレーションで外部のデータを取得(getStaticPropsを使用)
export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    // console.log(posts);
    return { props: { posts } };
  }  

 