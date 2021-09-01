function solution(command) {

    const commands = {
        upvote: () => this.upvotes++ ,
        downvote: () => this.downvotes++,
        score: () => score(this)
    };

    function score(x) {
        let votesUp;
        let votesDown;

        if (x.upvotes + x.downvotes > 50) {
            votesUp = Math.ceil((0.25 * Math.max(x.upvotes, x.downvotes)) + x.upvotes);
            votesDown = Math.ceil((0.25 * Math.max(x.upvotes, x.downvotes)) + x.downvotes);
        } else {
            votesUp = x.upvotes;
            votesDown = x.downvotes;
        }
        

        let raiting;

        if (x.upvotes + x.downvotes < 10) {
            raiting = "new";
        } else if (x.upvotes - x.downvotes < 0) {
            raiting = "unpopular";
        } else if (x.upvotes - x.downvotes >= 0 && x.downvotes + x.downvotes > 100) {
            raiting = "controversial";
        } else if (x.upvotes > (x.upvotes + x.downvotes) * 0.66) {
            raiting = "hot";
        } else {
            raiting = "new";
        }
        
        //x.upvotes > (x.upvotes + x.downvotes) * 0.66 && x.upvotes + x.downvote > 100
            
        console.log([votesUp, votesDown, (votesUp - votesDown), raiting]);
        return ([votesUp, votesDown, (votesUp - votesDown), raiting]);
    }

    return commands[command]();
}

const post = {
    id: "2",
    author: "gosho",
    content: "whats up?",
    upvotes: 120,
    downvotes: 30
};
//solution.call(post, "upvote");
solution.call(post, "score");
