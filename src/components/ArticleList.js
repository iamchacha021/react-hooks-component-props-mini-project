import Article from "./Article";

const ArticleList = () => {
    const articles = [
        {title:"The Wet Codebase", preview:"Come waste your time with me", date:"July 13, 2020", id:1},
        {title:"Goodbye, Clean Code", preview:"Let clean code guide you. Then let it go.", date:"January 11, 2020", id:2},
        {title:"My Decade in Review", preview:"A personal reflection", date:"January 1, 2020", id:3}
    ]
    return ( 
        <main>
            {articles.map((article)=>{
                const newArticle = [article.title, article.preview, article.date, article.id ]
                return(
                    <Article newArticle={newArticle} />
                )
            })}
        </main>
     );
}
 
export default ArticleList;