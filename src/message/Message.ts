class Message {

    private author: string;
    private message: string;

    constructor(author: string, message: string) {
        this.author = author;
        this.message = message;
    }

    /**
     * Getter author
     * @return {string}
     */
    public getAuthor(): string {
        return this.author;
    }

    /**
     * Getter message
     * @return {string}
     */
    public getMessage(): string {
        return this.message;
    }

}

export default Message;