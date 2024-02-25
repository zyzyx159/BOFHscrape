class story{
    constructor(URL){
        this.setURL(URL);
    }

    setURL(newURL){
        if (newURL === '') {
            throw 'The URL cannot be empty';
        }
        this.URL = newURL.trim();
    }
    getURL(){
        return this.URL;
    }

    setTitle(newTitle){
        this.title = newTitle.trim();
    }
    getTitle(){
        return this.title;
    }

    setSubtitle(newSubtitle){
        this.subtitle = newSubtitle.trim();
    }
    getSubtitle(){
        return this.subtitle;
    }

    setAuthor(newAuthor){
        this.Author = newAuthor.replace(/\r?\n|\r/g, " ").trim();
    }
    getAuthor(){
        return this.Author;
    }

    setEpisode(newEpisode){
        this.Episode = newEpisode.trim();
    }
    getEpisode(){
        return this.Episode;
    }

    setPublishDate(newPublishDate){
        this.PublishDate = newPublishDate.replace(/\s\s+/g, ' ');
    }
    getPublishDate(){
        return this.PublishDate;
    }

    SetStory(newStoryArray){
        for (i = 0; i < newStoryArray.length; i++){
            newStory = newStory + newStoryArray[i] + "/n"
        }
        this.story = newStory;
    }
    getStory(){
        return this.story;
    }
}