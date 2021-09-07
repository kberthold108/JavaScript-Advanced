function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            const defualtValue = super.toString();
            const rating = this.likes - this.dislikes;

            if (this.comments.length > 0) {
                const arr = [];
                for (const line of this.comments) {
                    arr.push(line);
                }
                return `${defualtValue}\nRating: ${rating}\nComments: \n * ${arr.join("\n * ")}`;
            } else {
                return `${defualtValue}\nRating: ${rating}`;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this.views;
        }

        toString() {
            const defualtValue = super.toString();
            return `${defualtValue}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

const classes = solution();
const post = new classes.Post("Post", "Content");

console.log(post.toString());


const scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());


