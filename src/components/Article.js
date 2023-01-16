const Article = ({newArticle}) => {
    return ( 
        <article>
            <h3>{newArticle[0]}</h3>
            <small>{newArticle[2]}</small>
            <p>{newArticle[1]}</p>
        </article>
     );
}
 
export default Article;