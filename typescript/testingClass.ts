class fruits {
    
    private color: string = 'yellow';
    public origin: string = 'Nepal';
    
    constructor(color) {
        this.color = color;
    }
    getColor(){
        return this.color;
    }
    setColor(newColor){
        this.color = newColor;
    }
    abcd(){
        return this.getColor();
    }
}