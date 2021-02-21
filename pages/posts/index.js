export default function index({posts}){
    return(
        <div>
            <h1>投稿一覧</h1>
        </div>
    );
}

export async function getServerSideProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    
}