function solution(command) {
    if (command === 'upvote') {
        this.upvotes += 1;
        return;
    } else if (command === 'downvote') {
        this.downvotes += 1;
        return;
    }

    let totalVotes = this.upvotes + this.downvotes;
    let score = this.upvotes - this.downvotes;
    let rating = 'new';

    if (totalVotes >= 10) {
        if (this.upvotes / totalVotes > 0.66) {
            rating = 'hot';
        } else if (score >= 0 && totalVotes > 100) {
            rating = 'controversial'
        } else if (score < 0) {
            rating = 'unpopular';
        }
    }
    let obfuscation = totalVotes > 50
        ? Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25)
        : 0;

    return [
        this.upvotes + obfuscation,
        this.downvotes + obfuscation, 
        score, 
        rating
    ];
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
