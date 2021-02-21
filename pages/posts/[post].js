// 遷移元のpages>posts>「index.js」ファイルを確認のこと
// 1.getServerSidePropsでデータを受け取った場合
    // 1．①getServerSidePropsの引数がcontextの時、contextの中身確認する
        // export default function post({post}){
        //     return (
        //         <div>
        //             <h1>POST（投稿）{post.id}</h1>
        //             <h2>{post.title}</h2>
        //             <p>{post.body}</p>
        //         </div>
        //         );
        // }
        // export async function getServerSideProps({params}){
        //     // console.log(params);
        //     console.log(params);
        //     const id = params.post;
        //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        //     const post = await res.json();
        //     return {props:{post}};
        // }

    // 1．②getServerSidePropsの引数がcontextの時、contextの中身確認する
        // export default function post({post}){
        //     return (<p>about</p>);
        // }

        // export async function getServerSideProps(context){
        //     // console.log(params);
        //     console.log(context);
        //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id`);
        //     const posts = await res.json();
        //     return {props:{posts}};
        // }

// 2.getStaticPropsでデータを受け取った場合、getStaticPathsの設定が必要。
     export default function post({post}){
            return (
                <div>
                    <h1>POST（投稿）{post.id}</h1>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                );
        }

    export async function getStaticProps({ params }) {
        const id = params.post;
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await res.json();
        return { props: { post } };
    }
    
    export async function getStaticPaths() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const posts = await res.json();
        const paths = posts.map((post) => `/posts/${post.id}`);
        return {
          paths,
          fallback: false,
        };
      }