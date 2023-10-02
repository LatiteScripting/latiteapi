HudModule.prototype.setPos = function(x, y) {
    let rect : Rect = this.getRect();
    this.setRect(new Rect(x, y, rect.left + rect.getWidth(), rect.top + rect.getHeight()));
}

HudModule.prototype.getPos = function() {
    return new Vector2(this.getRect().left, this.getRect().top);
}