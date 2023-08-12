HudModule.prototype.setBounds = function(width, height) {
    let rect : Rect = this.getRect();
    rect.right = rect.left + width;
    rect.bottom = rect.top + height;
    this.setRect(rect);
}

HudModule.prototype.setPos = function(x, y) {
    let rect : Rect = this.getRect();
    this.setRect(new Rect(x, y, rect.getWidth(), rect.getHeight()));
}


HudModule.prototype.getPos = function() {
    return new Vector2(this.left, this.top);
}