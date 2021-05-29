import * as PIXI from "pixi.js";
import { ITextStyle } from "pixi.js";
export interface TextStyleExtended extends ITextStyle {
    valign?: "top" | "middle" | "bottom" | "baseline" | number;
    debug?: boolean;
    tagStyle?: "xml" | "bbcode";
}
export interface TextStyleSet {
    [key: string]: TextStyleExtended;
}
export interface MstDebugOptions {
    spans: {
        enabled?: boolean;
        baseline?: string;
        top?: string;
        bottom?: string;
        bounding?: string;
        text?: boolean;
    };
    objects: {
        enabled?: boolean;
        bounding?: string;
        text?: boolean;
    };
}
export interface TagData {
    name: string;
    properties: {
        [key: string]: string;
    };
}
export interface MstInteractionEvent extends PIXI.InteractionEvent {
    targetTag: TagData;
}
export default class MultiStyleText extends PIXI.Text {
    private static DEFAULT_TAG_STYLE;
    static debugOptions: MstDebugOptions;
    private textStyles;
    private hitboxes;
    constructor(text: string, styles: TextStyleSet);
    private handleInteraction;
    set styles(styles: TextStyleSet);
    setTagStyle(tag: string, style: TextStyleExtended): void;
    deleteTagStyle(tag: string): void;
    private getTagRegex;
    private getPropertyRegex;
    private getBBcodePropertyRegex;
    private _getTextDataPerLine;
    private getFontString;
    private createTextData;
    private getDropShadowPadding;
    private withPrivateMembers;
    updateText(): void;
    protected wordWrap(text: string): string;
    protected updateTexture(): void;
    private assign;
}
