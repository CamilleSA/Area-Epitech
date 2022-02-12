var pornhub: any = require('@justalk/pornhub-api');

export namespace Pornhub {
    export var searchVideoByTitle = async (params: any) => {
        const search = await pornhub.search(params.title, ['title'], ['video']);
        if (search.results.length != 0)
            return({"result": "video: " + search.results[0].title
                + " (" + search.results[0].link + ")"});
    };
    export var searchGifByTitle = async (params: any) => {
        const search = await pornhub.search(params.title, ['title'], ['gifs']);
        if (search.results.length != 0)
            return({"result": "gif from video: " + search.results[0].title
                + " (" + search.results[0].link + ")"});
    };
    export var searchVideoByAuthor = async (params: any) => {
        const search = await pornhub.search(params.name, ['actor'], ['video']);
        if (search.results.length != 0)
            return({"result": "video from " + search.results[0].author
                + ": " + search.results[0].title + " ("
                + search.results[0].link + ")"});
    };
    export var searchGifByAuthor = async (params: any) => {
        const search = await pornhub.search(params.name, ['actor'], ['gifs']);
        if (search.results.length != 0)
            return({"result": "gif from " + search.results[0].author
                + " from video: " + search.results[0].title + " ("
                + search.results[0].link + ")"});
    };
    export var searchVideoByCategory = async (params: any) => {
        const search = await pornhub.search(params.category, ['category'], ['video']);
        if (search.results.length != 0)
            return({"result": "video: " + search.results[0].title + " from category "
                + params.category + " (" + search.results[0].link + ")"});
    };
    export var searchGifByCategory = async (params: any) => {
        const search = await pornhub.search(params.category, ['category'], ['gifs']);
        if (search.results.length != 0)
            return({"result": "gif: " + search.results[0].title + " from category "
                + params.category + " (" + search.results[0].link + ")"});
    };
}