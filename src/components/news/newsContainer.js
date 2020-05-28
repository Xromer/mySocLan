import { connect } from "react-redux";
import News from "./news";

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news

    }
}

const NewsContainer = connect(mapStateToProps)(News);

export default NewsContainer;