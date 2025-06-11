declare interface Graphics3D {

    /**
     * Sets the color.
     * @param color The color to set
     */
    setColor(color: Color): void;

    /**
     * Sets the colors. (allows for gradients)
     * @param color The color to set
     */
    setColors(vec1: Color, vec2: Color, vec3: Color, vec4: Color): void;

    /**
     * Draws a line into the world (adds a line into the vertex buffer)
     * @param p1 
     * @param p2 
     */
    drawLine(p1: IVector3, p2: IVector3): void;

    /**
     * Draws a triangle into the world (adds a triangle into the vertex buffer)
     * @param p1 
     * @param p2 
     * @param p3
     */
    drawTriangle(p1: IVector3, p2: IVector3, p3: IVector3): void;

    /**
     * Draws a quad into the world (adds a quad into the vertex buffer)
     * @param p1 
     * @param p2 
     * @param p3
     * @param p4
     */
    drawQuad(p1: IVector3, p2: IVector3, p3: IVector3, p4: IVector3): void;

    /**
     * Call this every time you're done rendering. (batched renders the current vertex buffer into the world) 
     * @param cull `true` for rendering through blocks, `false` to not render through blocks
     */
    finish(cull?: boolean): void;
}

declare const graphics3D: Graphics3D;