import uuid from 'uuid/v4';

export class Post {
    constructor(config) {
        this.id = config.id || uuid();
        this.comment = config.comment || [];
        this.date = config.date || new Date().getTime();
    }
}