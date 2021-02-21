export default function post({post}){
    return (
        <div>
            <h1>POST（投稿）{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            
            
        </div>
        );
}

// export async function getServerSideProps(context){
//     // console.log(params);
//     console.log(context);
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const posts = await res.json();
//     return {props:{posts}};
// }

export async function getServerSideProps({params}){
    // console.log(params);
    console.log(params);
    const id = params.post;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return {props:{post}};
}